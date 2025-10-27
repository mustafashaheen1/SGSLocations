import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About SGS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About SGS</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dallas Fort Worth's premier location scouting service with 20+ years of experience serving the film and TV industry.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate rounded-lg p-2" aria-label="Facebook" data-testid="link-social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate rounded-lg p-2" aria-label="Instagram" data-testid="link-social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate rounded-lg p-2" aria-label="Twitter" data-testid="link-social-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate rounded-lg p-2" aria-label="LinkedIn" data-testid="link-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations">
                  <a className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-footer-locations">
                    Browse Locations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/list-property">
                  <a className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-footer-list">
                    List Your Property
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-footer-about">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-footer-contact">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-category-estates">
                  Estates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-category-modern">
                  Modern Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-category-natural">
                  Natural Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-category-urban">
                  Urban Spaces
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-lg inline-block" data-testid="link-category-historical">
                  Historical Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Phone:</strong>
                <br />
                <a href="tel:+1234567890" className="hover:text-foreground" data-testid="link-phone">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <strong className="text-foreground">Email:</strong>
                <br />
                <a href="mailto:info@sgslocations.com" className="hover:text-foreground" data-testid="link-email">
                  info@sgslocations.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">Location:</strong>
                <br />
                Dallas-Fort Worth, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SGS Locations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
