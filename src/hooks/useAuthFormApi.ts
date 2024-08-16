import { AuthMode } from "@/components/AuthForm/AuthForm";
import { RemoteDataState } from "@/types";
import { useState } from "react";
import useAuthContext from "@/context/hooks/useAuthContext";

const useAuthForm = (email: string, password: string, authMode: AuthMode) => {
  const { signIn, signUp } = useAuthContext();
  const [remoteDataState, setRemoteDataState] = useState<RemoteDataState<null>>(
    { status: "init" }
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setRemoteDataState({
      status: "loading",
      message: "User Authentication in progress",
    });
    try {
      if (authMode === AuthMode.SIGN_IN) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      setRemoteDataState({ status: "success", message: "", data: null });
    } catch (err) {
      setRemoteDataState({ status: "error", message: "Something went wrong" });
    }
  };

  const dummyAuthentication = async () => {
    const dummyEmail = process.env.NEXT_PUBLIC_DUMMY_EMAIL;
    const dummyPassword = process.env.NEXT_PUBLIC_DUMMY_PASSWORD;
    if (!dummyEmail || !dummyPassword) {
      setRemoteDataState({ status: "error", message: "Something went wrong" });
      return;
    }
    setRemoteDataState({
      status: "loading",
      message: "User Authentication in progress",
    });
    try {
      await signIn(dummyEmail, dummyPassword);
      setRemoteDataState({ status: "success", message: "", data: null });
    } catch (err) {
      console.log(err);
      setRemoteDataState({ status: "error", message: "Something went wrong" });
    }
  };

  return {
    remoteDataState,
    handleSubmit,
    dummyAuthentication,
  };
};

export default useAuthForm;
