import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

/**
 * Services Page
 * Detailed breakdown of all RUDEN TRANSPORT services
 */

const SERVICES = [
  {
    title: "Werttransporte für enge Zugänge",
    description: "Spezialisierte Transporte für Orte, die große Trucks nicht erreichen",
    features: [
      "Kompakte Fahrzeuge für enge Straßen",
      "Handtransport über Treppen (bis 5. Stock)",
      "Innenhofzugang und private Objekte",
      "Versichert bis 100.000€",
    ],
  },
  {
    title: "Diskrete Übergabe",
    description: "Vertrauliche und dokumentierte Übergabeprozesse",
    features: [
      "Geschultes und verschwiegenes Personal",
      "Minimale Dokumentation",
      "Keine Informationen an Dritte",
      "Flexible Zeiten (auch nachts/Wochenende)",
    ],
  },
  {
    title: "Vollständig dokumentierte Prozesskette",
    description: "Transparenz und Nachverfolgung auf jedem Schritt",
    features: [
      "Digitale Dokumentation",
      "Foto-/Videobeweis",
      "Unterschriftenbestätigung",
      "Detaillierte Übergabeprotokolle",
    ],
  },
  {
    title: "Versicherte Transporte",
    description: "Vollständiger Versicherungsschutz für Ihre Wertsachen",
    features: [
      "Versicherung bis 100.000€ Standard",
      "Höhere Werte auf Anfrage",
      "Schnelle Schadensabwicklung",
      "Transparente Versicherungsbedingungen",
    ],
  },
  {
    title: "Spezialverpackung",
    description: "Professionelle Verpackung für sichere Transporte",
    features: [
      "Maßgeschneiderte Verpackung",
      "Schutz vor Beschädigungen",
      "Wasserdichte Verpackung",
      "Diskrete Verpackung (unauffällig)",
    ],
  },
  {
    title: "24/7 Notfall-Transporte",
    description: "Schnelle Reaktion bei Notfällen und Eilaufträgen",
    features: [
      "Schnelle Verfügbarkeit",
      "Flexible Zeiten",
      "Eilzuschlag minimal",
      "Zuverlässige Kommunikation",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <SEOHead
        title="Unsere Leistungen"
        description="Spezialtransporte, diskrete Übergabe, versicherte Transporte und mehr. Alle Services von RUDEN TRANSPORT."
        url="https://ruden-transport.de/services"
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-card/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Umfassende Spezialtransporte für komplexe Zugangsituationen in Deutschland
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Card key={index} className="p-8 border border-border hover:border-primary/50 transition">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Benötigen Sie einen Spezialtransport?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Besichtigung und unverbindliches Angebot
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Anfrage stellen
          </a>
        </div>
      </section>
    </Layout>
  );
}
