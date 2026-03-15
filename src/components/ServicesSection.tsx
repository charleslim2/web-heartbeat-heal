import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import electricalImg from "@/assets/services-electrical.jpg";
import securityImg from "@/assets/services-security.jpg";
import maintenanceImg from "@/assets/services-maintenance.jpg";

const services = [
  {
    image: electricalImg,
    title: "Electrical Works",
    description:
      "Complete electrical installations, maintenance, and repairs for residential, commercial, and industrial properties. BCA ME05 licensed.",
    items: ["Power Distribution", "Lighting Systems", "DB Board Installation", "Electrical Testing"],
  },
  {
    image: securityImg,
    title: "Security Systems",
    description:
      "Comprehensive CCTV surveillance and door access system solutions to keep your property protected and monitored 24/7.",
    items: ["CCTV Installation", "Door Access Systems", "Intercom Systems", "Remote Monitoring"],
  },
  {
    image: maintenanceImg,
    title: "Building Maintenance",
    description:
      "Full-spectrum building maintenance including painting, air conditioning servicing, fire safety management, and more.",
    items: ["Painting Works", "Air Con Servicing", "Fire Safety", "General Maintenance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Comprehensive M&E Solutions
          </h2>
          <p className="text-muted-foreground">
            From electrical installations to security systems and full building maintenance — 
            we deliver end-to-end facility services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
