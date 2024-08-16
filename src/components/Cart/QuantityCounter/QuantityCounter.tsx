import { useEffect, useState } from "react";
import styles from "./QuantityCounter.module.css";
import useCartContext from "@/context/hooks/useCartContext";
import { ProductWithQuantity } from "@/types";
import { useQuantity } from "@/components/hooks";

function QuantityCounter(props: { product: ProductWithQuantity }) {
  const { product } = props;
  const { increaseQuantity, decreaseQuantity } = useQuantity(product);

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
