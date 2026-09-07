const caseStudies = [
  {
    slug: 'from-figma-to-function',
    status: 'In progress',
    date: '2026',
    title: 'From Figma to Function',
    subtitle: "Rethinking the designer's role in AI-assisted product teams",
    hook: 'The distance between an idea and a working implementation is shrinking. What happens to the designer\u2019s role when it does?',
    premise: `The traditional product design process is becoming insufficient for teams building modern digital products.

The familiar model \u2014 research, wireframes, high-fidelity design, handoff, implementation \u2014 assumes a relatively clear boundary between design and engineering. Designers define the experience, developers implement it, and collaboration happens mostly around constraints, feasibility, and QA.

That boundary is becoming increasingly artificial.

AI-assisted development, faster prototyping tools, mature frontend frameworks, design systems, and increasingly complex product ecosystems are changing what it means to design software. The distance between an idea and a working implementation is shrinking, while the cost of designers remaining detached from implementation is becoming more visible.

This case study explores a different working model: one where product designers move closer to the implementation layer without necessarily becoming full-time software engineers.`,
    hypothesis: 'Product designers who understand technical constraints, can manipulate and prototype real interfaces, and collaborate with engineering from the beginning of the process can make better product decisions, reduce handoff friction, and operate with greater autonomy.',
    sections: [
      {
        heading: 'The old process, and the new one',
        body: `The goal is not to argue that every designer should become an engineer. Instead, the goal is to challenge the idea that technical implementation belongs entirely outside the designer's scope.

A modern product designer does not necessarily need to build production systems independently, but they should be capable of understanding how interfaces are constructed, how frontend constraints influence interaction design, how component systems behave, and how to test ideas closer to the final product.

Basic HTML and CSS literacy, familiarity with browser development tools, understanding component-based architectures, working knowledge of React or similar frameworks, and the ability to use AI-assisted coding tools can significantly change the way a designer approaches a problem.

The process therefore becomes less linear. Instead of Research \u2192 Wireframes \u2192 High-fidelity design \u2192 Handoff \u2192 Development \u2192 QA, the workflow begins to resemble Problem framing \u2192 Product and technical constraints \u2192 Rapid design exploration \u2192 Prototype or coded experiment \u2192 Stakeholder and engineering feedback \u2192 Iteration \u2192 Production implementation \u2192 Continuous refinement.

The designer becomes less of a specification producer and more of an active participant in shaping the product as it is built.`,
      },
      {
        heading: 'The tension',
        body: `This shift creates organizational friction. Many design teams still operate around clearly defined professional boundaries. Activities such as inspecting frontend code, manipulating interfaces with browser tools, understanding component architecture, or discussing implementation details may be considered engineering responsibilities rather than design responsibilities.

From that perspective, expanding the role can appear unnecessary or even threatening. Statements such as "that is not our job" are therefore not simply disagreements about tooling \u2014 they represent different interpretations of what the designer's responsibility should be.

One philosophy treats design as a specialized discipline that should maintain clear boundaries around research, interaction design, visual design, and usability. The other treats product design as an increasingly interdisciplinary practice where understanding implementation is part of understanding the medium itself.

This case study examines what happens when those two models collide.`,
      },
      {
        heading: 'The experiment',
        body: `Rather than debating the future of the design profession theoretically, the approach explored here is practical: deliberately work closer to implementation.

That includes discussing technical constraints earlier in the design process; collaborating directly with engineers during exploration; using browser development tools to understand existing interfaces; developing basic HTML and CSS fluency; experimenting with React and React Native; building functional prototypes instead of relying exclusively on Figma; using AI coding tools to accelerate prototyping and implementation; testing interaction ideas directly in the environment where they will eventually live; and treating design systems as executable systems rather than static component libraries.

The objective is not technical novelty. The objective is to determine whether this approach produces better product decisions and a more effective collaboration model.`,
      },
      {
        heading: 'Questions to explore',
        body: `Does technical literacy make a product designer better at design? Can understanding implementation constraints improve interaction decisions before engineering begins?

Can coded prototypes replace part of the traditional handoff process? Instead of documenting every possible state, can designers communicate intent through functioning interfaces?

Does working closer to engineering reduce iteration cycles? Can feasibility problems, edge cases, and system limitations be identified earlier?

Where should the boundary between designer and engineer actually sit? How much technical knowledge creates meaningful leverage before the role effectively becomes frontend engineering?

How does AI change the answer? If designers can produce functional prototypes and production-quality frontend code with AI assistance, does the traditional division of responsibilities still make sense?

What happens when a team resists this model? How should a designer introduce new ways of working without turning technical curiosity into an implicit judgment of colleagues who prefer a more traditional practice?`,
      },
      {
        heading: 'What this is not',
        body: `This is not an argument that Figma is obsolete, that designers should become software engineers, that traditional UX methods no longer matter, that AI eliminates the need for design expertise, or that every designer needs deep programming knowledge.

Research, interaction design, visual judgment, accessibility, product thinking, and understanding human behavior remain fundamental. The argument is instead that the medium has evolved. Designing software while deliberately avoiding understanding how software is constructed increasingly limits the designer's ability to influence the final product.`,
      },
      {
        heading: 'The larger thesis',
        body: `The role of the product designer is moving away from producing representations of software and toward participating more directly in the creation of software.

The most valuable designers may increasingly become people who can move comfortably across the boundaries between user, product, design, technology, and implementation. They do not need to be the deepest specialist in every layer \u2014 they need enough understanding of each layer to make better decisions across the system.

This creates an emerging professional space somewhere between Product Designer, UX Engineer, Design Engineer, and Product Engineer. The purpose of this case study is to explore that space through practice rather than prediction.`,
      },
      {
        heading: 'What a useful outcome looks like',
        body: `The final conclusion does not need to prove that this model is universally better. A more useful outcome would be identifying where implementation-aware design creates measurable value; which technical skills provide the greatest leverage for designers; where deeper technical involvement becomes counterproductive; how AI changes the economics of prototyping and implementation; how teams can adopt this working model without creating unnecessary role conflict; and what the emerging UX Engineer / Design Engineer role may look like in practice.

Ultimately, the question is not whether designers should learn to code. The more interesting question is: how close to the product itself should a designer be able to get before the distinction between designing software and building software stops being useful?`,
      },
    ],
  },
];

export default caseStudies;
