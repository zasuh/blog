import Image from "next/image";
import Flourish from "../public/Flourish-1-flipped.png";
import { cn } from "app/utils/cn";
import localFont from "next/font/local";
const CloisterBlack = localFont({ src: "../public/CloisterBlack.ttf" });

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
      <div className="flex items-center justify-between w-full">
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-avocado-400 md:flex-row md:space-x-4 md:space-y-0">
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
        </ul>
        <p className={cn("mt-8 text-avocado-400", CloisterBlack.className)}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
