import Image from "next/image";
import Flourish from "../public/flourish.png";
import { cn } from "app/utils/cn";
import localFont from "next/font/local";
const CloisterBlack = localFont({ src: "../public/CloisterBlack.ttf" });

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full mt-8 p-4">
      <Image
        src={Flourish}
        width={200}
        height={200}
        alt="Flourished"
        className="invert"
      />
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <ul className="text-xl md:text-md mt-8 flex flex-col space-x-0 space-y-2 text-avocado-400 md:flex-row md:space-x-4 md:space-y-0">
          <li>
            <a
              className="flex items-center transition-all hover:underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/zasuhadolnik/"
            >
              <p className={cn("ml-2 h-7", CloisterBlack.className)}>
                linkedin
              </p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/zasuh"
            >
              <p className={cn("ml-2 h-7", CloisterBlack.className)}>github</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://mastodon.social/@znsh"
            >
              <p className={cn("ml-2 h-7", CloisterBlack.className)}>
                mastodon
              </p>
            </a>
          </li>
        </ul>
        <p className={cn("mt-8 text-avocado-400", CloisterBlack.className)}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
