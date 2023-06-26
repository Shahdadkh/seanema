import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const StartPage = () => {
  return (
    <div>
      <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundStart">
        <div className="mx-auto mt-[30vh] sm:w-52 w-60">
          <Image
            className="mx-auto"
            src={Logo}
            alt="SeaNema-Logo"
            width={180}
            height={37}
          />
          <span className="text-white/90 font-semibold text-center block">
            Watch and find movies that bring your mood back
          </span>
        </div>
        <div className="relative mt-[48vh] sm:mt-[39vh]">
          <div className="mx-auto bg-[#AAAAAA] sm:w-[10vw] w-[35vw] h-1.5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
