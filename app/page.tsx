import Link from "next/link";
import PageWrapper from "./components/page-wrapper";
const ITEMS = [
  {
    title: "About",
    description: "Who is writing for this site, who made it etc.",
    href: "/about",
  },
  {
    title: "Garden",
    description: "Plots of notes and thoughts on various topics.",
    href: "/garden",
  },
  {
    title: "Now",
    description: "What I'm doing currently.",
    href: "/now",
  },
  {
    title: "Blogroll",
    description: "A collection of blogs I read.",
    href: "/blogroll",
  },
  // {
  //   title: "Links",
  //   description: "A collection of links to other sites.",
  //   href: "/links",
  // },
];

export default function Page() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        {ITEMS.map((item) => (
          <Link href={item.href} key={item.href}>
            <h2 className="text-6xl mb-4 hover:underline">{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}
