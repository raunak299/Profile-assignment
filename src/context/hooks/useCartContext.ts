import { useContext } from "react";
import cartContext from "../CartContext/CartContext";

const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

export default useCartContext;
