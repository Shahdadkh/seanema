import React, { useState } from "react";
import Link from "next/link";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import embla from "./css/embla.module.css";
import RateModal from "@/components/Common/RateModal";
import { DocumentDownload, Save2, Send2, Message, Star1 } from "iconsax-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const [showModal, setShowModal] = useState<any>(false);
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  const images: any = [
    { icon: DocumentDownload, src: "/", click: "" },
    { icon: Save2, src: "/", click: "" },
    { icon: Send2, src: "/", click: "" },
    { icon: Message, src: "/", click: "" },
    { icon: Star1, src: "", click: () => setShowModal(true) },
  ];

  return (
    <div className={embla.embla}>
      <div className={embla["embla__viewport"]} ref={emblaRef}>
        <div className={embla["embla__container"]}>
          {images.map((item: any, index: number) =>
            item.src !== "" ? (
              <Link
                href={item.src}
                className={embla["embla__slide"]}
                key={index}
              >
                <div
                  className={`${embla["embla__slide__img"]} overflow-hidden`}
                >
                  <item.icon
                    size="25"
                    color="#fff"
                    variant="Outline"
                    className="mx-auto mt-5"
                  />
                </div>
              </Link>
            ) : (
              <div
                className={`${embla["embla__slide"]} cursor-pointer`}
                onClick={item.click}
                key={index}
              >
                <div
                  className={`${embla["embla__slide__img"]} overflow-hidden`}
                >
                  <item.icon
                    size="25"
                    color="#fff"
                    variant="Outline"
                    className="mx-auto mt-5"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <RateModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default EmblaCarousel;
