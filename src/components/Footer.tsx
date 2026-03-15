import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="font-heading text-2xl font-extrabold text-primary-foreground">ORS</span>
            <p className="text-sm text-primary-foreground/60 mt-3 leading-relaxed">
              One Resource Services Pte Ltd — Your trusted partner for integrated 
              facility management and M&E services in Singapore.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Why Us", "Achievements", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                23 Kian Teck Road #04-01, Singapore 628774
              </p>
              <a href="tel:+6588101448" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                +65 8810 1448
              </a>
              <a href="mailto:info@oneresourceservices.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                info@oneresourceservices.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} One Resource Services Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
