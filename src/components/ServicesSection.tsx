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
    <section id="services" className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
            Comprehensive M&E Solutions
          </h2>
          <p className="text-sm text-muted-foreground">
            From electrical installations to security systems and full building maintenance — 
            we deliver end-to-end facility services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg overflow-hidden border border-border"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium bg-accent text-accent-foreground rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
