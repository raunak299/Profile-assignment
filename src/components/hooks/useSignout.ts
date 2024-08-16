import { useAuth } from "@/hooks";
import { RemoteDataState } from "@/types";
import { useState } from "react";

const useSignout = () => {
  const { signOutUser } = useAuth();
  const [remoteDataState, setRemoteDataState] = useState<RemoteDataState<null>>(
    { status: "init" }
  );
  const handleSignOut = async () => {
    try {
      setRemoteDataState({ status: "loading", message: "Logging out ..." });
      await signOutUser();
      setRemoteDataState({ status: "success", data: null });
    } catch (error) {
      console.error("Error signing out:", error);
      setRemoteDataState({
        status: "error",
        message: "Something went wrong .. Try Later",
      });
    }
  };

  return {
    handleSignOut,
    remoteDataState,
  };
};

export default useSignout;
