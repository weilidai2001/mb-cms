import React, { useRef, useState, useEffect } from "react";

import Product from "./product";
import type { Products } from "@/lib/schemas/product-explore";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import styles from "./category-tile.module.css";

const AnimatedAccordionContent: React.FC<{
  isOpen: boolean;
  children: React.ReactNode;
}> = ({ isOpen, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0");

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.scrollHeight + "px");
    } else if (!isOpen && ref.current) {
      if (height === "auto") {
        setHeight(ref.current.scrollHeight + "px");
        setTimeout(() => setHeight("0px"), 20);
      } else {
        setHeight("0");
      }
    }
  }, [isOpen, children]);

  const handleTransitionEnd = () => {
    if (isOpen && ref.current) {
      setHeight("auto");
    }
  };

  return (
    <div
      ref={ref}
      className={styles.container}
      style={{ height }}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
};

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

      <Accordion type="single" collapsible value={undefined}>
        <AnimatedAccordionContent isOpen={isSelected}>
          {products.map((item: any) => (
            <AccordionItem value={item.title} key={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className={styles.accordionContent}>
                <Product key={item.id} item={item} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </AnimatedAccordionContent>
      </Accordion>
    </div>
  );
};

export default CategoryTile;
