import { MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * RUDEN TRANSPORT WhatsApp Widget
 * - Floating button (bottom-right)
 * - Sticky on scroll
 * - Click to open WhatsApp chat
 * - Tooltip on hover
 */

const WHATSAPP_NUMBER = "4917660445403"; // +49 176 60445403
const WHATSAPP_MESSAGE = "Hallo RUDEN TRANSPORT, ich hätte eine Anfrage zu einem Spezialtransport.";

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        {/* Tooltip */}
        <div
          className={`absolute bottom-16 right-0 bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <span className="text-foreground">Sofort auf WhatsApp</span>
          <div className="absolute top-full right-4 w-2 h-2 bg-background border-r border-b border-border transform rotate-45" />
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 animate-glow"
          aria-label="WhatsApp kontaktieren"
        >
          <MessageCircle className="h-6 w-6" />

          {/* Pulsing dot (notification) */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </button>
      </div>

      {/* Mobile-optimized: Show label on small screens */}
      <div className="fixed bottom-24 right-6 z-40 md:hidden">
        <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          Schnell antworten
        </div>
      </div>
    </>
  );
}
