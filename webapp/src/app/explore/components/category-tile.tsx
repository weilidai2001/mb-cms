"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Product from "./product";
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
  isSelected: boolean;
}

const CategoryTile: React.FC<CategoryTileProps> = ({
  category,
  products,
  isSelected,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg px-4 bg-soft-blue">
      <h2 className="text-lg font-semibold text-center my-8">{category}</h2>

      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue={products.at(0)?.title}
            >
              {products.map((item) => (
                <AccordionItem value={item.title} key={item.title}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <Product key={item.id} item={item} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryTile;
