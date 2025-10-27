import { useEffect, useState } from 'react';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { id: 'experience', value: 20, suffix: '+', label: 'Years Experience' },
  { id: 'locations', value: 65, suffix: '+', label: 'Locations' },
  { id: 'cities', value: 10, suffix: '+', label: 'Cities Covered' },
  { id: 'productions', value: 500, suffix: '+', label: 'Productions Served' },
];

export default function StatisticsBanner() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center" data-testid={`stat-${stat.id}`}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {animated ? stat.value : 0}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
