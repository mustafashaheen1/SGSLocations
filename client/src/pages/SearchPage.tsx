import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Main Content - Account for fixed header height (110px) */}
      <main className="flex-1 pt-[110px]">
        {/* Image Search Box */}
        <div className="bg-gray-50 border-b border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-gray-900" data-testid="heading-search">
                Search Locations
              </h1>
              
              {/* Search Input */}
              <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md border border-gray-300">
                <Input
                  type="search"
                  placeholder="Search by location, property type, or features..."
                  className="border-0 bg-white text-foreground placeholder:text-muted-foreground focus-visible:ring-0 h-14 px-5 flex-1 text-base"
                  data-testid="input-search"
                />
                <Button
                  size="icon"
                  className="h-14 w-14 rounded-none flex-shrink-0"
                  style={{ backgroundColor: '#dc2626' }}
                  data-testid="button-search"
                >
                  <Search className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Filter Bar */}
        <div className="bg-white border-b border-gray-200 py-4 sticky top-[110px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 overflow-x-auto">
              <Button
                variant="outline"
                className="flex items-center gap-2 flex-shrink-0"
                data-testid="button-filters"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                data-testid="button-filter-category"
              >
                Category
              </Button>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                data-testid="button-filter-location"
              >
                Location
              </Button>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                data-testid="button-filter-price"
              >
                Price Range
              </Button>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                data-testid="button-filter-amenities"
              >
                Amenities
              </Button>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                data-testid="button-filter-availability"
              >
                Availability
              </Button>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Sidebar - Fixed width, scrollable */}
            <aside 
              className="w-[280px] flex-shrink-0 overflow-y-auto"
              style={{ maxHeight: 'calc(100vh - 300px)' }}
              data-testid="sidebar-filters"
            >
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-bold mb-4 text-gray-900">
                  Refine Results
                </h2>
                
                {/* Placeholder filter sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">Property Type</h3>
                    <div className="h-32 bg-white rounded border border-gray-200" />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">Location</h3>
                    <div className="h-32 bg-white rounded border border-gray-200" />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">Features</h3>
                    <div className="h-32 bg-white rounded border border-gray-200" />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">Square Footage</h3>
                    <div className="h-32 bg-white rounded border border-gray-200" />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-gray-700">Style</h3>
                    <div className="h-32 bg-white rounded border border-gray-200" />
                  </div>
                </div>
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
