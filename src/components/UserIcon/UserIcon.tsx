import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Link from "next/link";
import styles from "./UserIcon.module.css";
import useAuthContext from "@/context/hooks/useAuthContext";

export default function UserIcon(): JSX.Element {
  const { isLoggedIn } = useAuthContext();

  return (
    <Link
      href={isLoggedIn ? "/userprofile" : "/authentication"}
      className={styles.userIcon}
    >
      <ManageAccountsIcon />
    </Link>
  );
}
