import PropertyCard from '../PropertyCard';
import propertyImage from '@assets/generated_images/Modern_luxury_estate_property_d456a1cb.png';

export default function PropertyCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <PropertyCard
        id="1"
        image={propertyImage}
        name="Modern Estate Mansion"
        location="North Fort Worth, TX"
        propertyType="Residential"
        squareFeet={5200}
        bedrooms={5}
        bathrooms={4}
      />
    </div>
  );
}
