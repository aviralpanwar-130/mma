import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Rankings",
  path: "/rankings",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Rankings"
      description="Division rankings and editorial picks are on the way."
    />
  );
}
