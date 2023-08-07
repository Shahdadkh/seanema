import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

import sandbox from "./css/sandbox.module.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const FilmCastCarousel: React.FC = () => (
  <main className={sandbox.sandbox}>
    <section className={sandbox["sandbox__carousel"]}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

export default FilmCastCarousel;
