import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { ArrowDown2, Star1 } from "iconsax-react";
import SubMenuCarousel from "./SubMenuCarousel/SubMenuCarousel";
import FilmList from "@/components/Common/FilmList";

import pic1 from "@/assets/images/captain-marvel-3.png";
import pic2 from "@/assets/images/the-captain.png";
import pic3 from "@/assets/images/captain-america-2.png";

const FilmPreviewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const filmList = [
    {
      name: "Captian Marvel",
      alt: "",
      year: "2019",
      genre: "Action, Fantasy",
      star: "4.5",
      image: pic1,
      href: "/Film/13",
    },
    {
      name: "The Captian",
      alt: "",
      year: "2016",
      genre: "Drama, Thriller",
      star: "4",
      image: pic2,
      href: "/Film/14",
    },
    {
      name: "Captian America",
      alt: "",
      year: "2018",
      genre: "Action, Fantasy",
      star: "3.5",
      image: pic3,
      href: "/Film/15",
    },
  ];

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="w-full h-fit">
        <ReactPlayer
          controls={true}
          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          width="100%"
          height="100%"
        />
      </div>
      <div className="mx-12 mt-10">
        <div className="flex justify-between items-center">
          <div className="text-white text-3xl font-semibold">
            Captain Marvel
          </div>
          <ArrowDown2
            size="20"
            color="#fff"
            variant="Outline"
            className="cursor-pointer"
          />
        </div>
        <div className="textColor1 text-xl font-normal mt-2">
          Director: Anna Boden, Ryan Fleck
        </div>
        <div className="flex items-center mt-2">
          <div className="text-white text-2xl font-medium mr-2">4.5</div>
          <div className="flex items-center">
            <Star1 size="18" color="#FFBE18" variant="Bold" className="mx-1" />
            <Star1 size="18" color="#FFBE18" variant="Bold" className="mx-1" />
            <Star1 size="18" color="#FFBE18" variant="Bold" className="mx-1" />
            <Star1 size="18" color="#FFBE18" variant="Bold" className="mx-1" />
            <Star1
              size="18"
              color="#FFBE18"
              variant="Outline"
              className="mx-1"
            />
          </div>
        </div>
      </div>
      <div className="ml-10 mt-10">
        <SubMenuCarousel />
      </div>
      <div className="mb-10">
        <FilmList src={filmList} />
      </div>
    </div>
  );
};

export default FilmPreviewPage;
