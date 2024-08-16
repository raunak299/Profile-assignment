import { ProductWithQuantity } from "@/types";

export function getTotalProductPrice(products: ProductWithQuantity[]): number {
  return products.reduce(
    (totalPrice, product) =>
      (totalPrice = totalPrice + product.attributes.price * product.quantity),
    0
  );
}

/**
 * Calculates the total amount for the cart, including product price, shipping charge, tax, and discount.
 *
 * This function computes the total cart amount by applying the discount to the total product price,
 * then adding the shipping and tax charges. The result is rounded up to the nearest whole number
 * and ensures it is not negative.
 *
 * @param {number} totalProductPrice - The total price of the products in the cart before any discounts or additional charges.
 * @param {number} shippingCharge - The shipping cost to be added to the total cart amount.
 * @param {number} taxCharge - The tax amount to be added to the total cart amount.
 * @param {number} [discountPercentage=0] - The discount percentage to apply to the total product price. Defaults to 0 if not provided.
 *
 * @returns {number} The total amount for the cart after applying the discount, adding the shipping and tax charges.
 */

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
