import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";

/**
 * RUDEN TRANSPORT - Services/Leistungen Page
 * Design Philosophy: Dark Navy (#070A12) + Cyan (#00D9FF) + Emerald (#10B981)
 * Focus: Detailed service offerings with clear benefits and use cases
 */

export default function Leistungen() {
  const services = [
    {
      icon: "https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/nEjrd5XY2TglqO3ZBjXvWn-img-1_1772164508000_na1fn_aWNvbi10cmVzb3ItdHJhbnNwb3J0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      title: "Werttransporte",
      subtitle: "Sichere Übergabe von Wertgegenständen",
      description:
        "Spezialisierte Transporte für Schmuck, Kunstgegenstände, Antiquitäten und andere hochwertige Objekte mit vollständiger Dokumentation und Versicherung.",
      benefits: [
        "Vollständig versichert",
        "Diskrete Abwicklung",
        "Dokumentierte Prozesskette",
      ],
      useCases: [
        "Kunstgalerie zu Auktion",
        "Schmuckgeschäft zu Depot",
        "Privatsammlung zu Lagerhaus",
      ],
    },
    {
      icon: "https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/nEjrd5XY2TglqO3ZBjXvWn-img-2_1772164514000_na1fn_aWNvbi1zdGFpcnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      title: "Treppen & Innenhöfe",
      subtitle: "Transport bis zur 5. Etage",
      description:
        "Spezialisiert auf Transporte in schwierigen Zugangsituationen: enge Treppen, Innenhöfe, verwinkelte Wohnungen und private Objekte.",
      benefits: [
        "Bis zu 5. Stock",
        "Erfahrenes Team",
        "Schonende Behandlung",
      ],
      useCases: [
        "Möbeltransport in Altbauten",
        "Kunstobjekt in Dachgeschoss",
        "Tresor in Privatwohnung",
      ],
    },
    {
      icon: "https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/nEjrd5XY2TglqO3ZBjXvWn-img-3_1772164516000_na1fn_aWNvbi1uYXJyb3ctYWNjZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      title: "Enge Zufahrten",
      subtitle: "Für Orte, die große Trucks nicht erreichen",
      description:
        "Unsere kompakten Fahrzeuge passen durch enge Straßen, Gassen und Privatgrundstücke, wo Standard-Logistik scheitert.",
      benefits: [
        "Kompakte Fahrzeuge",
        "Flexible Planung",
        "Ganz Deutschland",
      ],
      useCases: [
        "Altstadtzentren",
        "Privatobjekte",
        "Industriegebiete mit engen Wegen",
      ],
    },
    {
      icon: "https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/nEjrd5XY2TglqO3ZBjXvWn-img-4_1772164509000_na1fn_aWNvbi1pbnN1cmFuY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      title: "Versicherte Übergabe",
      subtitle: "Vollständige Dokumentation & Versicherung",
      description:
        "Jeder Transport ist vollständig versichert. Wir dokumentieren alle Schritte mit Übergabeprotokollen und Fotos für maximale Sicherheit.",
      benefits: [
        "Vollständige Versicherung",
        "Foto-Dokumentation",
        "Übergabeprotokoll",
      ],
      useCases: [
        "Versicherungsansprüche",
        "Rechtliche Absicherung",
        "Hochwertige Objekte",
      ],
    },
    {
      icon: "https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/nEjrd5XY2TglqO3ZBjXvWn-img-5_1772164511000_na1fn_aWNvbi1kaXNjcmV0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      title: "Diskrete Planung",
      subtitle: "Vertrauliche Abwicklung nach Ihren Anforderungen",
      description:
        "Wir verstehen die Bedeutung von Diskretion. Alle Transporte werden nach Ihren Vorgaben geplant und durchgeführt, ohne unnötige Aufmerksamkeit.",
      benefits: [
        "Vertraulich",
        "Nach Ihren Vorgaben",
        "Professionelle Abwicklung",
      ],
      useCases: [
        "Private Sammlungen",
        "Sensible Objekte",
        "Anonyme Transporte",
      ],
    },
    {
      icon: "https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/eQ8HnUO5owD7pn0SJs22Nh-img-5_1772164583000_na1fn_aWNvbi1zcGVlZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
      title: "Schnelle Abwicklung",
      subtitle: "Effiziente Planung & zuverlässige Durchführung",
      description:
        "Wir planen effizient und halten Termine zuverlässig ein. Schnelle Abwicklung ohne Qualitätsverluste ist unser Standard.",
      benefits: [
        "Schnelle Planung",
        "Zuverlässige Durchführung",
        "Pünktliche Übergabe",
      ],
      useCases: [
        "Zeitkritische Transporte",
        "Notfalltransporte",
        "Kurzfristige Anfragen",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Leistungen - RUDEN TRANSPORT"
        description="Spezialtransporte in Deutschland: Werttransporte, Treppen, enge Zufahrten, versicherte Übergabe, diskrete Planung."
        url="https://ruden-transport.de/leistungen"
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/yJZWJQKZHSrSKVKd.png"
              alt="RUDEN TRANSPORT"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-foreground">RUDEN</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              Leistungen
            </a>
            <a href="/#process" className="text-sm text-muted-foreground hover:text-foreground transition">
              Prozess
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Kontakt
            </a>
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Anfrage
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background via-background to-card py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Unsere Leistungen
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Spezialisiert auf
              <span className="block text-primary">schwierige Zugänge</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von Werttransporten bis zu Treppen-Transporten – wir haben die Lösung für Ihre komplexe Logistik-Anfrage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-background border-border hover:border-primary/50 transition group card-hover flex flex-col"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 h-20 w-20">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%23070A12%22 width=%2280%22 height=%2280%22/%3E%3Ccircle cx=%2240%22 cy=%2240%22 r=%2225%22 fill=%22%2300D9FF%22/%3E%3C/svg%3E';
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-sm text-primary mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-6 space-y-2">
                  {service.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Use Cases */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-xs font-semibold text-primary mb-3 uppercase">Anwendungsbeispiele</p>
                  <ul className="space-y-1">
                    {service.useCases.map((useCase, ucidx) => (
                      <li key={ucidx} className="text-xs text-muted-foreground">
                        • {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group/btn"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Anfrage stellen
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RUDEN */}
      <section className="bg-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Warum RUDEN TRANSPORT?
              </h2>
              <p className="text-lg text-muted-foreground">
                Wir sind nicht die Größten, aber die Besten für Ihre Anforderungen
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Spezialisiert",
                  description:
                    "Wir konzentrieren uns auf das, was andere nicht können: komplexe Zugänge, enge Straßen, schwierige Situationen.",
                },
                {
                  title: "Diskret",
                  description:
                    "Ihre Privatsphäre ist uns wichtig. Wir arbeiten vertraulich und dokumentieren nur das Nötigste.",
                },
                {
                  title: "Zuverlässig",
                  description:
                    "Pünktlichkeit und Qualität sind nicht verhandelbar. Wir halten unsere Versprechen.",
                },
                {
                  title: "Versichert",
                  description:
                    "Jeder Transport ist vollständig versichert. Sie sind auf der sicheren Seite.",
                },
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Bereit für Ihre Anfrage?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kontaktieren Sie uns noch heute. Wir machen Ihnen ein unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Jetzt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card"
                onClick={() => (window.location.href = "tel:+491766044540")}
              >
                Anrufen: +49 176 60445403
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h4 className="font-semibold mb-4">RUDEN TRANSPORT</h4>
              <p className="text-sm text-muted-foreground">
                Spezialtransporte für komplexe Zugänge in Deutschland
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-foreground transition">
                    Startseite
                  </a>
                </li>
                <li>
                  <a href="/leistungen" className="hover:text-foreground transition">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-foreground transition">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+491766044540" className="hover:text-foreground transition">
                    +49 176 60445403
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ruden-transport.de" className="hover:text-foreground transition">
                    info@ruden-transport.de
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/impressum" className="hover:text-foreground transition">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="hover:text-foreground transition">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 RUDEN TRANSPORT. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
