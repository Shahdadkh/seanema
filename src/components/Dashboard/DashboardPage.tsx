import Link from "next/link";
import DashboardImageUploader from "./DashboardImageUploader";
import { useState } from "react";
import CategoryList from "../Common/CategoryList";
import Submenu from "../Common/SubMenu";
import {
  Category,
  Archive,
  DocumentDownload,
  Profile,
  Setting2,
  Unlock,
  InfoCircle,
  ArrowRight2,
} from "iconsax-react";

const DashboardPage = () => {
  const [getImage, setGetImage] = useState<any>([]);
  const [toggle, setToggle] = useState<Boolean>(false);

  const categoryLists = [
    { name: "Saved", icon: Archive, tag: "", src: "/" },
    { name: "History", icon: Category, tag: "", src: "/" },
    { name: "Download", icon: DocumentDownload, tag: "Pro", src: "/" },
  ];

  const itemSettings = [
    {
      name: "Profile",
      detail: "Name, email address",
      icon: Profile,
      src: "",
    },
    {
      name: "Setting",
      detail: "Theme, font notification",
      icon: Setting2,
      src: "",
    },
    {
      name: "Kids mode",
      detail: "Play with your Kids",
      icon: Unlock,
      toggle: "true",
      handle: () => setToggle(!toggle),
      src: "undefined",
    },
    {
      name: "Help and Others",
      detail: "Find solutions for your issues",
      icon: InfoCircle,
      src: "",
    },
  ];

  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div>
        <DashboardImageUploader setGetImage={setGetImage} />
        <div className="text-white text-4xl font-semibold text-center mt-5">
          Emma Zand
        </div>
        <div className="textColor1 text-2xl font-medium text-center my-5">
          emmazand@gmail.com
        </div>
      </div>
      <div className="my-12">
        <CategoryList src={categoryLists} />
      </div>
      <div className="mb-44">
        {itemSettings.map((item, i) => (
          <div key={i}>
            {item.toggle ? (
              <div className="flex items-center justify-between w-5/6 h-20 mx-auto my-8">
                <div className="flex items-center w-10/12 h-full cursor-default">
                  <div className="flex justify-center items-center w-20 h-full backgroundColor8 rounded-3xl">
                    <item.icon size="28" color="#fff" />
                  </div>
                  <div className="ml-6">
                    <div className="text-white font-medium text-2xl">
                      {item.name}
                    </div>
                    <div className="textColor1 text-xl mt-1">{item.detail}</div>
                  </div>
                </div>
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={item.handle}
                  />
                  <div className="w-20 h-11 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600  peer-checked:bg-[#475aea]"></div>
                </label>
              </div>
            ) : (
              <Link
                href={item.src}
                key={i}
                className="flex items-center justify-between w-5/6 h-20 mx-auto my-8"
              >
                <div className="flex items-center w-10/12 h-full">
                  <div className="flex justify-center items-center w-20 h-full backgroundColor8 rounded-3xl">
                    <item.icon size="28" color="#fff" />
                  </div>
                  <div className="ml-6">
                    <div className="text-white font-medium text-2xl">
                      {item.name}
                    </div>
                    <div className="textColor1 text-xl mt-1">{item.detail}</div>
                  </div>
                </div>
                <ArrowRight2 size="20" className="textColor1" />
              </Link>
            )}
          </div>
        ))}
      </div>
      <Submenu />
    </div>
  );
};

export default DashboardPage;
