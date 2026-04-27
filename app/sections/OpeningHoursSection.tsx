"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hours = [
  { day: "Montag",     times: ["11:00–14:00", "17:00–23:00"] },
  { day: "Dienstag",   times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Mittwoch",   times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Donnerstag", times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Freitag",    times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Samstag",    times: ["11:00–01:00"] },
  { day: "Sonntag",    times: null },
];

export default function OpeningHoursSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hours-row",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".hours-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="oeffnungszeiten"
      ref={sectionRef}
      className="py-32 bg-zarko-dark"
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="hours-heading mb-16">
          <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4">
            Wann wir für Sie da sind
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-zarko-cream leading-none">
            Öffnungszeiten
          </h2>
        </div>

        <div className="divide-y divide-zarko-cream/10">
          {hours.map(({ day, times }) => (
            <div
              key={day}
              className="hours-row flex justify-between items-center py-5 group"
            >
              <span
                className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${
                  times === null
                    ? "text-zarko-cream/30"
                    : "text-zarko-cream group-hover:text-zarko-terra"
                }`}
              >
                {day}
              </span>

              {times === null ? (
                <span className="text-zarko-terra text-sm tracking-widest uppercase">
                  Geschlossen
                </span>
              ) : (
                <div className="text-right space-y-1">
                  {times.map((t) => (
                    <p key={t} className="text-zarko-cream/70 text-sm tracking-wide">
                      {t}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zarko-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-zarko-cream/50 text-sm">
            Küche schließt 30 Min. vor Betriebsende · Mittagstisch täglich
          </p>
          <a
            href="#reservieren"
            className="text-xs tracking-widest border-b border-zarko-terra text-zarko-terra pb-1 hover:opacity-70 transition-opacity"
          >
            Tisch reservieren →
          </a>
        </div>
      </div>
    </section>
  );
}
