# MMA Baithak — Project Brief

## What it is

**MMA Baithak** is a combat sports media platform focused on UFC, MMA, fighter analysis, event coverage, rankings, predictions, and combat sports storytelling.

**Primary audience:** MMA fans, especially from India.

**Positioning:** Brand website and media hub today; community and data platform over time.

---

## Product roadmap

### MVP (now)

| Goal | Notes |
|------|--------|
| Modern landing page and brand website | Hero, brand story, MMA/UFC visuals |
| About Us | Mission, team, brand voice |
| Social links | YouTube, Instagram, X, Threads |
| Featured videos/content | Curated highlights on homepage |
| MMA/UFC themed branding | Strong visual identity, mobile-first |
| Newsletter / signup | Email capture, growth |
| Mobile-first, fast, SEO-friendly | Core Web Vitals, metadata, shareable pages |

### Short-term

| Goal | Notes |
|------|--------|
| Content hub | Videos and articles (listing + detail) |
| Fighter profiles | Bios, stats, analysis |
| Event pages | Cards, schedules, coverage |
| Rankings and predictions | Divisions, picks, editorial |
| Audience growth | Newsletter, social CTAs, subscribe flows |

### Medium-term

| Goal | Notes |
|------|--------|
| Dynamic content | APIs / headless CMS |
| User accounts | Registration, profiles |
| Comments and community | Engagement on content |
| Event & fight databases | Structured fight data |
| Admin panel | Content management for editors |

### Long-term vision

Leading MMA media and community platform with:

- Fighter and event databases
- Rankings, analytics, predictions
- Newsletters and community discussions
- Monetization: sponsorships, affiliates, premium content, partnerships

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Architecture | Pragmatic Feature-Based (see [architecture-overview.md](./architecture-overview.md)) |
| Hosting | Vercel |
| Data (initial) | Static / content-driven (JSON, MDX, or CMS-ready files) |
| Data (future) | APIs, CMS, auth backend — via `services/` layer |

---

## Feature map (architecture alignment)

How product areas map to `src/features/` over time:

| Phase | Feature folder | Product area |
|-------|----------------|--------------|
| MVP | `home` | Landing, brand, featured content, About (or split later) |
| MVP | `newsletter` | Signup, preferences |
| Short-term | `content` | Videos, articles, content hub |
| Short-term | `fighters` | Fighter profiles, listings |
| Short-term | `events` | Event pages, fight cards |
| Short-term | `rankings` | Division rankings |
| Short-term | `predictions` | Predictions, picks (editorial) |
| Medium-term | `auth` | User accounts, sessions |
| Medium-term | `community` | Comments, discussions (when added) |
| Medium-term | `admin` | Content management UI (or separate app) |

**Cross-cutting (not features):**

- Social URLs, site config → `config/`
- Header, Footer, social icons → `shared/layout/`
- SEO helpers, metadata patterns → `lib/` or per-route in `app/`

---

## Brand and content notes

- Tone: fan-first, India-aware MMA community (“Baithak” = gathering space).
- MVP content can be static (JSON/MDX); structure UI for later CMS fields.
- External media: embed YouTube; link out to Instagram, X, Threads.

---

## Success criteria (MVP)

- [ ] Clear brand identity on landing page
- [ ] About Us and social discovery
- [ ] Featured content visible without backend
- [ ] Newsletter capture works (form + provider TBD)
- [ ] Lighthouse-friendly, responsive on mobile
- [ ] Sensible SEO defaults (title, description, OG)

See [architecture-fit.md](./architecture-fit.md) for whether the proposed frontend structure supports this roadmap.
