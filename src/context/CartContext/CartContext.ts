import { createContext, Dispatch } from "react";
import { CartAction, ProductWithQuantity } from "../types";

type CartContext = {
  products: ProductWithQuantity[];
  dispatchCartAction: Dispatch<CartAction>;
};

const cartContext = createContext<CartContext | undefined>(undefined);

export default cartContext;
