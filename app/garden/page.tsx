import { GardenPosts } from "app/components/posts";
import localFont from "next/font/local";
import { cn } from "app/utils/cn";
const CloisterBlack = localFont({ src: "../public/CloisterBlack.ttf" });

export const metadata = {
  title: "Garden",
  description: "My plot of notes and things.",
};

export default function Page() {
  return (
    <section className="px-16">
      <h1 className={cn(CloisterBlack.className, "text-4xl my-4")}>Garden</h1>
      <GardenPosts />
    </section>
  );
}
