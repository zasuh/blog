import { CustomMDX } from "app/components/mdx";
import { cn } from "app/utils/cn";
import { Noto_Sans } from "next/font/google";

export const metadata = {
  title: "About Žane",
  description: "About Žane",
};

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <section className="bg-white border-2 border-black rounded-md shadow-sm shadow-black p-4">
      <h1
        className={cn(
          "mb-8 text-4xl font-semibold tracking-tighter",
          noto.className
        )}
      >
        About Žane
      </h1>
      <article className="mb-4 prose">
        <p>
          I started learning web development in 2014 when I was studying
          economics and saw that I really wasn't interested in it.
        </p>
        <p>
          Over the next 4 years I was self learning about everything
          HTML/CSS/JAVASCRIPT while working in IT and going to school in the
          evenings.
        </p>
        <p>
          In late 2018 I got my first developer job and have stayed in the
          industry since, working at multiple companies on different sectors and
          projects. I'd say I've touched more projects in my 5+ year long career
          than I expected & I appreciate all of them, as all of them have taught
          me something. From startups, to legacy systems, to long running
          projects this has shaped my knowledge and skills ever evolving.
        </p>
        <p>
          Mostly focusing on Front End development in React, I've recently been
          learning and moving to more full stack projects which I call being a T
          shaped developer, knowing a lot about something and something about a
          lot. If you want to get coffee in Ljubljana send me an email.
        </p>
      </article>
    </section>
  );
}
