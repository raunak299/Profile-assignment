import ProductCard from "./ProductCard/ProductCard";
import style from "./Product.module.css";
import PageHeader from "../PageHeader/PageHeader";
import { useProductContext } from "@/context";

function Products(): JSX.Element {
  const context = useProductContext();
  const { products } = context;

  return (
    <section className={style.productRoot}>
      <PageHeader label="Products" />
      <section className={style.productCardContainer}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </section>
  );
}

export default Products;
