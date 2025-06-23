"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const Carousel = ({
  slides,
}: {
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
    <section aria-labelledby="products-listing" className="max-w-4xl mx-auto">
      <button
        className="bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10"
        onClick={scrollPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h2 id="products-listing" className="sr-only">
        Explore Accounts
      </h2>
      <button
        className="bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10"
        onClick={scrollNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div className="relative max-w-4xl mx-auto p-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {slides.map((slide, index) => {
              const newSlide = React.cloneElement(slide, {
                ...slide.props,
                isSelected: index === selectedIndex,
              });

              return (
                <div
                  className="relative min-w-0 flex-shrink-0 w-1/2 pl-4"
                  key={index}
                >
                  {newSlide}
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
