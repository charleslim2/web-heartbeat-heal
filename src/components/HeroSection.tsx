import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Facility management" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-primary-foreground/10 border border-primary-foreground/15 mb-6">
            <Shield className="h-3.5 w-3.5 text-secondary" />
            <span className="text-xs font-medium text-primary-foreground/80">
              BCA & Bizsafe 3 Registered
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.15] mb-5">
            Integrated Facility &{" "}
            <span className="text-secondary">M&E Services</span>{" "}
            You Can Trust
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mb-8 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground font-medium rounded border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors text-sm"
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
                <span className="font-heading text-2xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <span className="block text-xs text-primary-foreground/50 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
