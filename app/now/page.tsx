import { getNowContent } from "app/garden/utils";
import { CustomMDX } from "app/components/mdx";
import localFont from "next/font/local";
import { cn } from "app/utils/cn";
const CloisterBlack = localFont({ src: "../public/CloisterBlack.ttf" });

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
    <section className="px-16">
      <h1 className={cn(CloisterBlack.className, "text-4xl my-4")}>Now</h1>
      <article className="flex flex-col prose [&>:first-child]:!mt-0 [&>:first-child]:!mb-0">
        <CustomMDX source={post[0].content} />
      </article>
    </section>
  );
}
