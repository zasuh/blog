import { GardenPosts } from "app/components/posts";
import PageWrapper from "app/components/page-wrapper";

export const metadata = {
  title: "Garden",
  description: "My plot of notes and things.",
};

export default function Page() {
  return (
    <PageWrapper title="Garden">
      <GardenPosts />
    </PageWrapper>
  );
}
