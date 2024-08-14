import { ReactNode, useReducer } from "react";
import cartContext from "./CartContext";
import { CartAction, CartState, ProductWithQuantity } from "../types";


const cartReducer = (prevProducts: CartState, action: CartAction) => {
    console.log(action.payload)
  switch (action.type) {
    case "add_product": {
      const { product } = action.payload;
      let productAlreadyExistInCart = false;
      const newProducts = prevProducts.map((p) => {
        if (p.id === product.id) {
          productAlreadyExistInCart = true;
          return { ...p, quantity: p.quantity + 1 }; 
        }
        return p; 
      });
      if (!productAlreadyExistInCart) {
        newProducts.push({ ...product, quantity: 1 }); 
      }
      console.log(newProducts)
      return newProducts; 
    }

    case "remove_product": {
      return prevProducts.filter(
        (productItem) => productItem.id !== action.payload.productId
      );
    }

    case "update_product": {
        const { productId,quantity } = action.payload;
        const newProducts = prevProducts.map((p) => {
          if (p.id === productId) {
            return { ...p, quantity: quantity  }; 
          }
          return p; 
        });
        return newProducts; 
    }

    default:
      return prevProducts;
  }
};

function CartContextProvider({ children }: { children: ReactNode }) {
  const initialState: ProductWithQuantity[] = [];
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider
      value={{ products: cartItems, dispatchCartAction: dispatch }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
