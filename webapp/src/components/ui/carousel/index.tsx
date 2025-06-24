"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ChevronRight from "./chevron-right";
import ChevronLeft from "./chevron-left";
import Button from "./button";

const Carousel = ({
  heading,
  slides,
}: {
  heading: string;
  slides: React.ReactElement<{ isSelected: boolean }>[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selectedIndex when slide changes
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // set initially
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      aria-labelledby="products-listing"
      className="max-w-[100vw] mx-auto"
    >
      <div className="flex justify-between items-center max-w-[400px] md:max-w-[600px] mx-auto px-4 pt-8">
        <Button onClick={scrollPrev}>
          <ChevronLeft />
        </Button>
        <h1 className="text-center text-xl font-bold text-mint-glow">
          {heading}
        </h1>
        <Button onClick={scrollNext}>
          <ChevronRight />
        </Button>
      </div>

      <div className="relative max-w-[100vw] xl:max-w-[1200px] mx-auto py-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {slides.map((slide, index) => {
              return (
                <div
                  className="relative min-w-0 flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] pl-4"
                  key={index}
                >
                  {React.cloneElement(slide, {
                    ...slide.props,
                    isSelected: index === selectedIndex,
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
