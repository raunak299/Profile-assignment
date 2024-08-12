'use client';
import { createContext, ReactNode, useEffect } from "react";
import { ProductContextType } from "./types";
import useFetchProducts from "./hooks/useFetchProducts";
import { PRODUCT_FETCH_URL } from "@/constants/url";
import RemoteDataStateRenderer from "@/utils/RemoteDataStateRenderer";

const productContext = createContext<ProductContextType | undefined>(undefined);

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const { remoteDataState } = useFetchProducts({ url: PRODUCT_FETCH_URL });
  const productData =
    remoteDataState.status === "success" ? remoteDataState.data : [];

  return (
    <RemoteDataStateRenderer
      remoteDataState={remoteDataState}
      // renderLoading={(msg)=> <h1>{msg}</h1>}
      // renderError={(msg)=> <h1>{msg}</h1>}
      renderSuccess={(productData) => (
        <productContext.Provider value={{ products: productData }}>
          {children}
        </productContext.Provider>
      )}
    />
  );
};

export default ProductContextProvider;
