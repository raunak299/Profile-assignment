import styles from "./Error.module.css";
import { ErrorProps } from "./types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Error(props: ErrorProps): JSX.Element {
  const { message } = props;
  return (
    <div className={styles.errorRoot}>
      <ErrorOutlineIcon color="warning" className={styles.errorIcon} />
      {message && <p className={styles.errorMessage}>{message}</p>}
    </div>
  );
}
