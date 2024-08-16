import { ReactNode } from "react";

/**
 * Props for the `Button` component.
 *
 * This type defines the properties that can be used to customize a button component. It includes
 * options for labeling, sizing, coloring, and additional features like icons, loading states, and more.
 *
 * @property {ReactNode} label - The text or element to display on the button.
 * @property {() => void} [onClick] - An optional callback function to be called when the button is clicked.
 * @property {"small" | "medium" | "large" | "fullWidth"} [size] - An optional size for the button. Can be "small", "medium", "large", or "fullWidth".
 * @property {"primary" | "secondary"} [color] - An optional color scheme for the button. Can be "primary" or "secondary".
 * @property {string} [icon] - An optional icon to display on the button, represented as a string (e.g., icon name).
 * @property {boolean} [disabled] - An optional boolean to indicate if the button should be disabled.
 * @property {"submit"} [type] - An optional type for the button. Defaults to "submit" if provided.
 * @property {boolean} [loading] - An optional boolean to indicate if the button is in a loading state, which might display a spinner or similar indicator.
 */

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
