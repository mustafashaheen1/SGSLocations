import PropertyCard from './PropertyCard';
import { Skeleton } from '@/components/ui/skeleton';
import { SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface PropertyGridProps {
  properties: Property[];
  isLoading?: boolean;
  onClearFilters?: () => void;
}

function PropertyCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-[4/3] w-full rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function PropertyGrid({ properties, isLoading, onClearFilters }: PropertyGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <SearchX className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No locations found matching your criteria</h3>
        <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results</p>
        <Button variant="outline" onClick={onClearFilters} data-testid="button-clear-filters-empty">
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}
