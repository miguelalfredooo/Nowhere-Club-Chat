# Design Evolution & Iterations

## Core Concept Origin
**Date**: 2026-04-08

**Insight**: Object archives should be organized by first-principles thinking — breaking media down to core subjects/concepts rather than traditional metadata. This enables concept-map navigation where meaning is primary.

**Why it matters**: 
- Creates a thinking tool, not just a storage tool
- Enables discovery through conceptual relationships
- Scales better than tag-based systems as collections grow
- Supports collaborative sense-making through AI-mediated insights

---

## Component Architecture

### Current Components (as of Apr 2)
- **AppSidebar** — Main navigation hub (concept explorer)
- **ImageConstellation** — Concept relationship visualization
- **ThumbnailGallery** — Media preview for concept/group
- **InputGroupDemo** — Chat/feedback interface
- **SplineBackground** — Ambient visual context
- **SoundManager** — Audio feedback (integrated with interactions)

### Design Decisions

#### Sidebar-Driven Navigation
**Decision**: AppSidebar as the primary navigation method  
**Rationale**: Provides persistent concept context while media + chat stay in focus  
**Alternative rejected**: Tab-based or modal navigation (loses concept awareness during interaction)

#### Focus State Management
**Decision**: Track `isInputFocused` to adjust gallery visibility/prominence  
**Rationale**: When user is typing/chatting, gallery can adapt (fade, reorder, hide)  
**Future**: Could trigger AI to surface relevant media as user types

---

## Material Culture Studies Foundation
**Date**: 2026-04-08

The archive is rooted in **material culture studies** (Appadurai, Mauss, Miller, Barthes). The 8 core concepts ARE the operational framework derived from these disciplines:

- **Anthropology** → WHO, THE TRADE, WHERE (social structures, exchange systems, location)
- **Semiotics** → WHAT IT SHOWS, WHY (signs, meaning, representation)
- **Design anthropology** → HOW IT WAS MADE, WHAT IT'S MADE OF (process, materiality)
- **Archaeology & art history** → WHEN, WHO MADE IT (temporality, authorship)
- **Museum studies** → All concepts (contextualization through multiple lenses)

The 8 concepts are **irreducible** — you cannot break them down further without losing their explanatory power. They form a complete framework for understanding how objects encode and mediate cultural meaning.

The experience is **accessible, not scholarly** — users engage in genuine cultural thinking without needing to know the theory behind each concept.

---

## The 8 Core Concepts as Guard Rails
**Date**: 2026-04-08

The 8 concepts are NOT negotiable. They are:

1. **Irreducible** — Cannot be broken down further without losing meaning
2. **Complete** — Together they form a complete framework for understanding culture
3. **Distinct** — Each addresses a different dimension of how objects carry meaning
4. **Rooted in scholarship** — Derived from actual disciplines (anthropology, semiotics, etc.)
5. **Accessible** — Phrased in everyday language, not academic jargon
6. **Actionable** — Users can actually explore objects through each one

Guard rail tests:
- **Before adding a 9th concept**: Would removing one of the existing 8 break the framework? If no, don't add #9.
- **Before modifying a concept**: Does the change preserve its distinctness from the other 7? If no, it's violating the architecture.
- **Before adding a feature**: Does it serve the concepts, or does it add complexity around them? If complexity, reconsider.

## Discovery Model: Autonomy in Thinking
**Date**: 2026-04-08

Users don't answer predefined questions. **They explore objects through conceptual lenses they choose.**

### The Concept Framework (User-Determined Intent)
- **WHO MADE IT** — Artists, makers, creators
- **WHAT IT'S MADE OF** — Materials, craftsmanship, technique
- **HOW IT WAS MADE** — Process, methods, skill
- **WHEN** — Time period, era, historical moment
- **THE TRADE** — Economy, patronage, market
- **WHAT IT SHOWS** — Subject, story, narrative
- **WHERE** — Location, geography, place
- **WHY** — Cultural forces, meaning, purpose

Users select their interests at onboarding. These reshape how the constellation appears. Click "WHEN" → see temporal clusters. Click "THE TRADE" → see economic/patronage networks. Same objects, completely different understanding based on the conceptual lens.

### Entry Points
1. **Upload an object** → See how it could relate to existing objects → Explore relationships
2. **Browse existing** → Click object → See its dimensions → Explore through your questions

### Retention Mechanism
- Users can change their questions anytime
- Same archive, infinite re-discovery as their thinking evolves
- Encourages return visits to explore new dimensions

---

## Context Layer: Why Each Concept Matters
**Date**: 2026-04-08

Each of the 8 concepts has **depth and richness** beyond the label:

When a user engages with an object through a concept, the system provides:
- **Why this concept matters**: Explanation of how this dimension of understanding works
- **How it applies to this object**: Specific context showing why this concept is relevant
- **What it reveals**: What understanding this concept teaches about cultural meaning
- **Invitation for insight**: Space for user to add their own understanding

Example: User clicks Caravaggio through "WHO MADE IT"
- System explains: *"Caravaggio revolutionized painting by bringing divine figures into everyday scenes. His use of light became a signature technique, influencing baroque artists for centuries. Understanding the artist reveals the thinking behind every brushstroke."*

Example: User clicks same painting through "WHEN"
- System explains: *"Created in 1600 during the Counter-Reformation. The Catholic Church commissioned religious art to inspire devotion and compete with Protestant austerity."*

Same object. Same concept framework. Completely different understanding because a different conceptual lens was chosen.

## Prototype: Static Mental Model
**Date**: 2026-04-08
**File**: `prototype.html`

Interactive static prototype demonstrating:
- **Onboarding** → User selects which concepts interest them
- **Constellation** → 7 art history objects grouped by conceptual relationships
- **Engagement Flow** → Click object → choose concept → see context → optionally add feedback
- **Context Screen** → System explains why that concept matters for that object
- **Grayed vs Highlighted** → Visual indication of explored vs unexplored concepts

**Objects included**:
- Caravaggio's "The Calling of Matthew"
- Vermeer's "Girl with Pearl Earring"
- Egyptian Vase
- Michelangelo's David
- Sagrada Familía
- Japanese Pottery
- Ancient Coins

Each object has context explanations for all 8 concepts. When you explore an object through a concept, you see why that dimension of understanding matters.

---

## Future Evolution Directions

### Phase 1: Core Functionality (Current)
- [x] Establish material culture foundation
- [x] Design user-autonomous discovery model
- [x] Create static prototype
- [ ] Build React component implementations (based on prototype)
- [ ] Connect to vision AI for object analysis
- [ ] Implement concept clustering algorithm

### Phase 2: Feedback & Curation
- [ ] User feedback on object relationships
- [ ] AI validation of feedback additive-ness
- [ ] Inter-user knowledge surfacing (see IDEAS.md)
- [ ] Concept refinement through collective interaction

### Phase 3: Social Exploration
- [ ] Multi-user sessions on same objects
- [ ] Concept co-curation
- [ ] Public/private archive modes
- [ ] Cross-cultural perspective surfacing
