import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1a2332' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About SGS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About SGS Locations</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Dallas Fort Worth's premier location scouting service with over 20 years of experience. We specialize in connecting film and TV production companies with the perfect filming locations across North and Central Texas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-footer-locations"
                  >
                    Search Locations
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/image-search">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-footer-image-search"
                  >
                    Image Search
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-footer-about"
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-footer-contact"
                  >
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/list-property">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-footer-list"
                  >
                    List Your Property
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Location Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search?category=estates">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-estates"
                  >
                    Estates & Luxury Homes
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=modern">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-modern"
                  >
                    Modern Architecture
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=natural">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-natural"
                  >
                    Natural Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=urban">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-urban"
                  >
                    Urban & Industrial
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=historical">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-historical"
                  >
                    Historical Properties
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=commercial">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-commercial"
                  >
                    Commercial Spaces
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=restaurants">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-restaurants"
                  >
                    Restaurants & Bars
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/search?category=outdoor">
                  <span 
                    className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer inline-block" 
                    data-testid="link-category-outdoor"
                  >
                    Outdoor Spaces
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Address:</strong>
                  123 Main Street<br />
                  Dallas, TX 75201
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Phone:</strong>
                  <a href="tel:+14695551234" className="hover:text-white transition-colors" data-testid="link-phone">
                    (469) 555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Email:</strong>
                  <a href="mailto:info@sgslocations.com" className="hover:text-white transition-colors" data-testid="link-email">
                    info@sgslocations.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Business Hours:</strong>
                  Mon-Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  Sun: Closed
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-white/10">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" 
            aria-label="Facebook" 
            data-testid="link-social-facebook"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" 
            aria-label="Instagram" 
            data-testid="link-social-instagram"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" 
            aria-label="Twitter" 
            data-testid="link-social-twitter"
          >
            <Twitter className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" 
            aria-label="LinkedIn" 
            data-testid="link-social-linkedin"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
        </div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            &copy; {currentYear} SGS Locations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="hover:text-white transition-colors cursor-pointer" data-testid="link-privacy">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-white transition-colors cursor-pointer" data-testid="link-terms">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
