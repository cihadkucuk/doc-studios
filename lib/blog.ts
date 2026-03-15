import type { SiteLocale } from "@/lib/i18n"

export type BlogSection = {
  heading: string
  paragraphs: string[]
}

export type LocalizedBlogPost = {
  title: string
  description: string
  excerpt: string
  seoTitle: string
  seoDescription: string
  sections: BlogSection[]
}

export type BlogPost = {
  slug: string
  publishedAt: string
  updatedAt: string
  readingMinutes: number
  translations: Record<SiteLocale, LocalizedBlogPost>
}

const posts: BlogPost[] = [
  {
    slug: "workscope-for-film-advertising-and-games",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15",
    readingMinutes: 5,
    translations: {
      en: {
        title: "Our Workscope for Film, Advertising, and Games",
        description: "How DOC Studios structures end-to-end music production across cinematic and commercial formats.",
        excerpt:
          "We cover strategy, composition, production, revisions, and delivery to keep each project release-ready from day one.",
        seoTitle: "Workscope for Film, Advertising, and Game Music | DOC Studios",
        seoDescription:
          "Learn how DOC Studios handles full-scope music production for film, advertising, and games with clear processes and reliable delivery.",
        sections: [
          {
            heading: "What Our Workscope Includes",
            paragraphs: [
              "Our workscope is designed as a complete chain, not as disconnected tasks. We begin with creative direction and brief alignment, then move to composition, arrangement, sound design, and final production.",
              "Each project receives a structure that matches the distribution format. A film cue, a 30-second advertisement edit, and an adaptive game track all require different technical logic, and we design for those differences from the first draft.",
            ],
          },
          {
            heading: "Production Flow Built for Deadlines",
            paragraphs: [
              "We run milestones in short cycles: concept draft, refined draft, mix pass, and release master. This gives clients measurable checkpoints instead of last-minute uncertainty.",
              "Because approvals are planned in advance, stakeholders can make decisions quickly without losing quality. The result is a stable workflow where creative output and production timing remain aligned.",
            ],
          },
          {
            heading: "Why This Scope Helps Clients",
            paragraphs: [
              "A defined workscope reduces scope creep, keeps budgets predictable, and lowers communication overhead. Teams know what will be delivered and when.",
              "Most importantly, the music is delivered in a release-ready state: the right format, the right edits, and the right documentation for deployment.",
            ],
          },
        ],
      },
      cs: {
        title: "Náš pracovní rozsah pro film, reklamu a hry",
        description: "Jak DOC Studios strukturuje komplexní hudební produkci pro filmové i komerční formáty.",
        excerpt:
          "Pokrýváme strategii, kompozici, produkci, revize i finální dodání tak, aby byl projekt od začátku připravený na vydání.",
        seoTitle: "Pracovní rozsah hudební produkce pro film, reklamu a hry | DOC Studios",
        seoDescription:
          "Zjistěte, jak DOC Studios zajišťuje kompletní hudební produkci pro film, reklamu a hry s jasným procesem a spolehlivým dodáním.",
        sections: [
          {
            heading: "Co náš pracovní rozsah obsahuje",
            paragraphs: [
              "Náš workscope je navržen jako plný řetězec, nikoli jako oddělené úkoly. Začínáme kreativním směrováním a sladěním zadání, pokračujeme kompozicí, aranží, sound designem a finální produkcí.",
              "Každý projekt dostává strukturu podle distribučního formátu. Filmová stopa, 30sekundový reklamní střih i adaptivní herní hudba vyžadují odlišnou technickou logiku, se kterou pracujeme už od prvního návrhu.",
            ],
          },
          {
            heading: "Produkční tok postavený na termínech",
            paragraphs: [
              "Pracujeme v krátkých milnících: koncept, rozpracovaný návrh, mix a finální master. Klient tak má měřitelné kontrolní body místo nejistoty na poslední chvíli.",
              "Protože jsou schvalovací kroky plánované dopředu, rozhodování je rychlé bez ztráty kvality. Výsledkem je stabilní workflow, kde je kreativní výstup v souladu s termíny.",
            ],
          },
          {
            heading: "Proč tento rozsah pomáhá klientům",
            paragraphs: [
              "Jasně definovaný rozsah omezuje rozšiřování zadání, drží rozpočet pod kontrolou a snižuje komunikační zátěž. Tým přesně ví, co a kdy dostane.",
              "Nejdůležitější je, že hudba přichází ve stavu připraveném na vydání: správný formát, správné verze a správná dokumentace pro nasazení.",
            ],
          },
        ],
      },
      es: {
        title: "Nuestro alcance de trabajo para cine, publicidad y videojuegos",
        description: "Cómo DOC Studios estructura una producción musical integral para formatos cinematográficos y comerciales.",
        excerpt:
          "Cubrimos estrategia, composición, producción, revisiones y entrega final para que cada proyecto esté listo para publicación desde el primer día.",
        seoTitle: "Alcance de trabajo en música para cine, publicidad y videojuegos | DOC Studios",
        seoDescription:
          "Descubre cómo DOC Studios gestiona producción musical completa para cine, publicidad y videojuegos con procesos claros y entregas fiables.",
        sections: [
          {
            heading: "Qué incluye nuestro alcance de trabajo",
            paragraphs: [
              "Nuestro workscope está diseñado como una cadena completa, no como tareas aisladas. Empezamos con dirección creativa y alineación del briefing, y seguimos con composición, arreglo, diseño sonoro y producción final.",
              "Cada proyecto recibe una estructura adaptada al formato de distribución. Una pieza para cine, un corte publicitario de 30 segundos y una pista adaptativa para videojuegos requieren lógicas técnicas distintas, y trabajamos esas diferencias desde el primer borrador.",
            ],
          },
          {
            heading: "Flujo de producción orientado a plazos",
            paragraphs: [
              "Trabajamos por hitos cortos: borrador conceptual, borrador refinado, pase de mezcla y máster final. Así el cliente obtiene puntos de control medibles en lugar de incertidumbre al final.",
              "Como las aprobaciones se planifican por adelantado, las decisiones se toman con rapidez sin perder calidad. El resultado es un flujo estable en el que creatividad y timing van en la misma dirección.",
            ],
          },
          {
            heading: "Por qué este alcance beneficia al cliente",
            paragraphs: [
              "Un alcance definido reduce desvíos, mantiene presupuestos predecibles y baja la carga de coordinación. El equipo sabe exactamente qué se entrega y cuándo.",
              "Lo más importante: la música se entrega lista para publicación, con el formato correcto, las ediciones correctas y la documentación correcta para su despliegue.",
            ],
          },
        ],
      },
      de: {
        title: "Unser Workscope für Film, Werbung und Games",
        description: "Wie DOC Studios die Musikproduktion Ende-zu-Ende für cineastische und kommerzielle Formate strukturiert.",
        excerpt:
          "Wir decken Strategie, Komposition, Produktion, Revisionen und Delivery ab, damit jedes Projekt von Anfang an release-ready ist.",
        seoTitle: "Workscope für Film-, Werbe- und Game-Musik | DOC Studios",
        seoDescription:
          "Erfahren Sie, wie DOC Studios die vollständige Musikproduktion für Film, Werbung und Games mit klaren Prozessen und verlässlicher Lieferung umsetzt.",
        sections: [
          {
            heading: "Was unser Workscope umfasst",
            paragraphs: [
              "Unser Workscope ist als vollständige Kette aufgebaut, nicht als lose Einzelaufgaben. Wir starten mit Creative Direction und Briefing-Abstimmung und gehen dann in Komposition, Arrangement, Sounddesign und finale Produktion.",
              "Jedes Projekt erhält eine Struktur passend zum Distributionsformat. Ein Film-Cue, ein 30-Sekunden-Werbeschnitt und ein adaptiver Game-Track brauchen unterschiedliche technische Logik, die wir bereits ab dem ersten Entwurf berücksichtigen.",
            ],
          },
          {
            heading: "Produktionsablauf mit Terminsteuerung",
            paragraphs: [
              "Wir arbeiten in kurzen Meilensteinen: Konzeptentwurf, verfeinerter Entwurf, Mix-Pass und Release-Master. So entstehen messbare Freigabepunkte statt Unsicherheit kurz vor Schluss.",
              "Da Freigaben früh geplant werden, können Stakeholder schnell entscheiden, ohne Qualitätsverlust. Das Ergebnis ist ein stabiler Workflow mit synchroner Kreativ- und Zeitplanung.",
            ],
          },
          {
            heading: "Warum dieser Umfang für Kunden wichtig ist",
            paragraphs: [
              "Ein klar definierter Umfang reduziert Scope Creep, hält Budgets planbar und senkt den Abstimmungsaufwand. Teams wissen präzise, was wann geliefert wird.",
              "Entscheidend ist: Die Musik wird release-ready geliefert, mit passendem Format, den richtigen Fassungen und vollständiger Einsatzdokumentation.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "positive-sides-of-structured-licensing",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-15",
    readingMinutes: 4,
    translations: {
      en: {
        title: "Positive Sides of Our Structured Licensing",
        description: "Why clear licensing architecture protects campaigns and accelerates release workflows.",
        excerpt:
          "Our licensing model keeps rights explicit, reduces legal friction, and helps teams ship faster with lower distribution risk.",
        seoTitle: "Benefits of Structured Music Licensing | DOC Studios",
        seoDescription:
          "See the key advantages of DOC Studios' structured licensing model: clear rights, lower risk, and faster campaign execution.",
        sections: [
          {
            heading: "Clear Rights, Clear Decisions",
            paragraphs: [
              "A structured license makes every permission explicit: media format, territory, term, and exclusivity. That clarity removes avoidable legal debates during production.",
              "When rights are mapped to real usage from the start, creative and legal teams can move in parallel instead of blocking each other.",
            ],
          },
          {
            heading: "Lower Distribution Risk",
            paragraphs: [
              "Our framework is built around claim-free delivery principles, transparent ownership, and controlled usage boundaries. This lowers the chance of interruptions after launch.",
              "For clients, this means fewer surprises in platform operations and more confidence when scaling a campaign across channels.",
            ],
          },
          {
            heading: "Faster Campaign Execution",
            paragraphs: [
              "With defined terms and pre-agreed options, contract cycles are shorter. Teams spend less time renegotiating and more time shipping.",
              "In practical terms: faster approvals, cleaner handovers, and music assets that are easier to deploy across markets.",
            ],
          },
        ],
      },
      cs: {
        title: "Pozitivní stránky naší strukturované licence",
        description: "Proč jasná licenční architektura chrání kampaně a zrychluje release workflow.",
        excerpt:
          "Náš licenční model drží práva jednoznačná, snižuje právní tření a pomáhá týmům rychleji publikovat s nižším distribučním rizikem.",
        seoTitle: "Výhody strukturované hudební licence | DOC Studios",
        seoDescription:
          "Podívejte se na hlavní výhody licenčního modelu DOC Studios: jasná práva, nižší riziko a rychlejší realizace kampaní.",
        sections: [
          {
            heading: "Jasná práva, rychlá rozhodnutí",
            paragraphs: [
              "Strukturovaná licence jasně určuje každé oprávnění: formát média, území, dobu a exkluzivitu. Tím odstraňuje zbytečné právní spory během produkce.",
              "Když jsou práva od začátku navázaná na reálné použití, kreativní i právní tým může pracovat paralelně bez blokací.",
            ],
          },
          {
            heading: "Nižší distribuční riziko",
            paragraphs: [
              "Náš rámec stojí na principech claim-free dodání, transparentní vlastnické struktuře a kontrolovaných hranicích použití. Tím se snižuje riziko problémů po spuštění.",
              "Pro klienta to znamená méně provozních překvapení na platformách a vyšší jistotu při škálování kampaní napříč kanály.",
            ],
          },
          {
            heading: "Rychlejší realizace kampaní",
            paragraphs: [
              "Díky definovaným podmínkám a předem připraveným variantám jsou smluvní cykly kratší. Tým tráví méně času vyjednáváním a více času realizací.",
              "V praxi to znamená rychlejší schválení, čistší předání podkladů a hudební materiály připravené pro více trhů.",
            ],
          },
        ],
      },
      es: {
        title: "Ventajas de nuestra estructura de licencias",
        description: "Por qué una arquitectura de licencias clara protege campañas y acelera los flujos de publicación.",
        excerpt:
          "Nuestro modelo de licencias mantiene derechos explícitos, reduce fricción legal y ayuda a los equipos a publicar más rápido con menor riesgo.",
        seoTitle: "Ventajas de una licencia musical estructurada | DOC Studios",
        seoDescription:
          "Conoce los beneficios del modelo de licencias de DOC Studios: derechos claros, menor riesgo y ejecución más rápida de campañas.",
        sections: [
          {
            heading: "Derechos claros, decisiones claras",
            paragraphs: [
              "Una licencia estructurada define cada permiso: formato, territorio, plazo y exclusividad. Esa claridad elimina debates legales evitables durante la producción.",
              "Cuando los derechos se alinean con el uso real desde el inicio, los equipos creativos y legales avanzan en paralelo sin bloquearse.",
            ],
          },
          {
            heading: "Menor riesgo de distribución",
            paragraphs: [
              "Nuestro marco se apoya en principios de entrega sin reclamaciones, titularidad transparente y límites de uso controlados. Eso reduce interrupciones después del lanzamiento.",
              "Para el cliente, significa menos sorpresas operativas en plataformas y mayor seguridad al escalar campañas entre canales.",
            ],
          },
          {
            heading: "Ejecución de campañas más rápida",
            paragraphs: [
              "Con términos definidos y opciones preacordadas, los ciclos contractuales son más cortos. Los equipos dedican menos tiempo a renegociar y más a ejecutar.",
              "En la práctica: aprobaciones más rápidas, traspasos más limpios y activos musicales más fáciles de desplegar en distintos mercados.",
            ],
          },
        ],
      },
      de: {
        title: "Die positiven Seiten unserer strukturierten Lizenzierung",
        description: "Warum eine klare Lizenzarchitektur Kampagnen schützt und Release-Workflows beschleunigt.",
        excerpt:
          "Unser Lizenzmodell hält Rechte eindeutig, reduziert rechtliche Reibung und hilft Teams, schneller mit geringerem Distributionsrisiko zu veröffentlichen.",
        seoTitle: "Vorteile strukturierter Musiklizenzierung | DOC Studios",
        seoDescription:
          "Die wichtigsten Vorteile des DOC Studios Lizenzmodells: klare Rechte, geringeres Risiko und schnellere Kampagnenumsetzung.",
        sections: [
          {
            heading: "Klare Rechte, klare Entscheidungen",
            paragraphs: [
              "Eine strukturierte Lizenz macht jede Berechtigung explizit: Medienformat, Gebiet, Laufzeit und Exklusivität. Diese Klarheit reduziert vermeidbare Rechtsdiskussionen in der Produktion.",
              "Wenn Rechte von Beginn an auf reale Nutzung abgebildet sind, können Kreativ- und Legal-Teams parallel arbeiten statt sich gegenseitig zu blockieren.",
            ],
          },
          {
            heading: "Geringeres Distributionsrisiko",
            paragraphs: [
              "Unser Rahmen basiert auf claim-freien Delivery-Prinzipien, transparenter Rechtekette und kontrollierten Nutzungsgrenzen. Dadurch sinkt das Risiko von Unterbrechungen nach dem Launch.",
              "Für Kunden bedeutet das weniger operative Überraschungen auf Plattformen und mehr Sicherheit beim Skalieren von Kampagnen über mehrere Kanäle.",
            ],
          },
          {
            heading: "Schnellere Kampagnenumsetzung",
            paragraphs: [
              "Mit definierten Konditionen und vorab abgestimmten Optionen werden Vertragszyklen kürzer. Teams verbringen weniger Zeit mit Nachverhandlungen und mehr Zeit mit Umsetzung.",
              "Praktisch heißt das: schnellere Freigaben, sauberere Übergaben und Musik-Assets, die in mehreren Märkten einfacher ausgerollt werden können.",
            ],
          },
        ],
      },
    },
  },
]

export const getAllBlogPosts = () => posts

export const getAllBlogSlugs = () => posts.map((post) => post.slug)

export const getLocalizedBlogPost = (slug: string, locale: SiteLocale) => {
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return null
  }

  return {
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingMinutes: post.readingMinutes,
    ...post.translations[locale],
  }
}

export const getLocalizedBlogList = (locale: SiteLocale) => {
  return posts.map((post) => ({
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingMinutes: post.readingMinutes,
    ...post.translations[locale],
  }))
}
