import type { Products } from "@/lib/schemas/product-explore";
import ProductsCarousel from "./components/products-carousel";

const API_URL = "http://localhost:3001/api/products";

const fetchProducts = async (): Promise<Products> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const ExplorePage = async () => {
  let products: Products = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    // Optionally: log error or show fallback UI
    console.error(error);
  }
  return <ProductsCarousel allProducts={products} />;
};

export default ExplorePage;
