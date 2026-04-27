"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image zoom out on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Text character animation
      const chars = textRef.current?.querySelectorAll(".split-char");
      if (chars) {
        gsap.fromTo(
          chars,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="split-char inline-block overflow-hidden">
        <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  return (
    <section id="contact" ref={sectionRef} className="relative h-screen bg-zarko-darker overflow-hidden">
      {/* Background Image with Zoom */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: "scale(1.3)" }}
      >
        <div className="absolute inset-0 bg-zarko-darker/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2400&q=80"
          alt="Bella Vista – Atmosphäre"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between p-8">
        {/* Main Text */}
        <div className="pt-32">
          <h2
            ref={textRef}
            className="font-serif text-[8vw] md:text-[6vw] text-zarko-cream leading-none overflow-hidden"
          >
            {splitText("NICHT NUR EIN RESTAURANT,")}
            <br />
            {splitText("EIN LEBENSGEFÜHL.")}
          </h2>
        </div>

        {/* Reservation CTA */}
        <div className="flex justify-end">
          <div className="max-w-md space-y-4">
            <p className="text-sm text-zarko-cream/60 tracking-widest">BESUCHEN SIE UNS</p>
            <div className="space-y-1 text-sm text-zarko-cream/80">
              <p>[Ihre Adresse], 79098 Freiburg</p>
              <p className="pt-1">Di–Do: 11:30–14:30 & 17:30–23:00</p>
              <p>Fr: 11:30–14:30 & 17:30–24:00</p>
              <p>Sa: 12:00–24:00</p>
              <p>So: 12:00–22:00</p>
              <p className="text-zarko-terra">Mo: Ruhetag</p>
            </div>
            <a
              href="#reservieren"
              className="flex items-center gap-3 border-b border-zarko-cream/30 pb-2 hover:border-zarko-terra transition-colors group"
            >
              <span className="text-zarko-cream group-hover:text-zarko-terra transition-colors">[Ihre Telefonnummer]</span>
              <span className="text-zarko-cream/40 group-hover:text-zarko-terra transition-colors">→</span>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between items-end border-t border-zarko-cream/10 pt-8">
          <div className="max-w-sm">
            <p className="text-xs text-zarko-cream/60 leading-relaxed">
              Mediterrane Küche im Herzen von Freiburg —
              wo italienische Tradition und regionale Zutaten seit über 15 Jahren zusammenfinden.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="space-y-2">
              <p className="text-xs text-zarko-cream/40 tracking-widest">RESTAURANT</p>
              <ul className="space-y-1 text-sm text-zarko-cream/80">
                <li><a href="#about" className="hover:text-zarko-terra transition-colors">Über uns</a></li>
                <li><a href="#menu" className="hover:text-zarko-terra transition-colors">Speisekarte</a></li>
                <li><a href="#reservieren" className="hover:text-zarko-terra transition-colors">Reservierung</a></li>
                <li><a href="#event" className="hover:text-zarko-terra transition-colors">Events</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-zarko-cream/40 tracking-widest">HIGHLIGHTS</p>
              <ul className="space-y-1 text-sm text-zarko-cream/80">
                <li><a href="#menu" className="hover:text-zarko-terra transition-colors">Tagliatelle al Tartufo</a></li>
                <li><a href="#menu" className="hover:text-zarko-terra transition-colors">Saltimbocca</a></li>
                <li><a href="#menu" className="hover:text-zarko-terra transition-colors">Grigliata Mista</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center pt-4 text-xs text-zarko-cream/40">
          <span>© 2025 [Ihr Firmenname]. Alle Rechte vorbehalten.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zarko-terra transition-colors">Instagram</a>
            <a href="/impressum" className="hover:text-zarko-terra transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-zarko-terra transition-colors">Datenschutz</a>
          </div>
        </div>

        {/* Media Castle Branding */}
        <div className="pt-4 text-center">
          <p className="text-[11px] text-slate-400/70" style={{ color: "#94a3b8" }}>
            Webseite erstellt von Media Castle –{" "}
            <a
              href="https://www.media-castle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zarko-terra transition-colors"
            >
              media-castle.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
