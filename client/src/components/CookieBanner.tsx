import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * RUDEN TRANSPORT Cookie Banner
 * GDPR & ePrivacy Directive compliant
 * - Consent management
 * - localStorage persistence
 * - Customizable preferences
 */

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem("ruden_cookie_preferences");
    const consentGiven = localStorage.getItem("ruden_cookie_consent");

    if (!consentGiven) {
      setIsVisible(true);
    } else if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  // Handle accept all
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("ruden_cookie_preferences", JSON.stringify(allAccepted));
    localStorage.setItem("ruden_cookie_consent", "true");
    setIsVisible(false);

    // Trigger analytics if accepted
    if (allAccepted.analytics && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        marketing_storage: "granted",
      });
    }
  };

  // Handle accept necessary only
  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem("ruden_cookie_preferences", JSON.stringify(necessaryOnly));
    localStorage.setItem("ruden_cookie_consent", "true");
    setIsVisible(false);
  };

  // Handle save preferences
  const handleSavePreferences = () => {
    localStorage.setItem("ruden_cookie_preferences", JSON.stringify(preferences));
    localStorage.setItem("ruden_cookie_consent", "true");
    setIsVisible(false);
    setShowSettings(false);

    // Update analytics consent
    if ((window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        marketing_storage: preferences.marketing ? "granted" : "denied",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl animate-slide-in-up">
      <div className="container py-6">
        {!showSettings ? (
          <div className="space-y-4">
            {/* Message */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Cookies & Datenschutz</h3>
              <p className="text-sm text-muted-foreground">
                Wir nutzen Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
                Einige Cookies sind notwendig, andere sind optional. Lesen Sie unsere{" "}
                <a href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAcceptNecessary}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Nur notwendige
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Einstellungen
              </Button>
              <Button
                onClick={handleAcceptAll}
                size="sm"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Settings */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Cookie-Einstellungen</h3>

              {/* Necessary (always on) */}
              <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                <div>
                  <p className="font-medium text-foreground">Notwendige Cookies</p>
                  <p className="text-xs text-muted-foreground">Erforderlich für die Website-Funktionalität</p>
                </div>
                <div className="w-10 h-6 bg-primary rounded-full flex items-center justify-end pr-1">
                  <div className="w-5 h-5 bg-background rounded-full" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                <div>
                  <p className="font-medium text-foreground">Analytics</p>
                  <p className="text-xs text-muted-foreground">Hilft uns, die Website zu verbessern</p>
                </div>
                <button
                  onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                  className={`w-10 h-6 rounded-full transition-colors flex items-center ${
                    preferences.analytics ? "bg-primary justify-end pr-1" : "bg-muted justify-start pl-1"
                  }`}
                >
                  <div className="w-5 h-5 bg-background rounded-full" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                <div>
                  <p className="font-medium text-foreground">Marketing</p>
                  <p className="text-xs text-muted-foreground">Personalisierte Werbung und Inhalte</p>
                </div>
                <button
                  onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                  className={`w-10 h-6 rounded-full transition-colors flex items-center ${
                    preferences.marketing ? "bg-primary justify-end pr-1" : "bg-muted justify-start pl-1"
                  }`}
                >
                  <div className="w-5 h-5 bg-background rounded-full" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Zurück
              </Button>
              <Button
                onClick={handleSavePreferences}
                size="sm"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Speichern
              </Button>
            </div>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1 hover:bg-background rounded-lg transition"
          aria-label="Banner schließen"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
