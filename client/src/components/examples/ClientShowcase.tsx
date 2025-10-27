import ClientShowcase from '../ClientShowcase';
import logoImage from '@assets/generated_images/Film_production_company_logo_badf5cc2.png';

// todo: remove mock functionality
const mockClients = [
  { id: 'landman', name: 'Landman', logo: logoImage },
  { id: 'yellowstone', name: 'Yellowstone', logo: logoImage },
  { id: 'madison', name: 'Madison', logo: logoImage },
  { id: 'lioness', name: 'Lioness', logo: logoImage },
];

export default function ClientShowcaseExample() {
  return <ClientShowcase clients={mockClients} />;
}
