import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 border-b border-border pb-3">
            Datenschutzerklärung
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                1. Verantwortlicher
              </h3>
              <p>Kanzlei RA GmbH</p>
              <p>Fritz-Vomfelde-Straße 6-12</p>
              <p>40547 Düsseldorf</p>
              <p>E-Mail: info@kanzlei-ra.net</p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                2. Erhebung und Speicherung personenbezogener Daten
              </h3>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner 
                Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die 
                Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen 
                Ihres Internet-Service-Providers, Ihre IP-Adresse und Ähnliches.
              </p>
              <p className="mt-2">Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                3. Kontaktaufnahme
              </h3>
              <p>
                Bei der Kontaktaufnahme mit uns (z.B. per E-Mail) werden Ihre Angaben 
                zur Bearbeitung der Kontaktanfrage und deren Abwicklung gemäß Art. 6 
                Abs. 1 lit. b) DSGVO verarbeitet.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                4. Google Maps
              </h3>
              <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google 
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur 
                Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse 
                zu speichern. Diese Informationen werden in der Regel an einen Server von 
                Google in den USA übertragen und dort gespeichert. Mehr Informationen zum 
                Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: {" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                5. Ihre Rechte
              </h3>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                6. Beschwerderecht bei einer Aufsichtsbehörde
              </h3>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen 
                Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer 
                Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung 
                der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
