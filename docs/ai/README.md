# AI Reference Documentation

Concise, enforceable docs for Cursor and other AI coding tools. Optimized for **@-mentions** and optional project skills.

## Files

| File | Use when |
|------|----------|
| [project-brief.md](./project-brief.md) | Product scope, MVP priorities, roadmap phases |
| [what-to-avoid.md](./what-to-avoid.md) | Anti-patterns; validate before finishing |
| [architecture-skill.md](./architecture-skill.md) | Starting any task; full architecture context |
| [folder-placement.md](./folder-placement.md) | “Where should this file go?” |
| [rules-checklist.md](./rules-checklist.md) | Before finishing a change; validation |
| [new-feature-template.md](./new-feature-template.md) | Adding a new domain feature |

## Recommended usage

1. **Chat:** `@docs/ai/architecture-skill.md` + specific file for the task.
2. **Project skill (optional):** Copy or symlink `architecture-skill.md` to `.cursor/skills/mma-architecture/SKILL.md`.
3. **Cursor rule:** Add a rule: “Follow `docs/ai/rules-checklist.md` for all code changes.”

## Human-readable docs

For longer explanations, see [../human/README.md](../human/README.md).
