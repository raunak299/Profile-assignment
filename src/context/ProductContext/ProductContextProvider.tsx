import { ReactNode } from "react";
import RemoteDataStateRenderer from "@/utils/RemoteDataStateRenderer";
import productContext from "./ProductContext";
import { PRODUCT_FETCH_URL } from "@/constants";
import { useFetchProducts } from "@/hooks";

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const { remoteDataState } = useFetchProducts({ url: PRODUCT_FETCH_URL });
  const productData =
    remoteDataState.status === "success" ? remoteDataState.data : [];

  return (
    <RemoteDataStateRenderer
      remoteDataState={remoteDataState}
      renderSuccess={(productData) => (
        <productContext.Provider value={{ products: productData }}>
          {children}
        </productContext.Provider>
      )}
    />
  );
};

export default ProductContextProvider;
