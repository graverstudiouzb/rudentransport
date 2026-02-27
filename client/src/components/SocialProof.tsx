import { Star, Quote } from 'lucide-react';
import { CardEnhanced } from '@/components/ui/CardEnhanced';

const testimonials = [
  {
    name: 'Klaus Müller',
    company: 'Antik & Kunsthandel München',
    rating: 5,
    text: 'RUDEN TRANSPORT hat unsere wertvollen Möbel sicher in den 4. Stock gebracht. Professionell, diskret und versichert. Genau das, was wir brauchten!',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Weber',
    company: 'Privatkundin Berlin',
    rating: 5,
    text: 'Mein Klavier sollte in eine enge Altbauwohnung. RUDEN TRANSPORT hat es geschafft! Schnell, zuverlässig und sehr höflich.',
    avatar: '👩‍💼',
  },
  {
    name: 'Hans Keller',
    company: 'Versicherungsmakler Zürich',
    rating: 5,
    text: 'Wir empfehlen RUDEN TRANSPORT unseren Kunden regelmäßig. Die Dokumentation ist lückenlos, die Versicherung ist vollständig.',
    avatar: '👨‍💼',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vertraut von Kunden in ganz Deutschland
          </h2>
          <p className="text-lg text-muted-foreground">
            Echte Bewertungen von zufriedenen Kunden
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
                <p className="text-foreground leading-relaxed">
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
                  <p className="text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </CardEnhanced>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="grid gap-6 md:grid-cols-4 mt-16">
          {[
            { number: '500+', label: 'Erfolgreiche Transporte' },
            { number: '98%', label: 'Kundenzufriedenheit' },
            { number: '15+', label: 'Jahre Erfahrung' },
            { number: '24/7', label: 'Verfügbar' },
          ].map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.number}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
