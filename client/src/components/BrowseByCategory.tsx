import CategoryTile from './CategoryTile';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface Category {
  id: string;
  image: string;
  title: string;
  count: number;
}

interface BrowseByCategoryProps {
  categories: Category[];
}

export default function BrowseByCategory({ categories }: BrowseByCategoryProps) {
  const { ref, isVisible } = useFadeInOnScroll();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="heading-browse-category">
            Browse by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
