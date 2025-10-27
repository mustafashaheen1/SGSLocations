import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageSearchBox from '@/components/ImageSearchBox';
import PropertyFilterBar from '@/components/PropertyFilterBar';
import PropertyFilters from '@/components/PropertyFilters';
import PropertyGrid from '@/components/PropertyGrid';
import SearchPagination from '@/components/SearchPagination';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Import mock images
import estateImage from '@assets/generated_images/Modern_luxury_estate_property_d456a1cb.png';
import ranchImage from '@assets/generated_images/Texas_ranch_property_landscape_79ad12da.png';
import loftImage from '@assets/generated_images/Industrial_urban_loft_space_9c11782a.png';
import victorianImage from '@assets/generated_images/Historical_Victorian_mansion_property_a04ae71f.png';
import lakeImage from '@assets/generated_images/Natural_lake_landscape_setting_f0891daf.png';
import modernImage from '@assets/generated_images/Modern_contemporary_home_interior_bdf5a46d.png';

// todo: remove mock functionality - replace with real data
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
    city: 'fort-worth',
    county: 'tarrant',
    category: 'residential',
    tags: ['pool', 'modern', 'luxury', 'driveway'],
    access: 'gated',
    floors: '2',
    patio: 'both',
    pool: 'yes',
    walls: 'modern',
    yard: 'large',
  },
  {
    id: '2',
    image: ranchImage,
    name: 'Authentic Texas Ranch',
    location: 'Denton County, TX',
    propertyType: 'Natural',
    squareFeet: 15000,
    city: 'denton',
    county: 'denton',
    category: 'natural',
    tags: ['ranch', 'views', 'new'],
    access: 'easy',
    floors: '1',
    patio: 'patio',
    pool: 'no',
    walls: 'wood',
    yard: 'large',
  },
  {
    id: '3',
    image: loftImage,
    name: 'Industrial Urban Loft',
    location: 'Downtown Dallas, TX',
    propertyType: 'Commercial',
    squareFeet: 3200,
    city: 'dallas',
    county: 'dallas',
    category: 'commercial',
    tags: ['industrial', 'modern', 'contemporary'],
    access: 'secure',
    floors: '1',
    patio: 'balcony',
    pool: 'no',
    walls: 'brick',
    yard: 'none',
  },
  {
    id: '4',
    image: victorianImage,
    name: 'Victorian Heritage Home',
    location: 'Historic District, Dallas',
    propertyType: 'Historical',
    squareFeet: 4100,
    bedrooms: 6,
    bathrooms: 3,
    city: 'dallas',
    county: 'dallas',
    category: 'historical',
    tags: ['historical', 'luxury', 'kitchen', 'bathroom'],
    access: 'public',
    floors: '3+',
    patio: 'both',
    pool: 'no',
    walls: 'stone',
    yard: 'small',
  },
  {
    id: '5',
    image: lakeImage,
    name: 'Lakeside Natural Setting',
    location: 'Lake Lewisville, TX',
    propertyType: 'Natural',
    city: 'denton',
    county: 'denton',
    category: 'natural',
    tags: ['views', 'new'],
    access: 'public',
    floors: '1',
    patio: 'none',
    pool: 'no',
    walls: 'wood',
    yard: 'large',
  },
  {
    id: '6',
    image: modernImage,
    name: 'Contemporary Modern Home',
    location: 'Frisco, TX',
    propertyType: 'Residential',
    squareFeet: 3800,
    bedrooms: 4,
    bathrooms: 3,
    city: 'frisco',
    county: 'collin',
    category: 'residential',
    tags: ['modern', 'contemporary', 'kitchen', 'pool'],
    access: 'gated',
    floors: '2',
    patio: 'patio',
    pool: 'yes',
    walls: 'modern',
    yard: 'small',
  },
  {
    id: '7',
    image: estateImage,
    name: 'Luxury Mediterranean Villa',
    location: 'Plano, TX',
    propertyType: 'Residential',
    squareFeet: 6200,
    bedrooms: 6,
    bathrooms: 5,
    city: 'plano',
    county: 'collin',
    category: 'residential',
    tags: ['luxury', 'pool', 'mediterranean', 'driveway'],
    access: 'gated',
    floors: '2',
    patio: 'both',
    pool: 'yes',
    walls: 'stone',
    yard: 'large',
  },
  {
    id: '8',
    image: loftImage,
    name: 'Retro Downtown Loft',
    location: 'Fort Worth, TX',
    propertyType: 'Commercial',
    squareFeet: 2800,
    city: 'fort-worth',
    county: 'tarrant',
    category: 'commercial',
    tags: ['retro', 'industrial', 'contemporary'],
    access: 'secure',
    floors: 'multi',
    patio: 'balcony',
    pool: 'no',
    walls: 'brick',
    yard: 'none',
  },
  {
    id: '9',
    image: ranchImage,
    name: 'Americana Ranch Estate',
    location: 'Arlington, TX',
    propertyType: 'Natural',
    squareFeet: 12000,
    city: 'arlington',
    county: 'tarrant',
    category: 'natural',
    tags: ['ranch', 'americana', 'views'],
    access: 'easy',
    floors: '1',
    patio: 'patio',
    pool: 'no',
    walls: 'wood',
    yard: 'large',
  },
];

