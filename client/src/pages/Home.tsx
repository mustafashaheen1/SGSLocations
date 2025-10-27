import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedLocations from '@/components/FeaturedLocations';
import BrowseByCategory from '@/components/BrowseByCategory';
import ClientShowcase from '@/components/ClientShowcase';
import ServicesOverview from '@/components/ServicesOverview';
import StatisticsBanner from '@/components/StatisticsBanner';
import DualCTA from '@/components/DualCTA';

// Import images
import estateImage from '@assets/generated_images/Modern_luxury_estate_property_d456a1cb.png';
import ranchImage from '@assets/generated_images/Texas_ranch_property_landscape_79ad12da.png';
import loftImage from '@assets/generated_images/Industrial_urban_loft_space_9c11782a.png';
import victorianImage from '@assets/generated_images/Historical_Victorian_mansion_property_a04ae71f.png';
import lakeImage from '@assets/generated_images/Natural_lake_landscape_setting_f0891daf.png';
import modernImage from '@assets/generated_images/Modern_contemporary_home_interior_bdf5a46d.png';
import logoImage from '@assets/generated_images/Film_production_company_logo_badf5cc2.png';

// todo: remove mock functionality
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
  },
  {
    id: '2',
    image: ranchImage,
    name: 'Authentic Texas Ranch',
    location: 'Denton County, TX',
    propertyType: 'Natural',
    squareFeet: 15000,
  },
  {
    id: '3',
    image: loftImage,
    name: 'Industrial Urban Loft',
    location: 'Downtown Dallas, TX',
    propertyType: 'Commercial',
    squareFeet: 3200,
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
  },
  {
    id: '5',
    image: lakeImage,
    name: 'Lakeside Natural Setting',
    location: 'Lake Lewisville, TX',
    propertyType: 'Natural',
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
  },
];

const mockCategories = [
  { id: 'estates', image: estateImage, title: 'Luxury Estates', count: 12 },
  { id: 'modern', image: modernImage, title: 'Modern Architecture', count: 15 },
  { id: 'natural', image: lakeImage, title: 'Natural Settings', count: 8 },
  { id: 'urban', image: loftImage, title: 'Urban Spaces', count: 10 },
  { id: 'historical', image: victorianImage, title: 'Historical Properties', count: 6 },
  { id: 'ranch', image: ranchImage, title: 'Ranches & Farms', count: 7 },
  { id: 'commercial', image: loftImage, title: 'Commercial Spaces', count: 9 },
  { id: 'industrial', image: loftImage, title: 'Industrial Locations', count: 5 },
];

const mockClients = [
  { id: 'landman', name: 'Landman', logo: logoImage },
  { id: 'yellowstone', name: 'Yellowstone', logo: logoImage },
  { id: 'madison', name: 'Madison', logo: logoImage },
  { id: 'lioness', name: 'Lioness', logo: logoImage },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedLocations properties={mockProperties} />
        <BrowseByCategory categories={mockCategories} />
        <ClientShowcase clients={mockClients} />
        <ServicesOverview />
        <StatisticsBanner />
        <DualCTA />
      </main>
      <Footer />
    </div>
  );
}
