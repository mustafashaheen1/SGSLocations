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
    <section
      style={{
        backgroundColor: 'rgba(26, 58, 90, 0.98)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            data-testid="heading-services"
          >
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="text-center"
                data-testid={`service-${service.id}`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
