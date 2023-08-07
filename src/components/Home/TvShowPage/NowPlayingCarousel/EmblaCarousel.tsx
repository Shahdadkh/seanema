import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import embla from "./css/embla.module.css";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";

import pic1 from "@/assets/images/captain-marvel-3.png";
import pic2 from "@/assets/images/Avatar.png";
import pic3 from "@/assets/images/captain-america-2.png";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const images: any = [pic1, pic2, pic3];

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className={embla.embla}>
        <div className={embla["embla__viewport"]} ref={emblaRef}>
          <div className={embla["embla__container"]}>
            {images.map((item: any, index: number) => (
              <Link
                href={`/Film/${index + 1}`}
                className={embla["embla__slide"]}
                key={index}
              >
                <img
                  className={embla["embla__slide__img"]}
                  src={item.src}
                  alt={(index + 1).toString()}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={embla["embla__dots"]}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`${embla["embla__dot"]} ${
              index === selectedIndex ? embla["embla__dot--selected"] : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
