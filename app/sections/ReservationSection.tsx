"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReservationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reservieren"
      ref={sectionRef}
      className="py-32 bg-zarko-darker relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-zarko-terra/5 -skew-x-6 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div ref={textRef} className="space-y-8 md:sticky md:top-32">
            <div>
              <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4">
                Tisch reservieren
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-zarko-cream leading-none">
                Wir freuen
                <br />
                <span className="italic text-zarko-clay">uns auf Sie</span>
              </h2>
            </div>

            <p className="text-zarko-cream/60 leading-relaxed max-w-sm">
              Reservieren Sie Ihren Tisch direkt online. Bei größeren Gruppen
              (8+ Personen) oder besonderen Anlässen bitten wir um eine
              telefonische Absprache.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-zarko-cream/70">
                <span className="w-1.5 h-1.5 rounded-full bg-zarko-terra flex-shrink-0" />
                <span>[Ihre Adresse], 79098 Freiburg</span>
              </div>
              <a
                href="#reservieren"
                className="flex items-center gap-3 text-zarko-cream/70 hover:text-zarko-terra transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zarko-terra flex-shrink-0" />
                <span>[Ihre Telefonnummer]</span>
              </a>
              <a
                href="#reservieren"
                className="flex items-center gap-3 text-zarko-cream/70 hover:text-zarko-terra transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zarko-terra flex-shrink-0" />
                <span>[Ihre E-Mail]</span>
              </a>
              <div className="flex items-center gap-3 text-zarko-cream/70">
                <span className="w-1.5 h-1.5 rounded-full bg-zarko-terra flex-shrink-0" />
                <span>Di–So geöffnet · Mo Ruhetag</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={formRef}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Name + Telefon */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ihr Name"
                    className="w-full bg-transparent border-b border-zarko-cream/20 py-3 text-zarko-cream placeholder-zarko-cream/30 focus:border-zarko-terra focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0761 …"
                    className="w-full bg-transparent border-b border-zarko-cream/20 py-3 text-zarko-cream placeholder-zarko-cream/30 focus:border-zarko-terra focus:outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              {/* E-Mail */}
              <div className="space-y-1.5">
                <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                  E-Mail
                </label>
                <input
                  type="email"
                  placeholder="ihre@email.de"
                  className="w-full bg-transparent border-b border-zarko-cream/20 py-3 text-zarko-cream placeholder-zarko-cream/30 focus:border-zarko-terra focus:outline-none transition-colors text-sm"
                />
              </div>

              {/* Datum + Uhrzeit */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                    Datum *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border-b border-zarko-cream/20 py-3 text-zarko-cream/70 focus:border-zarko-terra focus:outline-none transition-colors text-sm [color-scheme:dark]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                    Uhrzeit *
                  </label>
                  <select
                    required
                    className="w-full bg-zarko-darker border-b border-zarko-cream/20 py-3 text-zarko-cream/70 focus:border-zarko-terra focus:outline-none transition-colors text-sm"
                  >
                    <option value="">Bitte wählen</option>
                    <optgroup label="Mittagstisch">
                      <option>11:00</option>
                      <option>11:30</option>
                      <option>12:00</option>
                      <option>12:30</option>
                      <option>13:00</option>
                      <option>13:30</option>
                    </optgroup>
                    <optgroup label="Abend">
                      <option>17:00</option>
                      <option>17:30</option>
                      <option>18:00</option>
                      <option>18:30</option>
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Personenanzahl */}
              <div className="space-y-1.5">
                <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                  Personenanzahl *
                </label>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {["1–2", "3–4", "5–6", "7–8", "8+"].map((n) => (
                    <label key={n} className="relative cursor-pointer">
                      <input type="radio" name="persons" value={n} className="sr-only peer" />
                      <span className="block text-center py-2 border border-zarko-cream/20 text-zarko-cream/60 text-xs tracking-wide peer-checked:border-zarko-terra peer-checked:text-zarko-terra hover:border-zarko-cream/40 transition-colors">
                        {n}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Wünsche */}
              <div className="space-y-1.5">
                <label className="text-xs tracking-widest text-zarko-cream/50 uppercase">
                  Besondere Wünsche
                </label>
                <textarea
                  rows={3}
                  placeholder="Allergien, Sonderwünsche, Anlass …"
                  className="w-full bg-transparent border-b border-zarko-cream/20 py-3 text-zarko-cream placeholder-zarko-cream/30 focus:border-zarko-terra focus:outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-zarko-terra text-white text-sm tracking-widest uppercase hover:bg-zarko-terra/90 transition-colors mt-2"
              >
                Reservierung anfragen
              </button>

              <p className="text-zarko-cream/30 text-xs text-center">
                Sie erhalten eine Bestätigung per Telefon oder E-Mail.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
