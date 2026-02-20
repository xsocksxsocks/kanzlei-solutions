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
              Willkommen bei der Kanzlei RA GmbH
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Ihre kompetente Kanzlei in Düsseldorf für Inkassodienstleistungen, 
              Insolvenzverfahren, Forderungsankauf und Pfandleihe.
            </p>
          </div>
        </section>

        {/* Rechtsgebiete */}
        <section className="py-12">
          <div className="container">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 border-b border-border pb-3">
              Unsere Rechtsgebiete
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">
                  Inkassodienstleistungen
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Rechtsdienstleistungen aufgrund besonderer Sachkunde in Bezug auf 
                  Inkassodienstleistungen gemäß § 10 I 1 Nr. 1 RDG. Wir setzen Ihre 
                  Forderungen professionell und zuverlässig durch.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">
                  Forderungsankauf &amp; Factoring
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Forderungsankauf von Forderungen aus Rechnungen, jeweils in der Form 
                  des unechten Factorings. Wir übernehmen Ihre offenen Forderungen und 
                  kümmern uns um die Durchsetzung.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">
                  Pfandleihe
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Gewährung von Darlehen gegen Verpfändung v.a. von beweglichen 
                  Gebrauchsgegenständen gemäß den Regelungen in § 34 GewO und 
                  Pfandleiher VO (i.d.F. vom 1.6.1976 (BGBl. 1334) m.spät.Änd.).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">
                  Insolvenzverwaltung
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Verwaltung von Insolvenzen für Unternehmen – einschließlich der 
                  Verwertung und des Verkaufs von Insolvenzwaren zur bestmöglichen 
                  Befriedigung der Gläubiger.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontaktinfo kurz */}
        <section className="bg-secondary py-10">
          <div className="container">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Kontakt
            </h3>
            <div className="text-muted-foreground space-y-1">
              <p>Kanzlei RA GmbH</p>
              <p>Fritz-Vomfelde-Straße 6-12</p>
              <p>40547 Düsseldorf</p>
              <p className="mt-3">E-Mail: info@kanzlei-ra.net</p>
              <p>Telefon: auf Anfrage</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
