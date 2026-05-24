# PRD — MMA Baithak AI Fight Predictor

| Field | Value |
|-------|--------|
| **Product name** | MMA Baithak — AI Fight Predictor |
| **Status** | Draft |
| **Primary phase** | Post-MVP (Phase 1 feature) |
| **Likely feature folder** | `features/predictions` |
| **Last updated** | 2026-05-23 |

---

## Product vision

Build an AI-powered combat sports intelligence platform where users can:

- Compare fighters
- Simulate matchups
- View tactical breakdowns
- Analyze probabilities
- Participate in prediction communities
- Consume intelligent MMA insights

The platform should evolve from a simple matchup predictor into a **scalable combat intelligence ecosystem**.

---

## Primary MVP goal

Validate whether MMA fans:

- Enjoy AI-driven fight analysis
- Revisit the product repeatedly
- Share fight simulations socially
- Engage in debates around predictions

---

## Core product philosophy

The system should rely on:

- Deterministic backend intelligence
- Structured fighter data
- Explainable prediction logic
- AI-generated narration / explanations

**The LLM must NOT directly decide fight outcomes.**

Instead:

1. Backend computes predictions
2. AI explains them naturally

---

## MVP scope

### User inputs

#### Required inputs

| Input | Options / notes |
|-------|-----------------|
| Fighter A | Selected from fighter database |
| Fighter B | Selected from fighter database |
| Number of rounds | 3 or 5 |

#### Optional inputs (future-ready)

Supported in **schema and architecture from day one**. Default values auto-populate for casual users.

| Input | Default behavior |
|-------|------------------|
| Weight class override | Auto from fighter records |
| Prime / current fighter version | Current |
| Venue type | Neutral |
| Altitude adjustment | None |
| Full camp / short notice | Full camp |
| Cage / ring type | Standard UFC cage |
| Travel disadvantage | None |
| Injury assumptions | None |

### MVP outputs

#### Core outputs

| Output | Description |
|--------|-------------|
| Win probability | Per-fighter win % |
| Predicted winner | Highest-probability fighter |
| Method probability | KO/TKO, Submission, Decision |
| Tactical strengths | Key stylistic edges |
| Key matchup advantages | Where each fighter has an edge |
| Upset conditions | Scenarios that flip the prediction |
| Confidence level | Engine confidence in the result |

#### AI narrative output

Human-readable analysis including:

- Stylistic matchup breakdown
- Pacing expectations
- Grappling / striking advantages
- Fight flow explanation
- Possible momentum shifts

---

## Long-term vision

Transform into a **Combat Sports Intelligence Platform**.

Future capabilities may include:

- Live fight simulations
- Round-by-round probability shifts
- Community predictions
- Verified fighter accounts
- Ranking systems
- Prediction leaderboards
- Analyst reputation systems
- Fantasy systems
- Advanced fighter intelligence graphs
- Betting market comparisons
- Historical matchup engine
- AI-generated event previews
- Prediction accuracy tracking
- Social sharing ecosystem

---

## System design principles

### 1. Deterministic intelligence first

Fight outcomes are computed using structured backend logic.

LLMs only:

- Narrate
- Summarize
- Explain
- Extract structured observations

### 2. Layered intelligence system

```
┌─────────────────────────────────────┐
│  Layer 4 — AI Narration Layer       │  Readable analysis, tactical narratives
├─────────────────────────────────────┤
│  Layer 3 — Prediction Engine        │  Weighted logic, modifiers, probabilities
├─────────────────────────────────────┤
│  Layer 2 — Derived Intelligence     │  Momentum, cardio, durability, fight IQ…
├─────────────────────────────────────┤
│  Layer 1 — Raw Truth Layer          │  Fights, results, stats, fighter metadata
└─────────────────────────────────────┘
```

#### Layer 1 — Raw truth layer

Canonical historical data:

- Fights
- Results
- Statistics
- Fighter metadata

#### Layer 2 — Derived intelligence layer

Computes:

- Momentum
- Cardio
- Durability
- Fight IQ
- Pressure score
- Grappling effectiveness
- Style matchup modifiers

#### Layer 3 — Prediction engine

Uses:

- Weighted logic
- Matchup modifiers
- Contextual adjustments

to generate fight probabilities.

#### Layer 4 — AI narration layer

Converts structured prediction output into:

- Readable analysis
- Tactical narratives
- Engaging summaries

---

## Core database concepts

### Raw data tables (examples)

| Table | Purpose |
|-------|---------|
| `fighters` | Canonical fighter records |
| `fights` | Fight history |
| `fight_stats` | Per-fight statistics |
| `events` | Event / card metadata |

These represent **canonical truth**.

### Derived metrics tables (examples)

| Table | Purpose |
|-------|---------|
| `fighter_derived_metrics` | Computed fighter intelligence |
| `fight_performance_metrics` | Per-fight derived performance |

