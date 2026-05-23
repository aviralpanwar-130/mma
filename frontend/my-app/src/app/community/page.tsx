import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Community",
  path: "/community",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Community"
      description="Community discussions and engagement features are coming soon."
    />
  );
}
