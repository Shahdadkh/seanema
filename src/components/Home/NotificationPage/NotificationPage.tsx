import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft2,
  Video,
  ArrowRight2,
  TickSquare,
  TicketStar,
  User,
} from "iconsax-react";

const NotificationPage = () => {
  const [selectMenu, setSelectMenu] = useState<any>("All");

  const MenuList = ["All", "Information", "Transaction"];

  const notificationList = [
    {
      subject: "Today",
      detail: [
        {
          id: 0,
          icon: Video,
          subject: "New Movie from Disney",
          time: "26 mins",
          href: "/",
        },
        {
          id: 1,
          icon: TickSquare,
          subject: "Payment is  successfull",
          time: "30 mins",
          href: "/",
        },
        {
          id: 2,
          icon: TicketStar,
          subject: "Disc from Disney",
          time: "46 mins",
          href: "/",
        },
      ],
    },
    {
      subject: "This Week",
      detail: [
        {
          id: 0,
          icon: User,
          subject: "Compleye your profile",
          time: "3d ago",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="flex justify-around items-center my-8">
        <Link href="/">
          <ArrowLeft2 size="22" color="#fff" variant="Outline" />
        </Link>
        <div className="text-white text-4xl font-semibold">Notification</div>
        <div className="w-4 h-4 bg-transparent"></div>
      </div>
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
      {notificationList.map((item, index) => (
        <div key={index} className="my-14">
          <div className="text-gray-200 text-3xl font-medium mx-14 my-6">
            {item.subject}
          </div>
          {item.detail.map((child) => (
            <Link href="/">
              <div
                key={child.id}
                className="flex items-center justify-between w-5-6 h-24 mx-14 my-4"
              >
                <div className="flex items-center">
                  <div className="flex justify-center items-center w-20 h-20 backgroundColor3 rounded-full">
                    <child.icon
                      size="24"
                      className="textColor1"
                      variant="Bold"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-white text-2xl font-bold">
                      {child.subject}
                    </div>
                    <div className="textColor1 text-xl font-semibold mt-2">
                      {child.time}
                    </div>
                  </div>
                </div>
                <ArrowRight2
                  size="20"
                  variant="Outline"
                  className="textColor1"
                />
              </div>
            </Link>
          ))}
        </div>
      ))}
      <div className="absolute right-60 sm:right-48 bottom-4 backgroundColor4 w-2/6 h-2 rounded-full"></div>
    </div>
  );
};

export default NotificationPage;
