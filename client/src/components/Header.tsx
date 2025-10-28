import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    console.log('Search triggered:', searchQuery);
  };

  const headerBgStyle = {
    backgroundColor: isScrolled ? 'rgba(30, 58, 95, 0.95)' : 'rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={headerBgStyle}>
      <div className="w-full">
        {/* TOP ROW: Logo + Search */}
        <div className="flex items-center justify-between px-5" style={{ height: '60px' }}>
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer" data-testid="link-home">
              <span className="text-2xl font-bold text-white tracking-wide">IMAGELOCATIONS</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-lg overflow-hidden" style={{ width: '400px' }}>
            <Input
              type="search"
              placeholder="Search locations..."
              className="border-0 bg-white text-foreground placeholder:text-muted-foreground focus-visible:ring-0 h-10 px-4 flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              data-testid="input-header-search"
            />
            <Button
              size="icon"
              className="h-10 w-10 rounded-none flex-shrink-0"
              style={{ backgroundColor: '#dc2626' }}
              onClick={handleSearch}
              data-testid="button-header-search"
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        {/* BOTTOM ROW: Navigation Menu */}
        <nav 
          className="flex items-center justify-evenly border-t border-white/10" 
          style={{ height: '50px' }}
        >
          <Link href="/locations">
            <span className="text-sm font-medium text-white hover-elevate px-4 py-2 rounded-lg cursor-pointer inline-block uppercase tracking-wide" data-testid="link-nav-search">
              Search
            </span>
          </Link>
          <Link href="/categories">
            <span className="text-sm font-medium text-white hover-elevate px-4 py-2 rounded-lg cursor-pointer inline-block uppercase tracking-wide" data-testid="link-nav-categories">
              Categories
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sm font-medium text-white hover-elevate px-4 py-2 rounded-lg cursor-pointer inline-block uppercase tracking-wide" data-testid="link-nav-about">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm font-medium text-white hover-elevate px-4 py-2 rounded-lg cursor-pointer inline-block uppercase tracking-wide" data-testid="link-nav-contact">
              Contact
            </span>
          </Link>
          <Link href="/list-property">
            <span className="text-sm font-medium text-white hover-elevate px-4 py-2 rounded-lg cursor-pointer inline-block uppercase tracking-wide" data-testid="link-nav-list-property">
              List Your Property
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
