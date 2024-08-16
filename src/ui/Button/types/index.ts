import { ReactNode } from "react";

export type ButtonProps = {
  label: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large" | "fullWidth";
  color?: "primary" | "secondary";
  icon?: string;
  disabled?: boolean;
  type?: "submit";
  loading?: boolean;
};
