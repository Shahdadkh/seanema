import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import {
  SearchNormal1,
  Notification,
  Category,
  Video,
  TicketStar,
  Play,
} from "iconsax-react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import seanema from "@/assets/images/Seanema.png";
import pic1 from "@/assets/images/Pulp-Fiction.png";
import pic2 from "@/assets/images/Captain-America.png";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const LandingPage: React.FC = () => {
  const [notiBell, setNotiBell] = useState<any>(true);

  const categoryList = [
    { name: "Genre", icon: Category, src: "/" },
    { name: "Tv Show", icon: Video, src: "/" },
    { name: "Go Pro", icon: TicketStar, src: "/" },
  ];

  const filmList = [
    { name: "Pulp Fiction", genre: "Action, Drama", img: pic1, percent: 36 },
    {
      name: "Captian America",
      genre: "Action, Fantasy",
      img: pic2,
      percent: 78,
    },
    {
      name: "Captian America",
      genre: "Action, Fantasy",
      img: pic2,
      percent: 0,
    },
  ];

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="flex justify-between items-center mx-10 my-12">
        <Image src={seanema} alt="seanema" />
        <div className="flex items-center">
          <Link href="/">
            <SearchNormal1 size="26" color="#fff" className="mr-2" />
          </Link>
          <Link href="/">
            {notiBell ? (
              <div className="relative">
                <Notification size="30" color="#fff" />
                <div className="absolute top-1 right-2 w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
            ) : (
              <Notification size="30" color="#fff" />
            )}
          </Link>
        </div>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="flex justify-around w-full h-44 px-10 sm:px-6 mt-8 my-14">
        {categoryList.map((item, index) => (
          <Link key={index} href={item.src}>
            <div className="border border-[#24243B] w-36 h-full rounded-3xl bg-[#24243B]">
              <div className="border border-[#39394E] w-20 h-20 bg-[#39394E] rounded-full mx-auto mt-6">
                <item.icon
                  size="28"
                  color="#AAAAAA"
                  variant="Bold"
                  className="mx-auto mt-4"
                />
              </div>
              <div className="text-white font-semibold text-center mt-1">
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between px-14 sm:px-7">
        <div className="text-white font-semibold text-3xl">
          Continue Watching
        </div>
        <Link href="/" className="text-gray-400">
          See all
        </Link>
      </div>
      <div>
        {filmList.map((item, index) => (
          <div key={index} className="px-14 sm:px-6">
            <div className="flex justify-between px-5 items-center bg-[#24243B] w-full h-40 rounded-3xl my-8">
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt=""
                  width={80}
                  className="rounded-3xl"
                />
                <div className="ml-4">
                  <div className="text-white font-bold text-2xl">
                    {item.name}
                  </div>
                  <div className="text-gray-400 text-xl font-semibold">
                    {item.genre}
                  </div>
                </div>
              </div>
              <Link href="/">
                <div className="border border-transparent flex justify-center items-center w-20 h-20 bg-[#39394E] mr-3 sm:mr-0 rounded-full">
                  <CircularProgressbarWithChildren
                    value={item.percent}
                    styles={buildStyles({
                      pathColor: "#475AEA",
                      trailColor: "#39394E", //dark blue 3
                    })}
                  >
                    <Play size="25" color="#fff" variant="Bold" />
                  </CircularProgressbarWithChildren>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
