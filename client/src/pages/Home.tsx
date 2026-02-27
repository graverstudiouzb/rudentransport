import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import CaseStudies from "@/components/CaseStudies";
import FormEnhanced from "@/components/FormEnhanced";
import SocialProof from "@/components/SocialProof";
import Newsletter from "@/components/Newsletter";

/**
 * RUDEN TRANSPORT - Premium Logistics Website
 * Design Philosophy: Dark Navy (#070A12) + Cyan (#00D9FF) + Emerald (#10B981)
 * Focus: Complex access situations, discretion, professional documentation
 */

export default function Home() {
  const processRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  // Scroll animation observer
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
        title="Sichere Übergabe überall in Deutschland"
        description="Spezialtransporte in Deutschland für enge Straßen, Treppen und komplexe Zugangsituationen. Diskrete Planung, sichere Übergabe, dokumentierte Prozesskette."
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
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition">Prozess</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">Kontakt</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+491766044540" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+49 176 60445403</span>
            </a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Anfrage</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="container py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Spezialtransporte für Deutschland
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Sichere Übergabe
                <span className="block text-primary">überall in Deutschland</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Werttransporte für Orte, die große Trucks nicht erreichen. Treppen bis 5. Stock • Innenhöfe • Privatobjekte • Versichert & dokumentiert.
              </p>
              <div className="flex gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
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
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lyIoXwnfoWBiatqK.webp"
                alt="RUDEN Transport Van"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23070A12%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%2300D9FF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage Loading...%3C/text%3E%3C/svg%3E';
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

      {/* Services Section */}
      <section
        id="services"
        className="bg-card py-20 md:py-32"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spezialisiert auf Transporte in schwierigen Zugangsituationen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/uSpezitRvDHxeNFB.png",
                title: "Komplexe Zugänge",
                description:
                  "Enge Straßen, Treppen, Innenhöfe – wir finden immer einen Weg",
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/twVNywBYByEHHaWV.png",
                title: "Diskrete Planung",
                description: "Vertrauliche Abwicklung nach Ihren Anforderungen",
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/XVLJVIqvwjILivlM.png",
                title: "Dokumentation",
                description: "Vollständige Prozesskette mit Übergabeprotokoll",
              },
              {
                icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/kchYzzkaGIWQlIeS.png",
                title: "Schnelle Abwicklung",
                description: "Effiziente Planung und zuverlässige Durchführung",
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
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="bg-background py-20 md:py-32"
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unser Prozess
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparente Abwicklung in vier Schritten
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4" ref={processRef}>
            {[
              { step: "1", title: "Anfrage", desc: "Sie beschreiben Ihre Situation", icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/dgvlpYyukfyKQWCp.png" },
              { step: "2", title: "Planung", desc: "Wir planen die optimale Route", icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/vaWAnjjzJWCpRrMG.png" },
              { step: "3", title: "Transport", desc: "Sichere und diskrete Abwicklung", icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/euIlRjWXUURwRKud.png" },
              { step: "4", title: "Übergabe", desc: "Dokumentierte Übergabe", icon: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/jTUNZMlYOfXkLEOL.png" },
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
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon.startsWith('http') ? (
                      <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" loading="lazy" />
                    ) : (
                      <span className="text-4xl">{item.icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-10 -right-4 items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-0 border-t-4 border-t-primary border-b-4 border-b-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Bundesweit", value: "Alle Bundesländer" },
              { label: "Versichert", value: "Vollständig dokumentiert" },
              { label: "Diskret", value: "Vertrauliche Abwicklung" },
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
                <CheckCircle2 className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Form Section */}
      <section
        id="contact"
        className="bg-background py-20 md:py-32"
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Jetzt anfragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Schildern Sie uns Ihre Situation. Wir machen Ihnen ein Angebot.
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-card border-border">
              <FormEnhanced />
            </Card>

            {/* Contact Info */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-semibold">+49 176 60445403</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="font-semibold">info@ruden-transport.de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <section className="bg-card border-t border-border py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
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
                  <a href="#services" className="hover:text-foreground transition">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-foreground transition">
                    Prozess
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition">
                    Kontakt
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
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-sm text-muted-foreground">
                +49 176 60445403
                <br />
                info@ruden-transport.de
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2026 RUDEN TRANSPORT. Alle Rechte vorbehalten.</p>
            <p>Designed for premium logistics</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
