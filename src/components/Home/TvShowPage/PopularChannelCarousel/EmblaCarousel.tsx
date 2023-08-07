import React from "react";
import Link from "next/link";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import embla from "./css/embla.module.css";

import pic1 from "@/assets/images/channel/nbc.png";
import pic2 from "@/assets/images/channel/ngn.png";
import pic3 from "@/assets/images/channel/nickelodeon.png";
import pic4 from "@/assets/images/channel/fox-movies.png";
import pic5 from "@/assets/images/channel/national-geographic.png";
import pic6 from "@/assets/images/channel/cn.png";
import pic7 from "@/assets/images/channel/cnn.png";
import pic8 from "@/assets/images/channel/hd.png";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  const images: any = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  return (
    <div className={embla.embla}>
      <div className={embla["embla__viewport"]} ref={emblaRef}>
        <div className={embla["embla__container"]}>
          {images.map((item: any, index: number) => (
            <Link href="/" className={embla["embla__slide"]} key={index}>
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
  );
};

export default EmblaCarousel;
