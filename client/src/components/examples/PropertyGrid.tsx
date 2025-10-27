import PropertyGrid from '../PropertyGrid';
import estateImage from '@assets/generated_images/Modern_luxury_estate_property_d456a1cb.png';
import ranchImage from '@assets/generated_images/Texas_ranch_property_landscape_79ad12da.png';
import loftImage from '@assets/generated_images/Industrial_urban_loft_space_9c11782a.png';

// todo: remove mock functionality
const mockProperties = [
  {
    id: '1',
    image: estateImage,
    name: 'Modern Estate Mansion',
    location: 'North Fort Worth, TX',
    propertyType: 'Residential',
    squareFeet: 5200,
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: '2',
    image: ranchImage,
    name: 'Authentic Texas Ranch',
    location: 'Denton County, TX',
    propertyType: 'Natural',
    squareFeet: 15000,
  },
  {
    id: '3',
    image: loftImage,
    name: 'Industrial Urban Loft',
    location: 'Downtown Dallas, TX',
    propertyType: 'Commercial',
    squareFeet: 3200,
  },
];

export default function PropertyGridExample() {
  return (
    <div className="p-6">
      <PropertyGrid
        properties={mockProperties}
        isLoading={false}
        onClearFilters={() => console.log('Clear filters')}
      />
    </div>
  );
}
