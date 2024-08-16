import { ReactNode } from "react";
import authContext from "./AuthContext";
import { useAuth } from "@/hooks";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { user, isLoggedIn, signIn, signUp, signOutUser } = useAuth();

  return (
    <authContext.Provider
      value={{ user, isLoggedIn, signIn, signUp, signOutUser }}
    >
      {children}
    </authContext.Provider>
  );
}
