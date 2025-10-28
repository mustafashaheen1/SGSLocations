import { useEffect, useState, useRef } from 'react';

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

function CountUpAnimation({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatisticsBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center"
      style={{
        backgroundColor: '#dc2626',
        minHeight: '200px',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center" data-testid={`stat-${stat.id}`}>
              <div className="text-4xl md:text-6xl font-bold mb-3 text-white">
                {isVisible ? (
                  <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </div>
              <div className="text-sm md:text-lg text-white font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
