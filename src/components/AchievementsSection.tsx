import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Achievements & Awards
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Recognised for Excellence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "BCA Registered", desc: "ME 05 Electrical Licensed Contractor" },
            { title: "Bizsafe 3", desc: "Workplace Safety & Health Certified" },
            { title: "Trusted Partner", desc: "Long-term contracts with major clients" },
            { title: "Zero Incidents", desc: "Exemplary safety track record" },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                {i % 2 === 0 ? (
                  <Trophy className="h-6 w-6 text-secondary" />
                ) : (
                  <Star className="h-6 w-6 text-secondary" />
                )}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
