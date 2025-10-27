import CategoryTile from '../CategoryTile';
import categoryImage from '@assets/generated_images/Modern_luxury_estate_property_d456a1cb.png';

export default function CategoryTileExample() {
  return (
    <div className="p-6 max-w-sm">
      <CategoryTile
        id="estates"
        image={categoryImage}
        title="Luxury Estates"
        count={12}
      />
    </div>
  );
}
