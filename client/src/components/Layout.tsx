import { ReactNode } from "react";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

/**
 * Layout Component
 * Shared header and footer for all pages
 * Ensures consistent navigation and branding
 */

export default function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663376218565/yJZWJQKZHSrSKVKd.png"
              alt="RUDEN TRANSPORT"
              className="h-10 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Leistungen
            </a>
            <a
              href="/#process"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Prozess
            </a>
            <a
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Kontakt
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+4917660445403"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition"
            >
              <Phone className="h-4 w-4" />
              <span>+49 176 60445403</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm font-medium"
            >
              Anfrage
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      {showFooter && (
        <footer className="bg-card border-t border-border py-12 mt-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4 mb-8">
              {/* About */}
              <div>
                <h4 className="font-semibold mb-4">RUDEN TRANSPORT</h4>
                <p className="text-sm text-muted-foreground">
                  Spezialtransporte für komplexe Zugänge in Deutschland
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/" className="hover:text-foreground transition">
                      Startseite
                    </a>
                  </li>
                  <li>
                    <a href="/#services" className="hover:text-foreground transition">
                      Leistungen
                    </a>
                  </li>
                  <li>
                    <a href="/#process" className="hover:text-foreground transition">
                      Prozess
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
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

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Kontakt</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <a href="tel:+4917660445403" className="hover:text-foreground transition">
                      +49 176 60445403
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <a href="mailto:info@ruden-transport.de" className="hover:text-foreground transition">
                      info@ruden-transport.de
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">
                  © 2026 RUDEN TRANSPORT. Alle Rechte vorbehalten.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
