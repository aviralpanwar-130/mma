# MMA Baithak Documentation

Documentation for **MMA Baithak** — combat sports media platform (Next.js App Router). Split into two audiences.

**Keep docs current:** Any architectural change, standard format, naming convention, or new feature phase must be reflected here. See [Maintaining documentation](./human/maintaining-docs.md).

| Folder | Audience | Purpose |
|--------|----------|---------|
| [human/](./human/) | Developers | Onboarding, architecture overview, conventions |
| [ai/](./ai/) | AI assistants (Cursor, etc.) | Concise, enforceable rules for code generation |

## Quick links

### Human reference
- [Project brief](./human/project-brief.md) — product vision, roadmap, tech
- [Architecture fit](./human/architecture-fit.md) — why this structure works for Baithak
- [Architecture overview](./human/architecture-overview.md)
- [Folder structure](./human/folder-structure.md)
- [Development guidelines](./human/development-guidelines.md)
- [What to avoid](./human/what-to-avoid.md) — anti-patterns that block CMS/API migration
- [Maintaining documentation](./human/maintaining-docs.md) — when and how to update docs
- [Features guide](./human/features-guide.md)

### AI reference
- [Project brief](./ai/project-brief.md) — product context for agents
- [Architecture skill](./ai/architecture-skill.md) — primary agent context
- [Folder placement](./ai/folder-placement.md) — where to put new code
- [What to avoid](./ai/what-to-avoid.md) — anti-patterns for agents
- [Rules checklist](./ai/rules-checklist.md) — must-follow rules
- [New feature template](./ai/new-feature-template.md) — scaffold a feature

## How to use AI docs in Cursor

- **@-mention** files under `docs/ai/` in chat (e.g. `@docs/ai/architecture-skill.md`).
- Optionally copy `docs/ai/architecture-skill.md` into `.cursor/skills/mma-architecture/SKILL.md` for automatic project skills.
- Add a [Cursor rule](https://docs.cursor.com/context/rules) pointing agents at `docs/ai/` for persistent guidance.
