export type Product = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    featured: boolean;
    category: string;
    image: string;
    price: number;
    shipping: boolean;
    colors: string[];
  };
};

export type ProductContextType = {
  products: Product[];
};
