import React from "react";
import Product from "./product"; // Assuming product.tsx is in the same directory
import type { Products } from "@/lib/schemas/product-explore";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface CategoryTileProps {
  category: string;
  products: Products;
}

const CategoryTile: React.FC<CategoryTileProps> = ({ category, products }) => {
  return (
    <Accordion type="single" collapsible defaultValue={products.at(0)?.title}>
      {products.map((item: any) => (
        <AccordionItem value={item.title}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>
            <Product key={item.id} item={item} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CategoryTile;
