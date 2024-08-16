import styles from "./EmptyMessage.module.css";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

export default function EmptyMessage(props: { message?: string }): JSX.Element {
  const { message } = props;
  return (
    <div className={styles.emptyContainer}>
      <HourglassEmptyIcon color="primary" />
      {message && <h2 className={styles.emptyMsg}>{message}</h2>}
    </div>
  );
}
