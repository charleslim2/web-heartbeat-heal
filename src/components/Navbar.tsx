import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Top bar */}
      <div className="bg-primary hidden md:block">
        <div className="container flex items-center justify-end gap-6 py-2 text-sm text-primary-foreground/80">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            23 Kian Teck Road #04-01, Singapore 628774
          </span>
          <a href="tel:+6588101448" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
            <Phone className="h-3.5 w-3.5" />
            +65 8810 1448
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-card"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="font-heading text-2xl font-extrabold text-primary">ORS</span>
            </div>
            <div className="hidden sm:block border-l border-border pl-3">
              <span className="text-xs font-medium text-muted-foreground leading-tight block">
                One Resource Services
              </span>
              <span className="text-[10px] text-muted-foreground/70">Pte Ltd</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-3 text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg text-center"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
