import type { SiteLocale } from "@/lib/i18n"

export type SiteCopy = {
  nav: {
    home: string
    services: string
    licensing: string
    blog: string
    doc: string
    contact: string
    menu: string
    closeMenu: string
    openNavigation: string
    closeNavigation: string
    languageLabel: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    description: string
    descriptionSecondary: string
  }
  services: {
    headingLead: string
    headingAccent: string
    description: string
    freePackCta: string
    cards: Array<{
      title: string
      subtitle: string
      description: string
    }>
  }
  licensingPreview: {
    headingLead: string
    headingAccent: string
    description: string
    badges: Array<{
      title: string
      description: string
    }>
    highlights: Array<{
      title: string
      content: string
    }>
    cta: string
  }
  works: {
    headingLead: string
    headingAccent: string
    description: string
    samples: Array<{
      title: string
      productType: string
      theme: string
      quote: string
      description: string
      artistInfo: string
    }>
    modal: {
      fallbackTitle: string
      closeVideoLabel: string
      aboutTrackLabel: string
      artistInfoLabel: string
      browserNotSupported: string
      videoUnavailable: string
    }
  }
  contact: {
    headingLead: string
    headingAccent: string
    description: string
    cardTitle: string
    cardDescription: string
    placeholders: {
      firstName: string
      lastName: string
      email: string
      projectType: string
      description: string
    }
    submitIdle: string
    submitLoading: string
    successMessage: string
    genericErrorMessage: string
    locationTitle: string
    locationLabel: string
    locationDescription: string
    emailTitle: string
    emailDescription: string
  }
  footer: {
    tagline: string
    links: {
      services: string
      licensing: string
      blog: string
      contact: string
    }
    copyright: string
    vat: string
  }
  blog: {
    indexLead: string
    indexAccent: string
    indexDescription: string
    readArticle: string
    backToBlog: string
    published: string
    updated: string
    minutesLabel: string
  }
}

