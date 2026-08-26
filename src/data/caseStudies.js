const caseStudies = [
  {
    id: 'weatherxm',
    tag: '01 — Flagship',
    company: 'WeatherXM',
    role: 'Head of Design (0\u21921 team building)',
    title: 'From bottleneck to force multiplier',
    hook: 'A $0-revenue MVP with no clear customer, rebuilt around real research into a $10K MRR product \u2014 while building the team and process that made it repeatable.',
    chips: [
      { before: '$0', after: '$10K MRR' },
      { before: '0.1%', after: '2% conv.' },
      { before: '1', after: '4 designers' },
    ],
    sections: [
      {
        heading: 'Context',
        body: `I joined WeatherXM as the first design hire, reporting into the CPO. WeatherXM Pro \u2014 a subscription product layered on top of the company's crowdsourced weather station network \u2014 had already shipped a 20-day MVP under business pressure, with no research behind it. My mandate was broad and undefined: fix Pro, and figure out what "design" should even mean at this company along the way.`,
      },
      {
        heading: 'The bottleneck',
        body: `The V1 numbers told the real story before any user did: 1,200 monthly users, $0 revenue. An early project retro put it bluntly \u2014 there was no clear value proposition and no research in place. I was also the only designer in the building, so every roadmap decision ran through one person. The most urgent early task wasn't fixing Pro directly, it was building a team that could.`,
      },
      {
        heading: 'Hiring philosophy',
        body: `Rather than hire for polish, I built a custom two-day exercise: re-ideate a weather app from scratch, live, under time pressure \u2014 a test of how someone thinks under ambiguity, not a portfolio review. Over nine months I grew the team from one to four: a designer to take over the companion apps, a research specialist who stood up two ongoing Discord research panels, and a third designer who owned the design system and a growing backlog of design debt.`,
      },
      {
        heading: 'Turning research into a roadmap',
        body: `We went back to the question V1 had skipped: who is this for, and why would they pay? That meant 30+ interviews, two focus groups, four surveys, and continuous analytics \u2014 plus direct validation at industry meteorology expos. That work surfaced Forecast Accuracy Tracking (FACT) as the real product wedge. A full redesign was estimated at six months of dev time, which wasn't viable, so we broke it into four shippable phases instead of one big bet.`,
      },
      {
        heading: 'Results',
        body: `The interim FACT release moved conversion from 0.1% to 2% within a month, with a 40% higher acceptance rate in post-mortem research. The full rollout took Pro from $0 to 5,000 unique users and $10,000 MRR, while the underlying station network scaled from roughly 2,000 to over 10,000 worldwide.`,
      },
      {
        heading: 'Reflection',
        body: `The headline metric is the revenue jump, but the more durable outcome was structural: a product with no clear customer got one, and a team that could keep finding the next wedge without me being the single point of failure.`,
      },
    ],
  },
  {
    id: 'etg-payments',
    tag: '02 — ETG Group',
    company: 'ETG Group',
    role: 'UX Lead, Pre-Booking Experience',
    title: 'Influence without authority',
    hook: 'As the sole designer covering Payments and Fraud, I had no positional leverage to shape the roadmap \u2014 so I earned a seat at the table instead of waiting for one.',
    chips: [{ before: 'no seat', after: 'trusted input' }],
    sections: [
      {
        heading: 'Context',
        body: `At ETG, I lead UX strategy across the flight booking funnel and mentor a group of designers. Within that, I'm the sole designer covering two of the highest-stakes, lowest-visibility surfaces in the product: Payments UX and an internal fraud detection system \u2014 surfaces that get treated as "solved" engineering problems until something breaks.`,
      },
      {
        heading: 'The problem',
        body: `Payments and fraud tooling don't come with a built-in seat at the table. Roadmap decisions here are made by engineering and risk stakeholders first, with UX brought in late if at all. Being the only designer meant no positional leverage to change that by fiat \u2014 I had to earn input by being right often enough, and early enough, that leaving design out of a conversation started to feel like a mistake.`,
      },
      {
        heading: 'Approach',
        body: `I treated every roadmap item as something to actively evaluate rather than passively design for \u2014 pushing back on feasibility assumptions before a spec was finalized, and building direct relationships with the engineering and risk stakeholders who actually owned these systems. Over time that shifted the pattern: instead of being handed a scoped ticket, I started getting looped into problem framing before a solution existed.`,
      },
      {
        heading: 'Outcome',
        body: `Two shipped products across the booking flow, part of a broader effort that contributed to a measurable lift in daily sales. The more transferable outcome: proof that design influence in a technically-owned, high-stakes surface doesn't require a title \u2014 it requires judgment stakeholders come to rely on.`,
      },
    ],
  },
  {
    id: 'etg-ai-cost',
    tag: '03 — ETG Group',
    company: 'ETG Group',
    role: 'UX Lead, Pre-Booking Experience',
    title: 'Systems thinking, applied',
    hook: `A company-wide AI tooling cost noticed from a design chair, prototyped as a working system, and rolled out to cut costs 60%.`,
    chips: [{ before: 'cloud AI', after: '60% cheaper' }],
    sections: [
      {
        heading: 'The observation',
        body: `Working across design, research, and lightweight coding day to day, I noticed routine AI-assisted tasks were running almost entirely through paid cloud tools, on hardware that was mostly sitting idle outside those calls. It read less like a design problem than an infrastructure one \u2014 but it was costing the company real money.`,
      },
      {
        heading: 'The proposal',
        body: `I proposed and built a proof of concept for running local LLMs (12\u201332GB class) directly on the team's existing hardware, as a substitute for cloud AI tools on routine, non-critical tasks: everyday coding help, design ideation, first-pass research synthesis.`,
      },
      {
        heading: 'Result',
        body: `The proof of concept worked well enough to roll out company-wide, cutting AI tooling costs by 60%. It wasn't prompted by a brief or a stakeholder ask \u2014 it came from noticing a systemic inefficiency and following it through to a measurable, company-wide result.`,
      },
    ],
  },
  {
    id: 'etg-ai-ambassador',
    tag: '04 — ETG Group, current',
    company: 'ETG Group',
    role: 'Named AI Ambassador, UX team',
    title: 'Scaling AI fluency across a team',
    hook: 'From solving my own AI cost problem to being trusted to raise an entire team\u2019s ceiling \u2014 named AI Ambassador, mentoring on Figma agents and Claude Code, and now median prototyping time is down 75%.',
    chips: [
      { before: '8h', after: '2h prototyping' },
      { before: 'file drift', after: '80% cleaner' },
    ],
    sections: [
      {
        heading: 'Context',
        body: `The local LLM initiative solved a cost problem, but it also made me the person people came to when they wanted to know what AI could actually do for design work. That reputation turned into a formal mandate: I was named AI Ambassador for the UX team, with an open brief to raise the team's AI fluency, not just my own.`,
      },
      {
        heading: 'The mandate',
        body: `Being an ambassador rather than just an early adopter meant the job wasn't "use AI well," it was "make sure the team can." That split into three threads: evangelizing adoption, mentoring designers hands-on in building their own Figma agents and pairing Claude Code with Figma for prototyping, and making sure none of this came at the cost of design system integrity.`,
      },
      {
        heading: 'What I built',
        body: `I taught the team to combine Claude Code with Figma \u2014 using code generation to handle the mechanical parts of a prototype while Figma stayed the source of truth for design decisions. I also built AI-assisted checks that watch for design system changes and propagate awareness of them across the team's working files automatically, instead of relying on individual designers to notice drift.`,
      },
      {
        heading: 'Results',
        body: `Median prototyping time dropped from a full 8-hour workday to roughly 2 hours. The design-system sync work cut file inconsistency and clutter across the team's working files by 80%.`,
      },
      {
        heading: 'Reflection',
        body: `The local LLM story was about me solving a problem. This one is about turning that into something a team can rely on without me in the room \u2014 the same shift from individual contribution to force multiplication that defines the WeatherXM story, at a different scale.`,
      },
    ],
  },
];

export default caseStudies;
