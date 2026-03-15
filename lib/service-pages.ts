export type ServicePageSlug =
  | "film-scoring-prague"
  | "game-music-composer-prague"
  | "advertising-music-production-prague"

type ProcessStep = {
  title: string
  description: string
}

type ExampleWork = {
  title: string
  label: string
  image: string
  imageAlt: string
  overview: string
  details: string
}

type FaqItem = {
  question: string
  answer: string
}

type RelatedLink = {
  href: string
  label: string
}

export type ServicePageContent = {
  slug: ServicePageSlug
  title: string
  description: string
  h1: string
  heroIntro: string
  heroCtaLabel: string
  overviewHeading: string
  overviewParagraphs: string[]
  useCasesHeading: string
  useCasesIntro: string
  useCases: string[]
  processHeading: string
  processIntro: string
  processSteps: ProcessStep[]
  deliverablesHeading: string
  deliverablesIntro: string
  deliverables: string[]
  exampleHeading: string
  exampleIntro: string
  exampleWorks: ExampleWork[]
  faqHeading: string
  faqs: FaqItem[]
  closingHeading: string
  closingBody: string
  closingCtaLabel: string
  relatedLinksHeading: string
  relatedLinks: RelatedLink[]
}

export const servicePages: Record<ServicePageSlug, ServicePageContent> = {
  "film-scoring-prague": {
    slug: "film-scoring-prague",
    title: "Film Scoring Studio in Prague | Original Scores for Film & Series | DOC Studios",
    description:
      "DOC Studios creates original film scores in Prague for feature films, documentaries, trailers, and streaming productions with cinematic precision and clear licensing.",
    h1: "Film Scoring Studio in Prague",
    heroIntro:
      "DOC Studios is a film scoring studio in Prague focused on original music for feature films, documentaries, trailers, and streaming productions. We compose with narrative discipline, shape emotional pacing around the edit, and deliver score material in a release-ready structure. The result is cinematic music that feels intentional, supports story, and remains practical for modern post-production teams.",
    heroCtaLabel: "Start Film Scoring Brief",
    overviewHeading: "Original Film Scores Built for Story and Editorial Flow",
    overviewParagraphs: [
      "Our film scoring work starts with the story arc and editorial rhythm, not with templates. We map dramatic tension, scene transitions, and emotional thresholds, then define where music should lead, where it should support, and where silence is stronger. This approach keeps the score connected to picture and protects narrative clarity.",
      "We write original score material tailored to each production format. Documentary music often needs restrained thematic development and tonal continuity. Trailer music typically requires controlled escalation and clear energy architecture. Episodic streaming productions often need themes that can evolve over multiple episodes without losing identity.",
      "As a Prague film scoring studio, we combine creative direction with practical delivery. We build score decisions around real production constraints, including dialogue space, mix compatibility, revision cycles, and distribution timelines. If your team also needs interactive music or campaign sound strategy, our adjacent service pages cover game music composition and advertising music production.",
    ],
    useCasesHeading: "Who This Film Scoring Service Is For",
    useCasesIntro:
      "This service is designed for directors, producers, editors, and post teams who need an original score with both artistic depth and delivery discipline. Typical use cases include:",
    useCases: [
      "Feature films that need thematic continuity from opening cue to final credits.",
      "Documentary projects requiring subtle musical framing without overstatement.",
      "Trailer edits that need controlled build-up, impact moments, and clean endings.",
      "Streaming productions that require recurring motifs and episode-level flexibility.",
      "Short films and narrative pilots that need a strong sonic identity early in development.",
    ],
    processHeading: "Film Scoring Process in 4 Practical Steps",
    processIntro:
      "We keep the process clear so creative decisions happen fast and production stays predictable. A typical workflow includes:",
    processSteps: [
      {
        title: "1. Brief and Spotting",
        description:
          "We review the cut, discuss tone, define emotional targets, and mark priority scenes where score should actively shape narrative movement.",
      },
      {
        title: "2. Thematic Direction",
        description:
          "We develop thematic sketches and tonal language, then align with your creative direction before moving into full cue production.",
      },
      {
        title: "3. Cue Production and Revision",
        description:
          "We compose, arrange, and produce cues in structured rounds so feedback stays focused and revisions remain efficient.",
      },
      {
        title: "4. Final Delivery and Licensing Clarity",
        description:
          "We deliver final masters, stems, and required versions with clear rights documentation. Licensing options are available in our dedicated licensing section.",
      },
    ],
    deliverablesHeading: "Typical Film Scoring Deliverables",
    deliverablesIntro:
      "Deliverables are adapted to project format, but this is the standard release-ready package most productions request:",
    deliverables: [
      "Original score cues aligned to approved edit points",
      "Stereo final mixes for each approved cue",
      "Stem groups for post and mix flexibility",
      "Alternate intensity or edit versions when needed",
      "Short cutdowns for trailer and promotional edits",
      "Music notes for cue placement and handover clarity",
      "Version labeling structured for post workflow",
      "Clear licensing scope for usage, term, and territory",
    ],
    exampleHeading: "Selected Work Reference: Maria",
    exampleIntro:
      "A currently visible sample relevant to this service is Maria, presented on our homepage works section as a film score reference.",
    exampleWorks: [
      {
        title: "Maria",
        label: "Film Score Sample",
        image: "/images/maria.jpg",
        imageAlt: "Maria film score sample artwork",
        overview:
          "Maria is presented as a melancholic orchestral composition focused on sorrow, liberation, and emotional narrative weight.",
        details:
          "This reference illustrates our cinematic composition direction: emotional clarity, thematic intent, and careful control of dynamics. You can review the sample context directly in our selected works section.",
      },
    ],
    faqHeading: "FAQ: Film Scoring in Prague",
    faqs: [
      {
        question: "Do you create original scores or license pre-made tracks?",
        answer:
          "For this service, we focus on original score creation built around your film narrative. If your release strategy also requires licensing clarity, we structure usage options through our licensing framework.",
      },
      {
        question: "Can you score documentaries and trailers as separate deliverables?",
        answer:
          "Yes. Documentary and trailer formats need different musical logic, so we treat them as distinct deliverables while preserving a coherent project identity.",
      },
      {
        question: "How do revisions usually work?",
        answer:
          "We run revisions in planned rounds tied to clear checkpoints. This keeps feedback actionable and helps avoid late-stage scope confusion.",
      },
      {
        question: "Do you deliver stems for post-production?",
        answer:
          "Yes. Stem delivery is part of the standard production-ready workflow so mix and editorial teams can adapt music placement precisely.",
      },
      {
        question: "Can this service connect to game or advertising projects?",
        answer:
          "Yes. If your production spans multiple formats, we can align scoring direction with our game music and advertising music services so the sonic identity remains coherent.",
      },
    ],
    closingHeading: "Need an Original Film Score with Production Discipline?",
    closingBody:
      "Share your cut stage, format, and timeline. We will define a film scoring workflow that fits your story, your post schedule, and your release plan.",
    closingCtaLabel: "Send Project Brief",
    relatedLinksHeading: "Related Internal Links",
    relatedLinks: [
      { href: "/licensing", label: "Structured music licensing options" },
      { href: "/game-music-composer-prague", label: "Game music composer service in Prague" },
      { href: "/advertising-music-production-prague", label: "Advertising music production service in Prague" },
      { href: "/blog/workscope-for-film-advertising-and-games", label: "Our production workscope article" },
    ],
  },
  "game-music-composer-prague": {
    slug: "game-music-composer-prague",
    title: "Game Music Composer in Prague | Adaptive Soundtracks for Games | DOC Studios",
    description:
      "DOC Studios composes original game music in Prague for indie and commercial titles, including adaptive soundtracks, thematic scoring, and immersive audio direction.",
    h1: "Game Music Composer in Prague",
    heroIntro:
      "DOC Studios composes original game music in Prague for indie and commercial titles that need strong musical identity and practical implementation structure. We build adaptive soundtracks, thematic scoring systems, and gameplay-aware musical transitions designed to support immersion without creating technical friction for your production pipeline.",
    heroCtaLabel: "Start Game Music Brief",
    overviewHeading: "Adaptive Game Music with Thematic and Technical Clarity",
    overviewParagraphs: [
      "Game music succeeds when composition and implementation strategy are aligned from the beginning. We design themes, loops, layers, and transition logic with gameplay pacing in mind, so the soundtrack can react to player states while keeping a coherent musical voice.",
      "Our process supports both linear and adaptive needs. Some titles need focused motif writing for key narrative sequences. Others require broader interactive soundtrack architecture with exploration, tension, combat, and result states. We shape each deliverable set around your gameplay structure and production scope.",
      "For teams building cross-channel releases, we can align game score direction with film scoring or advertising music production so trailers, launch assets, and in-game audio retain a unified sonic identity.",
    ],
    useCasesHeading: "Who This Game Music Service Is For",
    useCasesIntro:
      "This service is built for studios, creative directors, and audio leads that need a reliable composition partner with practical production discipline:",
    useCases: [
      "Indie teams defining a clear musical identity for first commercial release.",
      "Game studios needing adaptive soundtrack structure across core gameplay states.",
      "Projects requiring thematic scoring for narrative beats and character arcs.",
      "Teams preparing launch trailers that must stay sonically aligned with in-game score.",
      "Studios that need clean handover packages for efficient implementation workflow.",
    ],
    processHeading: "Game Music Workflow in 5 Steps",
    processIntro:
      "We keep decisions measurable and implementation-ready. A typical workflow includes:",
    processSteps: [
      {
        title: "1. Audio Brief and Gameplay Mapping",
        description:
          "We align on game tone, pacing, and core state changes to define where music must react and where it should remain stable.",
      },
      {
        title: "2. Theme and Palette Design",
        description:
          "We establish motifs, instrumentation direction, and tonal hierarchy so the soundtrack remains recognizable across different gameplay contexts.",
      },
      {
        title: "3. Adaptive Composition",
        description:
          "We compose core cues, loopable layers, and transition-compatible sections aligned to gameplay intensity and state movement.",
      },
      {
        title: "4. Review and Revision",
        description:
          "We refine based on playtest or capture feedback, focusing on pacing, emotional clarity, and practical implementability.",
      },
      {
        title: "5. Delivery and Licensing Definition",
        description:
          "We deliver production-ready files and clear usage terms. Licensing paths for commercial release are outlined in our licensing framework.",
      },
    ],
    deliverablesHeading: "Typical Game Music Deliverables",
    deliverablesIntro:
      "Deliverables are adapted to engine and scope, but this package reflects common production requirements:",
    deliverables: [
      "Original themes for core gameplay identity",
      "State-based cue sets (for example exploration and high-intensity variants)",
      "Loop-ready versions for stable in-game playback",
      "Transition-friendly musical sections",
      "Stem groups for implementation flexibility",
      "Short-form edits for reveal or launch content",
      "Clear file naming and version structure",
      "Usage clarity for distribution and release planning",
    ],
    exampleHeading: "Selected Work Reference: Doerfield",
    exampleIntro:
      "A currently visible sample aligned with this service is Doerfield, presented as a game music reference in our selected works section.",
    exampleWorks: [
      {
        title: "Doerfield",
        label: "Game Music Sample",
        image: "/images/doerfield.jpg",
        imageAlt: "Doerfield game music sample artwork",
        overview:
          "Doerfield is presented as an epic battle-oriented composition combining orchestral scale with interactive pacing sensibility.",
        details:
          "This sample reflects our approach to gameplay immersion: strong thematic direction, controlled energy architecture, and cues designed to support player experience rather than distract from it.",
      },
    ],
    faqHeading: "FAQ: Game Music Composition in Prague",
    faqs: [
      {
        question: "Do you work with both indie and commercial game teams?",
        answer:
          "Yes. We support different production scales and structure the scope around realistic timelines, review cycles, and release goals.",
      },
      {
        question: "Can you compose both adaptive and linear game music?",
        answer:
          "Yes. We can deliver adaptive sets for gameplay states and linear cues for cinematics or narrative moments within the same project.",
      },
      {
        question: "Do you provide stems and loop-ready versions?",
        answer:
          "Yes. Stems and loop-compatible files are part of the standard workflow when implementation flexibility is required.",
      },
      {
        question: "Can campaign or trailer music match the in-game soundtrack?",
        answer:
          "Yes. We can maintain a coherent sonic identity across gameplay music and external campaign assets.",
      },
      {
        question: "How is licensing handled for released games?",
        answer:
          "We offer clear licensing structures with defined rights, territories, and terms. This helps teams ship with fewer legal ambiguities in distribution.",
      },
    ],
    closingHeading: "Need a Game Soundtrack That Supports Real Gameplay?",
    closingBody:
      "Tell us your game type, tone, and production stage. We will define a music plan that is creatively strong and implementation-ready.",
    closingCtaLabel: "Submit Game Audio Brief",
    relatedLinksHeading: "Related Internal Links",
    relatedLinks: [
      { href: "/licensing", label: "Review game-ready licensing structures" },
      { href: "/film-scoring-prague", label: "Film scoring service in Prague" },
      { href: "/advertising-music-production-prague", label: "Advertising music production service in Prague" },
      { href: "/blog/positive-sides-of-structured-licensing", label: "Benefits of structured licensing" },
    ],
  },
  "advertising-music-production-prague": {
    slug: "advertising-music-production-prague",
    title: "Advertising Music Production in Prague | Commercial & Brand Audio | DOC Studios",
    description:
      "DOC Studios produces advertising music in Prague for commercials, branded content, campaigns, and sonic identity systems with premium, strategic audio direction.",
    h1: "Advertising Music Production in Prague",
    heroIntro:
      "DOC Studios delivers advertising music production in Prague for campaigns that need strong brand fit and reliable delivery speed. We compose original commercial music, shape sonic direction for product storytelling, and produce campaign-ready versions for multiple channels. The objective is clear: music that strengthens message, supports conversion goals, and stays consistent across edits.",
    heroCtaLabel: "Start Campaign Audio Brief",
    overviewHeading: "Commercial Music and Brand Audio with Strategic Direction",
    overviewParagraphs: [
      "Advertising audio works best when it is built around strategy, not only style. We start by defining tone, audience, and campaign function, then write music that supports brand positioning and editorial structure. Whether the campaign needs premium restraint or high-energy momentum, the score direction remains intentional.",
      "We produce music for commercials, branded content, social edits, product launches, and broader sonic branding systems. Campaigns often require multiple durations, market-specific cutdowns, and different platform contexts. We design versions from the beginning so your team can move fast without sacrificing cohesion.",
      "If your campaign is connected to narrative film or game releases, we can coordinate sonic direction with our film scoring and game music composition services for cross-format consistency.",
    ],
    useCasesHeading: "Who This Advertising Audio Service Is For",
    useCasesIntro:
      "This service is designed for agencies, brand teams, and production partners who need premium commercial audio with clear execution:",
    useCases: [
      "Brand campaigns that require a defined sonic identity across channels.",
      "Product films that need music tightly aligned with visual storytelling.",
      "Commercial edits requiring 30, 15, 10, or 6 second performance versions.",
      "Launch campaigns where rapid revision cycles must remain controlled.",
      "Teams needing one audio partner for composition, production, and delivery structure.",
    ],
    processHeading: "Advertising Music Production Process",
    processIntro:
      "We keep campaign timelines practical and transparent. A typical process includes:",
    processSteps: [
      {
        title: "1. Campaign Brief and Sonic Direction",
        description:
          "We align on brand tone, target audience, message priority, and channel mix to define clear musical direction before production starts.",
      },
      {
        title: "2. Composition and First Cut",
        description:
          "We deliver original track concepts built around edit rhythm and message framing, with focus on clarity and memorability.",
      },
      {
        title: "3. Versioning and Refinement",
        description:
          "We produce campaign versions and refinements for different placements while keeping a unified sonic identity.",
      },
      {
        title: "4. Delivery and Rights Clarity",
        description:
          "We hand over final files in structured formats and define usage boundaries clearly. Licensing details are available in our dedicated licensing framework.",
      },
    ],
    deliverablesHeading: "Typical Advertising Music Deliverables",
    deliverablesIntro:
      "Deliverables are adjusted to campaign scope, but these are the most common outputs requested by production and agency teams:",
    deliverables: [
      "Original commercial music track aligned to campaign brief",
      "Versioned cuts for core ad durations",
      "Brand-safe alternate versions for A/B edits",
      "Sting or mnemonic-ready assets when required",
      "Mix and stem exports for final post flexibility",
      "Platform-aware loudness and format handover support",
      "Clean file structure for multi-market rollout",
      "Clear rights scope for channel, territory, and term",
    ],
    exampleHeading: "Selected Work Reference: Apple iPhone XR",
    exampleIntro:
      "A currently visible sample aligned with this service is Apple iPhone XR, presented in our selected works as an advertising music reference.",
    exampleWorks: [
      {
        title: "Apple iPhone XR",
        label: "Advertisement Sample",
        image: "/images/apple-iphone-xr.jpg",
        imageAlt: "Apple iPhone XR advertisement music sample artwork",
        overview:
          "This reference is presented as minimal, premium, and product-focused, built to support clear technology storytelling.",
        details:
          "It reflects our campaign mindset: strategic sonic framing, controlled detail, and production choices designed to keep the product message in focus.",
      },
    ],
    faqHeading: "FAQ: Advertising Music Production in Prague",
    faqs: [
      {
        question: "Can you produce multiple ad lengths from one music direction?",
        answer:
          "Yes. We design core campaign music with versioning in mind so shorter and longer edits remain coherent across channels.",
      },
      {
        question: "Do you handle sonic branding as well as single campaign tracks?",
        answer:
          "Yes. We can support one-off commercial production and broader sonic identity development, depending on campaign goals.",
      },
      {
        question: "How quickly can first concepts be delivered?",
        answer:
          "Timing depends on campaign complexity and revision scope, but we structure milestones for predictable review windows and practical decision-making.",
      },
      {
        question: "Can music be adapted for different markets and platforms?",
        answer:
          "Yes. We plan variation and delivery structure so campaign assets can be adjusted without losing brand consistency.",
      },
      {
        question: "How do licensing terms work for advertising use?",
        answer:
          "Licensing is defined by real usage parameters such as territory, term, channel, and exclusivity, so campaign teams can deploy with clear boundaries.",
      },
    ],
    closingHeading: "Need Campaign Audio That Supports Brand and Performance?",
    closingBody:
      "Share your campaign scope, format mix, and timeline. We will propose an advertising music production plan tailored to your creative and distribution needs.",
    closingCtaLabel: "Send Campaign Brief",
    relatedLinksHeading: "Related Internal Links",
    relatedLinks: [
      { href: "/licensing", label: "Review advertising licensing options" },
      { href: "/film-scoring-prague", label: "Film scoring service in Prague" },
      { href: "/game-music-composer-prague", label: "Game music composer service in Prague" },
      { href: "/blog/workscope-for-film-advertising-and-games", label: "How our production workscope is structured" },
    ],
  },
}
