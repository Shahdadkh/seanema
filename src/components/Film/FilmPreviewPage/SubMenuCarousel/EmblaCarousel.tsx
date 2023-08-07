import React from "react";
import Link from "next/link";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import embla from "./css/embla.module.css";

import { DocumentDownload, Save2, Send2, Message, Star1 } from "iconsax-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  const images: any = [
    { icon: DocumentDownload, src: "/" },
    { icon: Save2, src: "/" },
    { icon: Send2, src: "/" },
    { icon: Message, src: "/" },
    { icon: Star1, src: "/" },
  ];

  return (
    <div className={embla.embla}>
      <div className={embla["embla__viewport"]} ref={emblaRef}>
        <div className={embla["embla__container"]}>
          {images.map((item: any, index: number) => (
            <Link href={item.src} className={embla["embla__slide"]} key={index}>
              <div className={`${embla["embla__slide__img"]} overflow-hidden`}>
                <item.icon
                  size="25"
                  color="#fff"
                  variant="Outline"
                  className="mx-auto mt-5"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
