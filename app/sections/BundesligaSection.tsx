"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    provider: "SKY",
    color: "#005FFF",
    items: [
      "Freitagabendspiele um 20:30 Uhr",
      "Topspiel am Samstag um 18:30 Uhr",
      "Alle Einzelspiele & Highlights der 1. und 2. Bundesliga",
      "Beste Fußballatmosphäre – wie im Stadion!",
    ],
  },
  {
    provider: "DAZN",
    color: "#F8FF00",
    items: [
      "Konferenz samstags ab 15:30 Uhr",
      "Alle Spiele – alle Tore – live & geballt!",
      "Die beliebte Bundesliga-Konferenz direkt bei uns",
      "Emotion pur",
    ],
  },
];

export default function BundesligaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 1.08, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtle parallax on the image
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-zarko-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="mb-16">
          <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4">
            Live-Sport im Bella Vista
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-zarko-cream leading-none">
            Bundesliga<br />
            <span className="italic text-zarko-clay">live bei uns</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Content */}
          <div ref={contentRef} className="space-y-10">
            <p className="text-zarko-cream/70 leading-relaxed max-w-md">
              Bei uns wird Fußball zum Erlebnis – die komplette Saison 2025/26
              in gemütlicher Atmosphäre, auf Großbildleinwand und mit kühlem Bier vom Fass.
            </p>

            {/* SKY & DAZN blocks */}
            {highlights.map(({ provider, color, items }) => (
              <div key={provider}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold tracking-widest px-2 py-1"
                    style={{ backgroundColor: color, color: provider === "DAZN" ? "#000" : "#fff" }}
                  >
                    {provider}
                  </span>
                  {provider === "SKY" && (
                    <span className="text-zarko-cream/50 text-xs tracking-widest">Bundesliga</span>
                  )}
                  {provider === "DAZN" && (
                    <span className="text-zarko-cream/50 text-xs tracking-widest">Konferenz</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zarko-cream/70">
                      <span className="w-1 h-1 rounded-full bg-zarko-terra mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* What to expect */}
            <div className="border-t border-zarko-cream/10 pt-8 space-y-3">
              <div className="flex items-center gap-3 text-zarko-cream/80 text-sm">
                <span className="text-zarko-terra">✓</span>
                Frisch gezapftes Bier &amp; mediterrane Küche
              </div>
              <p className="text-zarko-terra text-sm font-medium">
                Reservieren Sie rechtzeitig zu den Topspielen – die besten Plätze sind schnell weg!
              </p>
              <p className="text-zarko-cream/40 text-xs italic">
                Bella Vista – wo Genuss und Spielfreude zusammenkommen.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zarko-dark/60 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1577080424005-b94e9bca1cf7?auto=format&fit=crop&w=1400&q=80"
              alt="Bundesliga Live im Bella Vista"
              className="w-full h-full object-cover"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 z-20 space-y-1">
              <p className="text-zarko-cream text-xs tracking-widest uppercase">Saison 2025/26</p>
              <p className="font-serif text-2xl text-zarko-cream">Live in HD</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
