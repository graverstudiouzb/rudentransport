/**
 * SEO Utilities for RUDEN TRANSPORT
 * Structured data, meta tags, and SEO optimization
 */

export const seoConfig = {
  siteName: "RUDEN TRANSPORT",
  siteUrl: "https://ruden-transport.de",
  locale: "de_DE",
  
  // Main page metadata
  homepage: {
    title: "RUDEN TRANSPORT – Spezialtransporte für komplexe Zugänge",
    description:
      "Spezialtransporte in Deutschland für enge Straßen, Treppen und komplexe Zugangsituationen. Diskrete Planung, sichere Übergabe, dokumentierte Prozesskette.",
    keywords: [
      "Spezialtransporte",
      "Werttransporte",
      "Komplexe Zugänge",
      "Enge Straßen",
      "Treppen Transport",
      "Deutschland",
      "Diskrete Planung",
    ],
  },

  // Structured data for LocalBusiness
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RUDEN TRANSPORT",
    description:
      "Spezialtransporte für komplexe Zugänge in Deutschland",
    url: "https://ruden-transport.de",
    areaServed: "DE",
    telephone: "+49 (0) XXX XXXXXXX",
    email: "info@ruden-transport.de",
    priceRange: "$$",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lyIoXwnfoWBiatqK.webp",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    sameAs: [],
  },

  // FAQ structured data
  faqData: [
    {
      question: "Welche Regionen bedient RUDEN TRANSPORT?",
      answer: "Wir bedienen alle Bundesländer in Deutschland.",
    },
    {
      question: "Wie läuft der Prozess ab?",
      answer:
        "Anfrage → Planung → Transport → Übergabe. Vollständig dokumentiert.",
    },
    {
      question: "Wie lange dauert eine Anfrage?",
      answer: "Wir bearbeiten Anfragen innerhalb von 24 Stunden.",
    },
  ],

  // Keywords for SEO targeting
  targetKeywords: {
    primary: [
      "Spezialtransporte Deutschland",
      "Werttransporte",
      "Komplexe Zugänge",
      "Enge Straßen Transport",
    ],
    secondary: [
      "Diskrete Planung Logistik",
      "Sichere Übergabe",
      "Dokumentierte Prozesskette",
      "Treppen Transport",
      "Innenhof Transport",
    ],
    longtail: [
      "Spezialtransporte für enge Straßen",
      "Werttransporte mit komplexen Zugängen",
      "Diskrete Logistik Dienstleistungen",
      "Sichere Übergabe von Wertsachen",
    ],
  },
};

/**
 * Generate FAQ structured data
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
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RUDEN TRANSPORT",
    url: "https://ruden-transport.de",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/yJZWJQKZHSrSKVKd.png",
    description:
      "Spezialtransporte für komplexe Zugänge in Deutschland",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+49 (0) XXX XXXXXXX",
      email: "info@ruden-transport.de",
    },
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Spezialtransporte",
    provider: {
      "@type": "LocalBusiness",
      name: "RUDEN TRANSPORT",
    },
    areaServed: "DE",
    description:
      "Spezialtransporte für komplexe Zugänge, enge Straßen und Treppen",
  };
}

/**
 * Meta tags helper
 */
export function updateMetaTags(title: string, description: string, image?: string) {
  // Update title
  document.title = title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);

  // Update OG tags
  const updateOGTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  updateOGTag("og:title", title);
  updateOGTag("og:description", description);
  if (image) {
    updateOGTag("og:image", image);
  }
}

/**
 * Canonical URL helper
 */
export function setCanonicalURL(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}
