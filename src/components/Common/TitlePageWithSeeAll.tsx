import Link from "next/link";

const TitlePageWithSeeAll = ({ title, src }: { title: any; src: any }) => {
  return (
    <div className="flex justify-between px-14 sm:px-7">
      <div className="text-white font-medium text-3xl">{title}</div>
      <Link href={src} className="text-gray-400">
        See all
      </Link>
    </div>
  );
};

export default TitlePageWithSeeAll;
