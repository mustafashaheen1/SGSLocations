interface CategoryTileProps {
  id: string;
  image: string;
  title: string;
  count: number;
}

export default function CategoryTile({ id, image, title, count }: CategoryTileProps) {
  return (
    <div
      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer hover-elevate active-elevate-2"
      onClick={() => console.log('Category clicked:', id)}
      data-testid={`category-tile-${id}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/60" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-1" data-testid={`text-category-${id}`}>
          {title}
        </h3>
        <p className="text-sm text-white/90" data-testid={`text-count-${id}`}>
          {count} {count === 1 ? 'location' : 'locations'}
        </p>
      </div>
    </div>
  );
}
