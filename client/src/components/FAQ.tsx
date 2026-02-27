import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * RUDEN TRANSPORT FAQ Component
 * Conversion-focused FAQ with schema.org support
 * Addresses common objections and builds trust
 */

const FAQS = [
  {
    question: "Wie lange dauert ein Werttransport?",
    answer:
      "Die Dauer hängt von der Komplexität der Zugangsituation ab. Einfache Transporte dauern 2-4 Stunden, komplexe Situationen (z.B. mehrere Treppen, enge Innenhöfe) können 4-8 Stunden in Anspruch nehmen. Wir geben Ihnen immer einen verbindlichen Zeitrahmen vor Ort.",
  },
  {
    question: "Welche Versicherung haben Sie?",
    answer:
      "Wir sind vollständig versichert für Werttransporte bis zu 100.000€ pro Transport. Höhere Werte können individuell abgestimmt werden. Alle Transporte sind dokumentiert und versichert gemäß deutscher Transportgesetze.",
  },
  {
    question: "Können Sie nachts oder am Wochenende transportieren?",
    answer:
      "Ja, wir bieten flexible Zeiten an. Nachttransporte und Wochenendtransporte sind möglich und werden individuell kalkuliert. Kontaktieren Sie uns für spezielle Zeitwünsche.",
  },
  {
    question: "Wie diskret sind Ihre Transporte?",
    answer:
      "Diskretheit ist ein Kernwert von RUDEN TRANSPORT. Unsere Fahrzeuge sind unauffällig, das Personal ist geschult und verschwiegenheitspflichtig. Wir dokumentieren nur das Nötigste und geben keine Informationen an Dritte weiter.",
  },
  {
    question: "Was kostet ein Transport?",
    answer:
      "Die Kosten hängen von mehreren Faktoren ab: Gewicht, Volumen, Zugangsituation, Entfernung und Zeitaufwand. Wir bieten kostenlose Besichtigungen vor Ort und erstellen verbindliche Angebote ohne versteckte Kosten.",
  },
  {
    question: "Wie buche ich einen Transport?",
    answer:
      "Sie können uns anrufen (+49 176 60445403), über WhatsApp schreiben oder das Online-Formular ausfüllen. Wir vereinbaren einen Termin zur Besichtigung, erstellen ein Angebot und führen den Transport durch.",
  },
  {
    question: "Können Sie auch internationale Transporte durchführen?",
    answer:
      "Derzeit konzentrieren wir uns auf Deutschland. Für spezielle Anfragen können wir Partnerschaften mit internationalen Logistikanbietern vermitteln.",
  },
  {
    question: "Was passiert, wenn etwas beschädigt wird?",
    answer:
      "Alle Schäden sind durch unsere Versicherung abgedeckt. Wir dokumentieren den Zustand vor und nach dem Transport mit Fotos. Im Schadensfall kümmern wir uns um die Abwicklung mit der Versicherung.",
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
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen zu unseren Spezialtransporten
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
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
              }}
            >
              {/* Question */}
              <div className="p-6 flex items-start justify-between gap-4 bg-card hover:bg-card/80 transition">
                <h3 className="font-semibold text-foreground text-lg flex-1">
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
                <div className="px-6 py-4 bg-background/50 border-t border-border animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
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
            Ihre Frage ist nicht dabei?
          </p>
          <a
            href="tel:+4917660445403"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
