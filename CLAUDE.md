# Nowhere Club Chat — Project Philosophy

## Core Concept: Object Archive from First Principles

The archive is a **thinking tool rooted in material culture studies** where users explore objects through **8 core concepts** that form the foundational framework for understanding culture.

### The 8 Core Concepts (Guard Rails)

These are NOT tags or categories. They are **first-class conceptual frameworks** drawn from anthropology, semiotics, design anthropology, archaeology, and art history:

1. **WHO MADE IT** — Artists, makers, creators (agency & authorship)
2. **WHAT IT'S MADE OF** — Materials, craftsmanship, technique (materiality)
3. **HOW IT WAS MADE** — Process, methods, skill (labor & craft)
4. **WHEN** — Time period, era, historical moment (temporality)
5. **THE TRADE** — Economy, patronage, market (social systems & exchange)
6. **WHAT IT SHOWS** — Subject, story, narrative (representation & meaning)
7. **WHERE** — Location, geography, place (spatial & cultural context)
8. **WHY** — Cultural forces, meaning, purpose (significance & agency)

Each concept has:
- **Depth**: Explanatory context showing why that dimension of understanding matters
- **Richness**: Examples that illustrate how the concept applies to specific objects
- **Connection**: Shows how objects relate through shared conceptual dimensions

### First Principles Approach
1. **Users choose their questions**: At onboarding, users select which concepts they want to understand
2. **Objects reveal themselves through concepts**: When users engage with an object, they choose which conceptual lens to explore it through
3. **Depth over breadth**: Each concept provides context that enriches understanding, not just labels
4. **Learning through exploration**: Every interaction teaches users new dimensions of cultural thinking

### The Flow
1. **Onboarding** → User selects which 1-8 concepts interest them
2. **Constellation** → Objects appear grouped by shared conceptual relationships
3. **Engagement** → Click object → Choose which concept to explore it through
4. **Context** → System provides rich explanation of why that concept matters for that object
5. **Feedback** → User can add their own insight (optional)

### Current Components
- **ImageConstellation** — Visual representation of how concepts relate/cluster
- **ThumbnailGallery** — Media within a concept or related concept group
- **AppSidebar** — Concept navigation/discovery
- **SplineBackground** — Ambient, conceptual visual experience

### AI's Role
- **Vision analysis**: Identify which concepts are most relevant to an uploaded object
- **Feedback validation**: Analyze user feedback to see if it's additive to concept understanding
- **Knowledge synthesis**: Bring up relevant user perspectives when others explore the same object/concept
- *See IDEAS.md for future AI feedback features*

### Not in Scope (Yet)
- Traditional search/filtering by metadata
- Rigid category hierarchies
- Single-user view (designed for collaborative exploration)

---

## Development Guard Rails

### When Adding Features
**Ask these questions:**

1. **Does it strengthen one of the 8 core concepts?**
   - If no, it probably shouldn't exist
   
2. **Does it enable discovery through concepts rather than metadata?**
   - Search by concept: YES
   - Search by tag or keyword: NO (violates philosophy)
   
3. **Does it add depth to how users understand cultural thinking?**
   - Providing context, examples, relationships: YES
   - Adding more UI, more options, more complexity: Probably NO
   
4. **Can we remove anything instead?**
   - Deletion > Addition
   - Simple > Clever

### Concept Integrity
- Never add a 9th concept without deep justification
- Each concept should be irreducible (can't be broken down further without losing meaning)
- Concepts should remain **accessible** (no jargon) but **scholarly** (rooted in real disciplines)

### Component Patterns
- Use `isFocused` state for context-aware rendering
- Maintain ambient, explorable visual language (Spline backgrounds, constellations)
- Animation should enhance discovery, not distract from concepts
- Keep accessibility and motion considerations in mind
