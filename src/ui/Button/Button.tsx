import styles from "./Button.module.css";
import { ButtonProps } from "./types";


function Button(props: ButtonProps) {
  const { label, onClick, size = "fullWidth", color = "primary", icon } = props;
  const buttonClass = `${styles.button} ${styles[`button-${color}`]} ${styles[`button-${size}`]}`;

  return (
    <button
      onClick={onClick && onClick}
      className={buttonClass}
    >
      {icon && <span className="material-icons">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
