import styles from "./CartSummaryItem.module.css";

type CartSummaryItem = {
  title: string;
  value: string;
};

export default function CartSummaryItem(props: CartSummaryItem): JSX.Element {
  const { title, value } = props;
  return (
    <section className={styles.cartSummaryItem}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </section>
  );
}
