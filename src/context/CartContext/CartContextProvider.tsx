import { ReactNode, useEffect, useReducer } from "react";
import cartContext from "./CartContext";
import { CartState } from "../types";
import { cartReducer } from "../reducers";
import { useLocalStorage } from "@/hooks";
import { LOCAL_STORAGE_ITEM_KEYS } from "@/constants";
import AuthContextProvider from "../AuthContext/AuthContextProvider";
import useAuthContext from "../hooks/useAuthContext";

function CartContextProvider({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuthContext();
  const defaultInitialCartData = { products: [], totalProductPrice: 0 };
  const {
    setLocalStorage: setCartDetails,
    removeLocalStorage: removeCartDetails,
    getFromLocalStorage: getCartDetails,
  } = useLocalStorage<CartState>({
    key: LOCAL_STORAGE_ITEM_KEYS.CART_PRODUCTS,
    defaultValue: defaultInitialCartData,
  });

  const cartDataInLocalStorage = getCartDetails();
  const initialState: CartState = cartDataInLocalStorage
    ? cartDataInLocalStorage
    : defaultInitialCartData;
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setCartDetails(cartItems);
  }, [cartItems, setCartDetails]);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch({ type: "remove_all_products", payload: {} });
    }
  }, [isLoggedIn]);

  return (
    <cartContext.Provider
      value={{
        products: cartItems.products,
        totalProductPrice: cartItems.totalProductPrice,
        dispatchCartAction: dispatch,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
