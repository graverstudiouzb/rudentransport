import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * RUDEN TRANSPORT Case Studies Component
 * Social proof + conversion driver
 * Shows real-world problem-solving
 */

const CASES = [
  {
    title: "Penthouse-Übergabe in Berlin-Mitte",
    challenge: "5-stöckiges Altbau-Treppenhaus, enge Kurven, keine Aufzüge",
    solution: "Spezialverpackung + Handtransport über 5 Etagen",
    result: "Sichere Übergabe ohne Beschädigungen, diskret dokumentiert",
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/GAOVOavLZuwWbDGw.webp",
  },
  {
    title: "Werttransport Innenhof München",
    challenge: "Zugang nur über enge Innenhofpassage (1,2m breit)",
    solution: "Kompakte Fahrzeuge + erfahrenes Team",
    result: "Pünktliche Übergabe, volle Dokumentation",
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/foTlFcYzXlkiMdcq.webp",
  },
  {
    title: "Privatobjekt Schwarzwald",
    challenge: "Waldgrundstück, unbefestigte Zufahrt, schwieriger Zugang",
    solution: "Spezialfahrzeuge + Geländeerfahrung",
    result: "Erfolgreiche Übergabe an schwer erreichbarem Ort",
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/UqZCzwFaRBRxxLAP.webp",
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Erfolgreiche Übergaben
          </h2>
          <p className="text-lg text-muted-foreground">
            Echte Beispiele, wie wir komplexe Zugangsituationen meistern
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-3" ref={containerRef}>
          {CASES.map((caseStudy, index) => (
            <Card
              key={index}
              className="p-6 border border-border hover:border-primary/50 transition bg-background card-hover"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Icon */}
              <div className="mb-4 h-16 w-16 flex items-center justify-center">
                {caseStudy.icon.startsWith('http') ? (
                  <img src={caseStudy.icon} alt={caseStudy.title} className="w-full h-full object-contain" loading="lazy" />
                ) : (
                  <span className="text-4xl">{caseStudy.icon}</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {caseStudy.title}
              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-sm font-medium text-primary mb-1">
                  Herausforderung
                </p>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-sm font-medium text-primary mb-1">
                  Lösung
                </p>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Result */}
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  {caseStudy.result}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Haben Sie eine ähnliche Herausforderung?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Kostenlose Besichtigung anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