Derived metrics may include:

- Win streak
- Finish rate
- Momentum score
- Cardio score
- Durability score
- Recent activity
- Championship experience

---

## Prediction engine design

### MVP engine

**Weighted deterministic scoring engine.**

Initial implementation must **NOT** use machine learning.

#### Responsibilities

- Normalize fighter metrics
- Apply matchup modifiers
- Compute weighted probabilities
- Identify stylistic advantages
- Generate structured prediction output

---

## Data ingestion philosophy

### MVP

Hybrid ingestion:

- Manual entry
- Structured APIs
- AI-assisted extraction

### Validation rules

Incoming updates must:

- Pass validation checks
- Avoid contradictory updates
- Maintain historical consistency
- Store confidence levels
- Preserve auditability

**AI-generated data must never directly overwrite canonical records without validation.**

---

## Scalability considerations

The system should be architected for future expansion **without major refactors**.

### Architectural principles

| Principle | Requirement |
|-----------|-------------|
| **Modular domain separation** | Prediction logic, AI logic, and data access remain isolated |
| **Versioned derived metrics** | Support `scoring version`, `metric version`, `prediction version` for reproducibility |
| **Reproducible predictions** | Each prediction preserves metric snapshot, scoring weights, engine version |
| **Extensible fighter context** | Future attributes integrate without schema redesign |

Examples of future context attributes:

- Camp quality
- Altitude adaptation
- Southpaw performance
- Opponent archetype performance

---

## Future feature phases

| Phase | Capabilities |
|-------|--------------|
| **Phase 1 — MVP** | Fighter comparison, AI prediction, tactical breakdowns, probability engine |
| **Phase 2 — Community** | Comments, public predictions, likes/reactions, polls |
| **Phase 3 — Reputation** | Prediction streaks, analyst ranks, leaderboards, user credibility |
| **Phase 4 — Fighter ecosystem** | Verified fighters/coaches, fighter profiles, creator profiles |
| **Phase 5 — Advanced intelligence** | Live probability updates, dynamic simulations, ML-assisted adjustments, style graphing, trend analysis |

---

## Non-goals for MVP

The MVP must **not** initially include:

- Betting systems
- Real-money systems
- Complex ML training pipelines
- Realtime live simulation engines
- Large-scale microservices
- Advanced social networking systems

---

## Success metrics

### MVP success indicators

| Signal | Target behavior |
|--------|-----------------|
| Repeat usage | Users repeatedly simulate fights |
| Social sharing | Predictions get shared externally |
| Engagement | Users debate outcomes |
| Retention | Users revisit the platform |
| Perceived quality | Prediction experience feels intelligent and believable |

**Perfect prediction accuracy is NOT required initially.**

Focus on:

- Consistency
- Explainability
- Engagement
- Trustworthiness

---

## Architecture alignment

### Frontend (Next.js)

| Concern | Location |
|---------|----------|
| UI / routes | `features/predictions`, `app/predictions/*` |
| API client | `services/predictions.ts`, `services/fighters.ts` |
| Types | `types/prediction.ts`, `types/fighter.ts` |
| Shared UI | `shared/ui/` — probability bars, matchup cards |

See [features-guide.md](../human/features-guide.md) and [architecture-overview.md](../human/architecture-overview.md).

### Backend (Node.js + Express)

General backend patterns: [human/backend/architecture-overview.md](../human/backend/architecture-overview.md).

#### Predictions module structure

```
modules/predictions/
├── domain/
│   ├── entities/
│   ├── rules/
│   ├── scoring/
│   └── modifiers/
├── services/
├── repositories/
├── validators/
├── dto/
├── prompts/          # narration prompts only — not scoring logic
└── routes/ / controllers/
```

#### Domain layer (predictions)

**Framework-independent, DB-independent, AI-provider-independent.**

Pure functions such as `calculateFightPrediction(fighterA, fighterB, context)` return structured output:

- Win / method probabilities
- Stylistic advantages
- Upset / risk factors
- Confidence metadata

No knowledge of Express, database drivers, or OpenAI.

#### AI module (shared `modules/ai/`)

Handles only:

- Prompt construction
- Narration generation
- Structured extraction
- Response parsing

Must **not** contain prediction formulas, canonical truth, or core fight logic.

#### Concern separation (predictor)

| Concern | Module / layer |
|---------|-----------------|
| Deterministic fight logic | `predictions/domain/` |
| Persistence | `predictions/repositories/`, fighters repos |
| Consistency checks | validators + ingestion validation |
| HTTP/API | routes, controllers, dto |
| Narration | `ai/services/` + `predictions/prompts/` |

#### Reproducibility

Each stored prediction should snapshot:

- Metric versions
- Scoring / engine version
- Input context (rounds, optional modifiers)

See [Scalability considerations](#scalability-considerations) above.
