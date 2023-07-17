import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { flushSync } from "react-dom";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";
import Image from "next/image";

import emblaStyle from "@/components/Home/LangingPage/css/embla.module.css";

import image1 from "@/assets/images/banner/banner-home.png";
import image2 from "@/assets/images/banner/banner-2.png";
import image3 from "@/assets/images/banner/banner-3.png";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const images: any[] = [image1, image2, image3];
  const imageByIndex = (index: number): string => images[index % images.length];

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

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div>
      <div className={emblaStyle.embla}>
        <div className={emblaStyle["embla__viewport"]} ref={emblaRef}>
          <div className={emblaStyle["embla__container"]}>
            {slides.map((index) => (
              <div
                className={emblaStyle["embla__slide"]}
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
              >
                <Image
                  className={emblaStyle["embla__slide__img"]}
                  src={imageByIndex(index)}
                  alt={(index + 1).toString()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={emblaStyle["embla__dots"]}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`${emblaStyle["embla__dot"]} ${
              index === selectedIndex ? emblaStyle["embla__dot--selected"] : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
