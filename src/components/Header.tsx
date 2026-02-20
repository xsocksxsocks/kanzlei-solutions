import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { path: "/", label: "Startseite" },
  { path: "/leistungen", label: "Unsere Leistungen" },
  { path: "/ueber-uns", label: "Über uns" },
  { path: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-primary">
      <div className="container py-6">
        <Link to="/">
          <img src={logo} alt="Rausch Rechtsanwalt Logo" className="h-14 brightness-0 invert" />
        </Link>
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
