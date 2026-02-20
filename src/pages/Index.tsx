import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-16">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Willkommen bei der Kanzlei Rausch
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed mb-6">
              Wir sind Ihr erfahrener Partner für Inkassodienstleistungen, 
              Forderungsmanagement, Pfandleihe und Insolvenzverwaltung mit 
              Sitz in Düsseldorf. Professionell, zuverlässig und diskret.
            </p>
            <div className="flex gap-4">
              <Link
                to="/leistungen"
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Unsere Leistungen
              </Link>
              <Link
                to="/kontakt"
                className="inline-block border border-foreground text-foreground px-6 py-2.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </section>

        {/* Kurzübersicht Leistungen */}
        <section className="py-12">
          <div className="container">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 border-b border-border pb-3">
              Unsere Schwerpunkte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border p-6">
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">Inkasso</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Professionelle Forderungsdurchsetzung gemäß § 10 RDG – vom 
                  Mahnverfahren bis zur Zwangsvollstreckung.
                </p>
              </div>
              <div className="border border-border p-6">
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">Factoring</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ankauf offener Forderungen in Form des unechten Factorings 
                  für sofortige Liquidität.
                </p>
              </div>
              <div className="border border-border p-6">
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">Pfandleihe</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Darlehen gegen Verpfändung beweglicher Gegenstände – 
                  unkompliziert und ohne Bonitätsprüfung.
                </p>
              </div>
              <div className="border border-border p-6">
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">Insolvenz</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Verwaltung und Verwertung von Insolvenzmassen zur 
                  bestmöglichen Gläubigerbefriedigung.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/leistungen"
                className="text-sm text-accent underline hover:text-foreground transition-colors"
              >
                Mehr zu unseren Leistungen →
              </Link>
            </div>
          </div>
        </section>

        {/* Kurz über uns */}
        <section className="bg-secondary py-10">
          <div className="container">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Über die Kanzlei
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
              Die Kanzlei Rausch ist ein spezialisierter Dienstleister mit Sitz in 
              Düsseldorf. Wir betreuen Mandanten aus dem gesamten Bundesgebiet und 
              setzen auf eine sachliche, lösungsorientierte Arbeitsweise.
            </p>
            <Link
              to="/ueber-uns"
              className="text-sm text-accent underline hover:text-foreground transition-colors"
            >
              Mehr über uns erfahren →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
