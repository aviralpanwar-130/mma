# Maintaining Documentation

`docs/` is part of the project — not optional notes. Keep it aligned with the codebase so humans and AI tools stay accurate.

---

## What must stay documented

Update docs when you change any of the following:

| Change type | Update these docs |
|-------------|-------------------|
| New or renamed feature folder | [features-guide.md](./features-guide.md), [project-brief.md](./project-brief.md) (feature map), [architecture-overview.md](./architecture-overview.md), [../ai/architecture-skill.md](../ai/architecture-skill.md) |
| Architecture rules or layering | [architecture-overview.md](./architecture-overview.md), [development-guidelines.md](./development-guidelines.md), [what-to-avoid.md](./what-to-avoid.md), [../ai/rules-checklist.md](../ai/rules-checklist.md) |
| Folder / placement conventions | [folder-structure.md](./folder-structure.md), [../ai/folder-placement.md](../ai/folder-placement.md) |
| Product scope or roadmap phase | [project-brief.md](./project-brief.md), [../ai/project-brief.md](../ai/project-brief.md) |
| Standard formats (naming, exports, metadata, content shape) | Add or update a focused doc under `docs/human/` (e.g. `naming-conventions.md`, `content-format.md`) and link from [README.md](../README.md) |
| Tech stack (Tailwind, CMS, auth provider, etc.) | [project-brief.md](./project-brief.md), [architecture-overview.md](./architecture-overview.md) |
| Anti-patterns or new “do not” rules | [what-to-avoid.md](./what-to-avoid.md), [../ai/what-to-avoid.md](../ai/what-to-avoid.md) |

If both **human** and **AI** audiences need the same rule, update **both** `docs/human/` and `docs/ai/` (AI versions stay short and enforceable).

---

## When to update

- **Same PR / same work session** as the code change when possible
- **Before** marking a feature “done” if it introduces a new pattern others will copy
- **After** an architectural decision (ADR-style): record the decision and consequences in docs, not only in chat

Do not leave docs stale with “we’ll document later” — later rarely happens.

---

## How to add new standards

1. **Human doc** — Clear prose, examples, rationale under `docs/human/`.
2. **AI doc** — Condensed rules, checklist, or skill-style file under `docs/ai/` with YAML `description` frontmatter.
3. **Index** — Link from [docs/README.md](../README.md) and [human/README.md](./README.md).
4. **Cross-link** — Reference from [development-guidelines.md](./development-guidelines.md) or [architecture-skill.md](../ai/architecture-skill.md) if agents should always see it.

Optional: mirror critical AI docs to `.cursor/skills/` or Cursor rules — but **`docs/` remains the source of truth**.

---

## Doc structure (do not break without updating README)

```
docs/
├── README.md           # Index — update when adding major docs
├── human/              # Full explanations for developers
└── ai/                 # Short, enforceable references for Cursor/agents
```

---

## Review checklist (for PRs or self-review)

- [ ] Code matches [what-to-avoid.md](./what-to-avoid.md) and [development-guidelines.md](./development-guidelines.md)
- [ ] Any new feature listed in [features-guide.md](./features-guide.md) and project brief
- [ ] New conventions documented (not only in PR description)
- [ ] AI docs updated if agent behavior should change
- [ ] [docs/README.md](../README.md) links added for new files

---

## Ownership

Everyone contributing to MMA Baithak maintains docs for their changes. Architectural or format decisions should be written down so future you, collaborators, and AI assistants share one source of truth.
