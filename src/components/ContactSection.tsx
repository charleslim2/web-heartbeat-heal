import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@oneresourceservices.com?subject=${subject}&body=${body}`;
  };

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

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-5 border border-border space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "23 Kian Teck Road #04-01\nSingapore 628774" },
                { icon: Phone, label: "Phone", value: "+65 8810 1448", href: "tel:+6588101448" },
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
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-5 border border-border space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+65 XXXX XXXX"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground font-semibold rounded hover:bg-secondary/90 transition-colors text-sm"
              >
                Send Enquiry
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
