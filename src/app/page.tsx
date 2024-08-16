"use client";

import { AuthForm, SignoutButton } from "@/components";
import styles from "./page.module.css";
import useAuthContext from "@/context/hooks/useAuthContext";
import { redirect } from "next/navigation";

export default function Home() {
  
  return (
    <main className={styles.main}>
      {redirect('/products')}
    </main>
  );
}
