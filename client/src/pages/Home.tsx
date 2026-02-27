import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Phone, Mail, Shield, Clock, MapPin, FileCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import CaseStudies from "@/components/CaseStudies";
import FormEnhanced from "@/components/FormEnhanced";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";

/**
 * RUDEN TRANSPORT — Premium Tresortransport Website
 * POSITIONING: Nicht Logistik. Nicht Kurier. PREMIUM TRESORTRANSPORT.
 * KEY DIFFERENTIATOR: Complex access scenarios (stairs, narrow passages, difficult buildings)
 * Design: Dark Navy (#070A12) + Cyan (#00D9FF) + Emerald (#10B981)
 */

export default function Home() {
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Premium Tresortransport — Ihr Tresor. Jeder Ort. Jede Etage."
        description="RUDEN TRANSPORT: Spezialisiert auf Tresortransporte in schwierigen Zugangsituationen. Enge Treppenhäuser, verwinkelte Keller, obere Stockwerke ohne Aufzug. Diskret, versichert, dokumentiert."
        url="https://ruden-transport.de"
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/B4zjoWP8EpqKYG5i9e7xz3_1772171199212_na1fn_cnVkZW4tbG9nby10cmFuc3BhcmVudA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdEp6aUlNWDlNcTdaejNLZnRCRFg3bi9zYW5kYm94L0I0empvV1A4RXBxS1lHNWk5ZTd4ejNfMTc3MjE3MTE5OTIxMl9uYTFmbl9jblZrWlc0dGJHOW5ieTEwY21GdWMzQmhjbVZ1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZjhSjccH4a3Q~~ald41sKUsg~U48xUGFosn27FK2Oa6EEM-5PNFhYnCQ1ecNPlCQuG3Ed80YB8ruhxDlYTdu4HGA2gisDq3FrMnvanaqli5he-Bk0LuHoJ04oskA5BVSebUz6MSKZLCE~uxZxsw5zIp2DHifh2RdZbFmlALLVldBYZ-zx0e9widH6c8DatR0A~-HDZTLQerPMJZAiv7F9EUzJPaG5tYb5La5bcLxEgQ1C2xFGqf8A~1UuaZxH796xzGC7EE0EHp13cSMrydeDWC3JJCwd3D2YhwSq7L8MRNDSGk4llRH4ZtMnqsmoFnZ1q5tK4Yda6YSXtZ16iVXMA__"
              alt="RUDEN TRANSPORT"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="/leistungen" className="text-sm text-muted-foreground hover:text-foreground transition">Leistungen</a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition">Ablauf</a>
            <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition">Referenzen</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition">FAQ</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">Kontakt</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+4917660445403" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+49 176 60445403</span>
            </a>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Anfrage stellen
            </Button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — "Ihr Tresor. Jeder Ort. Jede Etage."
          Positioning: We go where others give up
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="container py-20 md:py-32">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20">
                  Premium Tresortransport — Nicht Kurier. Nicht Spedition.
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Ihr Tresor.
                <span className="block text-primary">Jeder Ort. Jede Etage.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Wir transportieren Tresore und Wertschränke dorthin, wo andere scheitern — durch enge Treppenhäuser, verwinkelte Keller und schwierige Zugänge. Diskret, versichert, dokumentiert.
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                {[
                  { icon: Shield, text: "Vollversichert" },
                  { icon: Clock, text: "Angebot in 2h" },
                  { icon: FileCheck, text: "Dokumentiert" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <badge.icon className="h-4 w-4 text-emerald-500" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Kostenlos anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-border text-foreground hover:bg-card text-base"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Unsere Expertise
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lyIoXwnfoWBiatqK.webp"
                alt="RUDEN TRANSPORT — Premium Tresortransport durch enge Zugänge"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23070A12%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%2300D9FF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ERUDEN TRANSPORT%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative h-24 md:h-32 -mb-1">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/tJziIMX9Mq7Zz3KftBDX7n/sandbox/2tCBTG8WVwSkfWPQQwBG1s-img-5_1772159193000_na1fn_d2F2ZS1kaXZpZGVyLXRvcA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          "WARUM RUDEN" — Differentiator Section
          Shows WHY we're different from generic logistics
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-card py-16 md:py-20 border-b border-border">
        <div className="container">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              Warum RUDEN
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-3">
              Nicht Logistik. Nicht Kurier.<br />
              <span className="text-primary">Premium Tresortransport.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Andere transportieren Pakete. Wir transportieren Tresore — durch Orte, die kein LKW erreicht.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Wo andere aufgeben",
                desc: "Enge Treppenhäuser, verwinkelte Keller, 5. OG ohne Aufzug, schmale Durchgänge ab 65 cm — wir finden immer einen Weg.",
                highlight: "Spezialequipment für jeden Zugang",
                icon: MapPin,
              },
              {
                title: "Absolute Diskretion",
                desc: "Neutrale Fahrzeuge ohne Beschriftung. Geschultes Personal in ziviler Kleidung. Keine Informationen an Dritte.",
                highlight: "Vertraulich von Anfrage bis Übergabe",
                icon: Shield,
              },
              {
                title: "Lückenlos dokumentiert",
                desc: "Fotodokumentation vor und nach Transport. Übergabeprotokoll mit Unterschrift. Vollversicherung bis 100.000 €.",
                highlight: "Jeder Schritt nachvollziehbar",
                icon: FileCheck,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES SECTION — Problem-focused, not feature-focused
          Each service = a PROBLEM we solve
      ═══════════════════════════════════════════════════════════════ */}
      <section id="services" className="bg-card py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              Unsere Expertise
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 mb-4">
              Spezialisiert auf das Unmögliche
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Transport ist anders. Wir lösen die Probleme, an denen andere scheitern.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/XJqsPNPZIVGnjjvN.webp",
                title: "Schwertransport durch enge Zugänge",
                description:
                  "Tresore bis 2.000 kg durch Treppenhäuser, Keller und Durchgänge ab 65 cm Breite. Mit Treppenpanzern und Spezialequipment.",
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/BnEldxqEiEkJxQVL.webp",
                title: "Lückenlose Sicherheitskette",
                description: "Neutrale Fahrzeuge, geschultes Personal, GPS-Tracking. Von der Abholung bis zur Übergabe — kein Moment ohne Kontrolle.",
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/ETDNmnFBNIFGFlzc.webp",
                title: "Professionelle Dokumentation",
                description: "Fotodokumentation, Übergabeprotokoll, Versicherungsnachweis. Alles, was Sie für Ihre Unterlagen brauchen.",
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/LATSEvgKOYkGqcLY.webp",
                title: "Schnelle Reaktionszeit",
                description: "Angebot innerhalb von 2 Stunden. Vor-Ort-Besichtigung am selben Tag. Transport innerhalb von 48 Stunden möglich.",
              },
            ].map((service, idx) => (
               <Card
                key={idx}
                className="p-6 bg-background border-border hover:border-primary/50 transition group card-hover"
              >
                <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Link to full services page */}
          <div className="mt-12 text-center">
            <a
              href="/leistungen"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition"
            >
              Alle Leistungen im Detail
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROCESS SECTION — Shows expertise, not just steps
      ═══════════════════════════════════════════════════════════════ */}
      <section id="process" className="bg-background py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              Unser Ablauf
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 mb-4">
              Von der Anfrage zur sicheren Übergabe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Transport wird individuell geplant. Keine Überraschungen — nur Präzision.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" ref={processRef}>
            {[
              {
                step: "1",
                title: "Anfrage & Beratung",
                desc: "Sie beschreiben Ihre Situation — Gewicht, Zugang, Etage. Wir beraten Sie kostenlos und ehrlich.",
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/MbdkoXdDzHEbuZHz.webp",
                detail: "Antwort in unter 2 Stunden"
              },
              {
                step: "2",
                title: "Vor-Ort-Besichtigung",
                desc: "Bei komplexen Zugängen kommen wir persönlich vorbei. Wir vermessen Treppen, Durchgänge und planen die Route.",
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/UilXiGzGXDMchxKr.webp",
                detail: "Kostenlos bei Auftragserteilung"
              },
              {
                step: "3",
                title: "Sicherer Transport",
                desc: "Spezialequipment, geschultes Team, neutrale Fahrzeuge. Jeder Handgriff sitzt — auch im 5. OG ohne Aufzug.",
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lDEJEmqVGnyEKgyy.webp",
                detail: "Vollversichert bis 100.000 €"
              },
              {
                step: "4",
                title: "Dokumentierte Übergabe",
                desc: "Fotodokumentation, Übergabeprotokoll mit Unterschrift, Versicherungsnachweis. Alles sauber abgeschlossen.",
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/XJqsPNPZIVGnjjvN.webp",
                detail: "Protokoll per E-Mail"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative"
                style={{
                  animation: processVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-10">
                    {item.step}
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 mt-2 hover:scale-110 transition-transform duration-300">
                    {item.icon.startsWith('http') ? (
                      <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain" loading="lazy" />
                    ) : (
                      <span className="text-4xl">{item.icon}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    {item.detail}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-12 -right-4 items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-0 border-t-4 border-t-primary border-b-4 border-b-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRUST SECTION — Concrete numbers, not vague claims
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-card py-16 md:py-20 border-y border-border">
        <div className="container">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {[
              { icon: Shield, label: "Versichert", value: "Bis 100.000 € pro Transport" },
              { icon: MapPin, label: "Bundesweit", value: "Alle 16 Bundesländer" },
              { icon: Clock, label: "Reaktionszeit", value: "Angebot in unter 2 Stunden" },
              { icon: FileCheck, label: "Dokumentiert", value: "Foto + Übergabeprotokoll" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 hover:translate-x-1 transition-transform duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="text-base font-semibold text-foreground">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* FAQ Section */}
      <FAQ />

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT / FORM SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="bg-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                Jetzt starten
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                Beschreiben Sie Ihre Situation
              </h2>
              <p className="text-lg text-muted-foreground">
                Wir melden uns innerhalb von 2 Stunden mit einem konkreten Angebot — kostenlos und unverbindlich.
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-card border-border">
              <FormEnhanced />
            </Card>

            {/* Contact Info */}
            <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefon / WhatsApp</p>
                  <a href="tel:+4917660445403" className="font-semibold text-foreground hover:text-primary transition">+49 176 60445403</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">E-Mail</p>
                  <a href="mailto:info@ruden-transport.de" className="font-semibold text-foreground hover:text-primary transition">info@ruden-transport.de</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-card border-t border-border py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Bleiben Sie informiert
            </h2>
              <p className="text-muted-foreground">
                Erhalten Sie Updates zu neuen Services und Angeboten
              </p>
            </div>
            <Newsletter />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER — Professional, with clear positioning
      ═══════════════════════════════════════════════════════════════ */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-foreground">RUDEN TRANSPORT</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium Tresortransport für schwierige Zugänge. Diskret, versichert, dokumentiert — deutschlandweit.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/leistungen" className="hover:text-foreground transition">Leistungen</a></li>
                <li><a href="#process" className="hover:text-foreground transition">Ablauf</a></li>
                <li><a href="#cases" className="hover:text-foreground transition">Referenzen</a></li>
                <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
                <li><a href="#contact" className="hover:text-foreground transition">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/impressum" className="hover:text-foreground transition">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-foreground transition">Datenschutz</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Kontakt</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <a href="tel:+4917660445403" className="hover:text-foreground transition">+49 176 60445403</a>
                </p>
                <p>
                  <a href="mailto:info@ruden-transport.de" className="hover:text-foreground transition">info@ruden-transport.de</a>
                </p>
                <p className="pt-2 text-xs">
                  Mo–Sa: 07:00–20:00 Uhr<br />
                  Notfälle: 24/7 erreichbar
                </p>
              </div>
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
