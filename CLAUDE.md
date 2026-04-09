# Nowhere Club Chat — Project Philosophy

## Core Concept: Object Archive from First Principles

The archive organizes media (images, content) not by traditional metadata (tags, folders, dates), but by **core concepts** — the fundamental subjects and ideas that media represents.

### First Principles Approach
1. **Break down to essentials**: What does this image/media fundamentally represent? (person, object, emotion, idea, cultural moment, etc.)
2. **Navigate by concepts, not categories**: Users explore via concept-maps where media clusters around shared meaning
3. **Collective understanding**: Core concepts are refined through user interactions, feedback, and cross-user insights

### Current Components
- **ImageConstellation** — Visual representation of how concepts relate/cluster
- **ThumbnailGallery** — Media within a concept or related concept group
- **AppSidebar** — Concept navigation/discovery
- **SplineBackground** — Ambient, conceptual visual experience

### AI's Role
- **Vision analysis**: Extract core subjects from uploaded media
- **Feedback validation**: Analyze user feedback to see if it's additive to concept understanding
- **Knowledge synthesis**: Bring up relevant user perspectives when others discuss the same object/concept
- *See IDEAS.md for future AI feedback features*

### Not in Scope (Yet)
- Traditional search/filtering by metadata
- Rigid category hierarchies
- Single-user view (designed for collaborative exploration)

---

## Development Guidelines

### When Adding Features
1. Does it serve the concept-first philosophy?
2. Does it enable discovery through core ideas rather than labels?
3. Are we adding noise or clarifying relationships?

### Component Patterns
- Use `isFocused` state for context-aware rendering (see InputGroupDemo usage)
- Maintain ambient, explorable visual language (Spline backgrounds, constellations)
- Keep accessibility and motion considerations in mind
