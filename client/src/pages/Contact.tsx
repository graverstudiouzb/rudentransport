import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Page
 * Contact form and company information
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Bitte füllen Sie alle erforderlichen Felder aus");
      return;
    }
    // TODO: Send to backend
    toast.success("Nachricht erfolgreich versendet! Wir melden uns bald.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="Kontakt"
        description="Kontaktieren Sie RUDEN TRANSPORT für Ihre Spezialtransporte. Kostenlose Besichtigung und unverbindliches Angebot."
        url="https://ruden-transport.de/contact"
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-card/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Wir freuen uns auf Ihre Anfrage. Kostenlose Besichtigung und unverbindliches Angebot.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Schreiben Sie uns
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ihr Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ihre@email.de"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+49 176 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Unternehmen
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beschreiben Sie Ihre Anfrage..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Kontaktinformationen
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="p-6 border border-border">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Telefon
                      </h3>
                      <a
                        href="tel:+4917660445403"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        +49 176 60445403
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 border border-border">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@ruden-transport.de"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        info@ruden-transport.de
                      </a>
                    </div>
                  </div>
                </Card>

                {/* WhatsApp */}
                <Card className="p-6 border border-border">
                  <div className="flex gap-4">
                    <div className="h-6 w-6 text-primary flex-shrink-0 flex items-center justify-center">
                      💬
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/491766044540"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        +49 176 60445403
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Availability */}
                <Card className="p-6 border border-border">
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Verfügbarkeit
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Montag - Freitag: 8:00 - 18:00 Uhr
                        <br />
                        Wochenende: Nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
