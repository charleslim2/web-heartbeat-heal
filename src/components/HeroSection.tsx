import { ArrowRight } from "lucide-react";
import keppelLogo from "@/assets/clients/keppel-logo.png";
import dukenusLogo from "@/assets/clients/dukenus-logo.png";

interface Client {
  name: string;
  logo: string;
  className?: string;
}

const clients: Client[] = [
  { name: "Keppel Logistics", logo: keppelLogo, className: "h-[3.15rem]" },
  { name: "Duke-NUS Medical School", logo: dukenusLogo, className: "h-[3.15rem]" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-background">
      <div className="container relative z-10 py-12">
        <div className="max-w-2xl">
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

          <div className="mt-6 flex gap-10">
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
      <div className="relative z-10 pb-8 pt-2">
        <div className="container mb-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee will-change-transform">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img src={client.logo} alt={client.name} className={`${client.className || "h-9"} w-auto object-contain`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