type SortOption = 'relevance' | 'newest' | 'price-low' | 'price-high' | 'alphabetical';

export default function Locations() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyleFilters, setSelectedStyleFilters] = useState<string[]>([]);
  const [selectedDropdownFilters, setSelectedDropdownFilters] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [isLoading, setIsLoading] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const itemsPerPage = 9;

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Compute filter counts for sidebar based on current filters (excluding style filters)
  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const allTags = ['pool', 'new', 'kitchen', 'americana', 'views', 'modern', 'bathroom', 'retro', 'driveway', 'mediterranean', 'contemporary', 'ranch', 'luxury', 'industrial', 'historical'];
    
    // Start with properties filtered by search and dropdown filters only
    let baseFiltered = [...mockProperties];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      baseFiltered = baseFiltered.filter(
        (prop) =>
          prop.name.toLowerCase().includes(query) ||
          prop.location.toLowerCase().includes(query) ||
          prop.propertyType.toLowerCase().includes(query)
      );
    }
    
    if (selectedDropdownFilters.category) {
      baseFiltered = baseFiltered.filter((prop) => prop.category === selectedDropdownFilters.category);
    }
    if (selectedDropdownFilters.city) {
      baseFiltered = baseFiltered.filter((prop) => prop.city === selectedDropdownFilters.city);
    }
    if (selectedDropdownFilters.county) {
      baseFiltered = baseFiltered.filter((prop) => prop.county === selectedDropdownFilters.county);
    }
    if (selectedDropdownFilters.access) {
      baseFiltered = baseFiltered.filter((prop) => prop.access === selectedDropdownFilters.access);
    }
    if (selectedDropdownFilters.floors) {
      baseFiltered = baseFiltered.filter((prop) => prop.floors === selectedDropdownFilters.floors);
    }
    if (selectedDropdownFilters.patio) {
      baseFiltered = baseFiltered.filter((prop) => prop.patio === selectedDropdownFilters.patio);
    }
    if (selectedDropdownFilters.pool) {
      baseFiltered = baseFiltered.filter((prop) => prop.pool === selectedDropdownFilters.pool);
    }
    if (selectedDropdownFilters.walls) {
      baseFiltered = baseFiltered.filter((prop) => prop.walls === selectedDropdownFilters.walls);
    }
    if (selectedDropdownFilters.yard) {
      baseFiltered = baseFiltered.filter((prop) => prop.yard === selectedDropdownFilters.yard);
    }
    
    // Count how many properties have each tag
    allTags.forEach(tag => {
      counts[tag] = baseFiltered.filter(prop => prop.tags?.includes(tag)).length;
    });
    
    return counts;
  }, [searchQuery, selectedDropdownFilters]);

  // Filter properties
  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties];

    // Text search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (prop) =>
          prop.name.toLowerCase().includes(query) ||
          prop.location.toLowerCase().includes(query) ||
          prop.propertyType.toLowerCase().includes(query)
      );
    }

    // Dropdown filters
    if (selectedDropdownFilters.category) {
      filtered = filtered.filter((prop) => prop.category === selectedDropdownFilters.category);
    }
    if (selectedDropdownFilters.city) {
      filtered = filtered.filter((prop) => prop.city === selectedDropdownFilters.city);
    }
    if (selectedDropdownFilters.county) {
      filtered = filtered.filter((prop) => prop.county === selectedDropdownFilters.county);
    }
    if (selectedDropdownFilters.access) {
      filtered = filtered.filter((prop) => prop.access === selectedDropdownFilters.access);
    }
    if (selectedDropdownFilters.floors) {
      filtered = filtered.filter((prop) => prop.floors === selectedDropdownFilters.floors);
    }
    if (selectedDropdownFilters.patio) {
      filtered = filtered.filter((prop) => prop.patio === selectedDropdownFilters.patio);
    }
    if (selectedDropdownFilters.pool) {
      filtered = filtered.filter((prop) => prop.pool === selectedDropdownFilters.pool);
    }
    if (selectedDropdownFilters.walls) {
      filtered = filtered.filter((prop) => prop.walls === selectedDropdownFilters.walls);
    }
    if (selectedDropdownFilters.yard) {
      filtered = filtered.filter((prop) => prop.yard === selectedDropdownFilters.yard);
    }

    // Style filters (tags)
    if (selectedStyleFilters.length > 0) {
      filtered = filtered.filter((prop) =>
        selectedStyleFilters.some((filter) => prop.tags?.includes(filter))
      );
    }

    // Sort
    switch (sortBy) {
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedDropdownFilters, selectedStyleFilters, sortBy, filterCounts]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Total active filters
  const activeFilterCount =
    selectedStyleFilters.length + Object.keys(selectedDropdownFilters).length;

  const handleClearAllFilters = () => {
    setSearchQuery('');
    setSelectedStyleFilters([]);
    setSelectedDropdownFilters({});
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Image Search Section */}
          <ImageSearchBox />

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
                data-testid="input-location-search"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setSearchQuery('')}
                  data-testid="button-clear-search"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Filter Bar */}
          <PropertyFilterBar
            filters={selectedDropdownFilters}
            onFilterChange={setSelectedDropdownFilters}
            activeFilterCount={activeFilterCount}
            onMobileFilterClick={() => setMobileFiltersOpen(true)}
          />

          {/* Main Content Area */}
          <div className="flex gap-6">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block flex-shrink-0">
              <PropertyFilters
                selectedFilters={selectedStyleFilters}
                filterCounts={filterCounts}
                onFilterChange={setSelectedStyleFilters}
                onApply={() => console.log('Filters applied')}
              />
            </aside>

            {/* Mobile Sidebar Filters */}
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetContent side="left" className="w-full sm:w-96 p-0">
                <div className="h-full">
                  <PropertyFilters
                    selectedFilters={selectedStyleFilters}
                    filterCounts={filterCounts}
                    onFilterChange={setSelectedStyleFilters}
                    onApply={() => setMobileFiltersOpen(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>

            {/* Results Area */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                    Showing {paginatedProperties.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-
                    {Math.min(currentPage * itemsPerPage, filteredProperties.length)} of{' '}
                    {filteredProperties.length} locations
                  </p>
                  {activeFilterCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearAllFilters}
                      data-testid="button-clear-all"
                    >
                      Clear all ({activeFilterCount})
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger className="w-[180px]" data-testid="select-sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Property Grid */}
              <PropertyGrid
                properties={paginatedProperties}
                isLoading={isLoading}
                onClearFilters={handleClearAllFilters}
              />

              {/* Pagination */}
              {filteredProperties.length > 0 && (
                <SearchPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  isLoading={isLoading}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
