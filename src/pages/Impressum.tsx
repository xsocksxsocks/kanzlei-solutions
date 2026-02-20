import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 border-b border-border pb-3">
            Impressum
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Angaben gemäß § 5 TMG
              </h3>
              <p>Kanzlei Rausch</p>
              <p>Fritz-Vomfelde-Straße 6-12</p>
              <p>40547 Düsseldorf</p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Kontakt
              </h3>
              <p>E-Mail: info@kanzlei-ra.net</p>
              <p>Telefon: auf Anfrage</p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Vertretungsberechtigter Geschäftsführer
              </h3>
              <p>Hans-Michael Rausch</p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h3>
              <p>
                Rechtsdienstleistungen aufgrund besonderer Sachkunde in Bezug auf 
                Inkassodienstleistungen (§ 10 I 1 Nr. 1 RDG).
              </p>
              <p className="mt-2">
                Registriert als Inkassodienstleister gemäß § 10 Abs. 1 Satz 1 Nr. 1 RDG.
              </p>
              <p className="mt-2">
                Gewährung von Darlehen gegen Verpfändung gemäß § 34 GewO und 
                Pfandleiher VO (i.d.F. vom 1.6.1976 (BGBl. 1334) m.spät.Änd.).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Zuständige Aufsichtsbehörde
              </h3>
              <p>Präsident des Landgerichts Düsseldorf</p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Umsatzsteuer-Identifikationsnummer
              </h3>
              <p>USt-IdNr.: [USt-IdNr. eintragen]</p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                Haftungsausschluss
              </h3>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung 
                für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten 
                sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
