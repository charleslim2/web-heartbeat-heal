import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-heading text-xl font-bold text-primary-foreground">ORS</span>
            <p className="text-xs text-primary-foreground/50 mt-2 leading-relaxed max-w-xs">
              One Resource Services Pte Ltd — Your trusted partner for integrated 
              facility management and M&E services in Singapore.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-3">Quick Links</h4>
            <div className="space-y-1.5">
              {["About", "Services", "Why Us", "Achievements", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-3">Contact</h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2 text-xs text-primary-foreground/50">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                23 Kian Teck Road #04-01, Singapore 628774
              </p>
              <a href="tel:+6588101448" className="flex items-center gap-2 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Phone className="h-3.5 w-3.5" />
                +65 8810 1448
              </a>
              <a href="mailto:info@oneresourceservices.com" className="flex items-center gap-2 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Mail className="h-3.5 w-3.5" />
                info@oneresourceservices.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-5 text-center">
          <p className="text-[11px] text-primary-foreground/30">
            © {new Date().getFullYear()} One Resource Services Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
