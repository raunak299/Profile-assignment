import { createContext, Dispatch } from "react";
import { CartAction } from "../types";
import { ProductWithQuantity } from "@/types";

type CartContext = {
  products: ProductWithQuantity[];
  totalProductPrice: number;
  dispatchCartAction: Dispatch<CartAction>;
};

const cartContext = createContext<CartContext | undefined>(undefined);

export default cartContext;
