import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Leistungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 border-b border-border pb-3">
            Unsere Leistungen
          </h2>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Inkassodienstleistungen
              </h3>
              <p>
                Als registrierter Inkassodienstleister gemäß § 10 Abs. 1 Satz 1 Nr. 1 RDG 
                erbringen wir qualifizierte Rechtsdienstleistungen im Bereich der 
                Forderungsdurchsetzung. Wir begleiten Sie vom außergerichtlichen Mahnverfahren 
                über die Titulierung bis hin zur Zwangsvollstreckung – stets mit dem Ziel, 
                Ihre berechtigten Ansprüche effizient und nachhaltig durchzusetzen.
              </p>
              <p className="mt-2">
                Unser erfahrenes Team analysiert jede Forderung individuell und entwickelt 
                eine maßgeschneiderte Strategie, die sowohl die wirtschaftliche Sinnhaftigkeit 
                als auch die rechtlichen Rahmenbedingungen berücksichtigt. Dabei legen wir 
                großen Wert auf eine professionelle und sachliche Kommunikation mit den 
                Schuldnern, um eine einvernehmliche Lösung zu ermöglichen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Forderungsankauf &amp; Factoring
              </h3>
              <p>
                Wir kaufen offene Forderungen aus Rechnungen in der Form des unechten 
                Factorings an. Damit erhalten Sie als Gläubiger sofortige Liquidität, 
                während wir das weitere Forderungsmanagement und die Durchsetzung 
                übernehmen.
              </p>
              <p className="mt-2">
                Das unechte Factoring bietet Ihnen den Vorteil, dass Sie Ihre Forderungen 
                zeitnah in Kapital umwandeln können, ohne auf den Zahlungseingang warten 
                zu müssen. Dies verbessert Ihren Cashflow erheblich und ermöglicht es Ihnen, 
                sich auf Ihr Kerngeschäft zu konzentrieren. Wir übernehmen die vollständige 
                Abwicklung – von der Bonitätsprüfung bis zur Einziehung der Forderung.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Pfandleihe
              </h3>
              <p>
                Gemäß § 34 GewO und der Pfandleiherverordnung (i.d.F. vom 1.6.1976, 
                BGBl. 1334, m.spät.Änd.) gewähren wir Darlehen gegen Verpfändung von 
                beweglichen Gebrauchsgegenständen. Dieses Modell bietet Ihnen eine 
                unkomplizierte und diskrete Möglichkeit, kurzfristigen Kapitalbedarf 
                zu decken.
              </p>
              <p className="mt-2">
                Die Pfandleihe zeichnet sich durch ihre Einfachheit aus: Sie hinterlegen 
                einen Wertgegenstand als Sicherheit und erhalten im Gegenzug ein Darlehen. 
                Die Rückgabe des Pfandgegenstandes erfolgt nach vollständiger Tilgung des 
                Darlehens einschließlich der vereinbarten Gebühren. Es erfolgt keine 
                Bonitätsprüfung, und ein negativer SCHUFA-Eintrag ist ausgeschlossen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Insolvenzverwaltung &amp; Insolvenzwarenverkauf
              </h3>
              <p>
                Wir übernehmen die Verwaltung von Unternehmensinsolvenzen mit dem Ziel, 
                die bestmögliche Befriedigung der Gläubiger sicherzustellen. Dies umfasst 
                die systematische Erfassung, Bewertung und Verwertung der Insolvenzmasse – 
                einschließlich des Verkaufs von Insolvenzwaren.
              </p>
              <p className="mt-2">
                Durch unsere Erfahrung in der Abwicklung von Insolvenzverfahren sind wir 
                in der Lage, Vermögenswerte effizient zu verwerten und dabei sowohl die 
                Interessen der Gläubiger als auch die gesetzlichen Vorgaben der 
                Insolvenzordnung zu wahren. Unser Ansatz ist stets lösungsorientiert – 
                ob Liquidation, übertragende Sanierung oder die Veräußerung einzelner 
                Vermögensgegenstände.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leistungen;
