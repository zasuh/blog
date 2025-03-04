import { GardenPosts } from "app/components/posts";
import GardenIcon from "../icons/garden.svg";
import Image from "next/image";

export const metadata = {
  title: "Garden",
  description: "My plot of notes and things.",
};

export default function Page() {
  return (
    <section>
      <div className="flex items-center gap-8 my-5">
        <Image src={GardenIcon} width={80} height={80} alt="Garden" />
        <GardenPosts />
      </div>
    </section>
  );
}
