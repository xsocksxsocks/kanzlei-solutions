const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground/70 py-6">
      <div className="container text-center text-sm">
        <p>© {new Date().getFullYear()} Kanzlei RA GmbH · Fritz-Vomfelde-Straße 6-12 · 40547 Düsseldorf</p>
        <p className="mt-1">info@kanzlei-ra.net</p>
      </div>
    </footer>
  );
};

export default Footer;
