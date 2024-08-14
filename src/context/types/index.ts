import { Product } from "@/types";



export type ProductWithQuantity = Product & { quantity: number };

export type CartState = ProductWithQuantity[];

export type CartAction =
  | { type: "add_product"; payload: { product: Product } }
  | { type: "remove_product"; payload: { productId: number } }
  | {
      type: "update_product";
      payload: { productId: number; quantity: number };
    };
