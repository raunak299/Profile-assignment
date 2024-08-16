import { CircularProgress } from "@mui/material";
import styles from "./Button.module.css";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const {
    label,
    onClick,
    size = "fullWidth",
    color = "primary",
    icon,
    disabled = false,
    type,
    loading = false,
  } = props;

  const buttonClass = `${styles.button} ${styles[`button-${color}`]} ${
    styles[`button-${size}`]
  } ${loading ? styles["button-loading"] : ""}`;

  const loadingSpinner = (
    <CircularProgress className={styles[`loadingSpinner-${color}`]} size="1rem"/>
  );

  const buttonIcon = icon ? icon : loading ? loadingSpinner : null;

  return (
    <button
      onClick={onClick && onClick}
      className={buttonClass}
      disabled={disabled}
      type={type}
    >
      {buttonIcon && <span className={styles['button-icons']}>{buttonIcon}</span>}
      {label}
    </button>
  );
}

export default Button;
