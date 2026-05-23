---
name: mma-frontend-architecture
description: >-
  MMA Baithak — Next.js App Router combat sports media platform. Pragmatic
  Feature-Based Architecture. Use when creating routes, features, components,
  services, or refactoring src/. Enforces feature isolation and service layer.
---

# MMA Baithak — Frontend Architecture (Agent Skill)

## Product

Combat sports media (UFC/MMA), India-focused fans. MVP: landing, About, social, featured content, newsletter. See [project-brief.md](./project-brief.md).

## Stack

- Next.js **App Router**, TypeScript, **Tailwind**, **Vercel**
- Organize by **business feature**, not file type

## `src/` layout (canonical)

```
src/
├── app/           # Routes only — compose features + layouts
├── features/      # home | newsletter (MVP); content | fighters | events | rankings | predictions | auth | community | admin
├── shared/
│   ├── ui/
│   ├── layout/    # Header, Footer, Navbar
│   ├── hooks/
│   └── utils/
├── services/      # ALL data access
├── providers/
├── config/
├── types/
└── lib/
```

## Non-negotiable rules

1. **Routes (`app/`)** — Import feature entry components; no business logic, no direct `services/` calls except trivial pass-through.
2. **Features** — Self-contained under `features/<name>/`. **Never import another feature.**
3. **UI components** — No `fetch`, no API URLs, no reading JSON/content paths. Data via **props** or **feature hooks**.
4. **Data** — Only **`services/`** talks to APIs, files, or CMS. Hooks call services; components call hooks.
5. **Reuse** — Multi-feature UI → `shared/ui/`. Site chrome → `shared/layout/`.
6. **Auth** — Lives in `features/auth/`, not a root-level auth folder.
7. **Keep it pragmatic** — No enterprise patterns unless explicitly requested.
8. **Avoid** — See [what-to-avoid.md](./what-to-avoid.md): no cross-feature imports, no data in UI, no skipping `services/` for static content.
9. **Docs** — Architectural or format changes must update `docs/` per [../human/maintaining-docs.md](../human/maintaining-docs.md).

## Feature folder pattern

```
features/<name>/
├── components/
├── hooks/
├── types/
├── utils/          # optional
└── index.ts        # public exports
```

## Dependency direction

```
app → features → (shared | services | types | config | lib)
features ↛ other features
services ↛ React / components
```

## Planned features

**MVP:** `home`, `newsletter`  
**Short-term:** `content`, `fighters`, `events`, `rankings`, `predictions`  
**Medium-term:** `auth`, `community`, `admin`

## Future-proofing

Services abstract data source so static JSON can become API without UI rewrites. Structure supports admin, accounts, and dynamic content later.

## Related docs

- Avoid: [what-to-avoid.md](./what-to-avoid.md)
- Placement: [folder-placement.md](./folder-placement.md)
- Validation: [rules-checklist.md](./rules-checklist.md)
- New feature: [new-feature-template.md](./new-feature-template.md)
- Human detail: [../human/architecture-overview.md](../human/architecture-overview.md)
