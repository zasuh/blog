import localFont from "next/font/local";
import { cn } from "./utils/cn";
import Link from "next/link";
const CloisterBlack = localFont({ src: "./public/CloisterBlack.ttf" });

export default function Page() {
  return (
    <section>
      <article className="grid grid-cols-1 lg:grid-cols-2">
        <Link href="/about" className="border-r border-b p-4">
          <h1 className={cn(CloisterBlack.className, "text-4xl")}>About</h1>
          <p>Who is writing for this site, who made it etc.</p>
        </Link>
        <Link href="/garden" className="border-b p-4">
          <h2 className={cn(CloisterBlack.className, "text-4xl")}>Garden</h2>
          <p>Plots of notes and thoughts on various topics.</p>
        </Link>
        <Link href="/now" className="border-b border-r p-4">
          <h2 className={cn(CloisterBlack.className, "text-4xl")}>Now</h2>
          <p>What I&apos;m doing currently.</p>
        </Link>
        <Link href="/blogroll" className="border-b p-4">
          <h2 className={cn(CloisterBlack.className, "text-4xl")}>Blogroll</h2>
          <p>A collection of blogs I read.</p>
        </Link>
      </article>
    </section>
  );
}
