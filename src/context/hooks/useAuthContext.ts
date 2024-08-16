import { useContext } from "react";
import authContext from "../AuthContext/AuthContext";

const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("authContext must be used within a AuthContextProvider");
  }
  return context;
};

export default useAuthContext;
