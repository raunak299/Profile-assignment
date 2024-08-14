import { Product } from "@/types";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Button } from "@/ui";
import useCartContext from "@/context/hooks/useCartContext";

export default function ProductCard(props: { product: Product }): JSX.Element {
  const { product } = props;
  const { products, dispatchCartAction } = useCartContext();

  const addProductToCartHandler = (product: Product) => {
    dispatchCartAction({
      type: "add_product",
      payload: {
        product,
      },
    });
  };

  return (
    <div className={styles.productCard}>
      <Image
        src={product.attributes.image}
        alt={`product-image-${product.id}`}
        placeholder="blur"
        blurDataURL="/assets/blur.jpg"
        width="200"
        height="200"
        layout="responsive"
        className={styles.productImg}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{product.attributes.title}</h2>
        <h3 className={styles.price}>{`${product.attributes.price}`}</h3>
      </div>
      <Button
        label={"Add to cart"}
        size="fullWidth"
        onClick={() => addProductToCartHandler(product)}
      />
    </div>
  );
}
