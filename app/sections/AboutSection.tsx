"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal from left
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image reveal from right with scale
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 1.1 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
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
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-zarko-cream flex items-center py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div ref={textRef} className="space-y-8">
          <h2 className="font-serif text-6xl md:text-7xl text-zarko-dark leading-none">
            EIN STÜCK
            <br />
            <span className="italic text-zarko-terra">Italien</span>
          </h2>
          <p className="text-zarko-dark/70 leading-relaxed max-w-md">
            Seit über 15 Jahren ist das Bella Vista mehr als ein Restaurant – es ist
            unser Familienprojekt mitten in Freiburg. Was mit einer kleinen Trattoria begann,
            ist heute ein Treffpunkt für alle, die mediterrane Küche mit Charakter lieben.
            Wir kochen nach traditionellen Rezepten, mit Zutaten aus der Region und der
            Leidenschaft, die jedes gute Essen ausmacht.
          </p>
          <div className="flex gap-10 pt-2">
            <div>
              <span className="block font-serif text-3xl text-zarko-terra">15+</span>
              <span className="text-xs tracking-widest text-zarko-dark/50">Jahre Tradition</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-zarko-terra">4,8</span>
              <span className="text-xs tracking-widest text-zarko-dark/50">Google Bewertung</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-zarko-terra">100%</span>
              <span className="text-xs tracking-widest text-zarko-dark/50">Hausgemacht</span>
            </div>
          </div>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm tracking-widest text-zarko-dark border-b border-zarko-dark pb-1 hover:text-zarko-terra hover:border-zarko-terra transition-colors"
          >
            SPEISEKARTE
            <span>→</span>
          </a>
        </div>

        {/* Image */}
        <div ref={imageRef} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
              alt="Bella Vista – Innenbereich"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Quote stamp */}
          <div className="absolute -bottom-6 -right-6 bg-zarko-terra text-white p-6 max-w-xs">
            <p className="font-serif text-base italic">
              "Gutes Essen verbindet – und ein gemeinsamer Tisch ist der schönste Ort der Welt."
            </p>
            <p className="text-xs mt-2 opacity-90">— [Ihr Name], Inhaber</p>
          </div>
        </div>
      </div>
    </section>
  );
}