export const siteCopy: Record<SiteLocale, SiteCopy> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      licensing: "Licensing",
      blog: "Blog",
      doc: "DOC",
      contact: "Contact",
      menu: "Menu",
      closeMenu: "Close menu",
      openNavigation: "Open navigation menu",
      closeNavigation: "Close navigation menu",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Drive of Chaos",
      titleLead: "Music Production in Prague",
      titleAccent: "for Film, Games & Advertising",
      description: "Precision-crafted soundscapes for film, advertising, and interactive media.",
      descriptionSecondary: "Where corporate excellence meets creative disruption.",
    },
    services: {
      headingLead: "OUR",
      headingAccent: "CRAFT",
      description:
        "Three specialized divisions delivering premium audio solutions for entertainment and commercial industries.",
      freePackCta: "Get Free Sounds Pack",
      cards: [
        {
          title: "Film Scores",
          subtitle: "Cinematic precision meets creative disruption",
          description:
            "Professional orchestral compositions for feature films, documentaries, and streaming content. Delivering emotional impact through controlled sonic architecture.",
        },
        {
          title: "Advertisement",
          subtitle: "Brand identity through strategic sound design",
          description:
            "Commercial audio solutions that elevate brand messaging. From 30-second spots to comprehensive sonic branding campaigns.",
        },
        {
          title: "Game Music",
          subtitle: "Interactive audio for immersive experiences",
          description:
            "Dynamic soundscapes and adaptive music systems for gaming platforms. Creating memorable audio experiences that enhance gameplay.",
        },
      ],
    },
    licensingPreview: {
      headingLead: "RIGHTS WITH",
      headingAccent: "PRECISION",
      description:
        "Boutique cinematic output with enterprise-grade licensing clarity. Every agreement is designed around concrete usage, controlled territory, and measurable exclusivity.",
      badges: [
        {
          title: "Structured Licensing",
          description: "Usage terms are explicitly defined by project scope.",
        },
        {
          title: "Claim-Free",
          description: "Built for stable digital distribution and release flow.",
        },
        {
          title: "Defined Scope",
          description: "No vague clauses, no undefined exploitation windows.",
        },
      ],
      highlights: [
        {
          title: "Scope of Rights",
          content:
            "Film, series, game, advertisement, and digital campaign usage with clear sync, master, and adaptation permissions.",
        },
        {
          title: "Term & Territory",
          content: "1, 3, 5 year, or perpetual structures with local, EU, and worldwide territorial coverage.",
        },
        {
          title: "Exclusivity Models",
          content: "Full Exclusive, Category Exclusive, and Non-Exclusive formats priced by strategic value.",
        },
      ],
      cta: "Explore Full Licensing Framework",
    },
    works: {
      headingLead: "OUR",
      headingAccent: "WORKS",
      description:
        "Selected cinematic and commercial productions developed for film, advertising, and interactive media.",
      samples: [
        {
          title: "Maria",
          productType: "Film Score Sample",
          theme: "Melancholy, Sorrow, Liberation",
          quote: "His war was for freedom; his peace was her name.",
          description:
            "A melancholic orchestral composition that captures the deep sorrow of a woman left behind as her love chose liberation over their bond.",
          artistInfo: "An intimate portrait of heartbreak and sacrifice, composed with raw emotional depth.",
        },
        {
          title: "Apple iPhone XR",
          productType: "Advertisement Sample",
          theme: "Minimal, Premium, Product Focused",
          quote: "Innovation meets sonic precision.",
          description: "Modern, sleek commercial music designed to support premium technology storytelling.",
          artistInfo: "Built for brand campaigns that require clean structure and strong product framing.",
        },
        {
          title: "Doerfield",
          productType: "Game Music Sample",
          theme: "Game, Military, Honor",
          quote: "Victory is written in blood and brass.",
          description: "Epic battle music combining orchestral scale with modern interactive pacing.",
          artistInfo: "Designed for AAA gaming experiences with tactical intensity and cinematic motion.",
        },
      ],
      modal: {
        fallbackTitle: "Work Preview",
        closeVideoLabel: "Close video",
        aboutTrackLabel: "About This Track:",
        artistInfoLabel: "Artist Info:",
        browserNotSupported: "Your browser does not support the video tag.",
        videoUnavailable: "Video unavailable",
      },
    },
    contact: {
      headingLead: "START THE",
      headingAccent: "PROJECT",
      description: "Ready to transform your project with unforgettable sound? Let's create something extraordinary together.",
      cardTitle: "Get in Touch",
      cardDescription: "Tell us about your project and we'll craft the perfect sonic experience.",
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        projectType: "Project Type (Film, Ad, Game, etc.)",
        description: "Tell us about your project vision, timeline, and budget...",
      },
      submitIdle: "Send Project Brief",
      submitLoading: "Sending...",
      successMessage: "Project brief sent successfully. We will get back to you shortly.",
      genericErrorMessage: "Failed to submit the form.",
      locationTitle: "Prague Studio",
      locationLabel: "Vinohrady / Prague 10",
      locationDescription:
        "Located in the heart of Prague's creative quarter, our studio combines cutting-edge technology with the city's rich musical heritage.",
      emailTitle: "Email",
      emailDescription: "For project inquiries, collaborations, and general questions.",
    },
    footer: {
      tagline: "Sound that shapes worlds - Prague, Czech Republic",
      links: {
        services: "Services",
        licensing: "Licensing",
        blog: "Blog",
        contact: "Contact",
      },
      copyright: "(c) 2026 DOC Studios s.r.o. Music Production. All rights reserved.",
      vat: "VAT ID: CZ24340146 | IČO: 24340146",
    },
    blog: {
      indexLead: "DOC",
      indexAccent: "BLOG",
      indexDescription:
        "Insights about our production workscope, licensing strategy, and release-ready music workflows.",
      readArticle: "Read Article",
      backToBlog: "Back to Blog",
      published: "Published",
      updated: "Updated",
      minutesLabel: "min read",
    },
  },
  cs: {
    nav: {
      home: "Domů",
      services: "Služby",
      licensing: "Licence",
      blog: "Blog",
      doc: "DOC",
      contact: "Kontakt",
      menu: "Menu",
      closeMenu: "Zavřít menu",
      openNavigation: "Otevřít navigaci",
      closeNavigation: "Zavřít navigaci",
      languageLabel: "Jazyk",
    },
    hero: {
      eyebrow: "Praha | Hudební produkce",
      titleLead: "DRIVE OF",
      titleAccent: "CHAOS",
      description: "Precizně vytvořené zvukové krajiny pro film, reklamu a interaktivní média.",
      descriptionSecondary: "Kde se firemní profesionalita potkává s tvůrčí disruptivitou.",
    },
    services: {
      headingLead: "NAŠE",
      headingAccent: "SPECIALIZACE",
      description: "Tři specializované divize dodávající prémiová audio řešení pro zábavu i komerční sektor.",
      freePackCta: "Stáhnout zvukový balíček zdarma",
      cards: [
        {
          title: "Filmová hudba",
          subtitle: "Filmová preciznost a kreativní disruptivita",
          description:
            "Profesionální orchestrální kompozice pro celovečerní filmy, dokumenty i streamovací obsah. Silný emoční dopad díky promyšlené zvukové architektuře.",
        },
        {
          title: "Reklamní hudba",
          subtitle: "Identita značky skrze strategický sound design",
          description:
            "Komerční audio řešení, která posilují sdělení značky. Od 30sekundových spotů po komplexní sonic branding kampaně.",
        },
        {
          title: "Hudba pro hry",
          subtitle: "Interaktivní audio pro pohlcující zážitek",
          description:
            "Dynamické zvukové krajiny a adaptivní hudební systémy pro herní platformy. Vytváříme zapamatovatelný zvuk, který podporuje gameplay.",
        },
      ],
    },
    licensingPreview: {
      headingLead: "PRÁVA S",
      headingAccent: "PRECIZNOSTÍ",
      description:
        "Butikový filmový výstup s firemně přesnou licenční strukturou. Každá smlouva je navržena podle konkrétního použití, území a úrovně exkluzivity.",
      badges: [
        {
          title: "Strukturované licence",
          description: "Podmínky použití jsou jasně definované podle rozsahu projektu.",
        },
        {
          title: "Bez nároků třetích stran",
          description: "Model vytvořený pro stabilní digitální distribuci.",
        },
        {
          title: "Jasný rozsah",
          description: "Bez nejasných klauzulí a bez otevřených interpretačních oken.",
        },
      ],
      highlights: [
        {
          title: "Rozsah práv",
          content: "Film, seriál, hra, reklama a digitální kampaň včetně synchronizace, masteru a případných úprav.",
        },
        {
          title: "Doba a území",
          content: "Struktury na 1, 3, 5 let nebo trvale, s lokálním, EU nebo globálním pokrytím.",
        },
        {
          title: "Modely exkluzivity",
          content: "Plná exkluzivita, kategoriální exkluzivita a neexkluzivní modely dle strategické hodnoty.",
        },
      ],
      cta: "Zobrazit celý licenční rámec",
    },
    works: {
      headingLead: "NAŠE",
      headingAccent: "UKÁZKY",
      description: "Vybrané filmové a komerční produkce pro film, reklamu a interaktivní média.",
      samples: [
        {
          title: "Maria",
          productType: "Ukázka filmové hudby",
          theme: "Melancholie, smutek, osvobození",
          quote: "Jeho válka byla za svobodu, jeho mír nesl její jméno.",
          description:
            "Melancholická orchestrální skladba zachycující hluboký smutek ženy, kterou její láska opustila ve jménu svobody.",
          artistInfo: "Intimní portrét zlomeného srdce a oběti, komponovaný s výraznou emoční hloubkou.",
        },
        {
          title: "Apple iPhone XR",
          productType: "Ukázka reklamní hudby",
          theme: "Minimalismus, premium, fokus na produkt",
          quote: "Inovace se potkává se zvukovou precizností.",
          description: "Moderní komerční hudba navržená pro prémiový příběh technologického produktu.",
          artistInfo: "Vhodné pro kampaně, které potřebují čistou strukturu a silný produktový rámec.",
        },
        {
          title: "Doerfield",
          productType: "Ukázka hudby pro hry",
          theme: "Hra, armáda, čest",
          quote: "Vítězství je napsáno krví a žestěmi.",
          description: "Epická bojová hudba kombinující orchestrální měřítko s moderním interaktivním tempem.",
          artistInfo: "Navrženo pro AAA herní zážitky s taktickou intenzitou a filmovým pohybem.",
        },
      ],
      modal: {
        fallbackTitle: "Náhled ukázky",
        closeVideoLabel: "Zavřít video",
        aboutTrackLabel: "O této skladbě:",
        artistInfoLabel: "Informace o autorovi:",
        browserNotSupported: "Váš prohlížeč nepodporuje přehrávání videa.",
        videoUnavailable: "Video není dostupné",
      },
    },
    contact: {
      headingLead: "ZAČNĚME",
      headingAccent: "PROJEKT",
      description: "Chcete proměnit svůj projekt díky nezapomenutelnému zvuku? Vytvořme něco výjimečného.",
      cardTitle: "Napište nám",
      cardDescription: "Popište svůj projekt a navrhneme ideální zvukové řešení.",
      placeholders: {
        firstName: "Jméno",
        lastName: "Příjmení",
        email: "E-mail",
        projectType: "Typ projektu (film, reklama, hra...)",
        description: "Popište vizi projektu, harmonogram a rozpočet...",
      },
      submitIdle: "Odeslat zadání projektu",
      submitLoading: "Odesílám...",
      successMessage: "Zadání projektu bylo úspěšně odesláno. Brzy se vám ozveme.",
      genericErrorMessage: "Formulář se nepodařilo odeslat.",
      locationTitle: "Pražské studio",
      locationLabel: "Vinohrady / Praha 10",
      locationDescription:
        "Studio v srdci pražské kreativní čtvrti spojuje moderní technologie s bohatou hudební tradicí města.",
      emailTitle: "E-mail",
      emailDescription: "Pro poptávky, spolupráce a obecné dotazy.",
    },
    footer: {
      tagline: "Zvuk, který formuje světy - Praha, Česká republika",
      links: {
        services: "Služby",
        licensing: "Licence",
        blog: "Blog",
        contact: "Kontakt",
      },
      copyright: "(c) 2026 DOC Studios s.r.o. Hudební produkce. Všechna práva vyhrazena.",
      vat: "DIČ: CZ24340146 | IČO: 24340146",
    },
    blog: {
      indexLead: "DOC",
      indexAccent: "BLOG",
      indexDescription:
        "Poznatky o našem pracovním rozsahu, licenční strategii a hudebních pracovních postupech pro profesionální vydání.",
      readArticle: "Číst článek",
      backToBlog: "Zpět na blog",
      published: "Publikováno",
      updated: "Aktualizováno",
      minutesLabel: "min čtení",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      licensing: "Licencias",
      blog: "Blog",
      doc: "DOC",
      contact: "Contacto",
      menu: "Menú",
      closeMenu: "Cerrar menú",
      openNavigation: "Abrir navegación",
      closeNavigation: "Cerrar navegación",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Praga | Producción musical",
      titleLead: "DRIVE OF",
      titleAccent: "CHAOS",
      description: "Paisajes sonoros creados con precisión para cine, publicidad y medios interactivos.",
      descriptionSecondary: "Donde la excelencia corporativa se une con la disrupción creativa.",
    },
    services: {
      headingLead: "NUESTRO",
      headingAccent: "TRABAJO",
      description:
        "Tres divisiones especializadas que entregan soluciones de audio premium para la industria del entretenimiento y comercial.",
      freePackCta: "Descargar pack de sonidos gratis",
      cards: [
        {
          title: "Música para cine",
          subtitle: "Precisión cinematográfica con disrupción creativa",
          description:
            "Composiciones orquestales profesionales para largometrajes, documentales y contenido en streaming. Impacto emocional mediante arquitectura sonora controlada.",
        },
        {
          title: "Música publicitaria",
          subtitle: "Identidad de marca mediante diseño sonoro estratégico",
          description:
            "Soluciones de audio comercial que elevan el mensaje de marca. Desde spots de 30 segundos hasta campañas completas de sonic branding.",
        },
        {
          title: "Música para videojuegos",
          subtitle: "Audio interactivo para experiencias inmersivas",
          description:
            "Paisajes sonoros dinámicos y sistemas musicales adaptativos para plataformas de juego. Creamos experiencias de audio memorables.",
        },
      ],
    },
    licensingPreview: {
      headingLead: "DERECHOS CON",
      headingAccent: "PRECISIÓN",
      description:
        "Producción cinematográfica boutique con claridad de licencias de nivel empresarial. Cada acuerdo se diseña según uso real, territorio y nivel de exclusividad.",
      badges: [
        {
          title: "Licencias estructuradas",
          description: "Las condiciones de uso se definen de forma explícita según el alcance del proyecto.",
        },
        {
          title: "Sin reclamaciones",
          description: "Modelo diseñado para distribución digital estable y sin fricción.",
        },
        {
          title: "Alcance definido",
          description: "Sin cláusulas ambiguas ni ventanas de explotación indefinidas.",
        },
      ],
      highlights: [
        {
          title: "Alcance de derechos",
          content: "Uso en cine, series, videojuegos, publicidad y campañas digitales con permisos claros de sync, master y adaptación.",
        },
        {
          title: "Plazo y territorio",
          content: "Estructuras de 1, 3, 5 años o perpetuas, con cobertura local, UE o mundial.",
        },
        {
          title: "Modelos de exclusividad",
          content: "Exclusividad total, exclusividad por categoría y formatos no exclusivos según valor estratégico.",
        },
      ],
      cta: "Explorar estructura completa de licencias",
    },
    works: {
      headingLead: "NUESTRAS",
      headingAccent: "OBRAS",
      description: "Selección de producciones cinematográficas y comerciales para cine, publicidad y medios interactivos.",
      samples: [
        {
          title: "Maria",
          productType: "Muestra de banda sonora",
          theme: "Melancolía, dolor, liberación",
          quote: "Su guerra fue por libertad; su paz llevaba su nombre.",
          description:
            "Composición orquestal melancólica que retrata el dolor profundo de una mujer que quedó atrás cuando su amor eligió la libertad.",
          artistInfo: "Retrato íntimo de desamor y sacrificio, compuesto con gran profundidad emocional.",
        },
        {
          title: "Apple iPhone XR",
          productType: "Muestra publicitaria",
          theme: "Minimalista, premium, centrado en producto",
          quote: "La innovación se encuentra con la precisión sonora.",
          description: "Música comercial moderna y elegante para reforzar relatos tecnológicos premium.",
          artistInfo: "Diseñada para campañas de marca que requieren estructura limpia y enfoque sólido en el producto.",
        },
        {
          title: "Doerfield",
          productType: "Muestra de música para videojuegos",
          theme: "Juego, militar, honor",
          quote: "La victoria se escribe con sangre y metales.",
          description: "Música épica de batalla que combina escala orquestal con ritmo interactivo moderno.",
          artistInfo: "Creada para experiencias AAA con intensidad táctica y movimiento cinematográfico.",
        },
      ],
      modal: {
        fallbackTitle: "Vista previa",
        closeVideoLabel: "Cerrar video",
        aboutTrackLabel: "Sobre esta pista:",
        artistInfoLabel: "Información del artista:",
        browserNotSupported: "Tu navegador no admite la etiqueta de video.",
        videoUnavailable: "Video no disponible",
      },
    },
    contact: {
      headingLead: "INICIEMOS EL",
      headingAccent: "PROYECTO",
      description: "¿Listo para transformar tu proyecto con un sonido inolvidable? Creemos algo extraordinario.",
      cardTitle: "Contáctanos",
      cardDescription: "Cuéntanos tu proyecto y diseñaremos la experiencia sonora perfecta.",
      placeholders: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo electrónico",
        projectType: "Tipo de proyecto (cine, anuncio, juego...)",
        description: "Cuéntanos tu visión del proyecto, plazos y presupuesto...",
      },
      submitIdle: "Enviar briefing del proyecto",
      submitLoading: "Enviando...",
      successMessage: "Briefing enviado correctamente. Nos pondremos en contacto contigo pronto.",
      genericErrorMessage: "No se pudo enviar el formulario.",
      locationTitle: "Estudio en Praga",
      locationLabel: "Vinohrady / Praga 10",
      locationDescription:
        "Ubicado en el corazón creativo de Praga, nuestro estudio combina tecnología de vanguardia con la herencia musical de la ciudad.",
      emailTitle: "Correo",
      emailDescription: "Para consultas de proyectos, colaboraciones y preguntas generales.",
    },
    footer: {
      tagline: "Sonido que da forma a mundos - Praga, República Checa",
      links: {
        services: "Servicios",
        licensing: "Licencias",
        blog: "Blog",
        contact: "Contacto",
      },
      copyright: "(c) 2026 DOC Studios s.r.o. Producción musical. Todos los derechos reservados.",
      vat: "NIF IVA: CZ24340146 | IČO: 24340146",
    },
    blog: {
      indexLead: "DOC",
      indexAccent: "BLOG",
      indexDescription:
        "Ideas sobre nuestro alcance de producción, estrategia de licencias y flujos de trabajo musicales listos para publicación.",
      readArticle: "Leer artículo",
      backToBlog: "Volver al blog",
      published: "Publicado",
      updated: "Actualizado",
      minutesLabel: "min de lectura",
    },
  },
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      licensing: "Lizenzierung",
      blog: "Blog",
      doc: "DOC",
      contact: "Kontakt",
      menu: "Menü",
      closeMenu: "Menü schließen",
      openNavigation: "Navigation öffnen",
      closeNavigation: "Navigation schließen",
      languageLabel: "Sprache",
    },
    hero: {
      eyebrow: "Prag | Musikproduktion",
      titleLead: "DRIVE OF",
      titleAccent: "CHAOS",
      description: "Präzise gestaltete Klangwelten für Film, Werbung und interaktive Medien.",
      descriptionSecondary: "Wo unternehmerische Exzellenz auf kreative Disruption trifft.",
    },
    services: {
      headingLead: "UNSER",
      headingAccent: "HANDWERK",
      description: "Drei spezialisierte Bereiche mit hochwertigen Audio-Lösungen für Entertainment und Werbung.",
      freePackCta: "Kostenloses Sound-Paket herunterladen",
      cards: [
        {
          title: "Filmmusik",
          subtitle: "Filmische Präzision trifft kreative Disruption",
          description:
            "Professionelle Orchesterkompositionen für Spielfilme, Dokumentationen und Streaming-Inhalte. Emotionaler Impact durch kontrollierte Klangarchitektur.",
        },
        {
          title: "Werbemusik",
          subtitle: "Markenidentität durch strategisches Sounddesign",
          description:
            "Kommerzielle Audio-Lösungen, die Markenbotschaften stärken. Von 30-Sekunden-Spots bis zu umfassenden Sonic-Branding-Kampagnen.",
        },
        {
          title: "Game Music",
          subtitle: "Interaktives Audio für immersive Erlebnisse",
          description:
            "Dynamische Klangwelten und adaptive Musiksysteme für Gaming-Plattformen. Wir schaffen einprägsame Audio-Erlebnisse.",
        },
      ],
    },
    licensingPreview: {
      headingLead: "RECHTE MIT",
      headingAccent: "PRÄZISION",
      description:
        "Boutique-Cinematic-Produktion mit unternehmensreifer Lizenzklarheit. Jede Vereinbarung basiert auf konkreter Nutzung, Territorium und Exklusivität.",
      badges: [
        {
          title: "Strukturierte Lizenzierung",
          description: "Nutzungsbedingungen sind klar nach Projektumfang definiert.",
        },
        {
          title: "Claim-frei",
          description: "Liefermodell für stabile, störungsfreie digitale Distribution.",
        },
        {
          title: "Definierter Umfang",
          description: "Keine vagen Klauseln und keine offenen Verwertungsfenster.",
        },
      ],
      highlights: [
        {
          title: "Rechteumfang",
          content: "Film, Serie, Game, Werbung und digitale Kampagnen mit klaren Sync-, Master- und Adaptionsrechten.",
        },
        {
          title: "Laufzeit und Gebiet",
          content: "Modelle für 1, 3, 5 Jahre oder dauerhaft, mit lokalem, EU-weitem oder weltweitem Geltungsbereich.",
        },
        {
          title: "Exklusivitätsmodelle",
          content: "Voll exklusiv, Kategorie-exklusiv und nicht exklusiv, bewertet nach strategischem Nutzen.",
        },
      ],
      cta: "Vollständigen Lizenzrahmen ansehen",
    },
    works: {
      headingLead: "UNSERE",
      headingAccent: "ARBEITEN",
      description: "Ausgewählte filmische und kommerzielle Produktionen für Film, Werbung und interaktive Medien.",
      samples: [
        {
          title: "Maria",
          productType: "Filmmusik-Beispiel",
          theme: "Melancholie, Trauer, Befreiung",
          quote: "Sein Krieg galt der Freiheit; sein Frieden trug ihren Namen.",
          description:
            "Eine melancholische Orchesterkomposition über den tiefen Schmerz einer Frau, deren Liebe sich für Freiheit statt Bindung entschied.",
          artistInfo: "Ein intimes Porträt von Herzschmerz und Opfer, komponiert mit starker emotionaler Tiefe.",
        },
        {
          title: "Apple iPhone XR",
          productType: "Werbemusik-Beispiel",
          theme: "Minimalistisch, Premium, produktfokussiert",
          quote: "Innovation trifft auf klangliche Präzision.",
          description: "Moderne, elegante Werbemusik für hochwertiges Technologie-Storytelling.",
          artistInfo: "Für Markenkampagnen mit klarer Struktur und präziser Produktinszenierung.",
        },
        {
          title: "Doerfield",
          productType: "Game-Music-Beispiel",
          theme: "Spiel, Militär, Ehre",
          quote: "Sieg wird in Blut und Blech geschrieben.",
          description: "Epische Kampfmusik mit orchestraler Größe und modernem interaktivem Timing.",
          artistInfo: "Konzipiert für AAA-Erlebnisse mit taktischer Intensität und cineastischer Dynamik.",
        },
      ],
      modal: {
        fallbackTitle: "Vorschau",
        closeVideoLabel: "Video schließen",
        aboutTrackLabel: "Über diesen Track:",
        artistInfoLabel: "Künstlerinfo:",
        browserNotSupported: "Ihr Browser unterstützt das Video-Tag nicht.",
        videoUnavailable: "Video nicht verfügbar",
      },
    },
    contact: {
      headingLead: "PROJEKT",
      headingAccent: "STARTEN",
      description: "Bereit, Ihr Projekt mit unverwechselbarem Sound zu transformieren? Lassen Sie uns etwas Außergewöhnliches schaffen.",
      cardTitle: "Kontakt",
      cardDescription: "Erzählen Sie uns von Ihrem Projekt, wir entwickeln das passende Soundkonzept.",
      placeholders: {
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail-Adresse",
        projectType: "Projekttyp (Film, Werbespot, Game usw.)",
        description: "Beschreiben Sie Ihre Projektvision, Zeitplan und Budget...",
      },
      submitIdle: "Projektbrief senden",
      submitLoading: "Wird gesendet...",
      successMessage: "Projektbrief erfolgreich gesendet. Wir melden uns kurzfristig bei Ihnen.",
      genericErrorMessage: "Das Formular konnte nicht gesendet werden.",
      locationTitle: "Studio Prag",
      locationLabel: "Vinohrady / Prag 10",
      locationDescription:
        "Im kreativen Zentrum Prags verbindet unser Studio modernste Technologie mit dem musikalischen Erbe der Stadt.",
      emailTitle: "E-Mail",
      emailDescription: "Für Projektanfragen, Kooperationen und allgemeine Fragen.",
    },
    footer: {
      tagline: "Klang, der Welten formt - Prag, Tschechische Republik",
      links: {
        services: "Leistungen",
        licensing: "Lizenzierung",
        blog: "Blog",
        contact: "Kontakt",
      },
      copyright: "(c) 2026 DOC Studios s.r.o. Musikproduktion. Alle Rechte vorbehalten.",
      vat: "USt-ID: CZ24340146 | IČO: 24340146",
    },
    blog: {
      indexLead: "DOC",
      indexAccent: "BLOG",
      indexDescription:
        "Einblicke in unseren Produktionsumfang, unsere Lizenzstrategie und release-taugliche Musik-Workflows.",
      readArticle: "Artikel lesen",
      backToBlog: "Zurück zum Blog",
      published: "Veröffentlicht",
      updated: "Aktualisiert",
      minutesLabel: "Min. Lesezeit",
    },
  },
}

export const getSiteCopy = (locale: SiteLocale): SiteCopy => {
  return siteCopy[locale]
}
