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
            className="flex flex-col space-y-1 mb-4 hover:rounded-md hover:px-2 hover:bg-white/10 transition-all"
            href={`/garden/${post.slug}`}
          >
            <div className="w-full flex items-center">
              <p className="min-w-fit">{post.metadata.title}</p>
              <div className="mx-4 h-[1px] w-full border-b border-text-terniary"></div>
              <p className="text-white min-w-[120px] text-right">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
