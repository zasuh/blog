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
            <div className="w-full flex space-x-0 items-center justify-between">
              <p>{post.metadata.title}</p>
              <p className="text-white w-[150px] text-right">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
