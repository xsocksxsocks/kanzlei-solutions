import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-14">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
              Kontakt
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nehmen Sie Kontakt mit uns auf – wir sind gerne für Sie da.
            </p>
          </div>
        </section>

        {/* Kontaktinfos */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Anschrift */}
              <div className="border border-border p-6">
                <h3 className="font-serif font-bold text-foreground mb-3">Anschrift</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p className="font-semibold text-foreground">Kanzlei Rausch GmbH</p>
                  <p>Fritz-Vomfelde-Straße 6-12</p>
                  <p>40547 Düsseldorf</p>
                </div>
              </div>

              {/* Erreichbarkeit */}
              <div className="border border-border p-6">
                <h3 className="font-serif font-bold text-foreground mb-3">Erreichbarkeit</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>E-Mail: info@kanzlei-ra.net</p>
                  <p>Telefon: auf Anfrage</p>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="border border-border p-6">
                <h3 className="font-serif font-bold text-foreground mb-3">Öffnungszeiten</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Mo – Fr</span>
                    <span>10:00 – 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sa – So</span>
                    <span>Geschlossen</span>
                  </div>
                  <p className="mt-3 text-xs italic">
                    Termine vor Ort nur nach vorheriger Vereinbarung.
                  </p>
                </div>
              </div>
            </div>

            {/* Karte */}
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                Anfahrt
              </h3>
              <div className="border border-border">
                <iframe
                  title="Standort Kanzlei Rausch GmbH"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d6.7280!3d51.2380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca1b0e3e3e3d%3A0x0!2sFritz-Vomfelde-Stra%C3%9Fe%206%2C%2040547%20D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
