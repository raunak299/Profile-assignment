import { DiscountCode } from "@/types";

export type OnDiscountSelect = (discount: number) => void;

export type DiscountProps = {
  discountCodes: DiscountCode[];
  onDiscountSelect?: OnDiscountSelect;
  disabled?: boolean;
};
