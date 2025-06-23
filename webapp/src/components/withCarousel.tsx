"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ComponentType, useCallback, useEffect, useState } from "react";

export type InjectedCarouselProps = {
  emblaRef: (node: HTMLElement | null) => void;
  onPrev: () => void;
  onNext: () => void;
  selectedIndex: number;
  scrollSnaps: number[];
};

export default function withCarousel<T extends object>(
  Component: ComponentType<T & InjectedCarouselProps>
) {
  return function Carousel(props: T) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
      <Component
        {...props}
        emblaRef={emblaRef}
        onPrev={onPrev}
        onNext={onNext}
        selectedIndex={selectedIndex}
        scrollSnaps={scrollSnaps}
      />
    );
  };
}
