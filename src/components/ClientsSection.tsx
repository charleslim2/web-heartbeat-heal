const clients = [
  "Keppel Logistics",
  "Duke-NUS Medical School",
  "MINDS Singapore",
  "NEU Industries",
  "Speedy-Tech Electronics",
  "Tuas Checkpoint",
  "Clementi Arcade",
  "Cecil Court",
  "Woodgrove Condominium",
  "Kembangan Plaza",
  "Dormer Park",
  "Sidang II Condominium",
];

const ClientsSection = () => {
  return (
    <section className="py-14 bg-muted border-y border-border overflow-hidden">
      <div className="container mb-8">
        <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
          Our Clients
        </span>
        <h2 className="font-heading text-xl font-bold text-foreground mt-1">
          Trusted by Leading Organisations
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center h-16 px-8 bg-card border border-border rounded"
            >
              <span className="font-heading text-sm font-semibold text-foreground/70 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
