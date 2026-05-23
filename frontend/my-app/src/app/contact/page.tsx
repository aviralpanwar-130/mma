import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Reach out to the MMA Baithak team for collaborations, media inquiries, or community questions."
    />
  );
}
