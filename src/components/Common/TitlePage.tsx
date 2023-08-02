import Link from "next/link";
import { ArrowLeft2 } from "iconsax-react";

const TitlePage = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-around items-center my-8">
      <Link href="/">
        <ArrowLeft2 size="22" color="#fff" variant="Outline" />
      </Link>
      <div className="text-white text-4xl font-semibold">{title}</div>
      <div className="w-4 h-4 bg-transparent"></div>
    </div>
  );
};

export default TitlePage;
