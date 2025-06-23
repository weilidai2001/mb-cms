import Carousel from "@/components/ui/carousel";

import type { Products } from "@/lib/schemas/product-explore";
import { extractCategories, getProductsByCategory } from "@/lib/products-util";
import CategoryTile from "./category-tile";

export default function ProductsCarousel({
  allProducts,
}: {
  allProducts: Products;
}) {
  const categories = extractCategories(allProducts);
  const slides: React.ReactElement<{ isSelected: boolean }>[] = categories.map(
    (category) => (
      <CategoryTile
        key={category}
        category={category}
        products={getProductsByCategory(allProducts, category)}
        isSelected={false}
      />
    )
  );

  return (
    <main className="bg-[url('/Texture_1290x898_clouds.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      <Carousel slides={slides} heading="Explore Accounts" />
    </main>
  );
}
