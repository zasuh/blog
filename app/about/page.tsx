import PageWrapper from "app/components/page-wrapper";
import Link from "next/link";

export const metadata = {
  title: "About Žane",
  description: "About Žane",
};

export default function Page() {
  return (
    <PageWrapper title="About">
      <article className="flex flex-col items-center">
        <div className="mb-8">
          <p>
            I started learning web development in 2014 when I was studying
            economics and saw that I really wasn't interested in it.
          </p>
          <hr className="my-4 border-text-terniary" />
          <p>
            Over the next 4 years I was self learning about everything
            HTML/CSS/JAVASCRIPT while working in IT and going to school in the
            evenings.
          </p>
          <hr className="my-4 border-text-terniary" />
          <p>
            In late 2018 I got my first developer job and have stayed in the
            industry since, working at multiple companies on different sectors
            and projects. I'd say I've touched more projects in my 5+ year long
            career than I expected & I appreciate all of them, as all of them
            have taught me something. From startups, to legacy systems, to long
            running projects this has shaped my knowledge and skills ever
            evolving.
          </p>
          <hr className="my-4 border-text-terniary" />
          <p>
            Mostly focusing on Front End development in React, I've recently
            been learning and moving to more full stack projects which I call
            being a T shaped developer, knowing a lot about something and
            something about a lot. If you want to get coffee in Ljubljana send
            me an email.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <a href="mailto:suhadolnik@proton.me" className="hover:underline">
            suhadolnik@proton.me
          </a>

          <div className="flex items-center gap-8">
            <Link href="/uses" className="underline">
              Uses
            </Link>
            <Link href="/resume" className="underline">
              Resume
            </Link>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
