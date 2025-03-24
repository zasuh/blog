import { getNowContent } from "app/garden/utils";
import { CustomMDX } from "app/components/mdx";

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

export default function Page() {
  let post = getNowContent();

  return (
    <section className="p-12">
      <h1 className="text-6xl mb-8 text-center md:text-left">Now</h1>
      <article className="flex flex-col prose [&>:first-child]:!mt-0 [&>:first-child]:!mb-0">
        <CustomMDX source={post[0].content} />
      </article>
    </section>
  );
}
