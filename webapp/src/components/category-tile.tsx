import React from "react";
import Product from "./product"; // Assuming product.tsx is in the same directory
import type { Products } from "@/lib/schemas/product-explore";

interface CategoryTileProps {
  category: string;
  products: Products;
}

const CategoryTile: React.FC<CategoryTileProps> = ({ category, products }) => {
  return (
    <div key={category} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
        {category}
      </h2>
      {products.map((item: any) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryTile;
