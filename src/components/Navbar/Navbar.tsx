"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { CartIcon } from "../CartIcon";
import useCartContext from "@/context/hooks/useCartContext";

function Navbar(): JSX.Element {
  const { products } = useCartContext();
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>Qkart</h1>
      </Link>
      <CartIcon count={products.length} />
    </nav>
  );
}

export default Navbar;
