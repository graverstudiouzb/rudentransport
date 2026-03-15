import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * RUDEN TRANSPORT Impressum (Imprint)
 * 
 * Rechtliche Grundlagen:
 * - Telemediengesetz (TMG) § 5: Anbieterkennzeichnung
 * - Datenschutzgesetz (DSG) § 5: Angaben zum Verantwortlichen
 * - E-Commerce-Richtlinie 2000/31/EG
 * 
 * Strafen bei Nichtbeachtung: bis zu €50.000 gemäß TMG § 16
 * 
 * Dieses Impressum wurde nach den strengsten Anforderungen des deutschen Rechts
 * und der DACH-Region (Deutschland, Österreich, Schweiz) erstellt.
 */

export default function Impressum() {
  const [, navigate] = useLocation();

  useEffect(() => {
    document.title = "Impressum – RUDEN TRANSPORT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Zurück</span>
          </button>
          <h1 className="text-lg font-bold text-foreground">Impressum</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 max-w-3xl">
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Title Section */}
          <section>
            <h1 className="text-3xl font-bold text-foreground mb-2">Impressum</h1>
            <p className="text-muted-foreground text-sm">
              Angaben gemäß § 5 Abs. 1 Digitale-Dienste-Gesetz (DDG)
            </p>
          </section>

          {/* Unternehmensangaben Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Unternehmensangaben
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {/* Unternehmensname */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  Unternehmensname
                </p>
                <p className="text-lg font-bold text-foreground">RUDEN TRANSPORT</p>
              </div>

              {/* Inhaber */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0 bg-primary/5 p-4 rounded">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Inhaber (gemäß § 5 Abs. 1 DDG)
                </p>
                <p className="text-2xl font-black text-primary">Boris Ruden</p>
              </div>

              {/* Adresse */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0 bg-primary/5 p-4 rounded">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Geschäftsadresse (Betriebsstätte)
                </p>
                <div className="text-foreground space-y-1">
                  <p className="text-xl font-bold">Mittelstr. 19</p>
                  <p className="text-xl font-bold">34621 Frielendorf</p>
                  <p className="text-xl font-bold">Deutschland (DE)</p>
                </div>
              </div>

              {/* Telefon Mobil */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0 bg-primary/5 p-4 rounded">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Telefon (Mobil)
                </p>
                <a
                  href="tel:+4917662988297"
                  className="text-2xl font-black text-primary hover:text-primary/80 transition block"
                >
                  +49 176 62988297
                </a>
              </div>
              {/* Telefon Festnetz */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0 bg-primary/5 p-4 rounded">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Telefon (Festnetz)
                </p>
                <a
                  href="tel:+4956849227808"
                  className="text-2xl font-black text-primary hover:text-primary/80 transition block"
                >
                  +49 5684 9227808
                </a>
              </div>

              {/* E-Mail */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0 bg-primary/5 p-4 rounded">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  E-Mail (Direktkontakt)
                </p>
                <a
                  href="mailto:rudentransport@mail.de"
                  className="text-lg font-bold text-primary hover:text-primary/80 transition break-all"
                >
                  rudentransport@mail.de
                </a>
              </div>
            </div>
          </section>

          {/* Handelsregister Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Handelsregister & Steuernummer
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              {/* Rechtsform */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  Rechtsform
                </p>
                <p className="text-foreground font-semibold">
                  Einzelunternehmen (Gewerbebetrieb)
                </p>
              </div>

              {/* Steuernummer */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  Steuernummer
                </p>
                <p className="text-foreground font-black text-2xl font-mono tracking-wider">
                  024 862 30956
                </p>
                <p className="text-xs text-muted-foreground mt-1">Finanzamt Fritzlar-Homberg, Hessen</p>
              </div>
              {/* USt-ID */}
              <div className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  USt.-Identifikationsnummer
                </p>
                <p className="text-foreground font-black text-2xl font-mono tracking-wider">
                  DE 358607517
                </p>
                <p className="text-xs text-muted-foreground mt-1">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG</p>
              </div>
            </div>
          </section>

          {/* Verantwortlichkeit Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Verantwortlichkeit für Inhalte
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground mb-3">
                Verantwortlich für die Inhalte dieser Website gemäß § 18 Abs. 2 MStV und § 5 DDG ist:
              </p>
              <div className="bg-background/50 rounded p-4 border border-border/50">
                <p className="font-semibold text-foreground">RUDEN TRANSPORT — Boris Ruden</p>
                <p className="text-foreground">Mittelstr. 19, 34621 Frielendorf</p>
                <p className="text-foreground">Deutschland</p>
                <p className="text-foreground">Tel.: <a href="tel:+4917662988297" className="text-primary hover:underline">+49 176 62988297</a> / <a href="tel:+4956849227808" className="text-primary hover:underline">+49 5684 9227808</a></p>
                <p className="text-foreground">E-Mail: <a href="mailto:rudentransport@mail.de" className="text-primary hover:underline">rudentransport@mail.de</a></p>
              </div>
            </div>
          </section>

          {/* Haftungsausschluss Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Haftungsausschluss (Disclaimer)
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                <strong>1. Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen 
                Gesetzen verantwortlich.
              </p>
              <p>
                <strong>2. Haftung für externe Links:</strong> Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch 
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der 
                Nutzung von Informationen bleiben hiervon unberührt.
              </p>
              <p>
                <strong>3. Haftung für Links:</strong> Unsere Website enthält Links zu externen Websites. Für die Inhalte 
                der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Wir haben keinen Einfluss auf die 
                Gestaltung und die Inhalte der verlinkten Seiten. Das Angebot von Links stellt keine Billigung dieser Inhalte dar.
              </p>
            </div>
          </section>

          {/* Urheberrecht Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Urheberrecht & Nutzungsrechte
            </h2>
            <p className="text-foreground">
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. 
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des 
              Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers. Downloads und Kopien dieser 
              Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* Datenschutz Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Datenschutz & DSGVO
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren 
                Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt 
                dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung 
                nicht an Dritte weitergegeben.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloses 
                Schutzen der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              <p className="bg-background/50 p-3 rounded border border-border/50">
                Bitte beachten Sie unsere ausführliche <a href="/datenschutz" className="text-primary hover:underline font-semibold">
                  Datenschutzerklärung
                </a>, die weitere Informationen gemäß Art. 13 DSGVO enthält.
              </p>
            </div>
          </section>

          {/* Streitbeilegung Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Streitbeilegung & Verbraucherschutz
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p className="bg-background/50 p-3 rounded border border-border/50">
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold break-all"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
                teilzunehmen.
              </p>
            </div>
          </section>

          {/* Rechtliche Hinweise Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
              Rechtliche Hinweise
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-sm text-foreground">
              <p>
                <strong>Geltungsbereich:</strong> Dieses Impressum gilt für die Website rudentransport.com und alle damit 
                verbundenen Subdomains.
              </p>
              <p>
                <strong>Anwendbares Recht:</strong> Die Nutzung dieser Website unterliegt dem Recht der Bundesrepublik Deutschland. 
                Gerichtsstand ist Frielendorf (Schwalm-Eder-Kreis), Hessen, Deutschland.
              </p>
              <p>
                <strong>Sprache:</strong> Diese Website ist in deutscher Sprache verfasst. Die Inhalte richten sich in erster Linie 
                an Nutzer in Deutschland, Österreich und der Schweiz.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Zuletzt aktualisiert: {new Date().toLocaleDateString("de-DE", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Dieses Impressum wurde nach den strengsten Anforderungen des Telemediengesetzes (TMG § 5) und des Datenschutzgesetzes 
              (DSG § 5) erstellt und wird regelmäßig aktualisiert.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
