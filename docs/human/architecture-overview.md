# Architecture Overview

**Product:** [MMA Baithak](./project-brief.md) — see [architecture-fit.md](./architecture-fit.md) for roadmap alignment.

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Pattern:** Pragmatic Feature-Based Architecture

## What “pragmatic feature-based” means

We organize code by **business domain** (fighters, events, rankings), not by technical file type (all components in one folder, all hooks in another). Each feature owns its UI, hooks, types, and feature-specific logic. Shared building blocks live in `shared/`. Data access is centralized in `services/` so we can start with static content and move to APIs without rewriting UI.

## Core principles

1. **Features first** — Code is grouped by what it does for the user, not whether it is a component, hook, or util.
2. **UI stays dumb about data sources** — Components do not call APIs, read JSON files, or embed hardcoded lists. They receive data via props or hooks that delegate to services.
3. **Service layer for data** — All fetching and content loading goes through `services/`. Switching from `content/*.json` to REST/GraphQL should not require feature UI changes.
4. **Shared vs feature-specific** — Reusable UI and layout live in `shared/`. Anything used by one domain stays in that feature’s folder.
5. **Simple and scalable** — No heavy enterprise patterns (DDD aggregates, event buses, etc.). Structure should support future APIs, admin, auth, and dynamic content without a rewrite.

## Layering (high level)

```
Route (app/)     → composes layouts + feature entry components
Feature UI       → presentation; uses feature hooks
Feature hooks    → orchestration; calls services
Services         → data access (static files today, API tomorrow)
Shared           → reusable UI, layout, hooks, utils
```

## Planned domains (features)

| Feature | Phase | Responsibility |
|---------|-------|----------------|
| `home` | MVP | Landing, brand, featured content, About (until split) |
| `newsletter` | MVP | Signup, subscriber capture |
| `content` | Short-term | Videos, articles, content hub |
| `fighters` | Short-term | Profiles, listings, analysis |
| `events` | Short-term | Event pages, fight cards |
| `rankings` | Short-term | Division rankings |
| `predictions` | Short-term | Predictions, editorial picks |
| `auth` | Medium-term | Accounts, sessions |
| `community` | Medium-term | Comments, discussions |
| `admin` | Medium-term | Content management (or separate app) |

## What we are not doing (yet)

- Cross-feature imports (features stay isolated)
- Business logic inside `app/` route files
- Direct API/JSON access from UI components

See [folder-structure.md](./folder-structure.md) and [development-guidelines.md](./development-guidelines.md) for implementation detail.
