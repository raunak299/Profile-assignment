import { Product, ProductWithQuantity } from "@/types";

export type CartState = {
  products: ProductWithQuantity[];
  totalProductPrice: number;
};

export type CartAction =
  | { type: "add_product"; payload: { product: Product } }
  | { type: "remove_product"; payload: { productId: number } }
  | {
      type: "update_product";
      payload: { productId: number; quantity: number };
    }
  | {
      type: "remove_all_products";
      payload: {};
    };
