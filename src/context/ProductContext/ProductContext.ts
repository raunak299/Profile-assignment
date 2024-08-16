import { Product } from "@/types";
import { createContext } from "react";

type ProductContextType = { products: Product[] };

const productContext = createContext<ProductContextType | undefined>(undefined);

export default productContext;
