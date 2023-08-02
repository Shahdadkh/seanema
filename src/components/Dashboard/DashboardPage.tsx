import DashboardImageUploader from "./DashboardImageUploader";
import { useState } from "react";

const DashboardPage = () => {
  const [getImage, setGetImage] = useState<any>([]);

  return (
    <div className="relative w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div>
        <DashboardImageUploader setGetImage={setGetImage} />
        <div className="text-white text-4xl font-semibold text-center mt-5">
          Emma Zand
        </div>
        <div className="textColor1 text-xl font-semibold text-center my-5">
          emmazand@gmail.com
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
