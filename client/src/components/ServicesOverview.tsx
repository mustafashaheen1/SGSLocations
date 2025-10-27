import { Card } from '@/components/ui/card';
import { MapPin, FileText, Camera } from 'lucide-react';

const services = [
  {
    id: 'scouting',
    icon: MapPin,
    title: 'Location Scouting',
    description: 'Expert location scouting services tailored to your production needs. We help you find the perfect setting that brings your vision to life.',
  },
  {
    id: 'permitting',
    icon: FileText,
    title: 'Permitting Services',
    description: 'Navigate the complexities of filming permits with ease. We handle all paperwork and coordination with local authorities.',
  },
  {
    id: 'photography',
    icon: Camera,
    title: 'Location Photography',
    description: 'Professional photography services to document and showcase your chosen locations with high-quality images.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive location services for film and TV productions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="p-6 hover-elevate" data-testid={`service-card-${service.id}`}>
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
