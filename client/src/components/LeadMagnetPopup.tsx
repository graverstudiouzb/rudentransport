import { useState, useEffect } from "react";
import { X, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * RUDEN TRANSPORT Lead Magnet Popup
 * - Checkliste PDF download
 * - Dual CTA: Email capture + Phone call
 * - Premium animations (fade + scale + bounce)
 * - Exit intent + time-based trigger
 */

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  // Trigger popup on page load (delay 3s)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("ruden_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("ruden_popup_seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen && !showExitIntent) {
        setShowExitIntent(true);
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isOpen, showExitIntent]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Track submission (would send to analytics/email service)
    console.log("Lead magnet submission:", { email, timestamp: new Date() });

    // Simulate PDF download
    const link = document.createElement("a");
    link.href = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/lyIoXwnfoWBiatqK.webp"; // Placeholder
    link.download = "Checkliste-Sichere-Uebergabe.pdf";
    link.click();

    setSubmitted(true);

    // Close popup after 2 seconds
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  // Handle phone call
  const handlePhoneCall = () => {
    window.location.href = "tel:+4917660445403";
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-fade-in-up"
        style={{
          animation: "popupEnter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 hover:bg-background rounded-lg transition"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Sichere Übergabe — Schritt für Schritt
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Kostenlose Checkliste für komplexe Transporte
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {!submitted ? (
              <>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ihre E-Mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ihre@email.de"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      required
                    />
                  </div>

                  {/* Dual CTA */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 btn-pulse"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Herunterladen
                    </Button>
                    <Button
                      type="button"
                      onClick={handlePhoneCall}
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-background"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Anrufen
                    </Button>
                  </div>
                </form>

                {/* Privacy note */}
                <p className="text-xs text-muted-foreground text-center">
                  Wir respektieren Ihre Privatsphäre. Keine Spam, nur relevante Tipps.
                </p>
              </>
            ) : (
              /* Success state */
              <div className="text-center py-4 space-y-3">
                <div className="inline-block p-3 bg-green-500/10 rounded-full">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-foreground">
                  ✓ Checkliste wird heruntergeladen
                </p>
                <p className="text-sm text-muted-foreground">
                  Prüfen Sie Ihren Download-Ordner. Wir melden uns bald!
                </p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-4 bg-background/50 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Schneller Kontakt per WhatsApp:{" "}
              <a
                href="https://wa.me/4917660445403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                +49 176 60445403
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Popup enter animation */}
      <style>{`
        @keyframes popupEnter {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          70% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
