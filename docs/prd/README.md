# Product Requirements Documents (PRD)

Feature-level product specs for MMA Baithak. Each PRD describes **what** to build and **why**; implementation details live in architecture docs and code.

| Document | Feature | Phase | Status |
|----------|---------|-------|--------|
| [ai-fight-predictor.md](./ai-fight-predictor.md) | AI Fight Predictor | Post-MVP / medium-term | Draft |

## Conventions

- **Filename:** `kebab-case.md` matching the feature name.
- **Location:** `docs/prd/` (human-readable product specs).
- **When to add:** New major feature or product surface that spans multiple sprints.
- **Cross-links:** Update [project-brief.md](../human/project-brief.md) feature map and [features-guide.md](../human/features-guide.md) when a PRD moves from draft → approved → in development.
- **Backend alignment:** Predictor implementation details that are product/domain-specific stay in the PRD; general backend patterns live in [human/backend/](../human/backend/) and [ai/backend/](../ai/backend/).

## Related docs

- [Project brief](../human/project-brief.md) — overall roadmap
- [Features guide](../human/features-guide.md) — feature folder mapping
- [Architecture overview](../human/architecture-overview.md) — how code is organized
