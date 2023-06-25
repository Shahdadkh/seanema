import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function StartPage() {
  return (
    <div>
      <div className="w-full sm:w-3/12 mx-auto overflow-x-hidden">
        <div className="fixed border border-tansparent w-full h-full sm:w-3/12 mx-auto backgroundStart">
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
          <div className="relative mt-[46vh] sm:mt-[39vh]  ">
            <div className="mx-auto bg-[#AAAAAA] sm:w-[10vw] w-[35vw] h-1.5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
