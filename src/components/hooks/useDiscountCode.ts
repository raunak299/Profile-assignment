import { useEffect, useState } from "react";
import { OnDiscountSelect } from "../Cart/DiscountInput/types";

export default function useDiscountCode(onDiscountSelect?: OnDiscountSelect) {
  const [discount, setDiscount] = useState(0);
  const onDiscountSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const discount = e.target.value;
    setDiscount(Number(discount));
  };

  useEffect(() => {
    onDiscountSelect && onDiscountSelect(discount);
  }, [discount]);

  return {
    discount,
    onDiscountSelectHandler,
  };
}
