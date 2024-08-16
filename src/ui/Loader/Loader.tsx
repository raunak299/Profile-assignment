import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loader.module.css";
import { LoaderProps } from "./types";

export default function Loader(props: LoaderProps): JSX.Element {
  const { message } = props;
  return (
    <div className={styles.loaderRoot}>
      <CircularProgress size="3rem" />
      {message && <p className={styles.loaderMessage}>{message}</p>}
    </div>
  );
}
