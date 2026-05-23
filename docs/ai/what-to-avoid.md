---
name: mma-what-to-avoid
description: >-
  MMA Baithak architecture anti-patterns. Use before completing changes.
  Covers feature imports, data in UI, and skipping services for static content.
---

# What to Avoid (Agent)

These break CMS/API migration. **Never** do them for convenience.

## 1. Feature-to-feature imports

- **No** `import ... from '@/features/<other>'` inside any feature
- **Use** `shared/`, `services/`, `types/` for cross-cutting needs

## 2. Data access in UI components

- **No** `fetch`, axios, or filesystem/JSON/content paths in components
- **Use** feature hooks → `services/` only

## 3. Skipping `services/` for static MVP data

- **No** direct `import x from '*.json'` in components/hooks to save time
- **Yes** `services/<domain>.ts` even when data is local JSON/MDX today
- Static vs API is hidden inside the service; UI and hooks stay unchanged

**Why:** Planned CMS/API integration; bypassing services forces a large rewrite later.

## If user asks for a “quick” static shortcut

Implement via `services/` with a file-backed adapter, not inline in UI.

## Validate

[rules-checklist.md](./rules-checklist.md) | Human detail: [../human/what-to-avoid.md](../human/what-to-avoid.md)
