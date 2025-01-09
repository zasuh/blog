import { getNowContent } from "app/blog/utils";
import { CustomMDX } from "app/components/mdx";
import { cn } from "app/utils/cn";
import { Noto_Sans } from "next/font/google";

export const metadata = {
  title: "Now",
  description: "What I'm currently doing.",
};

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  let content = getNowContent();

  return content.map((c) => ({
    slug: c.slug,
  }));
}

export default function Page({ params }) {
  let post = getNowContent();

  return (
    <section className="bg-white border-2 border-black rounded-md shadow-sm shadow-black p-4">
      <h1
        className={cn(
          "mb-8 text-4xl font-semibold tracking-tighter",
          noto.className
        )}
      >
        What I'm Doing Right Now
      </h1>
      <article className="mb-4 prose">
        <CustomMDX source={post[0].content} />
      </article>
    </section>
  );
}
