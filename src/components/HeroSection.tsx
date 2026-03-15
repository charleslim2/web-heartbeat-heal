import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import keppelLogo from "@/assets/clients/keppel-logistics.webp";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "Keppel Logistics", logo: keppelLogo },
  { name: "Duke-NUS Medical School" },
  { name: "MINDS Singapore" },
  { name: "NEU Industries" },
  { name: "Speedy-Tech Electronics" },
  { name: "Tuas Checkpoint" },
  { name: "Clementi Arcade" },
  { name: "Cecil Court" },
  { name: "Woodgrove Condominium" },
  { name: "Kembangan Plaza" },
  { name: "Dormer Park" },
  { name: "Sidang II Condominium" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-background">
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-muted border border-border mb-6">
            <Shield className="h-3.5 w-3.5 text-secondary" />
            <span className="text-xs font-medium text-muted-foreground">
              BCA & Bizsafe 3 Registered
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-5">
            Integrated Facility &{" "}
            <span className="text-secondary">M&E Services</span>{" "}
            You Can Trust
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Delivering high-quality electrical, security systems, and building maintenance 
            solutions for residential, commercial, and industrial properties in Singapore.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded hover:bg-secondary/90 transition-colors text-sm"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-medium rounded border border-border hover:bg-muted transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex gap-10">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Safety Record" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients marquee below stats */}
      <div className="relative z-10 pb-8 pt-10">
        <div className="container mb-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center h-12 px-6 bg-muted border border-border rounded"
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-7 w-auto object-contain opacity-70" />
                ) : (
                  <span className="font-heading text-xs font-semibold text-muted-foreground whitespace-nowrap">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
