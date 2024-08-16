import { useEffect, useState } from "react";
import { DiscountProps } from "./types";
import styles from "./DiscountInput.module.css";
import { useDiscountCode } from "@/components/hooks";

export default function DiscountInput(props: DiscountProps): JSX.Element {
  const { discountCodes, onDiscountSelect, disabled } = props;
  const { discount, onDiscountSelectHandler } =
    useDiscountCode(onDiscountSelect);

  return (
    <select
      onChange={onDiscountSelectHandler}
      defaultValue={""}
      className={styles.discountInputRoot}
      disabled={disabled}
    >
      <option value="" disabled  hidden>
        Select Discount
      </option>
      <option value={0}>No Discount</option>
      {discountCodes.map((discountCode) => (
        <option value={discountCode.discount} key={discountCode.discount}>
          {discountCode.label}
        </option>
      ))}
    </select>
  );
}
