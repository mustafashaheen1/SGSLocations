import PropertyFilterBar from '../PropertyFilterBar';
import { useState } from 'react';

export default function PropertyFilterBarExample() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  return (
    <div className="p-6">
      <PropertyFilterBar
        filters={filters}
        onFilterChange={(newFilters) => {
          setFilters(newFilters);
          console.log('Filters changed:', newFilters);
        }}
        activeFilterCount={Object.keys(filters).length}
      />
    </div>
  );
}
