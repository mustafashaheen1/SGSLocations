import { Button } from '@/components/ui/button';

export default function DualCTA() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Side: Production Professionals */}
      <div
        className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
        data-testid="cta-production-professionals"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 text-center max-w-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            For Production Professionals
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Access Dallas Fort Worth's largest database of filming locations. Find the perfect setting for your next production with our advanced search tools.
          </p>
          <Button
            size="lg"
            className="font-semibold"
            style={{
              height: '50px',
              backgroundColor: '#dc2626',
              fontSize: '16px',
              paddingLeft: '32px',
              paddingRight: '32px',
            }}
            onClick={() => console.log('Navigate to search')}
            data-testid="button-start-searching"
          >
            Start Searching
          </Button>
        </div>
      </div>

      {/* Right Side: Property Owners */}
      <div
        className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
        data-testid="cta-property-owners"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 text-center max-w-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            For Property Owners
          </h3>
          <p className="text-lg text-white/90 mb-8">
            List your property and connect with film and TV production companies. Earn income while your property becomes a star on screen.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold text-white border-2 border-white hover:bg-white/10"
            style={{
              height: '50px',
              fontSize: '16px',
              paddingLeft: '32px',
              paddingRight: '32px',
            }}
            onClick={() => console.log('Navigate to list property')}
            data-testid="button-list-property-cta"
          >
            List Your Property
          </Button>
        </div>
      </div>
    </section>
  );
}
