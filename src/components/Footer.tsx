import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground/70 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Logo & Beschreibung */}
          <div className="md:col-span-1">
            <Link to="/">
              <img src={logo} alt="Rausch Rechtsanwalt Logo" className="h-12 brightness-0 invert mb-3" />
            </Link>
            <p className="leading-relaxed">
              Ihre kompetente Anlaufstelle für Inkassodienstleistungen, Forderungsmanagement 
              und Pfandleihe im Raum Düsseldorf – zuverlässig, diskret und erfahren.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-serif font-bold text-primary-foreground mb-3">Navigation</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Startseite</Link>
              <Link to="/leistungen" className="hover:text-primary-foreground transition-colors">Unsere Leistungen</Link>
              <Link to="/ueber-uns" className="hover:text-primary-foreground transition-colors">Über uns</Link>
              <Link to="/kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</Link>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="font-serif font-bold text-primary-foreground mb-3">Rechtliches</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutzerklärung</Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="font-serif font-bold text-primary-foreground mb-3">Kontakt</p>
            <p>Kanzlei RA GmbH</p>
            <p>Fritz-Vomfelde-Straße 6-12</p>
            <p>40547 Düsseldorf</p>
            <p className="mt-2">info@kanzlei-ra.net</p>
            <p>Telefon: auf Anfrage</p>
          </div>
        </div>

        <p className="text-center text-xs mt-8 border-t border-primary-foreground/20 pt-4">
          © {new Date().getFullYear()} Kanzlei RA GmbH – Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
