interface ClientShowcaseProps {
  clients: Array<{
    id: string;
    name: string;
    logo: string;
  }>;
}

export default function ClientShowcase({ clients }: ClientShowcaseProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Trusted by Leading Productions
          </h2>
          <p className="text-muted-foreground">
            Our locations have been featured in major film and TV productions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full max-w-[200px] aspect-video flex items-center justify-center p-6 hover-elevate rounded-lg"
              data-testid={`client-logo-${client.id}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl italic text-muted-foreground mb-4">
            "SGS Locations provided exceptional service and found us the perfect filming location. Their expertise and professionalism made our production seamless."
          </blockquote>
          <p className="font-semibold">— Production Director, Major TV Series</p>
        </div>
      </div>
    </section>
  );
}
