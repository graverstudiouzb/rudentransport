import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * RUDEN TRANSPORT FAQ Component
 * POSITIONING: Every question highlights our expertise in safe transport
 * Focus: Complex access, weight limits, security, process
 * SEO: Schema.org FAQ markup for rich snippets
 */

const FAQS = [
  {
    question: "Können Sie Tresore in obere Stockwerke ohne Aufzug transportieren?",
    answer:
      "Ja, das ist unsere Spezialität. Wir transportieren Tresore bis 2.000 kg in jedes Stockwerk — auch ohne Aufzug. Mit Treppenpanzern, hydraulischen Hebegeräten und einem erfahrenen Spezialtrupp meistern wir selbst die engsten Treppenhäuser. Vor dem Transport vermessen wir jeden Zugang persönlich.",
  },
  {
    question: "Was passiert, wenn der Zugang sehr eng ist (unter 80 cm)?",
    answer:
      "Enge Zugänge sind unser Alltag. Wir haben Tresore durch Durchgänge ab 65 cm Breite transportiert. Dafür setzen wir Spezialschlitten, Schutzverkleidungen für Türrahmen und millimetergenaue Planung ein. Bei der Vor-Ort-Besichtigung vermessen wir jeden kritischen Punkt.",
  },
  {
    question: "Wie diskret sind Ihre Transporte?",
    answer:
      "Maximale Diskretion ist Standard bei RUDEN TRANSPORT. Unsere Fahrzeuge sind neutral — keine Beschriftung, keine Logos. Unser Personal trägt zivile Kleidung. Wir geben keine Informationen über Art oder Wert der Ladung an Dritte weiter. Auf Wunsch transportieren wir auch nachts oder am Wochenende.",
  },
  {
    question: "Bis zu welchem Gewicht transportieren Sie Tresore?",
    answer:
      "Wir transportieren Tresore und Sicherheitsschränke bis 2.000 kg. Für schwerere Objekte (z.B. Banktresore) bieten wir Demontage und Transport in Teilen an. Das Gewicht beeinflusst die Planung, aber nicht unsere Bereitschaft — wir finden immer eine Lösung.",
  },
  {
    question: "Wie schnell können Sie einen Transport durchführen?",
    answer:
      "Nach Ihrer Anfrage erhalten Sie innerhalb von 2 Stunden ein Angebot. Bei Standardtransporten ist die Durchführung innerhalb von 48 Stunden möglich. Für Notfälle bieten wir Express-Service am selben Tag an. Die Vor-Ort-Besichtigung erfolgt in der Regel am nächsten Werktag.",
  },
  {
    question: "Was kostet ein Tresortransport?",
    answer:
      "Die Kosten hängen von Gewicht, Zugangsituation, Etage und Entfernung ab. Ein einfacher Erdgeschoss-Transport beginnt bei ca. 350 €. Komplexe Situationen (obere Stockwerke, enge Zugänge) werden individuell kalkuliert. Die Vor-Ort-Besichtigung ist bei Auftragserteilung kostenlos. Keine versteckten Kosten.",
  },
  {
    question: "Welche Versicherung haben Sie?",
    answer:
      "Jeder Transport ist vollversichert bis 100.000 € pro Einsatz. Höhere Werte können individuell abgestimmt werden. Wir dokumentieren den Zustand vor und nach dem Transport mit Fotos und erstellen ein Übergabeprotokoll mit Unterschrift. Im Schadensfall kümmern wir uns um die komplette Abwicklung.",
  },
  {
    question: "Entsorgen Sie auch alte Tresore?",
    answer:
      "Ja, wir bieten fachgerechte Tresor-Entsorgung an — inklusive Abtransport aus schwierigen Zugangssituationen. Die Entsorgung erfolgt umweltgerecht und nach allen gesetzlichen Bestimmungen. Sie erhalten einen Entsorgungsnachweis für Ihre Unterlagen.",
  },
  {
    question: "Arbeiten Sie auch für Unternehmen und Banken?",
    answer:
      "Ja, wir arbeiten sowohl für Privatkunden als auch für Unternehmen, Juweliere, Banken, Rechtsanwaltskanzleien und Versicherungen. Für Geschäftskunden bieten wir Rahmenverträge und regelmäßige Transportdienste an. Alle Mitarbeiter sind sicherheitsüberprüft.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            Fragen & Antworten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Häufig gestellte Fragen zum Tresortransport
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles, was Sie über unseren Premium-Tresortransport wissen müssen
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3" ref={containerRef}>
          {FAQS.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border hover:border-primary/50 transition cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                animationDelay: `${index * 0.06}s`,
                opacity: 0,
              }}
            >
              {/* Question */}
              <div className="p-5 md:p-6 flex items-start justify-between gap-4 bg-card hover:bg-card/80 transition">
                <h3 className="font-semibold text-foreground text-base md:text-lg flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 md:px-6 py-4 bg-background/50 border-t border-border animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ihre Frage ist nicht dabei? Rufen Sie uns an — wir beraten Sie gern.
          </p>
          <a
            href="tel:+4917660445403"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            +49 176 60445403 anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
