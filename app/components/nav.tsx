import { cn } from "app/utils/cn";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const navItems = {
  "/about": {
    name: "about",
  },
  "/garden": {
    name: "garden",
  },
  "/now": {
    name: "now",
  },
  "/blogroll": {
    name: "blogroll",
  },
  // "/links": {
  //   name: "links",
  // },
};

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border-text-terniary border-y w-full">
      <Link href="/" className={cn("text-3xl md:text-2xl")}>
        znsh
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
                    "transition-all flex align-middle relative py-1 px-2 text-lg hover:underline"
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
