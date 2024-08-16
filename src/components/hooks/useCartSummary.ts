import useCartContext from "@/context/hooks/useCartContext";
import CartSummary from "../Cart/CartSummary/CartSummary";
import { SHIPPING_CHARGE, TAX_CHARGE } from "@/constants";
import { useState } from "react";
import { getTotalCartAmount } from "@/utils";

const useCartSummary = () => {
  const { totalProductPrice, products } = useCartContext();
  const taxCharge = products.length > 0 ? TAX_CHARGE : 0;
  const shippingCharge = products.length > 0 ? SHIPPING_CHARGE : 0;
  const [discount, setDiscount] = useState(10);
  const totalCartAmount = getTotalCartAmount(
    totalProductPrice,
    shippingCharge,
    taxCharge,
    discount
  );

  const onDiscountSelect = (discount: number) => {
    setDiscount(discount);
  };

  return {
    totalProductPrice,
    totalCartAmount,
    taxCharge,
    shippingCharge,
    onDiscountSelect,
  };
};

export default useCartSummary;
