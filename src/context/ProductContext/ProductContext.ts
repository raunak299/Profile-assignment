import { ProductContextType } from "@/types";
import { createContext } from "react";

const productContext = createContext<ProductContextType | undefined>(undefined);

export default productContext;
