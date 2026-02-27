import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * RUDEN TRANSPORT Sticky Phone CTA
 * - Shows after scrolling past hero
 * - Sticky footer on mobile
 * - Phone + WhatsApp buttons
 * - Auto-hide on scroll up
 */

const PHONE_NUMBER = "+491766044540";
const WHATSAPP_NUMBER = "491766044540";
const WHATSAPP_MESSAGE = "Hallo RUDEN TRANSPORT, ich hätte eine Anfrage zu einem Spezialtransport.";

export default function StickyPhoneCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show CTA after scrolling past hero (300px)
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlePhoneCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-background via-background to-background/80 border-t border-border transition-all duration-300 md:hidden ${
        isVisible && scrollDirection === "down"
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="container py-3 flex gap-2">
        <Button
          onClick={handlePhoneCall}
          size="sm"
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          <Phone className="h-4 w-4" />
          Anrufen
        </Button>
        <Button
          onClick={handleWhatsApp}
          size="sm"
          variant="outline"
          className="flex-1 border-green-500 text-green-500 hover:bg-green-500/10 gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
