import { createContext } from "react";
import { AuthContext } from "./types";

const authContext = createContext<AuthContext | undefined>(undefined);

export default authContext;
