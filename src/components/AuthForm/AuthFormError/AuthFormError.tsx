import { ReactNode } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styles from './AuthFormError.module.css'

export default function AuthFormError(props: {
  message: ReactNode;
}): JSX.Element {
  const { message } = props;
  return (
    <div className={styles.authFormErrorRoot}>
      <ErrorOutlineIcon color="warning" />
      <span>{message}</span>
    </div>
  );
}
