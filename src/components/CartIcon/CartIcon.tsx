import Link from "next/link";
import styles from "./CartIcon.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartIcon(props: { count: number }): JSX.Element {

  return (
    <Link href="/cart" >
      <div className={styles.cart}>
        {props.count > 0 && (
          <div className={styles.cartCount} >{props.count}</div>
        )}
        <ShoppingCartOutlinedIcon/>
      </div>
    </Link>
  );
}

export default CartIcon;
