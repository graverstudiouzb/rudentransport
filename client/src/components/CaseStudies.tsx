import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * RUDEN TRANSPORT Case Studies Component
 * POSITIONING: Shows IMPOSSIBLE scenarios we solved
 * Focus: Complex access, heavy safes, difficult buildings
 * Each case = proof that we go where others can't
 */

const CASES = [
  {
    title: "1.200 kg Tresor — 4. OG ohne Aufzug",
    location: "Berlin-Mitte, Altbau",
    challenge: "Panzerschrank (1.200 kg) in ein Altbau-Penthouse, 4. Obergeschoss. Kein Aufzug. Treppenhaus nur 95 cm breit mit engen Kurven.",
    solution: "Treppenpanzer + 4-Mann-Spezialtrupp. Jede Kurve vorab vermessen. Treppenstufen geschützt. Transport in 4,5 Stunden.",
    result: "Tresor steht. Kein Kratzer am Treppenhaus. Übergabeprotokoll mit Fotodokumentation.",
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/GAOVOavLZuwWbDGw.webp",
    weight: "1.200 kg",
    time: "4,5 Std.",
  },
  {
    title: "Wertschrank durch 65 cm Kellertür",
    location: "München, Privatvilla",
    challenge: "Sicherheitsschrank (800 kg) in einen Kellerraum. Zugang nur über eine 65 cm breite Tür und eine steile Kellertreppe.",
    solution: "Spezialschlitten + Schutzverkleidung der Türrahmen. Millimeterarbeit mit hydraulischem Equipment.",
    result: "Schrank steht exakt am Wunschort. Kein Schaden an Tür oder Treppe. Diskreter Transport ohne Nachbarn zu stören.",
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/foTlFcYzXlkiMdcq.webp",
    weight: "800 kg",
    time: "3 Std.",
  },
  {
    title: "Tresor-Entsorgung aus Bankfiliale",
    location: "Frankfurt am Main",
    challenge: "Alter Banktresor (2.000 kg) aus dem Untergeschoss einer ehemaligen Bankfiliale. Zufahrt nur über enge Seitengasse.",
    solution: "Demontage vor Ort + Transport in Teilen. Kompaktfahrzeug für die enge Gasse. Fachgerechte Entsorgung nach Vorschrift.",
    result: "Tresor fachgerecht entsorgt. Entsorgungsnachweis ausgestellt. Räumlichkeiten besenrein übergeben.",
    icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/UqZCzwFaRBRxxLAP.webp",
    weight: "2.000 kg",
    time: "6 Std.",
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
    <section id="cases" className="py-20 md:py-32 bg-card/50">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Wo andere scheitern, liefern wir
          </h2>
          <p className="text-lg text-muted-foreground">
            Echte Einsätze. Echte Herausforderungen. Echte Ergebnisse.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" ref={containerRef}>
          {CASES.map((caseStudy, index) => (
            <Card
              key={index}
              className="p-6 border border-border hover:border-primary/50 transition bg-background card-hover overflow-hidden"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Header with icon and stats */}
              <div className="flex items-start justify-between mb-4">
                <div className="h-14 w-14 flex items-center justify-center">
                  {caseStudy.icon.startsWith('http') ? (
                    <img src={caseStudy.icon} alt={caseStudy.title} className="w-full h-full object-contain" loading="lazy" />
                  ) : (
                    <span className="text-4xl">{caseStudy.icon}</span>
                  )}
                </div>
                <div className="flex gap-3 text-right">
                  <div>
                    <p className="text-xs text-muted-foreground">Gewicht</p>
                    <p className="text-sm font-bold text-primary">{caseStudy.weight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Dauer</p>
                    <p className="text-sm font-bold text-primary">{caseStudy.time}</p>
                  </div>
                </div>
              </div>

              {/* Title & Location */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {caseStudy.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">{caseStudy.location}</p>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                  Herausforderung
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  Unsere Lösung
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Result */}
              <div className="flex gap-2 items-start pt-3 border-t border-border">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-400 font-medium">
                  {caseStudy.result}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Haben Sie eine ähnliche Herausforderung? Wir finden eine Lösung.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Kostenlose Besichtigung anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
