import { CheckCircle2, Clock, Wrench, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "BCA & Bizsafe Certified", desc: "Licensed ME05 Electrical contractor with workplace safety certification." },
  { icon: Clock, title: "10+ Years Experience", desc: "A decade of delivering trusted M&E and facility services across Singapore." },
  { icon: Wrench, title: "Full-Spectrum Services", desc: "One-stop solution for electrical, security, and building maintenance needs." },
  { icon: HeartHandshake, title: "Customer Centric", desc: "We build lasting relationships through reliability, responsiveness and care." },
  { icon: Lightbulb, title: "Innovative Solutions", desc: "Modern approaches to energy efficiency and smart building systems." },
  { icon: CheckCircle2, title: "Quality Guaranteed", desc: "Every project completed to the highest standards of quality and safety." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
            Built on Trust & Excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            We believe that proper property management prolongs asset life and reduces unnecessary costs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-3 p-5 rounded-lg bg-card border border-border"
            >
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center shrink-0">
                <r.icon className="h-4 w-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-0.5">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
