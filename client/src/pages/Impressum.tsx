import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * RUDEN TRANSPORT Impressum (Imprint)
 * Required by German law: Telemediengesetz §5
 * Penalty for non-compliance: up to €50,000
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
          <section>
            <h1 className="text-3xl font-bold text-foreground mb-4">Impressum</h1>
            <p className="text-muted-foreground">
              Angaben gemäß § 5 Telemediengesetz (TMG) und § 5 Absatz 1 Datenschutzgesetz (DSG)
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Unternehmensangaben</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unternehmensname</p>
                <p className="text-foreground font-semibold">RUDEN TRANSPORT</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Geschäftsführer</p>
                <p className="text-foreground">[Name des Geschäftsführers]</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Adresse</p>
                <p className="text-foreground">
                  [Straße und Hausnummer]<br />
                  [Postleitzahl] [Stadt]<br />
                  Deutschland
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Telefon</p>
                <a href="tel:+4917660445403" className="text-primary hover:underline">
                  +49 176 60445403
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">E-Mail</p>
                <a href="mailto:info@ruden-transport.de" className="text-primary hover:underline">
                  info@ruden-transport.de
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Handelsregister</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Handelsregister</p>
                <p className="text-foreground">[Amtsgericht und Registernummer]</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Umsatzsteuer-Identifikationsnummer</p>
                <p className="text-foreground">[USt-IdNr.]</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Haftungsausschluss</h2>
            <p className="text-foreground">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p className="text-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Haftung für Links</h2>
            <p className="text-foreground">
              Unsere Website enthält Links zu externen Websites. Für die Inhalte der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Wir haben keinen Einfluss auf die Gestaltung und die Inhalte der verlinkten Seiten. Das Angebot von Links stellt keine Billigung dieser Inhalte dar.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Urheberrecht</h2>
            <p className="text-foreground">
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Datenschutz</h2>
            <p className="text-foreground">
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p className="text-foreground">
              Bitte beachten Sie unsere <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Streitbeilegung</h2>
            <p className="text-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p className="text-foreground">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Zuletzt aktualisiert: {new Date().toLocaleDateString("de-DE")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
