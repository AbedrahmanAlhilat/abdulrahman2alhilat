import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="font-display text-2xl font-semibold text-primary">
          Abdulrahman Hilat
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
