import { cn } from "app/utils/cn";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";

import localFont from "next/font/local";
const CloisterBlack = localFont({ src: "../CloisterBlack.ttf" });

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  // "/garden": {
  //   name: "Garden",
  // },
  "/now": {
    name: "Now",
  },
};

export function Navbar() {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={cn(
          "mb-8 text-6xl font-semibold tracking-tighter text-white",
          CloisterBlack.className
        )}
      >
        Žane's Digital Garden
      </h1>
      <aside className="mb-8 tracking-tight">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all flex align-middle relative py-1 px-2 m-1 hover:underline"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </div>
  );
}
