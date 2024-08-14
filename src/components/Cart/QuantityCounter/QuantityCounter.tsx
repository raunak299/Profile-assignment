import { useEffect, useState } from "react";
import styles from "./QuantityCounter.module.css";
import { ProductWithQuantity } from "@/context";
import useCartContext from "@/context/hooks/useCartContext";

function QuantityCounter(props: { product: ProductWithQuantity }) {
  const { product } = props;
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

  return (
    <div className={styles.quantityCounter}>
      <button onClick={increaseQuantity} className={styles.counterBtn}>
        +
      </button>
      <div className={styles.quantity}> {product.quantity}</div>
      <button onClick={decreaseQuantity} className={styles.counterBtn}>
        -
      </button>
    </div>
  );
}

export default QuantityCounter;
