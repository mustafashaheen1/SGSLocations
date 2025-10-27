import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

const categories: FilterOption[] = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'natural', label: 'Natural' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'historical', label: 'Historical' },
];

const cities: FilterOption[] = [
  { value: 'dallas', label: 'Dallas' },
  { value: 'fort-worth', label: 'Fort Worth' },
  { value: 'frisco', label: 'Frisco' },
  { value: 'denton', label: 'Denton' },
  { value: 'plano', label: 'Plano' },
  { value: 'arlington', label: 'Arlington' },
  { value: 'irving', label: 'Irving' },
];

const counties: FilterOption[] = [
  { value: 'dallas', label: 'Dallas County' },
  { value: 'tarrant', label: 'Tarrant County' },
  { value: 'denton', label: 'Denton County' },
  { value: 'collin', label: 'Collin County' },
];

const access: FilterOption[] = [
  { value: 'easy', label: 'Easy Access' },
  { value: 'gated', label: 'Gated' },
  { value: 'secure', label: 'Secure' },
  { value: 'public', label: 'Public Access' },
];

const floors: FilterOption[] = [
  { value: '1', label: '1 Floor' },
  { value: '2', label: '2 Floors' },
  { value: '3+', label: '3+ Floors' },
  { value: 'multi', label: 'Multi-Level' },
];

const patioBalconies: FilterOption[] = [
  { value: 'patio', label: 'Patio' },
  { value: 'balcony', label: 'Balcony' },
  { value: 'both', label: 'Both' },
  { value: 'none', label: 'None' },
];

const pool: FilterOption[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const walls: FilterOption[] = [
  { value: 'brick', label: 'Brick' },
  { value: 'wood', label: 'Wood' },
  { value: 'stone', label: 'Stone' },
  { value: 'modern', label: 'Modern' },
  { value: 'glass', label: 'Glass' },
];

const yard: FilterOption[] = [
  { value: 'large', label: 'Large Yard' },
  { value: 'small', label: 'Small Yard' },
  { value: 'none', label: 'No Yard' },
];

interface PropertyFilterBarProps {
  filters: Record<string, string>;
  onFilterChange?: (filters: Record<string, string>) => void;
  activeFilterCount?: number;
  onMobileFilterClick?: () => void;
}

export default function PropertyFilterBar({
  filters,
  onFilterChange,
  activeFilterCount = 0,
  onMobileFilterClick,
}: PropertyFilterBarProps) {
  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters };
    if (value === 'all' || !value) {
      delete newFilters[key];
    } else {
      newFilters[key] = value;
    }
    onFilterChange?.(newFilters);
  };

  return (
    <div className="mb-6">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <Button
          variant="outline"
          className="w-full relative"
          onClick={onMobileFilterClick}
          data-testid="button-mobile-filters"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Desktop Filter Dropdowns */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-3">
        <Select value={filters.category || 'all'} onValueChange={(value) => handleFilterChange('category', value)}>
          <SelectTrigger data-testid="select-category">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.city || 'all'} onValueChange={(value) => handleFilterChange('city', value)}>
          <SelectTrigger data-testid="select-city">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.county || 'all'} onValueChange={(value) => handleFilterChange('county', value)}>
          <SelectTrigger data-testid="select-county">
            <SelectValue placeholder="County" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Counties</SelectItem>
            {counties.map((county) => (
              <SelectItem key={county.value} value={county.value}>
                {county.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.access || 'all'} onValueChange={(value) => handleFilterChange('access', value)}>
          <SelectTrigger data-testid="select-access">
            <SelectValue placeholder="Access" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Access Types</SelectItem>
            {access.map((acc) => (
              <SelectItem key={acc.value} value={acc.value}>
                {acc.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.floors || 'all'} onValueChange={(value) => handleFilterChange('floors', value)}>
          <SelectTrigger data-testid="select-floors">
            <SelectValue placeholder="Floors" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Floors</SelectItem>
            {floors.map((floor) => (
              <SelectItem key={floor.value} value={floor.value}>
                {floor.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.patio || 'all'} onValueChange={(value) => handleFilterChange('patio', value)}>
          <SelectTrigger data-testid="select-patio">
            <SelectValue placeholder="Patio/Balconies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any</SelectItem>
            {patioBalconies.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.pool || 'all'} onValueChange={(value) => handleFilterChange('pool', value)}>
          <SelectTrigger data-testid="select-pool">
            <SelectValue placeholder="Pool" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any</SelectItem>
            {pool.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.walls || 'all'} onValueChange={(value) => handleFilterChange('walls', value)}>
          <SelectTrigger data-testid="select-walls">
            <SelectValue placeholder="Walls" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Wall Types</SelectItem>
            {walls.map((wall) => (
              <SelectItem key={wall.value} value={wall.value}>
                {wall.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.yard || 'all'} onValueChange={(value) => handleFilterChange('yard', value)}>
          <SelectTrigger data-testid="select-yard">
            <SelectValue placeholder="Yard" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Yard</SelectItem>
            {yard.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
