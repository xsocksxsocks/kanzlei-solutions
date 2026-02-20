import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const werte = [
  { label: "Zuverlässigkeit", text: "Wir halten, was wir zusagen, und bearbeiten jeden Vorgang mit der gebotenen Sorgfalt." },
  { label: "Transparenz", text: "Unsere Mandanten werden jederzeit über den Stand ihrer Angelegenheiten informiert." },
  { label: "Diskretion", text: "Vertraulichkeit ist für uns selbstverständlich, insbesondere bei sensiblen finanziellen Angelegenheiten." },
  { label: "Effizienz", text: "Wir arbeiten ergebnisorientiert und streben stets die wirtschaftlich sinnvollste Lösung an." },
];

const UeberUns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-14">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
              Über uns
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lernen Sie die Kanzlei Rausch kennen – Ihren spezialisierten Partner 
              für Inkasso, Forderungsmanagement und Vermögensverwertung in Düsseldorf.
            </p>
          </div>
        </section>

        {/* Inhalt */}
        <section className="py-12">
          <div className="container max-w-3xl space-y-10">
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Die Kanzlei Rausch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Die Kanzlei Rausch mit Sitz in Düsseldorf ist ein spezialisierter 
                Dienstleister für Inkassoangelegenheiten, Forderungsmanagement, 
                Pfandleihe und Insolvenzverwaltung. Seit unserer Gründung verfolgen 
                wir das Ziel, unseren Mandanten und Geschäftspartnern einen 
                zuverlässigen und kompetenten Service in allen Belangen rund um 
                Forderungen und Vermögenswerte zu bieten.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Unser Ansatz
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Wir setzen auf eine sachliche, professionelle und lösungsorientierte 
                Arbeitsweise. Jeder Fall wird individuell geprüft und bearbeitet – 
                mit dem nötigen Nachdruck, aber stets im Rahmen der rechtlichen 
                Vorgaben. Diskretion und Verlässlichkeit sind dabei die Grundlage 
                unserer täglichen Arbeit.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Durch unsere Spezialisierung auf Inkasso, Factoring, Pfandleihe 
                und Insolvenzverwaltung verfügen wir über eine tiefgehende Expertise 
                in diesen Bereichen. Diese Fokussierung ermöglicht es uns, für jeden 
                Mandanten die bestmögliche Lösung zu finden.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Standort Düsseldorf
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unser Büro befindet sich in der Fritz-Vomfelde-Straße 6-12, 
                40547 Düsseldorf. Von hier aus betreuen wir Mandanten aus dem 
                gesamten Bundesgebiet. Durch die zentrale Lage in Düsseldorf 
                sind wir sowohl persönlich als auch digital gut erreichbar.
              </p>
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="bg-secondary py-12">
          <div className="container max-w-3xl">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">
              Unsere Werte
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {werte.map((w) => (
                <div key={w.label} className="border border-border bg-background p-5">
                  <h4 className="font-serif font-bold text-foreground mb-1.5">{w.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10">
          <div className="container max-w-3xl text-center">
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Überzeugen Sie sich selbst
            </h3>
            <p className="text-muted-foreground mb-5">
              Erfahren Sie mehr über unsere Dienstleistungen oder nehmen Sie direkt Kontakt auf.
            </p>
            <div className="flex justify-center gap-4">
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
                Kontakt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
