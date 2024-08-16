import useCartContext from "@/context/hooks/useCartContext";
import { ProductWithQuantity } from "@/types";
import { useEffect, useState } from "react";

const useQuantity = (product: ProductWithQuantity) => {
  const [currentQuantity, setCurrentQuantity] = useState(product.quantity);

  const { dispatchCartAction } = useCartContext();

  const increaseQuantity = () => {
    setCurrentQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setCurrentQuantity((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (currentQuantity === 0) {
      dispatchCartAction({
        type: "remove_product",
        payload: { productId: product.id },
      });
    } else {
      dispatchCartAction({
        type: "update_product",
        payload: { productId: product.id, quantity: currentQuantity },
      });
    }
  }, [currentQuantity]);

  return {
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useQuantity;
