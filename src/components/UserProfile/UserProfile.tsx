import { SignoutButton } from "@/components";
import useAuthContext from "@/context/hooks/useAuthContext";
import styles from "./UserProfile.module.css";

export default function UserProfile(): JSX.Element {
  const { user } = useAuthContext();
  return (
    <section className={styles.userProfileRoot}>
      <h2 className={styles.userEmail}>{user?.email}</h2>
      <SignoutButton /> 
    </section>
  );
}
