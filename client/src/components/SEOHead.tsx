import { useEffect } from "react";
import {
  generateOrganizationSchema,
  generateServiceSchema,
  injectSchema,
  setOpenGraphTags,
} from "@/lib/seo-enhanced";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

/**
 * SEO Head Component
 * Injects schemas and meta tags for better SEO
 * Use this in each page component
 */
export default function SEOHead({
  title,
  description,
  image = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lyIoXwnfoWBiatqK.webp",
  url = "https://ruden-transport.de",
  type = "website",
}: SEOHeadProps) {
  useEffect(() => {
    // Update page title
    document.title = `${title} – RUDEN TRANSPORT`;

    // Update meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set Open Graph tags
    setOpenGraphTags({
      title,
      description,
      image,
      url,
      type,
    });

    // Inject JSON-LD schemas (only once per page)
    if (!document.querySelector('script[type="application/ld+json"]')) {
      injectSchema(generateOrganizationSchema());
      injectSchema(generateServiceSchema());
    }
  }, [title, description, image, url, type]);

  return null;
}
