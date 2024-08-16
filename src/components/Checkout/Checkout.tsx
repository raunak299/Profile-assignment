import styles from "./Checkout.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Checkout(): JSX.Element {
  return (
    <div className={styles.checkoutRoot}>
      <CheckCircleIcon color="success" className={styles.checkoutIcon} />
      <div className={styles.checkoutMessage}>Order Placed Successfully</div>
    </div>
  );
}
