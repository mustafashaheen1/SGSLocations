import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search triggered:', searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Dallas Fort Worth skyline"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Dallas Fort Worth's Largest Location Database
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          65+ filming locations across North and Central Texas
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="h-12 md:h-14 px-8 text-lg"
            data-testid="button-search-locations"
            onClick={() => console.log('Navigate to locations')}
          >
            Search Locations
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 md:h-14 px-8 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-list-property"
            onClick={() => console.log('Navigate to list property')}
          >
            List Your Property
          </Button>
        </div>

        {/* Quick Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 bg-white rounded-full p-2 shadow-lg">
            <Input
              type="search"
              placeholder="Search by location, type, or features..."
              className="border-0 focus-visible:ring-0 h-12 md:h-14 text-base bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              data-testid="input-hero-search"
            />
            <Button
              size="icon"
              className="h-12 md:h-14 w-12 md:w-14 rounded-full flex-shrink-0"
              onClick={handleSearch}
              data-testid="button-hero-search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-white/80 mt-4">
            65+ Locations • 20+ Years • 10+ Cities
          </p>
        </div>
      </div>
    </section>
  );
}
