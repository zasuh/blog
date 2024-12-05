import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Žane Suhadolnik
      </h1>
      <p className="mb-4">
        {`I'm a web developer with 5+ YOE from Ljubljana, Slovenia with a focus on the frontend. I love simplicity in both design and code while maintaining a high level of quality.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
