export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  fighters: "/fighters",
  events: "/events",
  content: "/content",
  rankings: "/rankings",
  community: "/community",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
