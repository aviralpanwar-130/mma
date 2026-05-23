# Development Guidelines

See **[what-to-avoid.md](./what-to-avoid.md)** for anti-patterns that block CMS/API migration. See **[maintaining-docs.md](./maintaining-docs.md)** — update docs when architecture or standards change.

## TypeScript and code quality

- Prefer **strict typing**; avoid `any` unless documented.
- Export types from `types/` (global) or `features/<x>/types/` (local).
- Use named exports; keep default exports for Next.js pages/layouts only where required.

## Separation of concerns

| Layer | May depend on | Must not |
|-------|----------------|----------|
| `app/` routes | features, shared, providers | Business logic, direct service calls |
| Feature components | feature hooks, shared UI | Services, APIs, raw JSON paths |
| Feature hooks | services, feature types | Other features |
| Services | config, lib, types | React, UI components |
| Shared UI | shared utils, types | Feature folders, services |

## Data flow

1. **Service** returns typed data (from file or API).
2. **Hook** calls service, handles loading/error state.
3. **Component** renders from hook data or props.

```ts
// Good: hook → service
export function useFighters() {
  return useQuery({ queryKey: ['fighters'], queryFn: getFighters });
}

// Bad: component → fetch / read JSON
export function FighterList() {
  const data = await fetch('/api/fighters'); // in component
}
```

## Features must not depend on each other

If two features need the same UI or logic:

- Move UI to `shared/ui/`.
- Move logic to `shared/hooks/` or `services/`.
- Move types to `types/` or `shared` as appropriate.

Never `import { X } from '@/features/events'` inside `features/fighters`.

## Layout components

Header, Footer, Navbar, and page containers live in **`shared/layout/`**, not inside a single feature (unless truly feature-private, which is rare).

## Authentication

Auth is a **feature** under `features/auth/`, not a random folder at the root. Session providers may live in `providers/` but auth UI and auth-specific hooks stay in the feature.

## Routes stay thin

```tsx
// app/fighters/page.tsx — good
import { FightersPage } from '@/features/fighters';

export default function Page() {
  return <FightersPage />;
}
```

## Future scalability

Design for:

- Backend APIs replacing static content (service interface stable).
- Admin panel (likely separate routes under `app/` + admin feature later).
- User accounts and protected routes (`features/auth` + middleware).
- Dynamic CMS content (new service adapters, same feature hooks).

## Imports

Use path aliases (e.g. `@/features/...`, `@/shared/...`) once configured in `tsconfig.json`. Keep import direction: **inward** (app → features → shared/services), never features → other features.
