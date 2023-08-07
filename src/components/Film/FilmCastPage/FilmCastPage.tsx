import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import TitlePage from "@/components/Common/TitlePage";
import TitlePageWithSeeAll from "@/components/Common/TitlePageWithSeeAll";
import FilmCastCarousel from "./FilmCastCarousel/FilmCastCarousel";

import pic1 from "@/assets/images/image 152.png";
import pic2 from "@/assets/images/samuel-jackson.png";
import pic3 from "@/assets/images/image 154.png";

const FilmCastPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const actors = [
    {
      name: "zendaya",
      country: "American actress",
      born: "Born October 1, 1989 (age 32)",
      image: pic1,
      src: "/",
    },
    {
      name: "timothee chalamet",
      country: "American actress",
      born: "Born December 21, 1948 (age 73)",
      image: pic2,
      src: "/",
    },
    {
      name: "Clark Gregg",
      country: "American actress",
      born: "Born April 2, 1962 (age 59)",
      image: pic3,
      src: "/",
    },
  ];

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div>
        <TitlePage title="Cast" />
      </div>
      <div>
        <FilmCastCarousel />
      </div>
      <div className="mx-5 mt-10">
        <TitlePageWithSeeAll title="Star Casting" src="/" />
      </div>
      <div className="mb-10 mx-10 sm:mx-2">
        {actors.map((actor, i) => (
          <Link
            href={actor.src}
            key={i}
            className="flex items-center w-5/6 h-28 mx-auto mt-10"
          >
            <div className="w-1/4 h-full rounded-2xl overflow-hidden">
              <Image src={actor.image} alt="" className="w-full h-full" />
            </div>
            <div className="ml-4">
              <div className="text-white text-3xl font-semibold">
                {actor.name}
              </div>
              <div className="textColor1 text-xl font-medium mt-2">
                {actor.country}
              </div>
              <div className="text-white text-xl font-medium">{actor.born}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilmCastPage;
