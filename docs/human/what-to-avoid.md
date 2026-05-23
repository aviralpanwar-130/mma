# What to Avoid

Critical anti-patterns for MMA Baithak. Breaking these makes later **CMS/API migration** expensive and couples features in ways that are hard to untangle.

---

## 1. Feature-to-feature imports

**Do not** import from one feature folder into another.

```ts
// Bad
import { EventCard } from '@/features/events/components/EventCard';
// inside features/fighters/...
```

**Why it hurts:** Domains become tangled; refactors, API splits, and team ownership get painful. Extraction to `shared/` or `services/` is deferred until it is messy.

**Instead:**

- Shared UI → `shared/ui/`
- Shared logic → `shared/hooks/` or `services/`
- Shared types → `types/`

See [development-guidelines.md](./development-guidelines.md#features-must-not-depend-on-each-other).

---

## 2. Fetch / JSON / file paths inside UI components

**Do not** call `fetch`, read JSON/content files, or embed CMS paths in presentational components.

```ts
// Bad — in a component
const res = await fetch('/api/fighters');
import fighters from '@/content/fighters.json';
```

**Why it hurts:** UI becomes tied to data source and shape. Moving to a headless CMS or REST API forces wide UI rewrites instead of swapping a service adapter.

**Instead:**

1. `services/` — load data (static file today, API tomorrow)
2. Feature `hooks/` — call services, handle loading/error
3. `components/` — props or hook results only

See [development-guidelines.md](./development-guidelines.md#data-flow).

---

## 3. Skipping `services/` because data is “static for now”

**Do not** inline static content in components or hooks with `import data from '...json'` as a shortcut, bypassing `services/`.

```ts
// Bad — even for MVP static content
import featured from '@/content/featured.json';
export function HomePage() {
  return <VideoGrid items={featured} />;
}

// Good
// services/content.ts → getFeaturedVideos()
// hooks/useFeaturedVideos.ts → calls service
// components/HomePage.tsx → uses hook
```

**Why it hurts:** The team gets used to direct file access in UI layers. When you add CMS/APIs, every component and hook must be hunted down and refactored. The service layer exists precisely so **static JSON and remote APIs share the same interface**.

**Rule:** All data access goes through `services/`, even for MVP JSON/MDX. Static is an **implementation detail** of the service, not an excuse to skip the layer.

See [architecture-overview.md](./architecture-overview.md) and [architecture-fit.md](./architecture-fit.md).

---

## Quick reference

| Avoid | Use instead |
|-------|-------------|
| `features/a` imports `features/b` | `shared/`, `services/`, `types/` |
| `fetch` / JSON in components | `hooks` → `services` |
| Static data inlined in UI | `services/*.ts` (+ same hooks/components) |

## Related

- [rules checklist (AI)](../ai/rules-checklist.md)
- [folder placement anti-patterns](../ai/folder-placement.md#anti-patterns)
- [architecture fit — less optimal approaches](./architecture-fit.md#what-would-be-less-optimal-and-we-are-not-doing)
