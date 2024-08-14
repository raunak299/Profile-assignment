import { useContext } from "react";
import productContext from "../ProductContext/ProductContext";

export const useProductContext = () => {
  const context = useContext(productContext);
  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }
  return context;
};

export default useProductContext;
