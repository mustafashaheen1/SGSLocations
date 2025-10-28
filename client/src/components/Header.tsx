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
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 hover-elevate rounded-lg px-3 py-2 -ml-3 cursor-pointer" data-testid="link-home">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">SGS</span>
                <span className="ml-2 text-xl font-semibold text-white">Locations</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
              <span className="text-base font-medium text-primary hover-elevate px-3 py-2 rounded-lg cursor-pointer inline-block" data-testid="link-nav-list-property">
                List Your Property
              </span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white"
              data-testid="button-search"
              onClick={() => console.log('Search triggered')}
            >
              <Search className="h-5 w-5" />
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 text-white hover:text-white" data-testid="button-user-menu">
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
            className="md:hidden text-white hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-2 bg-black/80 backdrop-blur-sm rounded-lg mt-4">
            <Link href="/locations">
              <span className="block text-xl font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-search">
                Search
              </span>
            </Link>
            <Link href="/categories">
              <span className="block text-xl font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-categories">
                Categories
              </span>
            </Link>
            <Link href="/about">
              <span className="block text-xl font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-about">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="block text-xl font-medium text-white py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-contact">
                Contact
              </span>
            </Link>
            <Link href="/list-property">
              <span className="block text-xl font-medium text-primary py-3 px-4 hover-elevate rounded-lg cursor-pointer" data-testid="link-mobile-list-property">
                List Your Property
              </span>
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
