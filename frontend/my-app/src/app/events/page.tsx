import { PlaceholderPage } from "@/shared/ui/PlaceholderPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Upcoming Events",
  path: "/events",
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Upcoming Events"
      description="Fight cards, schedules, and event coverage will land here soon."
    />
  );
}
