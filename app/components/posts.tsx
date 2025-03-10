import Link from "next/link";
import { formatDate, getBlogPosts } from "app/garden/utils";

export function GardenPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/garden/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 md:items-center md:justify-between">
              <p className="text-neutral-900 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600  w-[150px] tabular-nums text-right">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
