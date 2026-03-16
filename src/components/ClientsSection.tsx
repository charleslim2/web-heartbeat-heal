import keppelLogo from "@/assets/clients/keppel-logistics.webp";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "Keppel Logistics", logo: keppelLogo },
  { name: "Duke-NUS Medical School" },
  { name: "MINDS Singapore" },
  { name: "Geodis Logistics" },
  { name: "NEU Industries" },
  { name: "Promega" },
  { name: "Air Rotor Pte Ltd" },
  { name: "Campaign Associates" },
  { name: "TwinRock" },
  { name: "WineVault" },
  { name: "Everled" },
  { name: "K16 Services" },
  { name: "Titanium" },
  { name: "Shopee Logistics" },
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
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center h-16 px-8 bg-card border border-border rounded"
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain" />
              ) : (
                <span className="font-heading text-sm font-semibold text-foreground/70 whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
