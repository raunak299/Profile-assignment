import { DISCOUNT_CODES } from "@/constants";
import DiscountInput from "../DiscountInput/DiscountInput";
import styles from "./CartSummary.module.css";
import CartSummaryItem from "./CartSummaryItem/CartSummaryItem";
import { useCartSummary } from "@/components/hooks";

export default function CartSummary(): JSX.Element {
  const {
    totalProductPrice,
    totalCartAmount,
    taxCharge,
    shippingCharge,
    onDiscountSelect,
  } = useCartSummary();


  return (
    <section className={styles.cartSummary}>
      <CartSummaryItem title="Summary" value={`$${totalProductPrice}`} />
      <CartSummaryItem title="Shipping" value={`$${taxCharge}`} />
      <CartSummaryItem title="Tax" value={`$${shippingCharge}`} />
      <div className={styles.discountSection}>
        <DiscountInput
          discountCodes={DISCOUNT_CODES}
          onDiscountSelect={onDiscountSelect}
          disabled={totalProductPrice <= 0}
        />
      </div>
      <section className={styles.orderTotal}>
        <h3 className={styles.orderTotalTitle}>Order Total</h3>
        <div className={styles.orderTotalValue}>{`$${totalCartAmount}`}</div>
      </section>
    </section>
  );
}
