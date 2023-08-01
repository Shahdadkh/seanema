import Link from "next/link";
import { useRouter } from "next/router";

import { Home2, Discover, Save2, User } from "iconsax-react";

const Submenu = () => {
  const router = useRouter();
  const { pathname }: any = router;

  const subMenu = [
    { icon: Home2, href: "/Home" },
    { icon: Discover, href: "/" },
    { icon: Save2, href: "/" },
    { icon: User, href: "/" },
  ];
  return (
    <div className="fixed bottom-0 w-full sm:w-3/12 h-40 backgroundColor1">
      <div className="flex justify-between items-center px-5 mx-auto w-5/6 h-5/6">
        {subMenu.map((item, index) => (
          <Link key={index} href={item.href}>
            <item.icon
              size="26"
              variant={`${pathname.includes(item.href) ? "Bold" : "Outline"}`}
              className={`${
                pathname.includes(item.href)
                  ? "textColor4 backgroundColor6 shadow1"
                  : "textColor3"
              }`}
            />
          </Link>
        ))}
      </div>
      <div className="w-full h-1/6">
        <div className="mx-auto backgroundColor4 w-3/6 h-2 rounded-full mt-1"></div>
      </div>
    </div>
  );
};

export default Submenu;
