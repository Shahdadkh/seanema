import { useState } from "react";
import TitlePage from "@/components/Common/TitlePage";
import MessageModal from "@/components/Common/MessageModal";
import { TickSquare } from "iconsax-react";

const VipPage = () => {
  const [showModal, setShowModal] = useState<any>(false);
  const [tabControl, setTabControl] = useState<any>("Monthly");
  const tabs = ["Monthly", "Yearly", "Family"];

  const details = [
    {
      title: "Pro",
      detail:
        "Upgrade your seanema account for unlimited movie save and get pushnotification",
      price: "15",
      tick: ["Unlimited save", "Download", "Adblock"],
    },
    {
      title: "Pro Business",
      detail:
        "Upgrade your mononton account for unlimited movie save and get push notification",
      price: "30",
      tick: ["Unlimited save", "Download", "Adblock"],
    },
  ];

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="mt-10">
        <TitlePage title="Go Pro" />
      </div>
      <div className="mt-10">
        <ul className="flex justify-between items-center px-2 mx-auto text-lg font-semibold w-5/6 rounded-full h-16 text-center backgroundColor3 text-white">
          {tabs.map((tb, i) => (
            <li key={i}>
              <div
                onClick={() => setTabControl(tb)}
                className={`${
                  tabControl.includes(tb) ? "backgroundColor2" : null
                } px-10 py-3 rounded-full cursor-pointer`}
              >
                {tb}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {details.map((item, i) => (
        <div
          key={i}
          className="my-10 mx-auto w-5/6 h-fit backgroundColor3 rounded-2xl overflow-hidden"
        >
          <div className="text-center text-white text-3xl font-semibold mt-12">
            {item.title}
          </div>
          <div className="mt-6 text-center textColor1 text-2xl font-medium mx-8">
            {item.detail}
          </div>
          <div className="w-fit mx-auto mt-8">
            <span className="text-white text-[42px] font-bold">
              ${item.price}
            </span>
            <span className="textColor1">/month</span>
          </div>
          <div className="mx-10 mt-6 mb-8">
            {item.tick.map((tk, i) => (
              <div key={i} className="flex items-center mb-3">
                <TickSquare size="23" color="#fff" variant="Bold" />
                <div className="text-white text-2xl font-light ml-2">{tk}</div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-white backgroundColor2 block mx-auto mt-8 mb-16 focus:ring-0 focus:ring-transparent font-semibold rounded-3xl text-2xl px-16 py-4 focus:outline-none"
          >
            Got it
          </button>
        </div>
      ))}
      <MessageModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default VipPage;
