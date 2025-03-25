import PageWrapper from "app/components/page-wrapper";
import Link from "next/link";

export const metadata = {
  title: "Blogroll",
  description: "A list of blogs I read on a regular basis.",
};

const PUBLICATIONS = [
  {
    name: "DenseDiscovery",
    url: "https://www.dense-discovery.com/",
    description: "A newsletter about design and everything in between.",
  },
  {
    name: "anhvn",
    url: "https://anhvn.com/blog/",
    description: "AnhVN is a designer, developer and a blogger.",
  },
  {
    name: "Ludicity",
    url: "https://ludic.mataroa.blog/",
    description: "A personal blog about technology and life.",
  },
  {
    name: "localghost",
    url: "https://localghost.dev/",
    description: "A developer blog focused on web development and security.",
  },
  {
    name: "Autistic as F**k",
    url: "https://www.autisticasfxxk.com/",
    description: "Personal blog about life, technology, and neurodiversity.",
  },
  {
    name: "Experimental History",
    url: "https://www.experimental-history.com/",
    description: "A blog exploring history through experimental approaches.",
  },
  {
    name: "Rachel Smith",
    url: "https://rachsmith.com/",
    description: "Personal blog of a developer and creative technologist.",
  },
  {
    name: "from jason",
    url: "https://www.fromjason.xyz/",
    description: "Personal website and blog.",
  },
  {
    name: "maya.land",
    url: "https://maya.land/",
    description: "Personal website and digital garden.",
  },
  {
    name: "maria.town",
    url: "https://maria.town/",
    description: "Personal website and blog.",
  },
];

export default function Page() {
  return (
    <PageWrapper title="Blogroll">
      <article className="flex flex-col">
        <p className="mb-8">
          Not just blogs, but publications I read on a regular basis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {PUBLICATIONS.map((publication) => (
            <Link
              key={publication.name}
              href={publication.url}
              className="bg-blog-background-secondary p-4 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{publication.name}</h2>
              <p>{publication.description}</p>
            </Link>
          ))}
        </div>
      </article>
    </PageWrapper>
  );
}
