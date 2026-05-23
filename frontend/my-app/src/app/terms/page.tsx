import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="Terms of service for using MMA Baithak will be published here soon."
    />
  );
}
