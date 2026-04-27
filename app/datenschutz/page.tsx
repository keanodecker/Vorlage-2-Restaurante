import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – Demo-Webseite",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-zarko-darker text-zarko-cream py-32 px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase">
          Rechtliches
        </span>
        <h1 className="font-serif text-5xl md:text-6xl leading-none">
          Datenschutz&shy;erklärung
        </h1>

        <div className="border-l-2 border-zarko-terra pl-6 py-4 bg-zarko-dark/40">
          <p className="text-zarko-cream/80 leading-relaxed">
            Dies ist eine Demo-Webseite von Media Castle. Hier wird im Live-Betrieb
            die Datenschutzerklärung des Auftraggebers eingefügt.
          </p>
        </div>

        <p className="text-zarko-cream/60 leading-relaxed">
          Auf dieser Demo werden keine personenbezogenen Daten verarbeitet,
          gespeichert oder weitergegeben. Formulare auf der Seite sind reine
          Vorschauen ohne Funktion.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm tracking-widest text-zarko-cream border-b border-zarko-cream pb-1 hover:text-zarko-terra hover:border-zarko-terra transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
