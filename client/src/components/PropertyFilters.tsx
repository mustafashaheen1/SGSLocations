import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';

interface FilterItem {
  id: string;
  label: string;
}

const filterItems: FilterItem[] = [
  { id: 'pool', label: 'Pool' },
  { id: 'new', label: 'New' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'americana', label: 'Americana' },
  { id: 'views', label: 'Views' },
  { id: 'modern', label: 'Modern' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'retro', label: 'Retro' },
  { id: 'driveway', label: 'Driveway' },
  { id: 'mediterranean', label: 'Mediterranean' },
  { id: 'contemporary', label: 'Contemporary' },
  { id: 'ranch', label: 'Ranch' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'historical', label: 'Historical' },
];

interface PropertyFiltersProps {
  selectedFilters: string[];
  filterCounts: Record<string, number>;
  onFilterChange?: (selectedFilters: string[]) => void;
  onApply?: () => void;
}

export default function PropertyFilters({ selectedFilters, filterCounts, onFilterChange, onApply }: PropertyFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = filterItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFilterToggle = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter((id) => id !== filterId)
      : [...selectedFilters, filterId];
    
    onFilterChange?.(newFilters);
  };

  const handleClearAll = () => {
    onFilterChange?.([]);
  };

  return (
    <div className="w-full md:w-72 bg-card border rounded-lg flex flex-col h-full">
      {/* Search Box */}
      <div className="p-5 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-filter-search"
          />
        </div>
      </div>

      {/* Filter List */}
      <ScrollArea className="flex-1 px-5">
        <div className="py-4 space-y-1">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3 hover-elevate rounded-lg px-2 -mx-2"
            >
              <div className="flex items-center gap-3 flex-1">
                <Checkbox
                  id={item.id}
                  checked={selectedFilters.includes(item.id)}
                  onCheckedChange={() => handleFilterToggle(item.id)}
                  data-testid={`checkbox-${item.id}`}
                />
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium cursor-pointer flex-1"
                >
                  {item.label}
                </label>
              </div>
              <span className="text-sm text-muted-foreground" data-testid={`count-${item.id}`}>
                {filterCounts[item.id] || 0}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Actions */}
      <div className="p-5 border-t space-y-3">
        <Button
          variant="ghost"
          className="w-full"
          onClick={handleClearAll}
          disabled={selectedFilters.length === 0}
          data-testid="button-clear-filters"
        >
          Clear All Filters
        </Button>
        <Button
          variant="default"
          className="w-full"
          onClick={onApply}
          data-testid="button-apply-filters"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
