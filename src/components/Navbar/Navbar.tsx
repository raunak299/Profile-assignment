"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { CartIcon } from "../CartIcon";
import useCartContext from "@/context/hooks/useCartContext";
import { UserIcon } from "../UserIcon";

function Navbar(): JSX.Element {
  const { products } = useCartContext();
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>Qkart</h1>
      </Link>
      <section className={styles.navigationItem}>
        <UserIcon />
        <CartIcon count={products.length}/>
      </section>
    </nav> 
  );
}

export default Navbar;
