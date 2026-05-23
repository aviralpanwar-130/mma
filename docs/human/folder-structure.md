# Folder Structure

Target layout under `src/`:

```
src/
├── app/                  # Next.js routes, layouts, pages
├── features/             # Business domains
│   ├── home/
│   ├── fighters/
│   ├── events/
│   ├── rankings/
│   ├── newsletter/
│   └── auth/
├── shared/
│   ├── ui/               # Reusable UI (Button, Card, Badge, …)
│   ├── layout/           # Header, Footer, Navbar, containers
│   ├── hooks/            # Cross-feature hooks
│   └── utils/            # Pure helpers
├── services/             # Data access (API, JSON, CMS adapters)
├── providers/            # React providers (theme, auth, query, …)
├── config/               # App config, constants, route paths
├── types/                # Global shared TypeScript types
└── lib/                  # Generic libraries (formatters, validators)
```

## Responsibility by top-level folder

### `app/`

- Next.js App Router: `layout.tsx`, `page.tsx`, `loading.tsx`, route groups, metadata.
- **Only composition:** wire layouts, import feature entry components, set route-level metadata.
- **No** business rules, data transforms, or direct service calls beyond trivial wiring.

### `features/<name>/`

Each feature is a self-contained slice. Typical internal layout (add folders as needed):

```
features/fighters/
├── components/     # Feature-only UI
├── hooks/          # Feature-only hooks
├── types/          # Feature-only types
├── utils/          # Feature-only helpers
└── index.ts        # Public exports for routes/other consumers
```

Feature code **must not** import from other features. Use `shared/`, `services/`, or `types/` for cross-cutting needs.

### `shared/`

- **`ui/`** — Design-system style components used in multiple features.
- **`layout/`** — Site chrome: Header, Footer, Navbar, page shells.
- **`hooks/`** — Hooks with no single-feature owner (e.g. media query, scroll).
- **`utils/`** — Pure functions with no feature coupling.

### `services/`

- Functions/modules that load or mutate data: `getFighters()`, `getEventById()`, etc.
- May read static JSON/content today; same interface can call HTTP later.
- Features and hooks call services; **UI components do not.**

### `providers/`

- Client-side React context providers (theme, React Query, auth session).
- Mounted from root `app/layout.tsx` or nested layouts.

### `config/`

- Environment-driven settings, route path constants, feature flags.

### `types/`

- Types shared across multiple features or services (e.g. `Fighter`, `Event`).

### `lib/`

- Third-party wrappers and generic utilities not tied to MMA domain.

## Example: adding a fighter list page

1. `app/fighters/page.tsx` — imports `FightersPage` from `features/fighters`.
2. `features/fighters/components/FightersPage.tsx` — layout and list UI.
3. `features/fighters/hooks/useFighters.ts` — calls `getFighters()` from services.
4. `services/fighters.ts` — loads data (JSON or API).
