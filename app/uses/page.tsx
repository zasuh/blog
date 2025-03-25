import PageWrapper from "app/components/page-wrapper";

export const metadata = {
  title: "Uses",
  description: "Things I use",
};

const USES = [
  {
    title: "Laptop",
    description: "MacBook Pro 14 2021, M1 Pro, 32GB RAM, 1TB SSD",
  },
  {
    title: "Editor",
    description: "At work: Cursor, at home: VSCode",
  },
  {
    title: "Terminal",
    description: "iTerm2",
  },
  {
    title: "Browser",
    description: "At work: Chrome, at home: Firefox",
  },
  {
    title: "Journaling",
    description: "Moleskine notebook with lines",
  },
  {
    title: "Reading",
    description: "Kindle Paperwhite 2018 wifi, 16GB",
  },
];

export default function Page() {
  return (
    <PageWrapper title="Uses">
      <p className="mb-8">Things I use</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {USES.map((use) => (
          <div className="bg-blog-background-secondary rounded-md p-4">
            <h1 className="text-4xl mb-4">{use.title}</h1>
            <p>{use.description}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
