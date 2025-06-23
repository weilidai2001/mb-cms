import { Products } from "./schemas/product-explore";

export const extractCategories = (products: Products): string[] => {
  const categories = products.reduce((acc: string[], product: Product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);
  return categories;
};
