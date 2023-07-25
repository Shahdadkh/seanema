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
    <div className="flex justify-around items-center px-5 w-full sm:w-3/12 h-40 bg-[#191A32] fixed bottom-0">
      {subMenu.map((item, index) => (
        <Link key={index} href={item.href}>
          <item.icon
            size="26"
            variant={`${pathname.includes(item.href) ? "Bold" : "Outline"}`}
            className={`${
              pathname.includes(item.href)
                ? "text-[#3662FF] bg-[#3662FF]/10 shadow-[0_0_34px_6px_rgba(54,98,255,0.25)]"
                : "text-[#696969]"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Submenu;
