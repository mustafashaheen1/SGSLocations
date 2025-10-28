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
            <div className="flex items-center gap-3 cursor-pointer" data-testid="link-home" style={{ width: '220px' }}>
              {/* Red Circular Icon */}
              <div 
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#dc2626'
                }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              
              {/* Logo Text */}
              <span className="text-xl font-bold text-white" style={{ letterSpacing: '1px' }}>
                SGS LOCATIONS<sup style={{ fontSize: '10px' }}>®</sup>
              </span>
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
          className="flex items-center justify-center gap-3 border-t border-white/10" 
          style={{ height: '50px' }}
        >
          <Link href="/search">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-search">
              SEARCH
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/image-search">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-image-search">
              IMAGE SEARCH
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/portfolio">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-portfolio">
              PORTFOLIO
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/new">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-new">
              NEW
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/exclusives">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-exclusives">
              EXCLUSIVES
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/events">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-events">
              EVENTS
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/location-library">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-location-library">
              LOCATION LIBRARY
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/about">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-about">
              ABOUT US
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/contact">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-contact">
              CONTACT
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/list-property">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-list-property">
              LIST YOUR PROPERTY
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/articles">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-articles">
              ARTICLES
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/login">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-login">
              LOGIN
            </span>
          </Link>
          <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
          
          <Link href="/register">
            <span className="cursor-pointer hover:brightness-125 transition-all" style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} data-testid="link-nav-register">
              REGISTER
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
