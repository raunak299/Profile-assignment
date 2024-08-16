import PageHeader from "../PageHeader/PageHeader";
import styles from "./Cart.module.css";
import CartProductCard from "./CartProductCard/CartProductCard";
import useCartContext from "@/context/hooks/useCartContext";
import CartSummary from "./CartSummary/CartSummary";
import ProceedToCheckoutButton from "./ProceedToCheckoutButton/ProceedToCheckoutButton";
import EmptyMessage from "./EmptyMessage/EmptyMessage";

function Cart() {
  const { products } = useCartContext();

  return (
    <section className={styles.cartRoot}>
      <PageHeader label="Cart" />
      <section className={styles.cartBody}>
        {products.length > 0 && (
          <section className={styles.cartProductContainer}>
            {products.map((product) => {
              return <CartProductCard product={product} key={product.id} />;
            })}
          </section>
        )}
        {products.length === 0 && (
          <EmptyMessage message="... Empty"/>
        )}
        <section className={styles.summarySection}>
          <CartSummary />
          <ProceedToCheckoutButton noOfProductsInCart={products.length} />
        </section>
      </section>
    </section>
  );
}

export default Cart;
