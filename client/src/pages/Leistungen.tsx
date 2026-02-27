import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Shield, MapPin, Clock, FileCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";

/**
 * RUDEN TRANSPORT — Leistungen Page
 * POSITIONING: Premium Tresortransport-Spezialist
 * Each service = a PROBLEM we solve for the customer
 * Focus: Complex access, heavy safes, discretion, documentation
 */

export default function Leistungen() {
  const services = [
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/XJqsPNPZIVGnjjvN.webp",
      title: "Tresortransport durch enge Zugänge",
      subtitle: "Tresore bis 2.000 kg — auch ohne Aufzug",
      description:
        "Unser Kerngeschäft: Tresore und Sicherheitsschränke aller Gewichtsklassen durch enge Treppenhäuser, verwinkelte Keller und schmale Durchgänge transportieren. Mit Treppenpanzern, hydraulischen Hebegeräten und einem erfahrenen Spezialtrupp.",
      benefits: [
        "Tresore bis 2.000 kg",
        "Treppenhäuser ab 95 cm Breite",
        "Durchgänge ab 65 cm",
        "Vor-Ort-Vermessung inklusive",
      ],
      useCases: [
        "Tresor in Altbau-Wohnung (3.–5. OG)",
        "Panzerschrank in Keller mit steiler Treppe",
        "Wertschrank durch enge Haustür",
      ],
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/BnEldxqEiEkJxQVL.webp",
      title: "Diskrete Werttransporte",
      subtitle: "Neutrale Fahrzeuge, zivile Kleidung, keine Spuren",
      description:
        "Maximale Diskretion von der Anfrage bis zur Übergabe. Neutrale Fahrzeuge ohne Beschriftung, Personal in ziviler Kleidung, keine Informationen an Dritte. Ideal für Juweliere, Kanzleien und Privatpersonen.",
      benefits: [
        "Neutrale Fahrzeuge ohne Logos",
        "Personal in Zivilkleidung",
        "Keine Weitergabe an Dritte",
        "Nacht- und Wochenendtransporte",
      ],
      useCases: [
        "Juwelier-Lieferungen",
        "Kanzlei-Aktentresore",
        "Private Wertgegenstände",
      ],
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/ETDNmnFBNIFGFlzc.webp",
      title: "Dokumentierte Übergabe",
      subtitle: "Fotodokumentation + Übergabeprotokoll + Versicherungsnachweis",
      description:
        "Jeder Transport wird lückenlos dokumentiert: Zustandsfotos vor und nach dem Transport, Übergabeprotokoll mit Unterschrift, Versicherungsnachweis. Alles, was Sie für Ihre Unterlagen und Versicherung brauchen.",
      benefits: [
        "Fotodokumentation vor/nach",
        "Übergabeprotokoll mit Unterschrift",
        "Versicherungsnachweis",
        "Protokoll per E-Mail",
      ],
      useCases: [
        "Versicherungsrelevante Transporte",
        "Unternehmens-Compliance",
        "Hochwertige Einzelstücke",
      ],
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/LATSEvgKOYkGqcLY.webp",
      title: "Express-Transport & Notfälle",
      subtitle: "Angebot in 2 Stunden — Transport innerhalb 48h",
      description:
        "Schnelle Reaktionszeit ist unser Standard: Angebot innerhalb von 2 Stunden, Vor-Ort-Besichtigung am selben Tag, Transport innerhalb von 48 Stunden. Für Notfälle bieten wir Express-Service am selben Tag.",
      benefits: [
        "Angebot in unter 2 Stunden",
        "Besichtigung am selben Tag",
        "Transport innerhalb 48h",
        "Express-Service verfügbar",
      ],
      useCases: [
        "Dringende Umzüge",
        "Sicherheitsvorfälle",
        "Kurzfristige Bankschließungen",
      ],
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/UqZCzwFaRBRxxLAP.webp",
      title: "Tresor-Entsorgung",
      subtitle: "Fachgerechte Demontage und umweltgerechte Entsorgung",
      description:
        "Alte Tresore und Sicherheitsschränke fachgerecht entsorgen — inklusive Abtransport aus schwierigen Zugangssituationen. Demontage vor Ort bei Bedarf. Umweltgerechte Entsorgung nach allen gesetzlichen Bestimmungen.",
      benefits: [
        "Demontage vor Ort möglich",
        "Umweltgerechte Entsorgung",
        "Entsorgungsnachweis",
        "Abtransport aus jedem Zugang",
      ],
      useCases: [
        "Alte Banktresore",
        "Defekte Sicherheitsschränke",
        "Räumung von Geschäftsräumen",
      ],
    },
    {
      icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/GAOVOavLZuwWbDGw.webp",
      title: "Aufstellung & Verankerung",
      subtitle: "Tresor am Wunschort positioniert und gesichert",
      description:
        "Nicht nur transportieren — auch aufstellen. Wir positionieren Ihren Tresor exakt am Wunschort und verankern ihn bei Bedarf fachgerecht im Boden oder an der Wand. Inklusive Ausrichtung und Funktionstest.",
      benefits: [
        "Exakte Positionierung",
        "Boden-/Wandverankerung",
        "Ausrichtung & Nivellierung",
        "Funktionstest nach Aufstellung",
      ],
      useCases: [
        "Neuer Tresor in Privathaus",
        "Sicherheitsschrank in Büro",
        "Server-Schrank in Rechenzentrum",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Leistungen — Premium Tresortransport | RUDEN TRANSPORT"
        description="Tresortransport durch enge Zugänge, diskrete Werttransporte, dokumentierte Übergabe, Express-Service, Tresor-Entsorgung. Spezialisiert auf das Unmögliche."
        url="https://ruden-transport.de/leistungen"
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/B4zjoWP8EpqKYG5i9e7xz3_1772171199212_na1fn_cnVkZW4tbG9nby10cmFuc3BhcmVudA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdEp6aUlNWDlNcTdaejNLZnRCRFg3bi9zYW5kYm94L0I0empvV1A4RXBxS1lHNWk5ZTd4ejNfMTc3MjE3MTE5OTIxMl9uYTFmbl9jblZrWlc0dGJHOW5ieTEwY21GdWMzQmhjbVZ1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZjhSjccH4a3Q~~ald41sKUsg~U48xUGFosn27FK2Oa6EEM-5PNFhYnCQ1ecNPlCQuG3Ed80YB8ruhxDlYTdu4HGA2gisDq3FrMnvanaqli5he-Bk0LuHoJ04oskA5BVSebUz6MSKZLCE~uxZxsw5zIp2DHifh2RdZbFmlALLVldBYZ-zx0e9widH6c8DatR0A~-HDZTLQerPMJZAiv7F9EUzJPaG5tYb5La5bcLxEgQ1C2xFGqf8A~1UuaZxH796xzGC7EE0EHp13cSMrydeDWC3JJCwd3D2YhwSq7L8MRNDSGk4llRH4ZtMnqsmoFnZ1q5tK4Yda6YSXtZ16iVXMA__"
              alt="RUDEN TRANSPORT"
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Startseite</a>
            <a href="/leistungen" className="text-sm text-foreground font-medium">Leistungen</a>
            <a href="/#process" className="text-sm text-muted-foreground hover:text-foreground transition">Ablauf</a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition">Kontakt</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+4917660445403" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+49 176 60445403</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background via-background to-card py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Premium Tresortransport — Alle Leistungen
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Spezialisiert auf
              <span className="block text-primary">das Unmögliche</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tresore bis 2.000 kg durch enge Treppenhäuser, verwinkelte Keller und schwierige Zugänge. Diskret, versichert, dokumentiert.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {[
                { icon: Shield, text: "Versichert bis 100.000 €" },
                { icon: MapPin, text: "Deutschlandweit" },
                { icon: Clock, text: "Angebot in 2h" },
                { icon: FileCheck, text: "Dokumentierte Übergabe" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <stat.icon className="h-4 w-4 text-emerald-500" />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-background border-border hover:border-primary/50 transition group card-hover flex flex-col"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 h-16 w-16">
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

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-sm text-primary mb-4">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-6 space-y-2">
                  {service.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Use Cases */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Typische Einsätze</p>
                  <ul className="space-y-1">
                    {service.useCases.map((useCase, ucidx) => (
                      <li key={ucidx} className="text-xs text-muted-foreground">
                        → {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm"
                >
                  Anfrage stellen
                  <ArrowRight className="h-4 w-4" />
                </a>
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
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                Unser Versprechen
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Warum RUDEN TRANSPORT?
              </h2>
              <p className="text-lg text-muted-foreground">
                Wir sind keine Spedition. Wir sind Tresortransport-Spezialisten.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: "Wo andere aufgeben",
                  description:
                    "Enge Treppenhäuser, verwinkelte Keller, 5. OG ohne Aufzug — wir haben das Spezialequipment und die Erfahrung für jeden Zugang.",
                },
                {
                  title: "Absolute Diskretion",
                  description:
                    "Neutrale Fahrzeuge, zivile Kleidung, keine Informationen an Dritte. Von der Anfrage bis zur Übergabe — vertraulich.",
                },
                {
                  title: "Lückenlose Dokumentation",
                  description:
                    "Fotodokumentation, Übergabeprotokoll, Versicherungsnachweis. Jeder Schritt nachvollziehbar und rechtssicher.",
                },
                {
                  title: "Schnell & verbindlich",
                  description:
                    "Angebot in 2 Stunden. Besichtigung am selben Tag. Transport innerhalb 48h. Keine leeren Versprechen.",
                },
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg hover:bg-card transition">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32 border-y border-primary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Beschreiben Sie Ihre Situation
            </h2>
            <p className="text-lg text-muted-foreground">
              Egal wie komplex der Zugang — wir finden eine Lösung. Kostenlose Beratung, unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
              >
                Jetzt anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+4917660445403"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border rounded-lg text-foreground hover:bg-card transition font-medium"
              >
                <Phone className="h-4 w-4" />
                +49 176 60445403
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-foreground">RUDEN TRANSPORT</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium Tresortransport für schwierige Zugänge. Diskret, versichert, dokumentiert — deutschlandweit.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition">Startseite</a></li>
                <li><a href="/leistungen" className="hover:text-foreground transition">Leistungen</a></li>
                <li><a href="/#process" className="hover:text-foreground transition">Ablauf</a></li>
                <li><a href="/#contact" className="hover:text-foreground transition">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Kontakt</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><a href="tel:+4917660445403" className="hover:text-foreground transition">+49 176 60445403</a></p>
                <p><a href="mailto:info@ruden-transport.de" className="hover:text-foreground transition">info@ruden-transport.de</a></p>
                <p className="pt-2 text-xs">Mo–Sa: 07:00–20:00 Uhr<br />Notfälle: 24/7 erreichbar</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/impressum" className="hover:text-foreground transition">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-foreground transition">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 RUDEN TRANSPORT. Alle Rechte vorbehalten.</p>
            <p className="text-xs">Premium Tresortransport — Nicht Logistik. Nicht Kurier.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
