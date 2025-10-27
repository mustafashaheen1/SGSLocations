import PropertyFilters from '../PropertyFilters';
import { useState } from 'react';

export default function PropertyFiltersExample() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const mockFilterCounts = {
    pool: 10,
    new: 5,
    kitchen: 8,
    americana: 3,
    views: 12,
    modern: 7,
    bathroom: 6,
    retro: 2,
    driveway: 9,
    mediterranean: 4,
    contemporary: 11,
    ranch: 6,
    luxury: 8,
    industrial: 5,
    historical: 3,
  };

  return (
    <div className="p-6 h-screen">
      <PropertyFilters
        selectedFilters={selectedFilters}
        filterCounts={mockFilterCounts}
        onFilterChange={(filters) => {
          setSelectedFilters(filters);
          console.log('Selected filters:', filters);
        }}
        onApply={() => console.log('Apply filters')}
      />
    </div>
  );
}
