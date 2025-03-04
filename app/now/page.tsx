import { getNowContent } from "app/garden/utils";
import { CustomMDX } from "app/components/mdx";
import NowIcon from "../icons/now.svg";
import Image from "next/image";

export const metadata = {
  title: "Now",
  description: "What I'm currently doing.",
};

export async function generateStaticParams() {
  let content = getNowContent();

  return content.map((c) => ({
    slug: c.slug,
  }));
}

export default function Page({ params }) {
  let post = getNowContent();

  return (
    <section className="flex items-start gap-8 my-5">
      <Image src={NowIcon} width={80} height={80} alt="Now" />
      <article className="flex flex-col prose [&>:first-child]:!mt-0">
        <CustomMDX source={post[0].content} />
      </article>
    </section>
  );
}
