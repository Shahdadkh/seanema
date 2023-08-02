import Image from "next/image";
import Link from "next/link";
import { Star1 } from "iconsax-react";

const FilmList = ({ src }: { src: any }) => {
  return (
    <div>
      {src.length !== 0 &&
        src.map((film: any, i: number) => (
          <div key={i} className="flex w-5/6 h-60 mx-auto my-8">
            <div className="relative w-5/12 h-full rounded-2xl overflow-hidden">
              <Image
                src={film.image}
                alt={film.alt}
                className="w-full h-fit scale-125"
              />
              <div className="absolute top-0 gradient1 w-full h-full"></div>
            </div>
            <div className="mx-auto mt-4">
              <div className="text-white text-2xl font-bold mb-2">
                {film.name}
              </div>
              <div className="textColor1 text-xl font-medium mb-2">
                {`${film.year} | ${film.genre}`}
              </div>
              <div className="flex items-center">
                <Star1 size="18" color="#FFBE18" variant="Bold" />
                <div className="text-white text-xl font-semibold ml-2">
                  {film.star}
                </div>
              </div>
              <Link
                href={film.href}
                className="text-white backgroundColor2 hover:backgroundColor7 focus:ring-0 block focus:outline-none rounded-2xl text-lg font-semibold px-5 py-4 mt-8 text-center w-full mx-auto"
              >
                Watch Now
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FilmList;
