export type ButtonProps = {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large" | "fullWidth";
  color?: "primary" | "secondary";
  icon?: string;
};
