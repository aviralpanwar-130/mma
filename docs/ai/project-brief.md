---
name: mma-baithak-project
description: >-
  MMA Baithak product context: combat sports media platform for Indian MMA fans.
  Use when implementing pages, features, copy, or prioritizing MVP vs roadmap work.
---

# MMA Baithak — Project Context (AI)

## Product

- **Name:** MMA Baithak
- **Focus:** UFC/MMA media — analysis, events, rankings, predictions, storytelling
- **Audience:** MMA fans, especially India
- **Deploy:** Vercel | **Stack:** Next.js App Router, TypeScript, Tailwind, feature-based `src/`

## MVP (build first)

- Landing + brand site, MMA/UFC visuals
- About Us
- Social: YouTube, Instagram, X, Threads (`config/` + `shared/layout/`)
- Featured videos/content on home
- Newsletter signup (`features/newsletter`)
- Mobile-first, fast, SEO (metadata in `app/`, helpers in `lib/`)

## Short-term features

`content` (videos/articles), `fighters`, `events`, `rankings`, `predictions`

## Medium-term

API/CMS via `services/`, `auth`, `community` (comments), fight/event DBs, `admin` (optional separate app)

## Long-term

Full media + community platform, databases, analytics, monetization (ads, affiliates, premium)

## Feature folders (canonical)

| Folder | When |
|--------|------|
| `home` | MVP — landing, brand, featured, About (until split) |
| `newsletter` | MVP |
| `content` | Short-term hub |
| `fighters`, `events`, `rankings`, `predictions` | Short-term |
| `auth`, `community`, `admin` | Medium-term |

## Data rules

- MVP: static JSON/MDX/content files through **`services/`**
- Never hardcode data sources in UI
- YouTube embeds via shared components; social URLs in **`config/`**

## Non-goals for agents

- Do not import across `features/*`
- Do not add enterprise patterns unless asked
- Do not skip service layer for “quick” static data

## Full brief

[../human/project-brief.md](../human/project-brief.md) | Architecture fit: [../human/architecture-fit.md](../human/architecture-fit.md)
