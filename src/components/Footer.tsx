import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground/70 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 text-sm">
          <div>
            <p className="font-serif font-bold text-primary-foreground mb-2">Kanzlei RA GmbH</p>
            <p>Fritz-Vomfelde-Straße 6-12</p>
            <p>40547 Düsseldorf</p>
            <p className="mt-2">info@kanzlei-ra.net</p>
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</Link>
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutzerklärung</Link>
          </div>
        </div>
        <p className="text-center text-xs mt-6 border-t border-primary-foreground/20 pt-4">
          © {new Date().getFullYear()} Kanzlei RA GmbH – Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
