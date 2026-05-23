# Features Guide

Aligned with [project-brief.md](./project-brief.md).

## Feature list

| Folder | Phase | Domain | Typical pages / surfaces |
|--------|-------|--------|---------------------------|
| `home` | MVP | Brand / landing | `/`, hero, featured content, About |
| `newsletter` | MVP | Email capture | Footer widget, `/newsletter` |
| `content` | Short-term | Videos & articles | `/content`, `/content/[slug]` |
| `fighters` | Short-term | Profiles & analysis | `/fighters`, `/fighters/[slug]` |
| `events` | Short-term | Events & cards | `/events`, `/events/[id]` |
| `rankings` | Short-term | Divisions | `/rankings` |
| `predictions` | Short-term | Picks & predictions | `/predictions` |
| `auth` | Medium-term | Accounts | `/login`, `/register`, account |
| `community` | Medium-term | Comments / discussions | On content pages, `/community` |
| `admin` | Medium-term | CMS UI | Protected `/admin/*` (or separate app) |

## Anatomy of a feature

When implementing a feature, create only what you need:

```
features/<name>/
├── components/
│   ├── <Name>Page.tsx          # Route-level entry (exported to app/)
│   └── ...                     # Smaller presentational pieces
├── hooks/
│   └── use<Thing>.ts           # Data + state for the feature
├── types/
│   └── index.ts                # Feature-local types
├── utils/                      # Optional
└── index.ts                    # Barrel: export public API
```

## Public API via `index.ts`

Routes and other code should import from the feature barrel when possible:

```ts
// features/fighters/index.ts
export { FightersPage } from './components/FightersPage';
export type { FighterCardProps } from './types';
```

Keep internals (small helpers, private components) unexported.

## Working on a new screen

1. Confirm the **feature** (or add a new folder under `features/`).
2. Add or extend **service** functions in `services/`.
3. Add a **hook** if the screen needs async/state logic.
4. Build **components** in the feature folder; use `shared/ui` for generic pieces.
5. Add a thin **page** under `app/` that renders the feature entry component.

## Cross-cutting concerns

| Need | Location |
|------|----------|
| Button, Input, Modal | `shared/ui/` |
| Header / Footer | `shared/layout/` |
| Fighter type used everywhere | `types/` or `types/fighter.ts` |
| `getFighters()` | `services/fighters.ts` |
| Theme / Query client | `providers/` |
| Site name, API base URL | `config/` |

## Checklist before opening a PR

- [ ] No imports from other `features/*`
- [ ] No API/JSON access inside presentational components
- [ ] Route file only composes feature + layout
- [ ] Reusable UI moved to `shared/` if used twice
- [ ] Types exported from appropriate `types/` scope
