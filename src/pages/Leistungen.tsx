import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leistungen = [
  {
    title: "Insolvenzverwaltung & Insolvenzwarenverkauf",
    icon: "📋",
    desc: "Wir übernehmen die Verwaltung von Unternehmensinsolvenzen mit dem Ziel, die bestmögliche Befriedigung der Gläubiger sicherzustellen. Dies umfasst die systematische Erfassung, Bewertung und Verwertung der Insolvenzmasse – einschließlich des Verkaufs von Insolvenzwaren.",
    desc2: "Durch unsere Erfahrung in der Abwicklung von Insolvenzverfahren sind wir in der Lage, Vermögenswerte effizient zu verwerten und dabei sowohl die Interessen der Gläubiger als auch die gesetzlichen Vorgaben der Insolvenzordnung zu wahren. Unser Ansatz ist stets lösungsorientiert – ob Liquidation, übertragende Sanierung oder die Veräußerung einzelner Vermögensgegenstände.",
  },
  {
    title: "Inkassodienstleistungen",
    icon: "§",
    desc: "Als registrierter Inkassodienstleister gemäß § 10 Abs. 1 Satz 1 Nr. 1 RDG erbringen wir qualifizierte Rechtsdienstleistungen im Bereich der Forderungsdurchsetzung. Wir begleiten Sie vom außergerichtlichen Mahnverfahren über die Titulierung bis hin zur Zwangsvollstreckung – stets mit dem Ziel, Ihre berechtigten Ansprüche effizient und nachhaltig durchzusetzen.",
    desc2: "Unser erfahrenes Team analysiert jede Forderung individuell und entwickelt eine maßgeschneiderte Strategie, die sowohl die wirtschaftliche Sinnhaftigkeit als auch die rechtlichen Rahmenbedingungen berücksichtigt. Dabei legen wir großen Wert auf eine professionelle und sachliche Kommunikation mit den Schuldnern, um eine einvernehmliche Lösung zu ermöglichen.",
  },
  {
    title: "Forderungsankauf & Factoring",
    icon: "€",
    desc: "Wir kaufen offene Forderungen aus Rechnungen in der Form des unechten Factorings an. Damit erhalten Sie als Gläubiger sofortige Liquidität, während wir das weitere Forderungsmanagement und die Durchsetzung übernehmen.",
    desc2: "Das unechte Factoring bietet Ihnen den Vorteil, dass Sie Ihre Forderungen zeitnah in Kapital umwandeln können, ohne auf den Zahlungseingang warten zu müssen. Dies verbessert Ihren Cashflow erheblich und ermöglicht es Ihnen, sich auf Ihr Kerngeschäft zu konzentrieren. Wir übernehmen die vollständige Abwicklung – von der Bonitätsprüfung bis zur Einziehung der Forderung.",
  },
  {
    title: "Pfandleihe",
    icon: "⚖",
    desc: "Gemäß § 34 GewO und der Pfandleiherverordnung (i.d.F. vom 1.6.1976, BGBl. 1334, m.spät.Änd.) gewähren wir Darlehen gegen Verpfändung von beweglichen Gebrauchsgegenständen. Dieses Modell bietet Ihnen eine unkomplizierte und diskrete Möglichkeit, kurzfristigen Kapitalbedarf zu decken.",
    desc2: "Die Pfandleihe zeichnet sich durch ihre Einfachheit aus: Sie hinterlegen einen Wertgegenstand als Sicherheit und erhalten im Gegenzug ein Darlehen. Die Rückgabe des Pfandgegenstandes erfolgt nach vollständiger Tilgung des Darlehens einschließlich der vereinbarten Gebühren. Es erfolgt keine Bonitätsprüfung, und ein negativer SCHUFA-Eintrag ist ausgeschlossen.",
  },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-14">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
              Unsere Leistungen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Kanzlei RA GmbH bietet Ihnen ein breites Spektrum an spezialisierten 
              Dienstleistungen rund um Forderungsmanagement, Vermögensverwertung und 
              kurzfristige Finanzierung.
            </p>
          </div>
        </section>

        {/* Leistungen */}
        <section className="py-12">
          <div className="container max-w-3xl space-y-0">
            {leistungen.map((item, i) => (
              <div
                key={i}
                className={`py-10 ${i < leistungen.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-primary text-primary-foreground rounded flex items-center justify-center text-xl font-normal">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    <p className="text-muted-foreground leading-relaxed mt-3">{item.desc2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-10">
          <div className="container max-w-3xl text-center">
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Haben Sie Fragen zu unseren Leistungen?
            </h3>
            <p className="text-muted-foreground mb-5">
              Nehmen Sie unverbindlich Kontakt mit uns auf – wir beraten Sie gerne.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leistungen;
