import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // todo: remove mock functionality

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2 hover-elevate rounded-lg px-3 py-2 -ml-3" data-testid="link-home">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">SGS</span>
                <span className="ml-2 text-xl font-semibold text-foreground">Locations</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-base font-medium text-foreground hover-elevate px-3 py-2 rounded-lg" data-testid="link-nav-home">
                Home
              </a>
            </Link>
            <Link href="/locations">
              <a className="text-base font-medium text-foreground hover-elevate px-3 py-2 rounded-lg" data-testid="link-nav-locations">
                Locations
              </a>
            </Link>
            <Link href="/categories">
              <a className="text-base font-medium text-foreground hover-elevate px-3 py-2 rounded-lg" data-testid="link-nav-categories">
                Categories
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-foreground hover-elevate px-3 py-2 rounded-lg" data-testid="link-nav-about">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-foreground hover-elevate px-3 py-2 rounded-lg" data-testid="link-nav-contact">
                Contact
              </a>
            </Link>
            <Link href="/list-property">
              <a className="text-base font-medium text-primary hover-elevate px-3 py-2 rounded-lg" data-testid="link-nav-list-property">
                List Your Property
              </a>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-search"
              onClick={() => console.log('Search triggered')}
            >
              <Search className="h-5 w-5" />
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2" data-testid="button-user-menu">
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-2">
            <Link href="/">
              <a className="block text-xl font-medium py-3 px-4 hover-elevate rounded-lg" data-testid="link-mobile-home">
                Home
              </a>
            </Link>
            <Link href="/locations">
              <a className="block text-xl font-medium py-3 px-4 hover-elevate rounded-lg" data-testid="link-mobile-locations">
                Locations
              </a>
            </Link>
            <Link href="/categories">
              <a className="block text-xl font-medium py-3 px-4 hover-elevate rounded-lg" data-testid="link-mobile-categories">
                Categories
              </a>
            </Link>
            <Link href="/about">
              <a className="block text-xl font-medium py-3 px-4 hover-elevate rounded-lg" data-testid="link-mobile-about">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="block text-xl font-medium py-3 px-4 hover-elevate rounded-lg" data-testid="link-mobile-contact">
                Contact
              </a>
            </Link>
            <Link href="/list-property">
              <a className="block text-xl font-medium text-primary py-3 px-4 hover-elevate rounded-lg" data-testid="link-mobile-list-property">
                List Your Property
              </a>
            </Link>
            <div className="pt-4 space-y-2">
              {!isLoggedIn ? (
                <Button className="w-full" data-testid="button-mobile-signin" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </Button>
              ) : (
                <>
                  <Button variant="outline" className="w-full" data-testid="button-mobile-dashboard">
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full" data-testid="button-mobile-signout" onClick={() => setIsLoggedIn(false)}>
                    Sign Out
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
