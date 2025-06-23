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
  const [height, setHeight] = useState("0px");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isOpen && ref.current) {
      setShouldAnimate(true);
      setHeight(ref.current.scrollHeight + "px");
    } else {
      setShouldAnimate(true);
      setHeight("0px");
    }
  }, [isOpen, children]);

  // After expanding, set height to auto for responsiveness
  const handleTransitionEnd = () => {
    if (isOpen && ref.current) {
      setHeight("auto");
    }
  };

  return (
    <div
      ref={ref}
      className={styles.container}
      style={{
        height,
        overflow: "hidden",
        transition: shouldAnimate
          ? "height 0.3s cubic-bezier(0.87, 0, 0.13, 1)"
          : undefined,
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
};

interface CategoryTileProps {
  category: string;
  products: Products;
  isSelected?: boolean;
}

const CategoryTile: React.FC<CategoryTileProps> = ({
  category,
  products,
  isSelected,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg px-4 bg-soft-blue">
      <h2 className="text-lg font-semibold text-center my-8">{category}</h2>

      <Accordion
        type="single"
        collapsible
        value={isSelected ? products.at(0)?.title : undefined}
      >
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
