"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Navbar } from "@/components";
import CartContextProvider from "@/context/CartContext/CartContextProvider";
import Head from "next/head";
import AuthContextProvider from "@/context/AuthContext/AuthContextProvider";
import { useEffect, useState } from "react";
import { Loader } from "@/ui";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = `${inter.className} ${styles.rootLayout}`;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html lang="en">
      <body className={style}>
        <Head>
          <title>Qkart</title>
        </Head>
        <AuthContextProvider>
          <CartContextProvider>
            {isClient && (
              <>
                <Navbar />
                {children}
              </>
            )}
            {!isClient && <Loader message="Loading ..."/>}
          </CartContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
