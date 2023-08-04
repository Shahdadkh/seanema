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
  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <TitlePage title="Detail genre" />
      <div className="flex justify-center items-center relative top-14 sm:top-12 w-28 h-28 rounded-full mx-auto backgroundColor3">
        <Image src={action} alt="" width={40} height={40} />
      </div>
      <Image src={backImage} alt="" className="w-full h-fit" />
      <div className="w-full h-fit backgroundColor3 overflow-hidden">
        <div className="text-white text-center text-3xl mt-5 font-medium">
          Action
        </div>
        <div className="textColor1 text-center text-2xl w-5/6 font-normal my-8 mx-auto">
          Action film is a film genre in which the protagonist or protagonists
          are thrust into a series of events
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-2 grid-rows-1 gap-4 w-5/6 h-fit mt-4 mx-auto">
            <div className="border row-span-4">1</div>
            <div className="border row-span-1 h-48">2</div>
            <div className="border row-span-4">3</div>
            <div className="border row-span-1 h-48">4</div>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4 w-5/6 h-fit mt-4 mx-auto">
            <div className="border row-span-4">1</div>
            <div className="border row-span-1 h-48">2</div>
            <div className="border row-span-4">3</div>
            <div className="border row-span-1 h-48">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreDetailPage;
