import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const LandingPage: React.FC = () => (
  <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </div>
);

export default LandingPage;
