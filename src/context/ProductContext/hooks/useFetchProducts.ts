import { PRODUCT_FETCH_URL } from "@/constants/url";
import { Product, RemoteDataState } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

type UseFetchProductsProps = {
  url: string;
};

const useFetchProducts = (
  params: UseFetchProductsProps
): {
  remoteDataState: RemoteDataState<Product[]>;
} => {
  const { url } = params;
  const [remoteDataState, setRemoteDataState] = useState<
    RemoteDataState<Product[]>
  >({
    status: "loading",
    message: "Getting Products ...",
  });

  const fetchProducts = async () => {
    try {
      const response: { data: Product[] } = await axios.get(url);
      setRemoteDataState({ status: "success", data: response.data });
    } catch (err) {
      setRemoteDataState({ status: "error", message: "Something went wrong" });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [url]);

  return { remoteDataState };
};

export default useFetchProducts;
