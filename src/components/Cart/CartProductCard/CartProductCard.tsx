import Image from "next/image";
import styles from "./CartProductCard.module.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import useCartContext from "@/context/hooks/useCartContext";
import { ProductWithQuantity } from "@/types";

function CartProductCard(props: { product: ProductWithQuantity }) {
  const { product } = props;
  const { dispatchCartAction } = useCartContext();

  const removeProductHandler = (productId: number) => {
    dispatchCartAction({
      type: "remove_product",
      payload: { productId: productId },
    });
  };

  return (
    <div className={styles.cartProductCard}>
      <div className={styles.productImgContainer}>
        <Image
          src={product.attributes.image}
          alt={`product-image-${product.id}`}
          placeholder="blur"
          blurDataURL="/assets/blur.jpg"
          width="200"
          height="200"
          className={styles.productImg}
        />
      </div>
      <h2 className={styles.title}>{product.attributes.title}</h2>
      <div className={styles.quantity}>
        <div className={styles.amountTitle}>Amount</div>
        <QuantityCounter product={product} />
        <button
          className={styles.removeBtn}
          onClick={() => removeProductHandler(product.id)}
        >
          remove
        </button>
      </div>
      <div className={styles.price}>{`$${product.attributes.price}`}</div>
    </div>
  );
}

export default CartProductCard;
