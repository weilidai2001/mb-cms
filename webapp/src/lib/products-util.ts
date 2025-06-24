import { Products } from "./schemas/product-explore";

export const extractCategories = (
  products: Products
): Products[number]["description"][] => {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return categories;
};

export const getProductsByCategory = (
  products: Products,
  category: string
): Products => {
  return products.filter((product) => product.category === category);
};
