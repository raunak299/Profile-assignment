'use client';
import ProductContextProvider from "@/context/ProductContext/ProductContextProvider";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <ProductContextProvider>{children}</ProductContextProvider>;
}
