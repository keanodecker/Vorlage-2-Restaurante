"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: "Tagliatelle al Tartufo",
    origin: "ITA",
    desc: "Hausgemachte Tagliatelle mit schwarzem Trüffel & Parmigiano Reggiano",
    price: "22,90 €",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    dish: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Grigliata Mista della Casa",
    origin: "MED",
    desc: "Gemischte Grillplatte mit Lamm, Hähnchen & Salsiccia, dazu Rosmarinkartoffeln",
    price: "29,50 €",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    dish: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Saltimbocca alla Romana",
    origin: "ITA",
    desc: "Zartes Kalbsfleisch mit Salbei & Parmaschinken, dazu cremige Polenta",
    price: "26,00 €",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    dish: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ShopSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".product-card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
          snap: 1 / (cards.length - 1),
        },
      });

      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="relative h-screen bg-zarko-cream overflow-hidden">
      {/* Sticky Title */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      >
        <h2 className="font-serif text-[15vw] text-zarko-dark opacity-10 whitespace-nowrap">
          SPEISEKARTE
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="horizontal-scroll-container h-full items-center pl-[20vw]"
      >
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="product-card flex-shrink-0 w-[80vw] h-[70vh] flex items-center justify-center gap-8 px-8"
          >
            {/* Dish Thumbnail */}
            <div className="relative w-1/3 aspect-square">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <span className="text-xs tracking-widest text-zarko-dark/60 border border-zarko-dark/20 px-3 py-1 rounded-full bg-zarko-cream/80">
                  {dish.origin}
                </span>
              </div>
            </div>

            {/* Dish Info */}
            <div className="w-1/3 text-center space-y-4">
              <h3 className="font-serif text-4xl text-zarko-dark">{dish.name}</h3>
              <p className="text-sm text-zarko-dark/60 leading-relaxed">{dish.desc}</p>
              <p className="text-zarko-terra font-medium tracking-widest">{dish.price}</p>
              <a
                href="#contact"
                className="inline-block text-xs tracking-widest border-b border-zarko-dark pb-1 hover:text-zarko-terra hover:border-zarko-terra transition-colors"
              >
                Tisch reservieren
              </a>
            </div>

            {/* Atmosphere Image */}
            <div className="w-1/3 aspect-square">
              <img
                src={dish.dish}
                alt={`${dish.name} Atmosphäre`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
