import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    console.log('Search triggered:', searchQuery);
  };

  const navItems = [
    { href: '/search', label: 'SEARCH' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/location-library', label: 'LOCATION LIBRARY' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/list-property', label: 'LIST YOUR PROPERTY' },
    { href: '/articles', label: 'ARTICLES' },
    { href: '/login', label: 'LOGIN' },
    { href: '/register', label: 'REGISTER' },
  ];

  return (
    <header className="relative z-50 w-full" style={{ backgroundColor: 'rgba(26, 58, 90, 0.98)' }}>
      <div className="w-full">
        {/* TOP ROW: Logo + Search */}
        <div className="flex items-center justify-between px-5" style={{ height: '60px' }}>
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer" data-testid="link-home">
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

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center bg-white rounded-lg overflow-hidden" style={{ width: '400px' }}>
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

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => console.log('Open mobile search')}
              data-testid="button-mobile-search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* BOTTOM ROW: Desktop Navigation Menu */}
        <nav 
          className="hidden md:flex items-center justify-center gap-3 border-t border-white/10" 
          style={{ height: '50px' }}
        >
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center gap-3">
              <Link href={item.href}>
                <span 
                  className="cursor-pointer hover:brightness-125 transition-all" 
                  style={{ color: '#ffffff', fontSize: '13px', letterSpacing: '0.5px' }} 
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </span>
              </Link>
              {index < navItems.length - 1 && (
                <span style={{ color: '#ffffff', fontSize: '13px' }}>|</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Slide-in Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="mobile-menu-backdrop"
          />
          
          {/* Slide-in Menu */}
          <div 
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 overflow-y-auto md:hidden shadow-2xl"
            style={{
              animation: 'slideInRight 0.3s ease-out'
            }}
            data-testid="mobile-menu"
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <span className="text-white font-bold text-lg">MENU</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-close-mobile-menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="block px-6 py-4 text-white hover:bg-white/10 transition-colors cursor-pointer"
                    style={{ fontSize: '14px', letterSpacing: '0.5px' }}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
