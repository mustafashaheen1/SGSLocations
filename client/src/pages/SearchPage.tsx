import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';
import FilterToggle from '@/components/FilterToggle';

export default function SearchPage() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, Set<string>>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleFilterToggle = (category: string, label: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (!newFilters[category]) {
        newFilters[category] = new Set();
      }
      if (checked) {
        newFilters[category].add(label);
      } else {
        newFilters[category].delete(label);
        if (newFilters[category].size === 0) {
          delete newFilters[category];
        }
      }
      return newFilters;
    });
  };

  const removeFilter = (category: string, label: string) => {
    handleFilterToggle(category, label, false);
  };

  // Sidebar filters with counts
  const sidebarFilters = [
    { label: 'New', count: 245 },
    { label: 'Modern', count: 512 },
    { label: 'Pool', count: 234 },
    { label: 'Kitchen', count: 678 },
    { label: 'Americana', count: 123 },
    { label: 'Views', count: 389 },
    { label: 'Bathroom', count: 543 },
    { label: 'Retro', count: 156 },
    { label: 'Driveway', count: 445 },
    { label: 'Mediterranean', count: 98 },
    { label: 'Event Locations', count: 167 },
    { label: 'Spanish', count: 203 },
    { label: 'Architectural', count: 287 },
    { label: 'Mid-Century Modern', count: 178 },
  ];

  const filterButtons = [
    'Categories',
    'Permits',
    'City',
    'County',
    'Access',
    'Floors',
    'Patio Balconies',
    'Pool',
    'Walls',
    'Yard'
  ];

  const toggleDropdown = (filter: string) => {
    setOpenDropdown(openDropdown === filter ? null : filter);
  };

  // Sample filter data for different categories
  const getFilterOptions = (filterName: string) => {
    const options: Record<string, Array<{ label: string; count: number }>> = {
      'Categories': [
        { label: 'Residential', count: 763 },
        { label: 'Commercial', count: 412 },
        { label: 'Industrial', count: 156 },
        { label: 'Outdoor', count: 289 },
        { label: 'Historic', count: 98 },
      ],
      'Permits': [
        { label: 'Film Permit Available', count: 542 },
        { label: 'No Permit Required', count: 321 },
        { label: 'Special Permit Needed', count: 87 },
      ],
      'City': [
        { label: 'Dallas', count: 425 },
        { label: 'Fort Worth', count: 312 },
        { label: 'Arlington', count: 189 },
        { label: 'Plano', count: 156 },
        { label: 'Irving', count: 134 },
      ],
      'County': [
        { label: 'Dallas County', count: 634 },
        { label: 'Tarrant County', count: 478 },
        { label: 'Denton County', count: 223 },
        { label: 'Collin County', count: 189 },
      ],
      'Access': [
        { label: 'Street Parking', count: 512 },
        { label: 'Private Parking', count: 398 },
        { label: 'Gated Community', count: 234 },
        { label: 'Public Access', count: 456 },
      ],
      'Floors': [
        { label: 'Single Story', count: 345 },
        { label: 'Two Story', count: 289 },
        { label: 'Three Story', count: 156 },
        { label: '4+ Stories', count: 87 },
      ],
      'Patio Balconies': [
        { label: 'Patio', count: 398 },
        { label: 'Balcony', count: 267 },
        { label: 'Terrace', count: 145 },
        { label: 'Deck', count: 189 },
      ],
      'Pool': [
        { label: 'In-ground Pool', count: 234 },
        { label: 'Above-ground Pool', count: 98 },
        { label: 'Infinity Pool', count: 45 },
        { label: 'No Pool', count: 456 },
      ],
      'Walls': [
        { label: 'Brick', count: 312 },
        { label: 'Wood', count: 267 },
        { label: 'Stone', count: 189 },
        { label: 'Stucco', count: 156 },
        { label: 'Siding', count: 234 },
      ],
      'Yard': [
        { label: 'Front Yard', count: 512 },
        { label: 'Back Yard', count: 478 },
        { label: 'Large Lawn', count: 298 },
        { label: 'Landscaped', count: 389 },
        { label: 'Natural/Wild', count: 145 },
      ],
    };
    return options[filterName] || [];
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Main Content - Account for fixed header height (110px) */}
      <main className="flex-1 pt-[110px]">
        {/* Image Search Box */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg bg-white transition-colors hover:border-gray-600 cursor-pointer flex flex-col items-center justify-center"
              style={{ height: '150px' }}
              onClick={() => document.getElementById('image-upload-input')?.click()}
              data-testid="dropzone-image-search"
            >
              <p className="text-lg font-semibold text-gray-700 mb-2" data-testid="text-image-search-title">
                Search a Location Using An Image As Reference
              </p>
              <p className="text-sm text-gray-500" data-testid="text-image-search-instructions">
                Drag & Drop an image here or click here to select a file
              </p>
              
              {/* Hidden file input */}
              <input
                type="file"
                id="image-upload-input"
                accept="image/*"
                className="hidden"
                data-testid="input-image-upload"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Filter Bar */}
        <div className="bg-white border-b border-gray-200 py-4 sticky top-[110px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {filterButtons.map((filter) => {
                const isActive = selectedFilters[filter] && selectedFilters[filter].size > 0;
                const isOpen = openDropdown === filter;
                return (
                  <div key={filter} className="relative">
                    <button
                      onClick={() => toggleDropdown(filter)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 flex-shrink-0 transition-all hover:border-gray-400 ${
                        isActive ? 'font-bold text-gray-900 border-gray-500' : 'text-gray-600'
                      }`}
                      data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>{filter}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown Panel */}
                    {isOpen && (
                      <div
                        className="absolute top-full mt-2 bg-white rounded shadow-lg border border-gray-200 overflow-hidden"
                        style={{ 
                          width: '300px',
                          maxHeight: '400px',
                          zIndex: 50
                        }}
                        data-testid={`dropdown-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {/* Search Input */}
                        <div className="p-3 border-b border-gray-200">
                          <div className="flex items-center bg-gray-50 rounded border border-gray-300">
                            <Search className="h-4 w-4 text-gray-400 ml-3" />
                            <Input
                              type="search"
                              placeholder="Search here..."
                              className="border-0 bg-transparent text-sm focus-visible:ring-0 h-10 px-3 flex-1"
                              data-testid={`input-dropdown-search-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                          </div>
                        </div>

                        {/* Dropdown Content Area (scrollable) */}
                        <div className="overflow-y-auto" style={{ maxHeight: '340px' }}>
                          {getFilterOptions(filter).map((option) => (
                            <FilterToggle
                              key={option.label}
                              label={option.label}
                              count={option.count}
                              defaultChecked={selectedFilters[filter]?.has(option.label) || false}
                              onChange={(checked) => handleFilterToggle(filter, option.label, checked)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="container mx-auto px-4 py-6">
          {/* Selected Filters Pills */}
          {Object.keys(selectedFilters).length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {Object.entries(selectedFilters).map(([category, labels]) => 
                  Array.from(labels).map((label) => (
                    <div
                      key={`${category}-${label}`}
                      className="inline-flex items-center gap-2 rounded-full text-white text-sm"
                      style={{ 
                        backgroundColor: '#dc2626',
                        paddingLeft: '12px',
                        paddingRight: '8px',
                        paddingTop: '6px',
                        paddingBottom: '6px'
                      }}
                      data-testid={`pill-${category.toLowerCase()}-${label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="lowercase">
                        {category.toLowerCase()}: {label}
                      </span>
                      <button
                        onClick={() => removeFilter(category, label)}
                        className="hover:bg-red-700 rounded-full p-0.5 transition-colors"
                        data-testid={`button-remove-${category.toLowerCase()}-${label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span className="text-white font-bold">×</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          <div className="flex gap-6">
            {/* Sidebar - Fixed width, scrollable */}
            <aside 
              className="w-[280px] flex-shrink-0 bg-gray-50 rounded-lg border border-gray-200"
              style={{ maxHeight: 'calc(100vh - 300px)' }}
              data-testid="sidebar-filters"
            >
              {/* Sidebar Search Box */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center bg-white rounded border border-gray-300">
                  <Search className="h-4 w-4 text-gray-400 ml-3" />
                  <Input
                    type="search"
                    placeholder="Search here..."
                    className="border-0 bg-transparent text-sm focus-visible:ring-0 h-10 px-3 flex-1"
                    data-testid="input-sidebar-search"
                  />
                </div>
              </div>

              {/* Scrollable Filter List */}
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
                {sidebarFilters.map((filter) => (
                  <FilterToggle
                    key={filter.label}
                    label={filter.label}
                    count={filter.count}
                    defaultChecked={selectedFilters['Sidebar']?.has(filter.label) || false}
                    onChange={(checked) => handleFilterToggle('Sidebar', filter.label, checked)}
                  />
                ))}
              </div>
            </aside>

            {/* Main Content Area - Flexible width, scrollable */}
            <div 
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: 'calc(100vh - 300px)' }}
              data-testid="main-content"
            >
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900" data-testid="text-results-count">
                  65 Locations Found
                </h2>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    data-testid="button-sort"
                  >
                    Relevance
                  </Button>
                </div>
              </div>

              {/* Results Grid - Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder cards */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                    data-testid={`card-result-${i}`}
                  >
                    <div className="aspect-[4/3] bg-gray-200" />
                    <div className="p-4">
                      <div className="h-6 bg-gray-200 rounded mb-2" />
                      <div className="h-4 bg-gray-100 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
