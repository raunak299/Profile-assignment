import { AuthMode } from "../AuthForm";
import styles from "./AuthFormToggle.module.css";

export default function AuthFormToggle(props: {
  authMode: AuthMode;
  switchAuthStateHandler: () => void;
}): JSX.Element {
  const { authMode, switchAuthStateHandler } = props;
  return (
    <>
      {authMode === AuthMode.SIGN_IN && (
        <div className={styles.authFormToggle}>
          Not a member yet
          <span
            onClick={switchAuthStateHandler}
            className={styles.authFormToggleBtn}
          >
            Sign Up
          </span>
        </div>
      )}
      {authMode === AuthMode.SIGN_UP && (
        <div>
          Already a member
          <span
            onClick={switchAuthStateHandler}
            className={styles.authFormToggleBtn}
          >
            Sign In
          </span>
        </div>
      )}
    </>
  );
}
