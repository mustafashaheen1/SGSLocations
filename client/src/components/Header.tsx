import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search triggered:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#1e3a5f' }}>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          {/* Top Row: Logo + Search Bar */}
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            {/* Logo */}
            <Link href="/">
              <div className="hover-elevate rounded-lg px-3 py-2 -ml-3 cursor-pointer" data-testid="link-home">
                <span className="text-2xl font-bold text-white tracking-wide">SGS LOCATIONS</span>
              </div>
            </Link>

            {/* Search Bar + Actions */}
            <div className="flex items-center gap-3">
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

              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2 text-white hover:text-white hover:bg-white/10" data-testid="button-user-menu">
                      <User className="h-5 w-5" />
                      <span>Account</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem data-testid="menu-item-dashboard">
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem data-testid="menu-item-saved-locations">
                      Saved Locations
                    </DropdownMenuItem>
                    <DropdownMenuItem data-testid="menu-item-inquiries">
                      Inquiries
                    </DropdownMenuItem>
                    <DropdownMenuItem data-testid="menu-item-settings">
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem data-testid="menu-item-signout" onClick={() => setIsLoggedIn(false)}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="default" data-testid="button-signin" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </Button>
              )}
            </div>
          </div>

          {/* Bottom Row: Centered Navigation */}
          <nav className="flex items-center justify-center gap-8 py-4">
            <Link href="/locations">
              <span className="text-base font-medium text-white hover-elevate px-3 py-2 rounded-lg cursor-pointer inline-block" data-testid="link-nav-search">
                Search
              </span>
            </Link>
            <Link href="/categories">
              <span className="text-base font-medium text-white hover-elevate px-3 py-2 rounded-lg cursor-pointer inline-block" data-testid="link-nav-categories">
                Categories
              </span>
            </Link>
            <Link href="/about">
              <span className="text-base font-medium text-white hover-elevate px-3 py-2 rounded-lg cursor-pointer inline-block" data-testid="link-nav-about">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-base font-medium text-white hover-elevate px-3 py-2 rounded-lg cursor-pointer inline-block" data-testid="link-nav-contact">
                Contact
              </span>
            </Link>
            <Link href="/list-property">
              <span className="text-base font-medium text-white hover-elevate px-3 py-2 rounded-lg cursor-pointer inline-block" data-testid="link-nav-list-property">
                List Your Property
              </span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer" data-testid="link-home-mobile">
                <span className="text-lg font-bold text-white tracking-wide">SGS LOCATIONS</span>
              </div>
            </Link>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => console.log('Open mobile search')}
                data-testid="button-mobile-search-icon"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="pb-6 space-y-3">
              {/* Mobile Navigation */}
              <div className="space-y-1">
                <Link href="/locations">
                  <span className="block text-base font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-search">
                    Search
                  </span>
                </Link>
                <Link href="/categories">
                  <span className="block text-base font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-categories">
                    Categories
                  </span>
                </Link>
                <Link href="/about">
                  <span className="block text-base font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-about">
                    About
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block text-base font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-contact">
                    Contact
                  </span>
                </Link>
                <Link href="/list-property">
                  <span className="block text-base font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-list-property">
                    List Your Property
                  </span>
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-2">
                {!isLoggedIn ? (
                  <Button className="w-full" data-testid="button-mobile-signin" onClick={() => setIsLoggedIn(true)}>
                    Sign In
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10" data-testid="button-mobile-dashboard">
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full text-white hover:bg-white/10" data-testid="button-mobile-signout" onClick={() => setIsLoggedIn(false)}>
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
