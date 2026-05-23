import { AboutPage } from "@/features/about";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn the story behind MMA Baithak—India's gathering place for technical MMA analysis and UFC community.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
