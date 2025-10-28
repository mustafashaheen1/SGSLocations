import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://imagelocations.com/video/versace-evo-short.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Background Image (shown if video fails to load) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)',
            zIndex: -1
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Main Heading */}
        <h1 
          className="font-bold text-white mb-5"
          style={{ 
            fontSize: '60px',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'
          }}
          data-testid="hero-heading"
        >
          Dallas Fort Worth's Largest Location Database
        </h1>

        {/* Subheading */}
        <p 
          className="text-white mb-10"
          style={{ 
            fontSize: '24px',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)'
          }}
          data-testid="hero-subheading"
        >
          65+ filming locations across North and Central Texas
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-5">
          <Button
            size="lg"
            className="font-semibold"
            style={{ 
              height: '50px',
              backgroundColor: '#dc2626',
              fontSize: '16px',
              paddingLeft: '32px',
              paddingRight: '32px'
            }}
            data-testid="button-search-locations"
            onClick={() => console.log('Navigate to search')}
          >
            Search Locations
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="font-semibold text-white border-2 border-white hover:bg-white/10"
            style={{ 
              height: '50px',
              fontSize: '16px',
              paddingLeft: '32px',
              paddingRight: '32px'
            }}
            data-testid="button-list-property"
            onClick={() => console.log('Navigate to list property')}
          >
            List Your Property
          </Button>
        </div>
      </div>
    </section>
  );
}
