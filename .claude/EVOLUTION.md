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

The archive is rooted in **material culture studies** (Appadurai, Mauss, Miller, Barthes). This is the invisible scaffolding that powers the thinking tool:

- **Anthropology**: How objects function in rituals, exchange, social structure
- **Semiotics**: How objects function as signs in cultural systems
- **Design anthropology**: How designed objects mediate human relationships
- **Archaeology & art history**: Reading culture through artifacts
- **Museum studies**: Object contextualization and interpretation

The experience is **accessible, not scholarly** — users engage in genuine cultural thinking without needing theoretical knowledge.

---

## Discovery Model: Autonomy in Thinking
**Date**: 2026-04-08

Users don't answer predefined questions. **They ask their own questions.**

### Question Framework (User-Determined Intent)
- **WHO MADE IT** — Artists, makers, creators
- **WHAT IT'S MADE OF** — Materials, craftsmanship, technique
- **HOW IT WAS MADE** — Process, methods, skill
- **WHEN** — Time period, era, historical moment
- **THE TRADE** — Economy, patronage, market
- **WHAT IT SHOWS** — Subject, story, narrative
- **WHERE** — Location, geography, place
- **WHY** — Cultural forces, meaning, purpose

Users select their interests at onboarding. These reshape how the constellation appears. Click "WHEN" → see temporal clusters. Click "THE TRADE" → see economic/patronage networks. Same objects, different meaning based on the question.

### Entry Points
1. **Upload an object** → See how it could relate to existing objects → Explore relationships
2. **Browse existing** → Click object → See its dimensions → Explore through your questions

### Retention Mechanism
- Users can change their questions anytime
- Same archive, infinite re-discovery as their thinking evolves
- Encourages return visits to explore new dimensions

---

## Prototype: Static Mental Model
**Date**: 2026-04-08
**File**: `prototype.html`

Interactive static prototype demonstrating:
- Onboarding (user intent capture)
- Constellation visualization with 7 real art history objects
- Dynamic filtering based on selected questions
- Upload flow showing how objects integrate
- Shows how same objects reveal different relationships depending on user's questions

**Objects included**:
- Caravaggio's "The Calling of Matthew"
- Vermeer's "Girl with Pearl Earring"
- Egyptian Vase
- Michelangelo's David
- Sagrada Familía
- Japanese Pottery
- Ancient Coins

Each object is connected based on shared question types. When you filter by question, relationships highlight only where they're relevant to your thinking.

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
