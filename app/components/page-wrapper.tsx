export default function PageWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <section className="p-12">
      {title && (
        <h1 className="text-6xl mb-8 text-center md:text-left">{title}</h1>
      )}
      <article className="flex flex-col">{children}</article>
    </section>
  );
}
