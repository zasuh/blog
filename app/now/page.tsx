import { getNowContent } from "app/garden/utils";
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
    <section>
      <article className="mb-4 prose">
        <CustomMDX source={post[0].content} />
      </article>
    </section>
  );
}
