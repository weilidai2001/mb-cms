"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex transition-transform duration-300 ease-in-out">
        <div className="min-w-full">Slide 1</div>
        <div className="min-w-full">Slide 2</div>
        <div className="min-w-full">Slide 3</div>
      </div>
      <button onClick={scrollPrev}>Prev</button>
      <button onClick={scrollNext}>Next</button>
    </div>
  );
};

export default Carousel;
