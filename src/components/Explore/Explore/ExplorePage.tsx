import Image from "next/image";
import Link from "next/link";
import TitlePageWithSeeAll from "@/components/Common/TitlePageWithSeeAll";
import ShowDataTwoGrid from "@/components/Common/ShowDataTwoGrid";
import Submenu from "@/components/Common/SubMenu";
import { SearchNormal1, Star1 } from "iconsax-react";

import pic1 from "@/assets/images/image 105.png";
import pic2 from "@/assets/images/image 110.png";
import pic3 from "@/assets/images/image 111.png";
import pic4 from "@/assets/images/image 112.png";
import pic5 from "@/assets/images/leon.png";
import pic6 from "@/assets/images/inception.png";

const ExplorePage = () => {
  const filmSelected = [
    {
      name: "Leon The Professional",
      year: "1994",
      genre: "Action, Crime, Drama",
      rate: "8.5",
      href: "/Film/11",
      image: pic5,
    },
    {
      name: "Inception",
      year: "2010",
      genre: "Action, Science fiction",
      rate: "8.8",
      href: "/Film/12",
      image: pic6,
    },
  ];

  const actorDetail = [
    {
      name: "Wonder Woman",
      detail: "Comedy, Family",
      image: pic1,
      href: "/Film/4",
    },
    {
      name: "Alita",
      detail: "Cyberpunk, Fantasy",
      image: pic2,
      href: "/Film/5",
    },
    {
      name: "Mulan",
      detail: "Action, Drama",
      image: pic3,
      href: "/Film/6",
    },
    {
      name: "I am Legend",
      detail: "Drama, Fantasy",
      image: pic4,
      href: "/Film/7",
    },
  ];

  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      {/* Start Search */}
      <div className="w-5/6 h-24 mx-auto mt-8">
        <form className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchNormal1
                size="20"
                color="#fff"
                variant="Outline"
                className="ml-4"
              />
            </div>
            <input
              type="text"
              id="search1"
              className="backgroundColor3 border borderColor2 textColor1 text-2xl font-semibold rounded-full focus:ring-transparent focus:border-transparent focus:ring-0 focus:outline-none block w-[90%] pl-20 px-2.5 py-6 "
              placeholder="Search"
            />
          </div>
          <button className="inline-flex items-center text-xl font-normal text-white backgroundColor1 rounded-lg border borderColor4 focus:ring-0 focus:outline-none focus:ring-trasparent">
            Cancel
          </button>
        </form>
      </div>
      {/* End Search */}
      <div>
        {filmSelected.map((film, i) => (
          <div
            key={i}
            className="flex justify-between items-center w-5/6 mt-6 h-32 mx-auto"
          >
            <div className="w-1/4 h-full rounded-2xl overflow-hidden">
              <Image
                src={film.image}
                alt={(i + 1).toString()}
                className="w-full h-full"
              />
            </div>
            <Link href={film.href}>
              <div className="text-white text-2xl font-semibold mt-2">
                {film.name}
              </div>
              <div className="textColor1 text-xl font-medium mt-2">
                {`${film.year} | ${film.genre}`}
              </div>
              <div className="flex items-center mt-2">
                <Star1 size="18" color="#FFBE18" variant="Bold" />
                <div className="text-white text-xl font-semibold ml-2">
                  {film.rate}
                </div>
              </div>
            </Link>
            <svg
              className="w-4 h-4 mr-2 textColor1 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="mt-12 mx-4">
        <TitlePageWithSeeAll title="Popular" src="" />
      </div>
      <div className="mb-40">
        <ShowDataTwoGrid src={actorDetail} />
      </div>
      <Submenu />
    </div>
  );
};

export default ExplorePage;
