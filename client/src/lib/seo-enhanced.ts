/**
 * RUDEN TRANSPORT — Enhanced SEO Utilities
 * POSITIONING: Premium Tresortransport-Spezialist
 * Includes: Schema.org structured data, prerendering hints, og:tags, JSON-LD
 */

export const SEO_CONFIG = {
  site: {
    name: "RUDEN TRANSPORT",
    url: "https://ruden-transport.de",
    description: "Premium Tresortransport für schwierige Zugänge — enge Treppenhäuser, verwinkelte Keller, obere Stockwerke ohne Aufzug. Diskret, versichert, dokumentiert.",
    locale: "de_DE",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lyIoXwnfoWBiatqK.webp",
  },
  contact: {
    phone: "+49 176 60445403",
    email: "info@ruden-transport.de",
    address: "[Adresse wird noch eingegeben]",
  },
};

/**
 * Generate Organization Schema (JSON-LD)
 * Helps Google understand your business
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ruden-transport.de",
    name: "RUDEN TRANSPORT",
    url: "https://ruden-transport.de",
    description: SEO_CONFIG.site.description,
    image: SEO_CONFIG.site.image,
    telephone: SEO_CONFIG.contact.phone,
    email: SEO_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
      addressRegion: "Deutschland",
      streetAddress: "[Straße wird noch eingegeben]",
      postalCode: "[PLZ wird noch eingegeben]",
      addressLocality: "[Stadt wird noch eingegeben]",
    },
    areaServed: {
      "@type": "Country",
      name: "DE",
    },
    priceRange: "$$",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: SEO_CONFIG.contact.phone,
      email: SEO_CONFIG.contact.email,
      availableLanguage: ["de", "en", "ru"],
    },
  };
}

/**
 * Generate Service Schema (JSON-LD)
 * Describes your services for rich snippets
 */
export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@graph": [
      {
        "@type": "Service",
        name: "Tresortransport durch enge Zugänge",
        description: "Transport von Tresoren und Sicherheitsschränken bis 2.000 kg durch enge Treppenhäuser, verwinkelte Keller und schwierige Zugänge. Mit Treppenpanzern und Spezialequipment.",
        provider: {
          "@type": "LocalBusiness",
          name: "RUDEN TRANSPORT",
        },
        areaServed: {
          "@type": "Country",
          name: "DE",
        },
      },
      {
        "@type": "Service",
        name: "Diskrete Werttransporte",
        description: "Vertrauliche Transporte mit neutralen Fahrzeugen, ziviler Kleidung und lückenloser Dokumentation. Für Juweliere, Kanzleien und Privatpersonen.",
        provider: {
          "@type": "LocalBusiness",
          name: "RUDEN TRANSPORT",
        },
      },
      {
        "@type": "Service",
        name: "Dokumentierte Übergabe",
        description: "Fotodokumentation, Übergabeprotokoll mit Unterschrift, Versicherungsnachweis. Vollversichert bis 100.000 € pro Transport.",
        provider: {
          "@type": "LocalBusiness",
          name: "RUDEN TRANSPORT",
        },
      },
      {
        "@type": "Service",
        name: "Tresor-Entsorgung",
        description: "Fachgerechte Demontage und umweltgerechte Entsorgung alter Tresore und Sicherheitsschränke. Inklusive Entsorgungsnachweis.",
        provider: {
          "@type": "LocalBusiness",
          name: "RUDEN TRANSPORT",
        },
      },
    ],
  };
}

/**
 * Generate BreadcrumbList Schema (JSON-LD)
 */
export function generateBreadcrumbSchema(path: string) {
  const segments = path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://ruden-transport.de",
    },
  ];

  segments.forEach((segment, index) => {
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      item: `https://ruden-transport.de/${segments.slice(0, index + 1).join("/")}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/**
 * Generate FAQPage Schema (JSON-LD)
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Inject JSON-LD into page head
 */
export function injectSchema(schema: object) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Set Open Graph meta tags
 */
export function setOpenGraphTags(config: {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
}) {
  const tags = [
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:image", content: config.image },
    { property: "og:url", content: config.url },
    { property: "og:type", content: config.type || "website" },
    { property: "og:locale", content: "de_DE" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    { name: "twitter:image", content: config.image },
  ];

  tags.forEach((tag) => {
    let element = document.querySelector(`meta[property="${tag.property}"]`) ||
      document.querySelector(`meta[name="${tag.name}"]`);

    if (!element) {
      element = document.createElement("meta");
      if (tag.property) element.setAttribute("property", tag.property);
      if (tag.name) element.setAttribute("name", tag.name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", tag.content);
  });
}

/**
 * SEO Keywords for RUDEN TRANSPORT
 * Focused on: Tresortransport, enge Zugänge, Sicherheitsschränke
 */
export const SEO_KEYWORDS = {
  primary: [
    "Tresortransport Deutschland",
    "Tresor transportieren enge Treppe",
    "Sicherheitsschrank Transport",
    "Tresortransport ohne Aufzug",
    "Premium Tresortransport",
  ],
  secondary: [
    "Tresor liefern obere Stockwerke",
    "Panzerschrank transportieren",
    "Diskreter Tresortransport",
    "Tresor Entsorgung",
    "Wertschrank Transport versichert",
  ],
  long_tail: [
    "Tresor in 5. Stock ohne Aufzug transportieren",
    "Tresortransport enge Treppenhäuser Altbau",
    "Schwerer Tresor durch schmale Tür transportieren",
    "Diskreter Tresortransport neutrale Fahrzeuge",
    "Tresortransport mit Treppenpanzer",
    "Tresor Entsorgung fachgerecht",
  ],
};

/**
 * Prerendering hints for SPA
 */
export const PRERENDER_HINTS = [
  "/",
  "/leistungen",
  "/impressum",
  "/datenschutz",
];

/**
 * Generate sitemap entries
 */
export function generateSitemapEntry(url: string, lastmod?: string, priority?: number) {
  return {
    url,
    lastmod: lastmod || new Date().toISOString().split("T")[0],
    priority: priority || 0.8,
    changefreq: "weekly",
  };
}
