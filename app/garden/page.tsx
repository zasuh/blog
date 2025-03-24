import { GardenPosts } from "app/components/posts";
import { cn } from "app/utils/cn";

export const metadata = {
  title: "Garden",
  description: "My plot of notes and things.",
};

export default function Page() {
  return (
    <section className="p-12">
      <h1 className={cn("text-6xl mb-8 text-center md:text-left")}>Garden</h1>
      <GardenPosts />
    </section>
  );
}
