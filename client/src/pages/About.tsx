import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

/**
 * About/Process Page
 * Explains the RUDEN TRANSPORT process and company values
 */

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Kostenlose Besichtigung",
    description:
      "Wir schauen uns die Zugangsituation vor Ort an und verstehen Ihre Anforderungen",
  },
  {
    number: "02",
    title: "Unverbindliches Angebot",
    description:
      "Basierend auf der Besichtigung erstellen wir ein detailliertes, transparentes Angebot",
  },
  {
    number: "03",
    title: "Planung & Vorbereitung",
    description:
      "Wir planen den Transport im Detail und bereiten alles für einen reibungslosen Ablauf vor",
  },
  {
    number: "04",
    title: "Sichere Übergabe",
    description:
      "Professionelle Durchführung mit vollständiger Dokumentation und Versicherung",
  },
  {
    number: "05",
    title: "Abschluss & Dokumentation",
    description:
      "Übergabeprotokoll, Fotos und alle Unterlagen werden Ihnen zur Verfügung gestellt",
  },
];

const VALUES = [
  {
    title: "Zuverlässigkeit",
    description: "Wir halten unsere Versprechen. Pünktlichkeit und Genauigkeit sind garantiert.",
  },
  {
    title: "Diskretion",
    description: "Ihre Privatsphäre ist heilig. Wir behandeln alle Informationen vertraulich.",
  },
  {
    title: "Professionalität",
    description: "Geschultes Team, moderne Ausrüstung, transparente Kommunikation.",
  },
  {
    title: "Sicherheit",
    description: "Vollständig versichert, dokumentiert und mit höchsten Sicherheitsstandards.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="Über uns & Prozess"
        description="Erfahren Sie mehr über RUDEN TRANSPORT und unseren professionellen Transportprozess"
        url="https://ruden-transport.de/about"
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-card/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Über RUDEN TRANSPORT
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Spezialist für Transporte an Orte, die andere nicht erreichen
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">Unsere Werte</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {VALUES.map((value, index) => (
              <Card key={index} className="p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Unser Prozess
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow (except last) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:flex flex-col items-center gap-2 -mr-4">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Warum RUDEN TRANSPORT?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ✓ Spezialisiert
              </h3>
              <p className="text-muted-foreground">
                Wir sind Experten für komplexe Zugangsituationen, die andere nicht bewältigen können.
              </p>
            </Card>
            <Card className="p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ✓ Versichert
              </h3>
              <p className="text-muted-foreground">
                Vollständig versichert bis 100.000€. Ihre Wertsachen sind in sicheren Händen.
              </p>
            </Card>
            <Card className="p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ✓ Diskret
              </h3>
              <p className="text-muted-foreground">
                Vertraulichkeit ist garantiert. Wir behandeln alle Informationen streng vertraulich.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bereit für Ihren Transport?
          </h2>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Kostenlose Besichtigung anfragen
          </a>
        </div>
      </section>
    </Layout>
  );
}
