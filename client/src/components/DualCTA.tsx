import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, Film } from 'lucide-react';

export default function DualCTA() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Property Owners CTA */}
          <Card className="p-8 md:p-12 hover-elevate" data-testid="card-property-owners">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Property Owners
              </h3>
              <p className="text-muted-foreground mb-6">
                List your property and connect with film and TV production companies. Earn income while your property stars on screen.
              </p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Free property listing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Professional photography support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Direct communication with productions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Flexible scheduling options
                </li>
              </ul>
            </div>
            <Button
              size="lg"
              className="w-full"
              onClick={() => console.log('Navigate to list property')}
              data-testid="button-list-your-property"
            >
              List Your Property
            </Button>
          </Card>

          {/* Production Teams CTA */}
          <Card className="p-8 md:p-12 hover-elevate" data-testid="card-production-teams">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Film className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Production Professionals
              </h3>
              <p className="text-muted-foreground mb-6">
                Access Dallas Fort Worth's largest database of filming locations. Find the perfect setting for your next production.
              </p>
              <ul className="space-y-2 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  65+ curated locations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Advanced search and filtering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Save and organize favorites
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Direct property owner contact
                </li>
              </ul>
            </div>
            <Button
              size="lg"
              className="w-full"
              onClick={() => console.log('Navigate to browse locations')}
              data-testid="button-browse-locations"
            >
              Browse Locations
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
