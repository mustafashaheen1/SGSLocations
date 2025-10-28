import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, SlidersHorizontal, X, SearchX } from 'lucide-react';
import FilterToggle from '@/components/FilterToggle';

// Import property images
import modernHouse1 from '@assets/stock_images/modern_house_exterio_89fae7f3.jpg';
import modernHouse2 from '@assets/stock_images/modern_house_exterio_78876c26.jpg';
import modernHouse3 from '@assets/stock_images/modern_house_exterio_253c0eb1.jpg';
import luxuryInterior1 from '@assets/stock_images/luxury_home_interior_bdc3498d.jpg';
import luxuryInterior2 from '@assets/stock_images/luxury_home_interior_0d6459b5.jpg';
import luxuryInterior3 from '@assets/stock_images/luxury_home_interior_45cda360.jpg';
import poolBackyard1 from '@assets/stock_images/pool_backyard_1304b63b.jpg';
import poolBackyard2 from '@assets/stock_images/pool_backyard_52eec0a4.jpg';
import poolBackyard3 from '@assets/stock_images/pool_backyard_8cc8bd79.jpg';
import commercialBuilding1 from '@assets/stock_images/commercial_building__6076e6f6.jpg';
import commercialBuilding2 from '@assets/stock_images/commercial_building__e3dd5a0c.jpg';
import commercialBuilding3 from '@assets/stock_images/commercial_building__46ce9b88.jpg';

