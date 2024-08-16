import useCartContext from "@/context/hooks/useCartContext";
import { Button } from "@/ui";
import { useRouter } from "next/navigation";

export default function ProceedToCheckoutButton(props: {
  noOfProductsInCart: number;
}): JSX.Element {
  const { noOfProductsInCart } = props;
  const router = useRouter();
  const { dispatchCartAction } = useCartContext();
  const proceedToCheckoutHandler = () => {
    router.push("/checkout");
    dispatchCartAction({ type: "remove_all_products", payload: {} });
  };

  return (
    <Button
      label={"PROCEED TO CHECKOUT"}
      disabled={noOfProductsInCart === 0}
      size="large"
      onClick={proceedToCheckoutHandler}
    />
  );
}
