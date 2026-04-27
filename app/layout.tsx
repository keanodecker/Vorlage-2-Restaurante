import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zum Zarko – Kroatisch • Mediterran • Regional",
  description: "Authentische kroatische Küche im Herzen des Schwarzwalds. Seit über 20 Jahren. Tradition trifft auf Herzlichkeit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
