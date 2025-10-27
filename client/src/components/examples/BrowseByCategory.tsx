import BrowseByCategory from '../BrowseByCategory';
import estateImage from '@assets/generated_images/Modern_luxury_estate_property_d456a1cb.png';
import ranchImage from '@assets/generated_images/Texas_ranch_property_landscape_79ad12da.png';
import loftImage from '@assets/generated_images/Industrial_urban_loft_space_9c11782a.png';
import victorianImage from '@assets/generated_images/Historical_Victorian_mansion_property_a04ae71f.png';
import lakeImage from '@assets/generated_images/Natural_lake_landscape_setting_f0891daf.png';
import modernImage from '@assets/generated_images/Modern_contemporary_home_interior_bdf5a46d.png';

// todo: remove mock functionality
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

export default function BrowseByCategoryExample() {
  return <BrowseByCategory categories={mockCategories} />;
}
