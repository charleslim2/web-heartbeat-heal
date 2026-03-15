import { Trophy, Star, Award, ExternalLink } from "lucide-react";
import apacAward from "@/assets/apac-award.png";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Achievements & Awards
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            Recognised for Excellence
          </h2>
        </div>

        {/* APAC Award Feature */}
        <div className="bg-card rounded-lg border border-border overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-secondary/10 border border-secondary/20 mb-4 w-fit">
                <Award className="h-4 w-4 text-secondary" />
                <span className="text-xs font-semibold text-secondary">2025 Award Winner</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                Electrical & CCTV Contractor of the Year 2025 – Singapore
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Named within the APAC Insider South East Asia Business Awards 2025, 
                receiving the Customer Service Excellence Award for outstanding service 
                in electrical and CCTV contracting.
              </p>
              <a
                href="https://apacinsider.digital/winners/one-resource-services-pte-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors w-fit"
              >
                View Award Details
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="bg-accent flex items-center justify-center p-6">
              <img
                src={apacAward}
                alt="APAC Insider South East Asia Business Awards 2025 - Electrical & CCTV Contractor of the Year"
                className="w-full max-w-md rounded shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
