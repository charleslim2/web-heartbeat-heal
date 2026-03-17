import electricalImg from "@/assets/services-electrical.jpg";
import hvlsFanImg from "@/assets/services-hvls-fan.jpg";
import securityImg from "@/assets/services-security.jpg";
import maintenanceImg from "@/assets/services-maintenance.jpg";

const services = [
  {
    image: electricalImg,
    title: "Electrical Engineering",
    description:
      "Complete electrical engineering services covering DB replacement, cable tray and trunking, lighting and power works, and system upgrades across residential, commercial, and industrial sectors. BCA ME05 Registered Contractor.",
    items: ["DB Replacement", "Cable Tray & Trunking", "Lighting & Power Works", "System Upgrades", "Lightning Protection"],
    objectPosition: "center 30%",
  },
  {
    image: hvlsFanImg,
    title: "HVLS Fan Installation",
    description:
      "Supply, installation, and commissioning of HVLS (High Volume Low Speed) fans for warehouses, factories, and large commercial spaces, improving airflow and reducing energy costs.",
    items: ["Cabling & Trunking", "Fan Motor Installation", "Warehouses & Factories", "Commercial Spaces"],
  },
  {
    image: securityImg,
    title: "Security & CCTV Systems",
    description:
      "Supply, installation, and commissioning of security access control systems and CCTV surveillance solutions for residential, commercial, and industrial facilities.",
    items: ["CCTV Installation", "Door Access Systems", "Intercom Systems", "Maintenance Contracts"],
  },
  {
    image: maintenanceImg,
    title: "Other Services",
    description:
      "Full-spectrum building maintenance and facility management services to prolong asset life and reduce unnecessary costs.",
    items: ["Air Con Systems", "Facilities Maintenance", "Fire Safety Manager", "General Builder Works", "Security Safety Audit"],
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
            From electrical installations to security systems, HVLS fans, and full building maintenance — 
            we deliver end-to-end facility services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg overflow-hidden border border-border"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
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
