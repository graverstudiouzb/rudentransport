import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * RUDEN TRANSPORT Datenschutzerklärung (Privacy Policy)
 * Required by GDPR (DSGVO) and ePrivacy Directive
 * Penalty for non-compliance: up to 4% of annual turnover
 */

export default function Datenschutz() {
  const [, navigate] = useLocation();

  useEffect(() => {
    document.title = "Datenschutzerklärung – RUDEN TRANSPORT";
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
          <h1 className="text-lg font-bold text-foreground">Datenschutz</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 max-w-3xl">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h1 className="text-3xl font-bold text-foreground mb-4">Datenschutzerklärung</h1>
            <p className="text-muted-foreground">
              Datenschutz nach Datenschutz-Grundverordnung (DSGVO) und Telemediengesetz (TMG)
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Verantwortlicher</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground">
                RUDEN TRANSPORT<br />
                [Adresse]<br />
                Telefon: <a href="tel:+4917660445403" className="text-primary hover:underline">+49 176 60445403</a><br />
                E-Mail: <a href="mailto:info@ruden-transport.de" className="text-primary hover:underline">info@ruden-transport.de</a>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p className="text-foreground">
              Personenbezogene Daten werden von uns nur erhoben, wenn Sie diese aktiv mitteilen (z.B. durch Kontaktformulare, E-Mail-Anfragen oder Telefonanrufe).
            </p>
            <h3 className="text-xl font-semibold text-foreground">Kontaktformular</h3>
            <p className="text-foreground">
              Wenn Sie unser Kontaktformular nutzen, werden folgende Daten erfasst:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Nachricht / Anfragebeschreibung</li>
            </ul>
            <p className="text-foreground">
              Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Rechtsgrundlage der Verarbeitung</h2>
            <p className="text-foreground">
              Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen</li>
              <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Verarbeitung zur Wahrung berechtigter Interessen (z.B. Geschäftsbetrieb)</li>
              <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Verarbeitung mit Ihrer ausdrücklichen Einwilligung</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Cookies und Tracking</h2>
            <p className="text-foreground">
              Diese Website nutzt Cookies und Tracking-Technologien:
            </p>
            <h3 className="text-xl font-semibold text-foreground">Notwendige Cookies</h3>
            <p className="text-foreground">
              Notwendige Cookies sind erforderlich für die Funktionalität der Website (z.B. Sitzungsverwaltung). Diese können ohne Einwilligung gespeichert werden.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Google Analytics</h3>
            <p className="text-foreground">
              Diese Website nutzt Google Analytics zur Analyse von Website-Nutzung. Die Daten werden anonymisiert und an Google übermittelt. Sie können das Tracking ablehnen oder mit dem Google Analytics Opt-out Browser Add-on deaktivieren.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Marketing-Cookies</h3>
            <p className="text-foreground">
              Marketing-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gespeichert. Sie können diese jederzeit in den Cookie-Einstellungen widerrufen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Speicherdauer</h2>
            <p className="text-foreground">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für den Zweck der Verarbeitung erforderlich ist. Nach Abschluss Ihrer Anfrage werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Ihre Rechte</h2>
            <p className="text-foreground">
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können jederzeit Auskunft über Ihre gespeicherten Daten erhalten</li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können fehlerhafte Daten korrigieren lassen</li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden")</li>
              <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
              <li><strong>Datenportabilität (Art. 20 DSGVO):</strong> Sie können Ihre Daten in strukturierter Form erhalten</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung widersprechen</li>
            </ul>
            <p className="text-foreground mt-4">
              Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter <a href="mailto:info@ruden-transport.de" className="text-primary hover:underline">info@ruden-transport.de</a> oder <a href="tel:+4917660445403" className="text-primary hover:underline">+49 176 60445403</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Weitergabe an Dritte</h2>
            <p className="text-foreground">
              Ihre Daten werden nicht an Dritte weitergegeben, es sei denn:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Sie haben ausdrücklich zugestimmt</li>
              <li>Dies ist gesetzlich erforderlich (z.B. Behörden, Gerichte)</li>
              <li>Dies ist zur Erfüllung eines Vertrags notwendig</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Externe Links</h2>
            <p className="text-foreground">
              Diese Website enthält Links zu externen Websites. Wir sind nicht verantwortlich für die Datenschutzpraktiken dieser Websites. Bitte lesen Sie deren Datenschutzerklärungen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Sicherheit</h2>
            <p className="text-foreground">
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Diese Maßnahmen werden regelmäßig überprüft und aktualisiert.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Beschwerderecht</h2>
            <p className="text-foreground">
              Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren, wenn Sie der Meinung sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">11. Kontakt zum Datenschutzbeauftragten</h2>
            <p className="text-foreground">
              Für Fragen zum Datenschutz kontaktieren Sie uns bitte:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground">
                RUDEN TRANSPORT<br />
                E-Mail: <a href="mailto:info@ruden-transport.de" className="text-primary hover:underline">info@ruden-transport.de</a><br />
                Telefon: <a href="tel:+4917660445403" className="text-primary hover:underline">+49 176 60445403</a>
              </p>
            </div>
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
