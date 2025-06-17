import Link from "next/link";
import { formatDate, getBlogPosts } from "app/garden/utils";

const metadata = {
  title: "Garden",
  description: "My plot of notes and things.",
};

export function GardenPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) =>
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ? -1
            : 1
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:bg-blog-background-secondary/10 transition-all p-4 border-b border-terniary md:border-none"
            href={`/garden/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row items-center">
              <p className="min-w-fit">{post.metadata.title}</p>
              <div className="mx-4 h-[1px] w-full border-b border-terniary hidden md:block"></div>
              <p className="text-black min-w-[120px] text-right">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
