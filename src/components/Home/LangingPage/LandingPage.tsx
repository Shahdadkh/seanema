import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Submenu from "@/components/Common/SubMenu";
import CategoryList from "@/components/Common/CategoryList";
import TitlePageWithSeeAll from "@/components/Common/TitlePageWithSeeAll";

import {
  SearchNormal1,
  Notification,
  Category,
  Video,
  TicketStar,
  Play,
} from "iconsax-react";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

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

  const categoryLists = [
    { name: "Genre", icon: Category, tag: "", src: "/Genre" },
    { name: "Tv Show", icon: Video, tag: "", src: "/TvShow" },
    { name: "Go Pro", icon: TicketStar, tag: "", src: "/Vip" },
  ];

  const filmList = [
    {
      name: "Pulp Fiction",
      genre: "Action, Drama",
      href: "/Film/1",
      img: pic1,
      percent: 36,
    },
    {
      name: "Captian America",
      genre: "Action, Fantasy",
      href: "/Film/2",
      img: pic2,
      percent: 78,
    },
    {
      name: "Captian America",
      genre: "Action, Fantasy",
      href: "/Film/3",
      img: pic2,
      percent: 5,
    },
  ];

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="flex justify-between items-center mx-10 my-12">
        <Image src={seanema} alt="seanema" />
        <div className="flex items-center">
          <Link href="/Genre">
            <SearchNormal1 size="26" color="#fff" className="mr-2" />
          </Link>
          <Link href="/Notification">
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
      <CategoryList src={categoryLists} />
      <TitlePageWithSeeAll title="Continue Watching" src="/" />
      <div className="mb-44">
        {filmList.map((item, index) => (
          <div key={index} className="px-14 sm:px-6">
            <div className="flex justify-between px-5 items-center backgroundColor3 w-full h-40 rounded-3xl my-8">
              <Link href={item.href} className="flex items-center">
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
              </Link>
              <Link href="/">
                <div className="border border-transparent flex justify-center items-center w-20 h-20 backgroundColor3 mr-3 sm:mr-0 rounded-full">
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
      <Submenu />
    </div>
  );
};

export default LandingPage;
