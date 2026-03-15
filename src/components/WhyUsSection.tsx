import { motion } from "framer-motion";
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
    <section id="why-us" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Built on Trust & Excellence
          </h2>
          <p className="text-muted-foreground">
            We believe that proper property management prolongs asset life and reduces unnecessary costs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <r.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
