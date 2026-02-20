import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 border-b border-border pb-3">
            Kontakt
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                Unsere Anschrift
              </h3>
              <div className="text-muted-foreground space-y-1 mb-6">
                <p className="font-semibold text-foreground">Kanzlei RA GmbH</p>
                <p>Fritz-Vomfelde-Straße 6-12</p>
                <p>40547 Düsseldorf</p>
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                Erreichbarkeit
              </h3>
              <div className="text-muted-foreground space-y-1">
                <p>E-Mail: info@kanzlei-ra.net</p>
                <p>Telefon: auf Anfrage</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                Anfahrt
              </h3>
              <div className="border border-border">
                <iframe
                  title="Standort Kanzlei RA GmbH"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7280!3d51.2380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0e3e3e3d%3A0x0!2sFritz-Vomfelde-Stra%C3%9Fe%206%2C%2040547%20D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
