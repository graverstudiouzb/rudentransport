/**
 * RUDEN TRANSPORT - Enhanced SEO Utilities
 * Includes: Schema.org structured data, prerendering hints, og:tags, JSON-LD
 */

export const SEO_CONFIG = {
  site: {
    name: "RUDEN TRANSPORT",
    url: "https://ruden-transport.de",
    description: "Spezialtransporte in Deutschland für enge Straßen, Treppen und komplexe Zugangsituationen",
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
      availableLanguage: ["de", "en"],
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
        name: "Werttransporte für komplexe Zugänge",
        description: "Spezialisierte Transporte für Orte, die große Trucks nicht erreichen",
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
        name: "Diskrete Übergabe",
        description: "Vertrauliche und dokumentierte Übergabeprozesse",
        provider: {
          "@type": "LocalBusiness",
          name: "RUDEN TRANSPORT",
        },
      },
      {
        "@type": "Service",
        name: "Versicherte Transporte",
        description: "Vollständig versicherte Werttransporte mit Dokumentation",
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
 * Improves navigation in search results
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
 * Enables FAQ rich snippets in search results
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
 * Used for content optimization and meta descriptions
 */
export const SEO_KEYWORDS = {
  primary: [
    "Werttransporte Deutschland",
    "Spezialtransporte komplexe Zugänge",
    "Transporte enge Straßen",
    "Treppen Transporte",
    "Diskrete Übergabe",
  ],
  secondary: [
    "Werttransport Lagerhaus",
    "Sicherer Transport",
    "Versicherte Transporte",
    "Dokumentierte Übergabe",
    "Professionelle Logistik",
  ],
  long_tail: [
    "Werttransporte wenn der LKW nicht passt",
    "Transporte für komplexe Zugangsituationen Deutschland",
    "Sichere Übergabe Treppen bis 5. Stock",
    "Diskrete Werttransporte Innenhöfe",
    "Versicherte Transporte Privatobjekte",
  ],
};

/**
 * Prerendering hints for SPA
 * Helps search engines discover all pages
 */
export const PRERENDER_HINTS = [
  "/",
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
