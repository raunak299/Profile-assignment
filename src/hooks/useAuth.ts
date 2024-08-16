// useAuth.ts
import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { Auth, User } from "@/types";
import { deleteCookie, setCookie } from "@/utils/cookie";
import { deleteUserInfo, isUserAuthenticated } from "@/utils/auth";
import { LOCAL_STORAGE_ITEM_KEYS } from "@/constants";
import useLocalStorage from "./useLocalStorage";

export default function useAuth(): Auth {
  const {
    setLocalStorage: setUserDetailsInLs,
    getFromLocalStorage: getUserDetailsFromLS,
  } = useLocalStorage<User>({ key: LOCAL_STORAGE_ITEM_KEYS.USER_DETAILS });

  const [user, setUser] = useState<User | null>(getUserDetailsFromLS());
  const [isLoggedIn, setIsLoggedIn] = useState(isUserAuthenticated());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const userDetails = user ? { email: user.email || "" } : null;
      setUser(userDetails);
      if (user) {
        const token = await user.getIdToken();
        setCookie("token", token, 1);
        setUserDetailsInLs(userDetails);
        setIsLoggedIn(true);
      } else {
        deleteCookie("token");
        setIsLoggedIn(false);
        deleteUserInfo();
      }
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  return { user, isLoggedIn, signIn, signUp, signOutUser };
}
