import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

import sandbox from "./css/sandbox.module.css";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};
const SLIDE_COUNT = 16;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PopularChannelCarousel: React.FC = () => (
  <main className={sandbox.sandbox}>
    <section className={sandbox["sandbox__carousel"]}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

export default PopularChannelCarousel;
