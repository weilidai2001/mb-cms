"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto p-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {[...Array(10).keys()].map((i) => (
            <div
              className="relative min-w-0 flex-shrink-0 w-1/2 pl-4"
              key={i}
            >
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-2xl font-bold">
                Slide {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10"
        onClick={scrollPrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10"
        onClick={scrollNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
