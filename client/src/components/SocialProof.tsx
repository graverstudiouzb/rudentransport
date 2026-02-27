import { Star, Quote, Shield, TrendingUp, Clock, Award } from 'lucide-react';
import { CardEnhanced } from '@/components/ui/CardEnhanced';

/**
 * RUDEN TRANSPORT Social Proof Component
 * POSITIONING: Premium safe transport specialist
 * Testimonials focus on: complex access, discretion, professionalism
 * Metrics are CONCRETE, not vague
 */

const testimonials = [
  {
    name: 'Thomas Richter',
    company: 'Juwelier Richter, Düsseldorf',
    rating: 5,
    text: 'Unser 900-kg-Tresor musste in den Keller — durch eine 70 cm breite Tür. Zwei andere Firmen haben abgesagt. RUDEN hat es in 3 Stunden geschafft. Ohne einen Kratzer.',
    avatar: '👨‍💼',
  },
  {
    name: 'Dr. Martina Schäfer',
    company: 'Rechtsanwaltskanzlei, Frankfurt',
    rating: 5,
    text: 'Absolute Diskretion war uns wichtig. RUDEN kam mit neutralem Fahrzeug, das Team in ziviler Kleidung. Kein Nachbar hat etwas bemerkt. Genau so muss das sein.',
    avatar: '👩‍⚖️',
  },
  {
    name: 'Michael Brandt',
    company: 'Immobilienverwaltung, Hamburg',
    rating: 5,
    text: 'Wir lassen regelmäßig Tresore in Altbauten liefern. RUDEN kennt sich mit engen Treppenhäusern aus wie kein anderer. Schnell, sauber, dokumentiert.',
    avatar: '👨‍💼',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Vertrauen, das auf Ergebnissen basiert
          </h2>
          <p className="text-lg text-muted-foreground">
            Was unsere Kunden über RUDEN TRANSPORT sagen
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <CardEnhanced
              key={idx}
              variant="soft"
              className="p-6 hover-lift"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="flex gap-3 mb-4">
                <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </CardEnhanced>
          ))}
        </div>

        {/* Trust metrics — CONCRETE numbers */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mt-16">
          {[
            { icon: TrendingUp, number: '500+', label: 'Tresore transportiert' },
            { icon: Shield, number: '0', label: 'Schadensfälle', sublabel: 'Null. Wirklich.' },
            { icon: Clock, number: '<2h', label: 'Antwortzeit auf Anfragen' },
            { icon: Award, number: '100%', label: 'Dokumentierte Übergaben' },
          ].map((metric, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {metric.number}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.label}
              </p>
              {metric.sublabel && (
                <p className="text-xs text-emerald-500 mt-1 font-medium">
                  {metric.sublabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
