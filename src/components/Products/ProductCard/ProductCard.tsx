import { Product } from "@/types";
import styles from "./ProductCard.module.css";
import { SuaveImage } from "@/ui";
import useCartContext from "@/context/hooks/useCartContext";
import AddToCartButton from "@/components/Cart/AddToCartButton/AddToCartButton";

export default function ProductCard(props: { product: Product }): JSX.Element {
  const { product } = props;
  const { dispatchCartAction } = useCartContext();

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
      <SuaveImage
        src={product.attributes.image}
        alt={`product-image-${product.id}`}
        width="200"
        height="200"
        layout="responsive"
        className={styles.productImg}
        shimmerEffect={true}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{product.attributes.title}</h2>
        <h3 className={styles.price}>{`$${product.attributes.price}`}</h3>
      </div>
      <AddToCartButton
        label={"Add to cart"}
        size="fullWidth"
        onClick={() => addProductToCartHandler(product)}
      />
    </div>
  );
}
