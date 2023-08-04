import Image from "next/image";
import Link from "next/link";
import TitlePage from "@/components/Common/TitlePage";
import TitlePageWithSeeAll from "@/components/Common/TitlePageWithSeeAll";
import { SearchNormal1 } from "iconsax-react";

import horror from "@/assets/images/icon/horror.png";
import action from "@/assets/images/icon/action.png";
import comedy from "@/assets/images/icon/comedy.png";
import drama from "@/assets/images/icon/drama.png";
import fantasy from "@/assets/images/icon/fantasy.png";
import romance from "@/assets/images/icon/romance.png";
import adventure from "@/assets/images/icon/adventure.png";
import science from "@/assets/images/icon/science.png";
import mystery from "@/assets/images/icon/mystery.png";

const GenrePage = () => {
  const genreList = [
    { name: "Horror", icon: horror, href: "" },
    { name: "Action", icon: action, href: "" },
    { name: "Comedy", icon: comedy, href: "" },
    { name: "Drama", icon: drama, href: "" },
    { name: "Fantasy", icon: fantasy, href: "" },
    { name: "Romance", icon: romance, href: "" },
    { name: "Adventure", icon: adventure, href: "" },
    { name: "Slice of life", icon: science, href: "" },
    { name: "Mystery", icon: mystery, href: "" },
  ];

  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <TitlePage title="Genre" />
      <div className="w-5/6 h-64 overflow-hidden mx-auto rounded-[30px] mt-8 gradient2">
        <div className="mt-8">
          <div className="text-white text-4xl text-center mx-auto font-semibold">
            Find best
          </div>
          <div className="text-white text-4xl text-center mx-auto font-semibold">
            Genre you want
          </div>
        </div>
        <form className="flex items-center mt-6">
          <div className="relative w-9/12 mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchNormal1
                size="20"
                variant="Outline"
                className="textColor6 ml-4"
              />
            </div>
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300 textColor1 text-2xl rounded-full focus:ring-transparent focus:ring-0 block w-full pl-20 p-5 dark:text-white"
              placeholder="Search.."
              required
            />
          </div>
        </form>
      </div>
      <div className="mt-14 mx-5">
        <TitlePageWithSeeAll title="Popular genre" src="/" />
      </div>
      <div className="grid grid-cols-3 gap-5 w-5/6 h-fit my-8 mx-auto">
        {genreList.map((genre, i) => (
          <Link
            key={i}
            href={genre.href}
            className="h-40 rounded-3xl backgroundColor3"
          >
            <div className="flex justify-center items-center backgroundColor8 w-20 h-20 rounded-full mx-auto mt-4">
              <Image src={genre.icon} alt="" width={34} height={34} />
            </div>
            <div className="text-center text-white text-xl mt-3 font-medium">
              {genre.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
