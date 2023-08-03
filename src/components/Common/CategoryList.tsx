import Link from "next/link";

const CategoryList = ({ src }: { src: any }) => {
  return (
    <div className="flex justify-around w-full h-44 px-10 sm:px-6 mt-8 my-14">
      {src.map((item: any, index: number) => (
        <Link key={index} href={item.src}>
          <div className="relative border borderColor2 w-36 h-full rounded-3xl backgroundColor3">
            <div className="border borderColor3 w-20 h-20 backgroundColor8 rounded-full mx-auto mt-6">
              <item.icon
                size="26"
                variant="Bold"
                className="mx-auto mt-4 textColor1"
              />
            </div>
            <div className="text-white font-medium text-2xl text-center mt-3">
              {item.name}
            </div>
            {item.tag !== "" ? (
              <div className="absolute -top-4 -right-3 border-2 borderColor4 rounded-xl text-white backgroundColor2 text-base flex justify-center items-center px-4 py-0.5">
                {item.tag}
              </div>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
