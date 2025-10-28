import { useEffect, useRef, useState } from 'react';

interface ClientShowcaseProps {
  clients: Array<{
    id: string;
    name: string;
    logo: string;
  }>;
}

export default function ClientShowcase({ clients }: ClientShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="heading-client-showcase"
          >
            Featured in Major Productions
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full max-w-[180px] aspect-video flex items-center justify-center p-4 group"
              data-testid={`client-logo-${client.id}`}
            >
              {/* Placeholder Logo */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg transition-all duration-300 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                <span className="text-white font-bold text-sm md:text-base text-center px-2">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
