import { Building2, Users, Target, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-5">
              Your Trusted M&E Partner Since 2015
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              One Resource Services Pte Ltd (ORS) was incorporated in August 2015 to provide integrated 
              facilities services to both commercial and residential properties. As an M&E company 
              specialising in Electrical and Security Systems, we are a trusted and reliable contractor 
              dedicated to delivering high-quality solutions.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              With over 10 years of industry experience, we provide safe, efficient, and innovative 
              services tailored to meet unique customer needs. We are BCA (ME 05 Electrical) and 
              Bizsafe 3 registered, committed to the highest standards of quality and safety.
            </p>

            <p className="text-sm italic text-muted-foreground border-l-2 border-secondary pl-4">
              "Customer Centric, Reliable, Responsible, Responsive, Resourceful"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Building2, title: "Integrated Facilities", desc: "Full-spectrum M&E services" },
              { icon: Users, title: "Expert Team", desc: "Certified professionals" },
              { icon: Target, title: "Precision Work", desc: "Quality-driven execution" },
              { icon: Award, title: "Certified", desc: "BCA & Bizsafe registered" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-lg p-5 border border-border"
              >
                <div className="w-10 h-10 rounded bg-accent flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-0.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
