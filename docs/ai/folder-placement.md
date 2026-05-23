---
name: mma-folder-placement
description: >-
  Quick decision guide for where new MMA frontend files belong under src/.
  Use when adding components, hooks, pages, services, or types.
---

# Folder Placement (Quick Reference)

## Decision tree

```
Is it a Next.js route, layout, or page metadata?
  YES → app/

Is it tied to one business domain (fighters, events, …)?
  YES → features/<domain>/
        ├─ UI only used here?     → features/<domain>/components/
        ├─ Hook only used here?   → features/<domain>/hooks/
        ├─ Type only used here?   → features/<domain>/types/
        └─ Export for routes?     → features/<domain>/index.ts

Is it reusable UI (Button, Card, …)?
  YES → shared/ui/

Is it Header, Footer, Navbar, page shell?
  YES → shared/layout/

Is it a hook used by multiple features?
  YES → shared/hooks/

Is it a pure helper with no domain?
  YES → shared/utils/ OR lib/

Does it fetch/load/mutate data?
  YES → services/   (never in components)

Is it a React provider (theme, query, auth context)?
  YES → providers/

Is it env, constants, route paths?
  YES → config/

Is it a type used across features/services?
  YES → types/
```

## Examples

| Item | Path |
|------|------|
| `/fighters` page | `app/fighters/page.tsx` |
| Fighters list screen | `features/fighters/components/FightersPage.tsx` |
| `useFighters` hook | `features/fighters/hooks/useFighters.ts` |
| `getFighters()` | `services/fighters.ts` |
| `Fighter` type (global) | `types/fighter.ts` |
| `Button` | `shared/ui/Button.tsx` |
| `Header` | `shared/layout/Header.tsx` |
| Login form | `features/auth/components/LoginForm.tsx` |

## Anti-patterns

| Wrong | Right |
|-------|-------|
| `components/FighterList.tsx` at root | `features/fighters/components/` |
| `fetch` in `FighterCard.tsx` | `useFighter` → `getFighter` in services |
| `features/fighters` imports `features/events` | Extract to `shared/` or `services/` |
| Business logic in `app/page.tsx` | `features/home/components/HomePage.tsx` |
