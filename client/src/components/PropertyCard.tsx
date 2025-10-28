import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Maximize } from 'lucide-react';
import { useState } from 'react';

interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  propertyType: string;
  squareFeet?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export default function PropertyCard({
  id,
  image,
  name,
  location,
  propertyType,
  squareFeet,
  bedrooms,
  bathrooms,
}: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Card className="overflow-hidden group hover-elevate">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Save Button */}
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover-elevate active-elevate-2"
          onClick={() => setIsSaved(!isSaved)}
          data-testid={`button-save-${id}`}
          aria-label="Save location"
        >
          <Heart
            className={`h-5 w-5 ${isSaved ? 'fill-primary text-primary' : 'text-foreground'}`}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-semibold mb-2" data-testid={`text-property-name-${id}`}>
            {name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span data-testid={`text-location-${id}`}>{location}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" data-testid={`badge-type-${id}`}>
            {propertyType}
          </Badge>
        </div>

        {/* Quick Specs */}
        {(squareFeet || bedrooms || bathrooms) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {squareFeet && (
              <div className="flex items-center gap-1">
                <Maximize className="h-4 w-4" />
                <span data-testid={`text-sqft-${id}`}>{squareFeet.toLocaleString()} sq ft</span>
              </div>
            )}
            {bedrooms && <span data-testid={`text-beds-${id}`}>{bedrooms} beds</span>}
            {bathrooms && <span data-testid={`text-baths-${id}`}>{bathrooms} baths</span>}
          </div>
        )}

        <Button
          variant="outline"
          className="w-full"
          onClick={() => console.log('View details for:', id)}
          data-testid={`button-view-details-${id}`}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
