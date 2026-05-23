import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Content",
  path: "/content",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Content Hub"
      description="Videos, articles, and analysis from the baithak will be listed here."
    />
  );
}
