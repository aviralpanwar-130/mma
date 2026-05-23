---
name: mma-architecture-rules
description: >-
  Pre-submit checklist for MMA frontend changes. Use before completing
  any code change to verify architecture compliance.
---

# Architecture Rules Checklist

Run through this list before marking a task complete. Anti-patterns: [what-to-avoid.md](./what-to-avoid.md).

## Routes (`app/`)

- [ ] Page only imports feature entry + layouts (+ metadata)
- [ ] No business logic, transforms, or validation in route file
- [ ] No direct `services/` usage (except re-export/wiring if unavoidable)

## Features (`features/<name>/`)

- [ ] New code lives under the correct feature folder
- [ ] **No** `import ... from '@/features/<other>'`
- [ ] `index.ts` exports only the public API
- [ ] Feature-specific code not copied to `shared/` unless reused

## UI & data

- [ ] Presentational components receive data via props
- [ ] Async/load logic in feature hooks, not in leaf components
- [ ] **No** `fetch`, axios, or filesystem/JSON paths in UI files
- [ ] All data access goes through `services/` — **including static JSON/MDX for MVP** (no “skip services for now”)

## Shared & layout

- [ ] Component used in 2+ features → `shared/ui/` or `shared/hooks/`
- [ ] Header/Footer/Navbar → `shared/layout/`
- [ ] Auth UI → `features/auth/`

## Types & config

- [ ] Cross-feature types in `types/`, not duplicated
- [ ] Magic strings/routes → `config/` where appropriate

## Quality

- [ ] TypeScript types explicit; avoid `any`
- [ ] Imports use `@/` aliases (when configured)
- [ ] Structure supports future API swap without UI changes

## If violating a rule

Stop and refactor: extract to `services/`, `shared/`, or the correct `features/<name>/` before proceeding.
