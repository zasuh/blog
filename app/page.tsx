import localFont from "next/font/local";
import { cn } from "./utils/cn";
import Link from "next/link";
import Image from "next/image";
import Wizard from "./public/wizard.svg";
const CloisterBlack = localFont({ src: "./public/CloisterBlack.ttf" });

export default function Page() {
  return (
    <section>
      <div className="flex justify-center">
        <Image src={Wizard} alt="logo" width={700} height={700} />
      </div>
      <article className="grid grid-cols-1 lg:grid-cols-2 border-t border-b">
        <Link href="/about" className="lg:border-r border-b p-4">
          <h1 className={cn(CloisterBlack.className, "text-4xl")}>About</h1>
          <p>Who is writing for this site, who made it etc.</p>
        </Link>
        <Link href="/garden" className="border-b p-4">
          <h2 className={cn(CloisterBlack.className, "text-4xl")}>Garden</h2>
          <p>Plots of notes and thoughts on various topics.</p>
        </Link>
        <Link href="/now" className="border-b lg:border-b-0 lg:border-r p-4">
          <h2 className={cn(CloisterBlack.className, "text-4xl")}>Now</h2>
          <p>What I&apos;m doing currently.</p>
        </Link>
        <Link href="/blogroll" className=" p-4">
          <h2 className={cn(CloisterBlack.className, "text-4xl")}>Blogroll</h2>
          <p>A collection of blogs I read.</p>
        </Link>
      </article>
    </section>
  );
}
