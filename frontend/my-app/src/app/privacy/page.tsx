import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="Our privacy policy is being finalized. Your data and trust matter to the baithak."
    />
  );
}
