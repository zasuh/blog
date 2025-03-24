import { cn } from "app/utils/cn";
import { Be_Vietnam_Pro, Roboto_Mono } from "next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const RobotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "About Žane",
  description: "About Žane",
};

export default function Page() {
  return (
    <section className="p-12">
      <h1
        className={cn(
          BeVietnamPro.className,
          "text-6xl mb-8 text-center md:text-left"
        )}
      >
        About
      </h1>
      <article
        className={cn(RobotoMono.className, "flex flex-col items-center")}
      >
        <div>
          <p>
            I started learning web development in 2014 when I was studying
            economics and saw that I really wasn't interested in it.
          </p>
          <hr className="my-4" />
          <p>
            Over the next 4 years I was self learning about everything
            HTML/CSS/JAVASCRIPT while working in IT and going to school in the
            evenings.
          </p>
          <hr className="my-4" />
          <p>
            In late 2018 I got my first developer job and have stayed in the
            industry since, working at multiple companies on different sectors
            and projects. I'd say I've touched more projects in my 5+ year long
            career than I expected & I appreciate all of them, as all of them
            have taught me something. From startups, to legacy systems, to long
            running projects this has shaped my knowledge and skills ever
            evolving.
          </p>
          <hr className="my-4" />
          <p>
            Mostly focusing on Front End development in React, I've recently
            been learning and moving to more full stack projects which I call
            being a T shaped developer, knowing a lot about something and
            something about a lot. If you want to get coffee in Ljubljana send
            me an email.
          </p>
        </div>
      </article>
    </section>
  );
}
