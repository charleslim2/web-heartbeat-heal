import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
            Get in Touch
          </h2>
          <p className="text-sm text-muted-foreground">
            Ready to discuss your project? Reach out to us for a free consultation and quote.
          </p>
        </div>

        <div className="max-w-2xl">
          <div className="bg-card rounded-lg p-5 border border-border space-y-5">
            {[
              { icon: MapPin, label: "Address", value: "23 Kian Teck Road #04-01\nSingapore 628774" },
              { icon: Phone, label: "Phone", value: "+65 8127 1948", href: "tel:+6581271948" },
              { icon: Mail, label: "Email", value: "info@oneresourceservices.com", href: "mailto:info@oneresourceservices.com" },
              { icon: Clock, label: "Operating Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <div className="w-9 h-9 rounded bg-accent flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xs text-foreground">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/6581271948?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-w-[160px] h-12 px-6 bg-secondary text-secondary-foreground font-semibold rounded hover:bg-secondary/90 transition-colors text-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
