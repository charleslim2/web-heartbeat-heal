import { motion } from "framer-motion";
import { Building2, Users, Target, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-6">
              Your Trusted M&E Partner Since 2015
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One Resource Services Pte Ltd (ORS) was incorporated in August 2015 to provide integrated 
              facilities services to both commercial and residential properties. As an M&E company 
              specialising in Electrical and Security Systems, we are a trusted and reliable contractor 
              dedicated to delivering high-quality solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 10 years of industry experience, we provide safe, efficient, and innovative 
              services tailored to meet unique customer needs. We are BCA (ME 05 Electrical) and 
              Bizsafe 3 registered, committed to the highest standards of quality and safety.
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="font-heading italic text-muted-foreground">
                "Customer Centric, Reliable, Responsible, Responsive, Resourceful"
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Building2, title: "Integrated Facilities", desc: "Full-spectrum M&E services" },
              { icon: Users, title: "Expert Team", desc: "Certified professionals" },
              { icon: Target, title: "Precision Work", desc: "Quality-driven execution" },
              { icon: Award, title: "Certified", desc: "BCA & Bizsafe registered" },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
