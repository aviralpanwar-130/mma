---
name: mma-backend-architecture
description: >-
  MMA Baithak backend — Node.js + Express feature-based modular architecture.
  Use when creating API modules, services, repositories, domain logic, or AI
  integration. Enforces prediction/AI separation and modular monolith patterns.
---

# MMA Baithak — Backend Architecture (Agent Skill)

## Stack

- **Node.js + Express**
- **Modular monolith** — feature modules under `src/modules/`
- **Lightweight clean architecture** inside critical domains (predictions)

## `src/` layout (canonical)

```
src/
├── modules/
│   ├── fighters/       routes, controllers, services, repositories, validators, dto, types
│   ├── predictions/    domain/ (entities, rules, scoring, modifiers) + services, repositories, dto, prompts
│   ├── ai/             providers, prompts, parsers, services
│   ├── users/
│   └── comments/
├── shared/             db, cache, logger, errors, middleware, constants, utils, types
├── config/
├── app.ts
└── server.ts
```

## Non-negotiable rules

1. **Organize by feature module**, not global `controllers/` or `models/` trees.
2. **Domain logic** lives in `modules/<name>/domain/` for critical domains — **pure functions**, no Express/DB/AI imports.
3. **Prediction engine computes; AI narrates only.** LLM must never set win probabilities or overwrite canonical data. See [../../prd/ai-fight-predictor.md](../../prd/ai-fight-predictor.md).
4. **Services orchestrate** — call repositories, domain, AI, cache, validators. Do not embed large rule sets in services.
5. **Repositories persist only** — no prediction formulas, no prompt logic.
6. **`modules/ai/`** — prompts, providers, parsers, narration. No scoring formulas.
7. **`shared/`** — true cross-cutting infra only. Not a junk drawer for feature code.
8. **Validate** at request, schema, and business layers.
9. **No premature microservices** — one app, clear module boundaries, extract later if needed.
10. **Frontend** consumes this API via its `services/` layer — backend owns truth and computation.
11. **Cross-module** — only via another module's **public service**. Never import repos/domain/utils from other modules.
12. **Middleware** — auth, RBAC, validation in `shared/middleware/`, applied on routes/controllers. Services get `userId` as params, not `req`.

## Dependency direction

```
routes/controllers → services → (domain | repositories | ai providers)
domain ↛ Express, DB, OpenAI, HTTP
repositories ↛ domain rules, AI
ai module ↛ prediction scoring
modules ↛ other modules' internals (expose via service interfaces)
controllers ↛ other modules' repositories or domain
services ↛ req/res (pass userId/context as arguments)
```

## Cross-module (strict)

```ts
// ✅ predictions service
const fighter = await fighterService.getById(id);

// ❌ never
import { FighterRepository } from '../fighters/repositories/...';
```

Extract to microservice later: replace `fighterService` with `fighterClient` (same interface, HTTP adapter).

## Middleware

Location: `shared/middleware/` — `authenticate`, `requirePermission('module:action')`, `validate(schema)`.

Wire on routes: global → router → per-route. Auth/RBAC at HTTP edge only; domain/repos stay unaware.

Permissions align to modules: `fighters:read`, `predictions:create`, etc.

## `shared/` contents

`db`, `cache`, `logger`, `errors`, `middleware`, generic `utils`, global `types` — **no feature business logic**.

## Module folder pattern (typical)

```
modules/<name>/
├── routes/
├── controllers/
├── services/
├── repositories/
├── validators/
├── dto/
├── types/
└── utils/          # optional
```

**Predictions** adds:

```
modules/predictions/domain/
├── entities/
├── rules/
├── scoring/
└── modifiers/
```

## Build priority

1. `fighters`, `predictions`, derived metrics  
2. `ai` narration, caching, validation  
3. `comments`, rankings, reputation, realtime  

## Anti-patterns

- God services, framework-coupled domain logic
- AI in prediction formulas or canonical writes without validation
- Giant shared utilities folder
- Microservices before modular monolith is proven
- Cross-module repository/domain imports
- Auth/RBAC logic inside domain or repositories
- Reading `req` inside services

## Related docs

- [Human overview](../../human/backend/architecture-overview.md)
- [AI Fight Predictor PRD](../../prd/ai-fight-predictor.md) — product scope & prediction module design
- [Frontend architecture skill](../architecture-skill.md)
