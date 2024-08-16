import { ProductWithQuantity } from "@/types";

export function getTotalProductPrice(products: ProductWithQuantity[]): number {
  return products.reduce(
    (totalPrice, product) =>
      (totalPrice = totalPrice + product.attributes.price * product.quantity),
    0
  );
}

export function getTotalCartAmount(
  totalProductPrice: number,
  shippingCharge: number,
  taxCharge: number,
  discountPercentage: number = 0
) {
  const discountAmount = (discountPercentage / 100) * totalProductPrice;
  const totalCartAmount = Math.max(
    0,
    Math.ceil(totalProductPrice - discountAmount + shippingCharge + taxCharge)
  );
  return totalCartAmount;
}
