"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const curvedImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for "Zum Zarko"
      const chars = titleRef.current?.querySelectorAll(".split-char");
      if (chars) {
        gsap.fromTo(
          chars,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.5,
          }
        );
      }

      // Curved image reveal (clip-path animation)
      gsap.to(curvedImageRef.current, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 1.8,
        ease: "power3.inOut",
        delay: 0.3,
      });

      // Parallax on scroll
      gsap.to(curvedImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Nav fade in
      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="split-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-zarko-darker"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
        <div className="flex gap-8">
          <a href="#about" className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors">
            Über uns
          </a>
          <a href="#menu" className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors">
            Speisekarte
          </a>
          <a href="#oeffnungszeiten" className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors">
            Öffnungszeiten
          </a>
          <a href="#reservieren" className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors">
            Reservieren
          </a>
          <a href="#event" className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors">
            Event
          </a>
          <a
            href="#"
            className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors"
          >
            Geschenkkarte
          </a>
        </div>
        <div className="flex gap-8">
          <a href="#reservieren" className="nav-item text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors">
            [Ihre Telefonnummer]
          </a>
          <a
            href="#reservieren"
            className="nav-item text-xs tracking-widest border border-zarko-terra text-zarko-terra px-4 py-2 hover:bg-zarko-terra hover:text-white transition-colors"
          >
            Tisch buchen
          </a>
        </div>
      </nav>

      {/* Curved Image Background */}
      <div
        ref={curvedImageRef}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zarko-darker/60 via-transparent to-zarko-darker z-10" />
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80"
          alt="Restaurant Bella Vista – Außenansicht"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <span className="block text-zarko-terra text-sm tracking-[0.4em] uppercase mb-4">
            Mediterran • Italienisch • Regional
          </span>
          <h1
            ref={titleRef}
            className="font-serif text-[14vw] md:text-[11vw] text-zarko-cream overflow-hidden leading-none"
          >
            {splitText("Bella Vista")}
          </h1>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
        <div className="space-y-3">
          <p className="max-w-md text-sm text-zarko-cream/80 leading-relaxed">
            Mediterrane Küche mit Herz – seit über 15 Jahren servieren wir
            in Freiburg italienische Klassiker, hausgemachte Pasta und
            ausgewählte Weine in familiärer Atmosphäre.
          </p>
          {/* Google Bewertung – Demo-Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors group"
          >
            <span className="text-zarko-terra">★★★★★</span>
            <span className="font-medium">4,8</span>
            <span className="text-zarko-cream/50">(312 Bewertungen)</span>
            <span className="text-xs tracking-widest text-zarko-terra group-hover:underline">→ Google Maps</span>
          </a>
        </div>
        <div className="flex items-center gap-3 text-zarko-cream/60">
          <span className="text-xs tracking-widest">[IHRE ADRESSE], FREIBURG</span>
          <div className="w-12 h-[1px] bg-zarko-terra" />
        </div>
      </div>
    </section>
  );
}
