# Architecture Fit — MMA Baithak

Assessment of whether **Pragmatic Feature-Based Architecture** on Next.js App Router is a good fit for MMA Baithak’s MVP → long-term roadmap.

**Verdict: Yes — optimal for this stage, and scalable with minor, incremental additions.**

---

## Why it fits

### 1. Product shape matches feature boundaries

MMA Baithak grows by **content domains** (fighters, events, rankings, predictions, articles/videos), not by technical layers. Feature folders mirror how the team and audience think about the product, which keeps MVP and short-term work clear without premature abstraction.

### 2. Static-first → API/CMS path is built in

MVP and short-term goals are **content-driven** (landing, featured media, profiles, event pages). The **service layer** lets you ship with JSON/MDX/local content now and swap in headless CMS or REST later without rewriting feature UI — exactly what the roadmap describes for medium-term “dynamic content.”

### 3. Next.js App Router + Vercel align with goals

- **SEO-friendly:** Server components, metadata API, static generation where appropriate.
- **Fast / mobile-first:** Route-level splitting, image optimization, edge deployment on Vercel.
- **Marketing site now, app-like later:** Same codebase can add auth, client islands, and API routes incrementally.

### 4. Roadmap phases map cleanly to folders

| Phase | Architecture support |
|-------|----------------------|
| MVP | `home`, `newsletter`, `shared/layout`, `config` — small, shippable |
| Short-term | Add `content`, `fighters`, `events`, `rankings`, `predictions` as isolated features |
| Medium-term | `auth`, `community`, `services` adapters for CMS + API; optional `admin` feature or separate admin app |
| Long-term | Databases and monetization stay behind `services/`; features stay UI/orchestration |

### 5. Avoids over-engineering early

No monorepo, micro-frontends, or heavy DDD. For a media platform at MVP, that reduces friction while still allowing a large codebase later (similar stacks used by many content-heavy Next.js products).

---

## Scalability — what holds up long-term

| Concern | How the architecture handles it |
|---------|----------------------------------|
| More content types | New feature folder + `services/<domain>.ts` |
| CMS (Sanity, Contentful, etc.) | New service adapters; hooks unchanged |
| User accounts | `features/auth` + `providers` + middleware |
| Comments / community | `features/community` + API services (no cross-feature UI imports) |
| Admin / CMS UI | `features/admin` or separate Next app — both compatible |
| Fight/fighter databases | Rich types in `types/`, data access in `services/` |
| Performance at scale | ISR/SSG per route, CDN via Vercel; features don’t block caching strategy |
| Team growth | Contributors own a feature folder; less merge conflict than giant `components/` |

---

## Gaps to plan for (not blockers)

These are **small additions** to the documented structure, not a new architecture.

### 1. Expand the feature list in docs/code as you build

Original plan listed six features. The product brief implies others over time:

- **`content`** — videos/articles hub (short-term; MVP may use `home` for “featured” only)
- **`predictions`** — distinct from rankings editorially
- **`community`** — comments/discussions (medium-term)
- **`about`** — optional separate feature if About grows beyond one page

**Recommendation:** Keep About inside `home` for MVP; extract when it has multiple routes or shared components.

### 2. SEO and social as first-class concerns

Add early (not a new “architecture”):

- `lib/seo.ts` or shared metadata helpers
- `config/site.ts` — site name, default OG image, social URLs
- Per-route `generateMetadata` in thin `app/` pages

### 3. Content format strategy

Decide soon (does not change folder layout):

- **MDX** for articles + embedded components
- **JSON** for fighters/events/rankings until CMS exists
- **YouTube embeds** via shared component in `shared/ui/`

All consumed through `services/`.

### 4. Admin panel scope

Two valid paths at medium-term:

- **Same repo:** `features/admin` + protected routes (good for small teams)
- **Separate app:** admin.baithak… pointing at same API (good for heavy CMS)

Current architecture supports either; defer until CMS/API exists.

### 5. Auth and community touch multiple features

Rule stays: **features don’t import each other**. Shared session via `providers/`, shared types in `types/`, permission checks in `services/` or `lib/auth`. Community comments attach to content IDs via services, not via `features/content` importing `features/community` internals.

---

## What would be *less* optimal (and we are not doing)

Full detail: **[what-to-avoid.md](./what-to-avoid.md)**.

| Approach | Why it’s a poor fit now |
|----------|-------------------------|
| Flat `components/` + `pages/` only | Hard to navigate as fighters, events, rankings grow |
| Feature-to-feature imports | Tangles domains; breaks when APIs split |
| API calls / JSON inside UI components | Painful CMS migration; untestable UI |
| Skipping `services/` because data is static | Forces large rewrite when CMS/API arrives |
| Full micro-frontends | Unnecessary ops complexity for MVP |
| Backend in the same feature folder | Blurs boundaries; keep server actions/API routes thin, logic in `services/` |

---

## Conclusion

| Question | Answer |
|----------|--------|
| Optimal for MVP? | **Yes** — fast to ship landing, about, social, featured content, newsletter |
| Scalable for short/medium term? | **Yes** — add features and service adapters per roadmap phase |
| Right for long-term vision? | **Yes**, with planned additions (`content`, `predictions`, `community`, SEO/config helpers) |
| Need a different architecture? | **No** — stay pragmatic; evolve folders and services, not the pattern |

**Action:** Treat [project-brief.md](./project-brief.md) as source of truth for scope; use [features-guide.md](./features-guide.md) and [../ai/architecture-skill.md](../ai/architecture-skill.md) when implementing each phase.
