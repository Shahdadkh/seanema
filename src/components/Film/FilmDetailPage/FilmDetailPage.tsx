import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocumentDownload, ArrowLeft2, Star1, Archive } from "iconsax-react";
import DownloadModal from "@/components/Common/DownloadModal";

import pic1 from "@/assets/images/Avatar.png";
import pic2 from "@/assets/images/avatar/brie-larson.png";
import pic3 from "@/assets/images/avatar/djimon.png";
import pic4 from "@/assets/images/avatar/lee-pace.png";
import pic5 from "@/assets/images/avatar/samuel.png";
import pic6 from "@/assets/images/avatar/bel-mendelsohn.png";

const FilmDetail = () => {
  const [showModal, setShowModal] = useState<any>(false);
  const router = useRouter();
  const { id } = router.query;

  const castList = [
    { img: pic2 },
    { img: pic3 },
    { img: pic4 },
    { img: pic5 },
    { img: pic6 },
    { img: pic4 },
    { img: pic5 },
    { img: pic6 },
    { img: pic4 },
    { img: pic5 },
    { img: pic6 },
  ];

  const charcter =
    "Set ten years after the first film, Jake Sally is living with his new family on the planet Pandora, and when a familiar threat returns.";

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div
        className="relative w-full h-3/5 sm:h-4/6 overflow-hidden"
        style={{
          background: `linear-gradient(0deg, #191A32 0%, rgba(25, 26, 50, 0) 100%), url(${pic1.src}) no-repeat`,
        }}
      >
        <div className="flex justify-between items-center mx-10 mt-10">
          <Link href="/">
            <ArrowLeft2 size="26" color="#fff" variant="Outline" />
          </Link>

          <DocumentDownload
            onClick={() => setShowModal(true)}
            size="26"
            color="#fff"
            variant="Outline"
            className="cursor-pointer"
          />
        </div>
        <div className="absolute bottom-0 sm:bottom-2 right-32 sm:right-20 mx">
          <div className="text-white text-4xl font-bold text-center">
            Avatar
          </div>
          <div className="textColor1 text-2xl font-medium mt-4 text-center">
            2022 | Action, Fantasy | 3h 12min
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="text-white text-2xl font-semibold mr-2">4.5</div>
            <div className="flex items-center">
              <Star1
                size="20"
                color="#FFBE18"
                variant="Bold"
                className="mx-1"
              />
              <Star1
                size="20"
                color="#FFBE18"
                variant="Bold"
                className="mx-1"
              />
              <Star1
                size="20"
                color="#FFBE18"
                variant="Bold"
                className="mx-1"
              />
              <Star1
                size="20"
                color="#FFBE18"
                variant="Bold"
                className="mx-1"
              />
              <Star1
                size="20"
                color="#FFBE18"
                variant="Outline"
                className="mx-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="textColor1 w-5/6 text-justify mx-auto mt-12 sm:mt-10">
        {charcter.length > 134 ? charcter.slice(0, 134) + "..." : charcter}
      </div>
      <div className="text-white text-3xl font-semibold mx-12 sm:mt-10 mt-6 mb-4">
        Cast
      </div>
      <div className="flex -space-x-4 mx-10">
        {castList.slice(0, 5).map((cast, i) =>
          i === 4 ? (
            <Link key={i} href={`${id}/Cast`} className="relative w-16 h-16">
              <Image
                className="w-16 h-16 rounded-full dark:border-gray-800"
                src={pic6}
                alt=""
              />
              {castList.length > 5 ? (
                <div className="absolute top-0 flex items-center justify-center font-semibold w-16 h-16 text-2xl text-white bg-black/50 rounded-full">
                  {castList.length - i - 1}+
                </div>
              ) : null}
            </Link>
          ) : (
            <Image
              key={i}
              className="w-16 h-16 rounded-full dark:border-gray-800"
              src={cast.img}
              alt=""
            />
          )
        )}
      </div>
      <div className="flex justify-between w-5/6 h-24 mx-auto my-12">
        <div className="flex justify-center items-center backgroundColor9 w-24 h-full rounded-[20px] cursor-pointer">
          <Archive size="25" color="#fff" variant="Outline" />
        </div>
        <Link
          href={`${id}/Preview`}
          className="flex justify-center items-center backgroundColor2 w-3/4 h-full rounded-[20px] text-white text-2xl font-semibold cursor-pointer"
        >
          Watch Now
        </Link>
      </div>
      <DownloadModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default FilmDetail;
