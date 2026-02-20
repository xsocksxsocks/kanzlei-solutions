import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { path: "/", label: "Startseite" },
  { path: "/leistungen", label: "Unsere Leistungen" },
  { path: "/ueber-uns", label: "Über uns" },
  { path: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-primary">
      <div className="container py-6 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Rausch Rechtsanwalt Logo" className="h-20 brightness-0 invert" />
        </Link>
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block bg-primary/90 border-t border-primary-foreground/10">
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary/95 border-t border-primary-foreground/10">
          <div className="container flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors border-b border-primary-foreground/5 ${
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
      )}
    </header>
  );
};

export default Header;
