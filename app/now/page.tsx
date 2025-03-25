import { getNowContent } from "app/garden/utils";
import { CustomMDX } from "app/components/mdx";
import PageWrapper from "app/components/page-wrapper";

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
    <PageWrapper title="Now">
      <article className="flex flex-col prose [&>:first-child]:!mt-0 [&>:first-child]:!mb-0">
        <CustomMDX source={post[0].content} />
      </article>
    </PageWrapper>
  );
}
