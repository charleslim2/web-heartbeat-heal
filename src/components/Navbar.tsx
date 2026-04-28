import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import orsLogo from "@/assets/ors-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-200 border-b ${
          scrolled ? "bg-card/95 backdrop-blur-sm border-border" : "bg-card border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2.5">
            <img src={orsLogo} alt="One Resource Services" className="h-10 w-auto" />
            <div className="border-l border-border pl-2.5">
              <span className="text-xs font-medium text-muted-foreground leading-tight block">
                One Resource Services
              </span>
              <span className="hidden sm:block text-[10px] text-muted-foreground/60">Reliable, Responsible, Responsive, Resourceful</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=6581271948"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=6581271948"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-1 px-4 py-2.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
