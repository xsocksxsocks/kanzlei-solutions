import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UeberUns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 border-b border-border pb-3">
            Über uns
          </h2>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Die Kanzlei RA GmbH
              </h3>
              <p>
                Die Kanzlei RA GmbH mit Sitz in Düsseldorf ist ein spezialisierter 
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
              <p>
                Wir setzen auf eine sachliche, professionelle und lösungsorientierte 
                Arbeitsweise. Jeder Fall wird individuell geprüft und bearbeitet – 
                mit dem nötigen Nachdruck, aber stets im Rahmen der rechtlichen 
                Vorgaben. Diskretion und Verlässlichkeit sind dabei die Grundlage 
                unserer täglichen Arbeit.
              </p>
              <p className="mt-3">
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
              <p>
                Unser Büro befindet sich in der Fritz-Vomfelde-Straße 6-12, 
                40547 Düsseldorf. Von hier aus betreuen wir Mandanten aus dem 
                gesamten Bundesgebiet. Durch die zentrale Lage in Düsseldorf 
                sind wir sowohl persönlich als auch digital gut erreichbar.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Unsere Werte
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Zuverlässigkeit</strong> – Wir halten, was wir zusagen, 
                  und bearbeiten jeden Vorgang mit der gebotenen Sorgfalt.
                </li>
                <li>
                  <strong className="text-foreground">Transparenz</strong> – Unsere Mandanten werden jederzeit 
                  über den Stand ihrer Angelegenheiten informiert.
                </li>
                <li>
                  <strong className="text-foreground">Diskretion</strong> – Vertraulichkeit ist für uns 
                  selbstverständlich, insbesondere bei sensiblen finanziellen Angelegenheiten.
                </li>
                <li>
                  <strong className="text-foreground">Effizienz</strong> – Wir arbeiten ergebnisorientiert 
                  und streben stets die wirtschaftlich sinnvollste Lösung an.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
