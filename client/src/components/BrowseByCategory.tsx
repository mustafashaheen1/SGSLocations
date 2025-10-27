import CategoryTile from './CategoryTile';

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
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect location for your production from our diverse collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