export default function SearchPage() {
  const [location, setLocation] = useLocation();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, Set<string>>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarSearchInput, setSidebarSearchInput] = useState('');
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [dropdownSearchInputs, setDropdownSearchInputs] = useState<Record<string, string>>({});
  const [dropdownSearches, setDropdownSearches] = useState<Record<string, string>>({});
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  // Load filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filters: Record<string, Set<string>> = {};
    
    params.forEach((value, key) => {
      if (!filters[key]) {
        filters[key] = new Set();
      }
      filters[key].add(value);
    });

    if (Object.keys(filters).length > 0) {
      setSelectedFilters(filters);
    }
  }, []);

  // Debounce sidebar search (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSidebarSearch(sidebarSearchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [sidebarSearchInput]);

  // Close mobile drawer when opening a filter category in drawer
  useEffect(() => {
    if (isMobileDrawerOpen && openDropdown) {
      // Keep drawer open while browsing filters
    }
  }, [openDropdown, isMobileDrawerOpen]);

  // Debounce dropdown searches (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDropdownSearches(dropdownSearchInputs);
    }, 300);

    return () => clearTimeout(timer);
  }, [dropdownSearchInputs]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    Object.entries(selectedFilters).forEach(([category, labels]) => {
      labels.forEach(label => {
        params.append(category, label);
      });
    });

    const newSearch = params.toString();
    const newUrl = newSearch ? `/search?${newSearch}` : '/search';
    
    // Update URL without reload
    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.pushState({}, '', newUrl);
    }
  }, [selectedFilters]);

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedFilters]);

  // Smooth scroll to top when page changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  // Property images array
  const propertyImages = [
    modernHouse1,
    modernHouse2,
    modernHouse3,
    luxuryInterior1,
    luxuryInterior2,
    luxuryInterior3,
    poolBackyard1,
    poolBackyard2,
    poolBackyard3,
    commercialBuilding1,
    commercialBuilding2,
    commercialBuilding3,
  ];

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

  const clearAllFilters = () => {
    setSelectedFilters({});
    setIsMobileDrawerOpen(false);
  };

  // Simulate filtered results - in real app, this would filter based on selectedFilters
  // For demo purposes, show empty state when certain filters are selected
  const hasResults = !(selectedFilters['Categories']?.has('Industrial') && selectedFilters['City']?.has('Denton'));
  const resultsCount = hasResults ? 65 : 0;

  // Sidebar filters with counts and category mapping
  const allSidebarFilters = [
    { label: 'New', count: 245, category: 'Categories' },
    { label: 'Modern', count: 512, category: 'Categories' },
    { label: 'Pool', count: 234, category: 'Pool' },
    { label: 'Kitchen', count: 678, category: 'Access' },
    { label: 'Americana', count: 123, category: 'Categories' },
    { label: 'Views', count: 389, category: 'Access' },
    { label: 'Bathroom', count: 543, category: 'Access' },
    { label: 'Retro', count: 156, category: 'Categories' },
    { label: 'Driveway', count: 445, category: 'Access' },
    { label: 'Mediterranean', count: 98, category: 'Categories' },
    { label: 'Event Locations', count: 167, category: 'Categories' },
    { label: 'Spanish', count: 203, category: 'Categories' },
    { label: 'Architectural', count: 287, category: 'Categories' },
    { label: 'Mid-Century Modern', count: 178, category: 'Categories' },
  ];

  // Filter sidebar based on search
  const sidebarFilters = allSidebarFilters.filter(filter => 
    filter.label.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

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

  // Close dropdown when a filter is selected
  const handleDropdownFilterToggle = (category: string, label: string, checked: boolean) => {
    handleFilterToggle(category, label, checked);
    // Keep dropdown open for multiple selections - user can click outside to close
  };

  // Get search term for a specific dropdown (debounced)
  const getDropdownSearch = (filterName: string) => {
    return dropdownSearches[filterName] || '';
  };

  // Get input value for a specific dropdown (instant)
  const getDropdownSearchInput = (filterName: string) => {
    return dropdownSearchInputs[filterName] || '';
  };

  // Filter data for different categories
  const getAllFilterOptions = (filterName: string) => {
    const options: Record<string, Array<{ label: string; count: number }>> = {
      'Categories': [
        { label: 'Residential', count: 763 },
        { label: 'Commercial', count: 412 },
        { label: 'Natural', count: 289 },
        { label: 'Industrial', count: 156 },
        { label: 'Historical', count: 98 },
        // Include sidebar filters that map to Categories
        { label: 'New', count: 245 },
        { label: 'Modern', count: 512 },
        { label: 'Americana', count: 123 },
        { label: 'Retro', count: 156 },
        { label: 'Mediterranean', count: 98 },
        { label: 'Event Locations', count: 167 },
        { label: 'Spanish', count: 203 },
        { label: 'Architectural', count: 287 },
        { label: 'Mid-Century Modern', count: 178 },
      ],
      'Permits': [
        { label: 'Film Permit Available', count: 542 },
        { label: 'No Permit Required', count: 321 },
        { label: 'Special Permit Needed', count: 87 },
      ],
      'City': [
        { label: 'Dallas', count: 425 },
        { label: 'Fort Worth', count: 312 },
        { label: 'Frisco', count: 198 },
        { label: 'Plano', count: 156 },
        { label: 'Denton', count: 143 },
        { label: 'Arlington', count: 189 },
        { label: 'Irving', count: 134 },
        { label: 'McKinney', count: 112 },
        { label: 'Carrollton', count: 98 },
      ],
      'County': [
        { label: 'Dallas County', count: 634 },
        { label: 'Tarrant County', count: 478 },
        { label: 'Denton County', count: 223 },
        { label: 'Collin County', count: 189 },
        { label: 'Rockwall County', count: 87 },
      ],
      'Access': [
        { label: 'Street Parking', count: 512 },
        { label: 'Private Parking', count: 398 },
        { label: 'Gated Community', count: 234 },
        { label: 'Public Access', count: 456 },
        // Include sidebar filters that map to Access
        { label: 'Kitchen', count: 678 },
        { label: 'Views', count: 389 },
        { label: 'Bathroom', count: 543 },
        { label: 'Driveway', count: 445 },
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
        { label: 'Yes', count: 377 },
        { label: 'No', count: 456 },
        { label: 'Pool', count: 234 },
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

  // Get filtered options based on search
  const getFilterOptions = (filterName: string) => {
    const allOptions = getAllFilterOptions(filterName);
    const searchTerm = getDropdownSearch(filterName);
    
    if (!searchTerm) {
      return allOptions;
    }
    
    return allOptions.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Main Content - Account for fixed header height (110px) */}
      <main className="flex-1 pt-[110px]">
        {/* Image Search Box */}
        <div className="bg-white py-4 md:py-8">
          <div className="container mx-auto px-4">
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg bg-white transition-colors hover:border-gray-600 cursor-pointer flex flex-col items-center justify-center h-[100px] md:h-[150px]"
              onClick={() => document.getElementById('image-upload-input')?.click()}
              data-testid="dropzone-image-search"
            >
              <p className="text-sm md:text-lg font-semibold text-gray-700 mb-1 md:mb-2 px-4 text-center" data-testid="text-image-search-title">
                Search a Location Using An Image As Reference
              </p>
              <p className="text-xs md:text-sm text-gray-500 px-4 text-center" data-testid="text-image-search-instructions">
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

        {/* Mobile Filters Button */}
        <div className="md:hidden bg-white border-b border-gray-200 py-3 sticky top-[110px] z-40">
          <div className="container mx-auto px-4">
            <Button
              onClick={() => setIsMobileDrawerOpen(true)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-gray-400"
              data-testid="button-mobile-filters"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
              {Object.keys(selectedFilters).length > 0 && (
                <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#dc2626' }}>
                  {Object.values(selectedFilters).reduce((sum, set) => sum + set.size, 0)}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Desktop Horizontal Filter Bar */}
        <div className="hidden md:block bg-white border-b border-gray-200 py-4 sticky top-[110px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {filterButtons.map((filter) => {
                const isActive = selectedFilters[filter] && selectedFilters[filter].size > 0;
                const isOpen = openDropdown === filter;
                return (
                  <div key={filter} className="relative">
                    <button
                      onClick={() => toggleDropdown(filter)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 flex-shrink-0 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1 ${
                        isActive ? 'font-bold text-gray-900 border-gray-500' : 'text-gray-600'
                      }`}
                      data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span>{filter}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Panel */}
                    {isOpen && (
                      <div
                        className="absolute top-full mt-2 bg-white rounded overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                        style={{ 
                          width: '300px',
                          maxHeight: '400px',
                          zIndex: 50,
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                          border: '1px solid #e5e7eb'
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
                              value={getDropdownSearchInput(filter)}
                              onChange={(e) => {
                                setDropdownSearchInputs(prev => ({
                                  ...prev,
                                  [filter]: e.target.value
                                }));
                              }}
                              className="border-0 bg-transparent text-sm focus-visible:ring-1 focus-visible:ring-gray-300 h-10 px-3 flex-1"
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
                              onChange={(checked) => handleDropdownFilterToggle(filter, option.label, checked)}
                              disabled={isLoading}
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

        {/* Mobile Drawer Overlay */}
        {isMobileDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black/50 md:hidden"
            style={{ zIndex: 9998 }}
            onClick={() => setIsMobileDrawerOpen(false)}
            data-testid="overlay-mobile-drawer"
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full bg-white md:hidden transition-transform duration-300 ease-in-out ${
            isMobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ width: '85%', maxWidth: '320px', zIndex: 9999 }}
          data-testid="drawer-mobile-filters"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="p-2 hover:bg-gray-100 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              data-testid="button-close-drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Search Box */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center bg-white rounded border border-gray-300">
              <Search className="h-4 w-4 text-gray-400 ml-3" />
              <Input
                type="search"
                placeholder="Search here..."
                value={sidebarSearchInput}
                onChange={(e) => setSidebarSearchInput(e.target.value)}
                className="border-0 bg-transparent text-sm focus-visible:ring-1 focus-visible:ring-gray-300 h-10 px-3 flex-1"
                data-testid="input-drawer-search"
              />
            </div>
          </div>

          {/* Drawer Filters - Vertical Layout */}
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
            {/* Sidebar Filters */}
            <div className="border-b border-gray-200">
              {sidebarFilters.map((filter) => (
                <FilterToggle
                  key={filter.label}
                  label={filter.label}
                  count={filter.count}
                  defaultChecked={selectedFilters[filter.category]?.has(filter.label) || false}
                  onChange={(checked) => handleFilterToggle(filter.category, filter.label, checked)}
                  disabled={isLoading}
                />
              ))}
            </div>

            {/* Dropdown Filters as Expandable Sections */}
            {filterButtons.map((filter) => (
              <div key={filter} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenDropdown(openDropdown === filter ? null : filter)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-400"
                  data-testid={`button-drawer-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="font-medium text-gray-900">{filter}</span>
                  <div className="flex items-center gap-2">
                    {selectedFilters[filter] && selectedFilters[filter].size > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#dc2626' }}>
                        {selectedFilters[filter].size}
                      </span>
                    )}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === filter ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openDropdown === filter && (
                  <div className="bg-gray-50 animate-in slide-in-from-top-2 duration-200">
                    {/* Search Input */}
                    <div className="p-3 border-t border-gray-200">
                      <div className="flex items-center bg-white rounded border border-gray-300">
                        <Search className="h-4 w-4 text-gray-400 ml-3" />
                        <Input
                          type="search"
                          placeholder="Search here..."
                          value={getDropdownSearchInput(filter)}
                          onChange={(e) => {
                            setDropdownSearchInputs(prev => ({
                              ...prev,
                              [filter]: e.target.value
                            }));
                          }}
                          className="border-0 bg-transparent text-sm focus-visible:ring-1 focus-visible:ring-gray-300 h-10 px-3 flex-1"
                          data-testid={`input-drawer-search-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                      </div>
                    </div>
                    {/* Options */}
                    <div>
                      {getFilterOptions(filter).map((option) => (
                        <FilterToggle
                          key={option.label}
                          label={option.label}
                          count={option.count}
                          defaultChecked={selectedFilters[filter]?.has(option.label) || false}
                          onChange={(checked) => handleDropdownFilterToggle(filter, option.label, checked)}
                          disabled={isLoading}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="container mx-auto px-4 py-6">
          {/* Selected Filters Pills */}
          {Object.keys(selectedFilters).length > 0 && (
            <div className="mb-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap gap-2">
                {Object.entries(selectedFilters).map(([category, labels]) => 
                  Array.from(labels).map((label) => (
                    <div
                      key={`${category}-${label}`}
                      className="inline-flex items-center gap-2 rounded-full text-white text-sm animate-in fade-in slide-in-from-left-2 duration-200"
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
                        className="hover:bg-red-700 rounded-full p-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-red-600"
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

          <div className="md:flex gap-6">
            {/* Desktop Sidebar - Hidden on mobile */}
            {isSidebarVisible && (
              <aside 
                className="hidden md:block w-[280px] flex-shrink-0 bg-gray-50 rounded-lg border border-gray-200 animate-in slide-in-from-left-5 duration-300"
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
                      value={sidebarSearchInput}
                      onChange={(e) => setSidebarSearchInput(e.target.value)}
                      className="border-0 bg-transparent text-sm focus-visible:ring-1 focus-visible:ring-gray-300 h-10 px-3 flex-1"
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
                      defaultChecked={selectedFilters[filter.category]?.has(filter.label) || false}
                      onChange={(checked) => handleFilterToggle(filter.category, filter.label, checked)}
                      disabled={isLoading}
                    />
                  ))}
                </div>
              </aside>
            )}

            {/* Main Content Area - Flexible width, scrollable */}
            <div 
              ref={mainContentRef}
              className="flex-1 md:overflow-y-auto scroll-smooth"
              style={{ maxHeight: 'calc(100vh - 300px)' }}
              data-testid="main-content"
            >
              {hasResults ? (
                <>
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900" data-testid="text-results-count">
                      {resultsCount} Locations Found
                    </h2>
                    
                    <div className="flex items-center gap-2 md:gap-3">
                      <span className="text-xs md:text-sm text-gray-600 hidden sm:inline">Sort by:</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs md:text-sm"
                        disabled={isLoading}
                        data-testid="button-sort"
                      >
                        Relevance
                      </Button>
                    </div>
                  </div>

                  {/* Results Grid - 1 column mobile, 3 columns desktop */}
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" data-testid="loading-skeletons">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="rounded overflow-hidden"
                          data-testid={`skeleton-card-${i + 1}`}
                        >
                          <div className="aspect-[3/2] bg-gray-200 animate-pulse" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 animate-in fade-in duration-300">
                      {propertyImages.map((image, i) => (
                        <div
                          key={i}
                          className="rounded overflow-hidden cursor-pointer"
                          data-testid={`card-property-${i + 1}`}
                        >
                          <div className="aspect-[3/2] overflow-hidden">
                            <img
                              src={image}
                              alt={`Property ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              loading="lazy"
                              data-testid={`img-property-${i + 1}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  <div className="flex justify-center items-center mt-8 mb-6">
                    <div className="flex items-center gap-2">
                  {/* First Page */}
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="w-9 h-9 flex items-center justify-center rounded bg-white text-gray-600 hover:bg-gray-100 transition-all duration-200 border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1"
                    data-testid="button-page-first"
                  >
                    «
                  </button>

                  {/* Previous Page */}
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className="w-9 h-9 flex items-center justify-center rounded bg-white text-gray-600 hover:bg-gray-100 transition-all duration-200 border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1"
                    data-testid="button-page-prev"
                  >
                    ‹
                  </button>

                  {/* Page Numbers */}
                  {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 flex items-center justify-center rounded transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
                        currentPage === page
                          ? 'bg-[#dc2626] text-white border-[#dc2626] focus-visible:ring-red-400'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300 focus-visible:ring-gray-400'
                      }`}
                      data-testid={`button-page-${page}`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next Page */}
                  <button
                    onClick={() => setCurrentPage(Math.min(7, currentPage + 1))}
                    className="w-9 h-9 flex items-center justify-center rounded bg-white text-gray-600 hover:bg-gray-100 transition-all duration-200 border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1"
                    data-testid="button-page-next"
                  >
                    ›
                  </button>

                  {/* Last Page */}
                  <button
                    onClick={() => setCurrentPage(7)}
                    className="w-9 h-9 flex items-center justify-center rounded bg-white text-gray-600 hover:bg-gray-100 transition-all duration-200 border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1"
                    data-testid="button-page-last"
                  >
                    »
                  </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4" data-testid="empty-state">
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 mb-6">
                    <SearchX className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 text-center" data-testid="text-empty-title">
                    No locations found
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-6 text-center max-w-md" data-testid="text-empty-description">
                    Try adjusting your filters to see more results
                  </p>
                  
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-gray-400"
                    data-testid="button-clear-all-filters"
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button - Desktop Only */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="hidden md:flex fixed left-4 items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#dc2626',
          zIndex: 45
        }}
        data-testid="button-toggle-sidebar"
      >
        <Search 
          className={`w-6 h-6 text-white transition-transform duration-300 ${isSidebarVisible ? 'rotate-90' : 'rotate-0'}`}
        />
      </button>
      
      <Footer />
    </div>
  );
}
