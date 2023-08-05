import Image from "next/image";
import Link from "next/link";
import TitlePage from "@/components/Common/TitlePage";
import backImage from "@/assets/images/Subtract.png";

import action from "@/assets/images/icon/action.png";
import pic1 from "@/assets/images/wonder-woman.png";
import pic2 from "@/assets/images/alita.png";
import pic3 from "@/assets/images/mulan.png";
import pic4 from "@/assets/images/iam-legend.png";

const GenreDetailPage = () => {
  const genreDetail = [
    {
      name: "Wonder Woman",
      genre: "Comedy, Family",
      image: pic1,
      href: "",
    },
    {
      name: "Alita",
      genre: "Cyberpunk, Fantasy",
      image: pic2,
      href: "",
    },
    {
      name: "Mulan",
      genre: "Action, Drama",
      image: pic3,
      href: "",
    },
    {
      name: "I am Legend",
      genre: "Drama, Fantasy",
      image: pic4,
      href: "",
    },
  ];
  return (
    <div className="relative w-full h-full sm:w-3/12 mx-auto border backgroundColor1">
      <TitlePage title="Detail genre" />
      <div className="flex justify-center items-center relative top-14 sm:top-12 w-28 h-28 rounded-full mx-auto backgroundColor3">
        <Image src={action} alt="" width={40} height={40} />
      </div>
      <Image src={backImage} alt="" className="w-full h-fit" />
      <div className="w-full h-full backgroundColor3 border borderColor2">
        <div className="text-white text-center text-3xl mt-5 font-medium">
          Action
        </div>
        <div className="textColor1 text-center text-2xl w-5/6 font-normal my-8 mx-auto">
          Action film is a film genre in which the protagonist or protagonists
          are thrust into a series of events
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-2 gap-4 w-5/6 h-fit mt-4 mx-auto">
            {genreDetail.map((genre, i) => (
              <Link href={genre.href} key={i} className="h-96">
                <div className="w-full h-[78%] mx-auto rounded-2xl overflow-hidden">
                  <Image
                    src={genre.image}
                    alt={(i + 1).toString()}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-white text-center text-2xl mt-2 font-semibold">
                  {genre.name}
                </div>
                <div className="textColor1 text-center text-xl font-medium">
                  {genre.genre}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreDetailPage;
