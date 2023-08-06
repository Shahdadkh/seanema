import { useState } from "react";
import Submenu from "@/components/Common/SubMenu";
import { SearchNormal1 } from "iconsax-react";
import FilmList from "@/components/Common/FilmList";

import pic1 from "@/assets/images/captain-marvel-3.png";
import pic2 from "@/assets/images/the-captain.png";
import pic3 from "@/assets/images/captain-america-2.png";

const ExploreResultPage = () => {
  const [selectMenu, setSelectMenu] = useState<any>("All");

  const MenuList = ["All", "Action", "Comedy", "Drama"];

  const filmList = [
    {
      name: "Captian Marvel",
      alt: "",
      year: "2019",
      genre: "Action, Fantasy",
      star: "4.5",
      image: pic1,
      href: "/Detail/8",
    },
    {
      name: "The Captian",
      alt: "",
      year: "2016",
      genre: "Drama, Thriller",
      star: "4",
      image: pic2,
      href: "/Detail/9",
    },
    {
      name: "Captian America",
      alt: "",
      year: "2018",
      genre: "Action, Fantasy",
      star: "3.5",
      image: pic3,
      href: "/Detail/10",
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
      <div className="flex items-center m-10">
        {MenuList.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => setSelectMenu(item)}
              className={`${
                selectMenu.includes(item) ? "textColor2" : "text-gray-400"
              } text-3xl font-semibold mx-4 cursor-pointer`}
            >
              {item}
            </div>
            <div
              className={`${
                selectMenu.includes(item)
                  ? "backgroundColor2"
                  : "bg-transparent"
              } w-2.5 h-2.5 mx-auto mt-4 rounded-full`}
            ></div>
          </div>
        ))}
      </div>
      <div className="mb-40">
        <FilmList src={filmList} />
      </div>
      <Submenu />
    </div>
  );
};

export default ExploreResultPage;
