# Backend Architecture Overview

**Stack:** Node.js + Express  
**Style:** Feature-based modular architecture with lightweight clean architecture for critical domains  
**Strategy:** Modular monolith first — extract services later only when needed

---

## Goal

Build a backend that is:

- **Feature-isolated** — business capabilities own their code
- **Maintainable** — related logic stays colocated
- **Fast to iterate** — MVP-friendly, no premature enterprise complexity
- **Scalable over time** — modules can evolve or split into workers/services later

Organize by **business capability** (fighters, predictions, users), **not** by generic technical layers at the top level.

---

## Recommended structure

```
src/
├── modules/
│   ├── fighters/       # routes, controllers, services, repositories, validators, dto, types
│   ├── predictions/    # domain/ (entities, rules, scoring, modifiers) + services, repositories…
│   ├── ai/             # providers, prompts, parsers, services
│   ├── users/
│   └── comments/
├── shared/             # db, cache, logger, errors, middleware, constants, utils, types
├── config/
├── app.ts
└── server.ts
```

Each module owns its HTTP surface and business orchestration. **Critical domains** (especially predictions) add an inner **`domain/`** layer for pure business logic.

---

## Layer responsibilities

| Layer | Owns | Must NOT own |
|-------|------|----------------|
| **Routes / controllers** | HTTP, request/response | Business rules, DB queries |
| **Services** | Orchestration: repos, domain, AI, cache, validation | Giant rule blocks; framework internals |
| **Domain** (critical modules) | Pure fight logic, scoring, probabilities | Express, DB, OpenAI, HTTP |
| **Repositories** | Persistence, queries | Prediction formulas, AI narration |
| **AI module** | Prompts, parsing, narration, structured extraction | Outcome math, canonical truth |
| **Shared** | Cross-cutting infra only | Feature-specific business logic |

---

## Critical separation (non-negotiable)

1. **Prediction engine computes** — deterministic, weighted, explainable  
2. **AI explains** — narrates structured engine output only  
3. **Repositories persist** — no domain rules  
4. **Domain stays pure** — no framework or provider imports  

Product rules for the predictor live in the [AI Fight Predictor PRD](../../prd/ai-fight-predictor.md).

---

## Validation

Validate at multiple levels:

- Request / schema validation (input shape)
- Business validation (domain rules)
- Conflict detection (consistency with canonical data)

Keep validators modular and reusable per module.

---

## Cross-module communication

Modules must **not** import another module's repositories, domain functions, or internal utils.

| Allowed | Not allowed |
|---------|-------------|
| `FighterService.getById()` from `predictions` service | `FighterRepository` from `predictions` |
| `AiNarrationService.narrate()` from `predictions` service | Direct OpenAI calls inside `predictions/domain` |
| DTOs/types exposed as a module's public contract | Deep imports into `modules/fighters/repositories/` |

Each module exposes a **small public surface** (typically `services/` + shared DTOs). Controllers call **own** module services only; those services orchestrate cross-module calls.

**Monolith:** in-process service → service calls.

**After extract:** swap the client for HTTP/gRPC (`IFighterClient`) — domain and orchestration stay; only the adapter changes.

Pass `userId` and context as **service parameters**, not via global `req` inside services (keeps logic testable and microservice-ready).

---

## Middleware (auth, RBAC, validation)

Cross-cutting HTTP concerns live in **`shared/middleware/`** and attach **on top of routes** — not inside domain or repositories.

Typical stack (outside → in):

```
global (cors, logger, body parser)
  → authenticate
  → requirePermission('predictions:create')   // RBAC
  → validate(schema)
  → controller → service
  → error handler
```

Apply at **global**, **router**, or **single-route** level:

```ts
router.post('/simulate', authenticate, requirePermission('predictions:create'), validate(simulateSchema), controller.simulate);
router.get('/:id', optionalAuth, controller.getById);
```

| Concern | Location |
|---------|----------|
| JWT / session verify | `shared/middleware/auth.middleware.ts` |
| Roles & permissions | `shared/middleware/rbac.middleware.ts` |
| Request schema | `shared/middleware/validate.middleware.ts` or module validators |
| Login/register business logic | `modules/users/services/` |

Permissions should map to **modules/capabilities** (e.g. `fighters:read`, `predictions:create`, `comments:moderate`).

Services receive `userId` from the controller; they do **not** read `req` directly.

---

## What belongs in `shared/`

| In `shared/` | Not in `shared/` |
|--------------|------------------|
| DB pool / ORM setup (`shared/db/`) | Prediction scoring |
| Cache client (`shared/cache/`) | Fighter-specific queries |
| Logger, error types, error middleware | Module-only helpers |
| Auth/RBAC/validation middleware | Feature business rules |
| Generic utils (ids, dates) | “Shared” code used by one module only |

If two modules need the same **business** behavior, one module **owns** it and exposes a **service** — do not move it to `shared/`.

---

## Scalability path

**Now:** single deployable app, strict module boundaries  

**Growth:** same app + background workers/queues (AI narration, derived metrics rebuilds)  

**Later (without domain rewrite):** extract a module to its own service — e.g. `predictions`, `ai` — by replacing in-process service calls with API clients at the boundary  

Avoid microservices until traffic, team size, or deploy needs justify the ops cost.

```
Modular monolith (MVP)  →  workers/queues  →  optional service split
     in-process service calls          →     HTTP/gRPC + same interfaces
```

---

## Build order (recommended)

| Priority | Modules / systems |
|----------|-------------------|
| **First** | Fighters, predictions, derived metrics |
| **Then** | AI narration, caching, validation hardening |
| **Later** | Comments, rankings, reputation, realtime |

---

## Anti-patterns to avoid

- Giant `shared/` dumping ground
- Massive god-service classes
- Business logic coupled to Express or ORM types
- Premature microservices
- Over-abstracted generic layer cake
- AI deciding fight outcomes or overwriting canonical records without validation
- Cross-module imports of repositories or domain code
- Auth/RBAC inside services, domain, or repositories
- Passing `req` into services instead of explicit context (`userId`, etc.)

---

## Frontend integration

The Next.js app consumes this API through its **`services/`** layer only — no prediction logic in UI components. See [architecture-overview.md](../architecture-overview.md) (frontend).

For agent-oriented rules, see [../../ai/backend/architecture-skill.md](../../ai/backend/architecture-skill.md).
