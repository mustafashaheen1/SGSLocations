import PropertyCard from './PropertyCard';

interface Property {
  id: string;
  image: string;
  name: string;
  location: string;
  propertyType: string;
  squareFeet?: number;
  bedrooms?: number;
  bathrooms?: number;
}

interface FeaturedLocationsProps {
  properties: Property[];
}

export default function FeaturedLocations({ properties }: FeaturedLocationsProps) {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="heading-featured-locations">
            Featured Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
