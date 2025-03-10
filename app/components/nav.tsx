import { cn } from "app/utils/cn";
import Link from "next/link";

import localFont from "next/font/local";
const CloisterBlack = localFont({ src: "../public/CloisterBlack.ttf" });

const navItems = {
  "/about": {
    name: "About",
  },
  "/garden": {
    name: "Garden",
  },
  "/now": {
    name: "Now",
  },
  "/": {
    name: "Blogroll",
  },
};

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border-y border-b w-full">
      <Link
        href="/"
        className={cn(
          CloisterBlack.className,
          "text-3xl md:text-2xl text-black"
        )}
      >
        Žane's Digital Garden
      </Link>
      <aside className="tracking-tight">
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
                  className={cn(
                    "transition-all flex align-middle relative py-1 px-2 text-lg hover:underline",
                    CloisterBlack.className
                  )}
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
