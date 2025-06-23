import type { Products } from "@/lib/schemas/product-explore";
import ProductsCarousel from "./components/products-carousel";

const productsApiUrl = process.env.API_SERVER + "/api/products";

const fetchProducts = async (): Promise<Products> => {
  const res = await fetch(productsApiUrl);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const ExplorePage = async () => {
  const products: Products = await fetchProducts();
  return <ProductsCarousel allProducts={products} />;
};

export default ExplorePage;
