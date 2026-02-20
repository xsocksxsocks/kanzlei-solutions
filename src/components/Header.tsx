import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Startseite" },
  { path: "/kontakt", label: "Kontakt" },
  { path: "/impressum", label: "Impressum" },
  { path: "/datenschutz", label: "Datenschutz" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-primary">
      <div className="container py-6">
        <h1 className="text-2xl font-serif font-bold text-primary-foreground mb-1">
          Kanzlei RA GmbH
        </h1>
        <p className="text-sm text-primary-foreground/70">
          Inkasso · Insolvenz · Factoring · Pfandleihe
        </p>
      </div>
      <nav className="bg-primary/90 border-t border-primary-foreground/10">
        <div className="container flex gap-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-5 py-3 text-sm text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors ${
                location.pathname === item.path
                  ? "bg-primary-foreground/15 text-primary-foreground font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
