import PageHeader from "../PageHeader/PageHeader";
import styles from "./Cart.module.css";
import CartProductCard from "./CartProductCard/CartProductCard";
import useCartContext from "@/context/hooks/useCartContext";

function Cart() {
  const { products } = useCartContext();

  return (
    <section>
      <PageHeader label="Cart" />
      <section className={styles.cartProductContainer}>
        {products.map((product) => {
          return <CartProductCard product={product} key={product.id} />;
        })}
      </section>
    </section>
  );
}

export default Cart;
