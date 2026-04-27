import type { Metadata } from "next";
import "./globals.css";
import DemoBadge from "./components/DemoBadge";

export const metadata: Metadata = {
  title: "Restaurant Bella Vista – Mediterrane Küche in Freiburg",
  description:
    "Demo-Webseite – mediterrane Küche, Tradition und Gastfreundschaft mitten in Freiburg.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain-overlay" />
        {children}
        <DemoBadge />
      </body>
    </html>
  );
}
