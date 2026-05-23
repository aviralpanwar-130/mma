import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best Fighters",
  path: "/fighters",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Best Fighters"
      description="Fighter profiles, rankings, and analysis are coming to the baithak soon."
    />
  );
}
