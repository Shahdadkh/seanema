import Link from "next/link";
import Image from "next/image";

const ShowDataTwoGrid = ({ src }: { src: any }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-5/6 h-fit mt-4 mx-auto">
      {src.map((genre: any, i: number) => (
        <Link href={genre.href} key={i} className="h-96">
          <div className="w-full h-[75%] mx-auto rounded-2xl overflow-hidden">
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
            {genre.detail}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShowDataTwoGrid;
