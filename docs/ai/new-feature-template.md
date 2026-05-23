---
name: mma-new-feature
description: >-
  Scaffold checklist for adding a new business feature to the MMA Next.js app.
  Use when the user asks for a new domain (e.g. shop, blog, admin).
---

# New Feature Template

Use when adding `features/<feature-name>/` and its routes.

## 1. Name the feature

- kebab-case folder: `features/<name>/`
- Must map to a business domain, not a technical layer

## 2. Create minimal structure

```
features/<name>/
├── components/
│   └── <Name>Page.tsx
├── hooks/
│   └── use<Name>.ts          # if data needed
├── types/
│   └── index.ts              # if feature-local types
└── index.ts
```

## 3. Add service module

```
services/<name>.ts
```

- Export typed functions: `getX`, `listX`, etc.
- Implement with static content first; API later

## 4. Wire route (thin)

```
app/<route>/page.tsx
```

```tsx
import { <Name>Page } from '@/features/<name>';

export default function Page() {
  return <<Name>Page />;
}
```

## 5. Data flow template

```ts
// services/<name>.ts
export async function listItems(): Promise<Item[]> { /* ... */ }

// features/<name>/hooks/useItems.ts
export function useItems() {
  // call listItems(); handle loading/error
}

// features/<name>/components/<Name>Page.tsx
export function <Name>Page() {
  const { data, isLoading } = useItems();
  // render with shared/ui primitives
}
```

## 6. Barrel export

```ts
// features/<name>/index.ts
export { <Name>Page } from './components/<Name>Page';
```

## 7. Verify

- [ ] No cross-feature imports
- [ ] Service layer owns all data
- [ ] Shared UI used for generic elements
- [ ] Run [rules-checklist.md](./rules-checklist.md)

## Existing features (do not duplicate)

**MVP:** `home`, `newsletter`  
**Short-term:** `content`, `fighters`, `events`, `rankings`, `predictions`  
**Medium-term:** `auth`, `community`, `admin`

See [project-brief.md](./project-brief.md). Extend an existing feature when scope fits; add a folder only for a new business area.
