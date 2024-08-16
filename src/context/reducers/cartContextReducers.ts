import { getTotalProductPrice } from "@/utils";
import { CartAction, CartState } from "../types";

export const cartReducer = (prevCartState: CartState, action: CartAction) => {
  switch (action.type) {
    case "add_product": {
      const { product } = action.payload;
      let productAlreadyExistInCart = false;
      const newProductsInCart = prevCartState.products.map((p) => {
        if (p.id === product.id) {
          productAlreadyExistInCart = true;
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      if (!productAlreadyExistInCart) {
        newProductsInCart.push({ ...product, quantity: 1 });
      }
      return {
        products: newProductsInCart,
        totalProductPrice: getTotalProductPrice(newProductsInCart),
      };
    }

    case "remove_product": {
      const newProductsInCartInCart = prevCartState.products.filter(
        (productItem) => productItem.id !== action.payload.productId
      );
      return {
        products: newProductsInCartInCart,
        totalProductPrice: getTotalProductPrice(newProductsInCartInCart),
      };
    }

    case "update_product": {
      const { productId, quantity } = action.payload;
      const newProductsInCart = prevCartState.products.map((p) => {
        if (p.id === productId) {
          return { ...p, quantity: quantity };
        }
        return p;
      });
      return {
        products: newProductsInCart,
        totalProductPrice: getTotalProductPrice(newProductsInCart),
      };
    }

    case "remove_all_products": {
      return { products: [], totalProductPrice: 0 };
    }

    default:
      return prevCartState;
  }
};
