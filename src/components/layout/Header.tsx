
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-secureblue-500" />
            <span className="text-2xl font-display font-bold text-secureblue-600">
              SecureState
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={cn("nav-link", isActive("/") && "active")}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn("nav-link", isActive("/about") && "active")}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className={cn("nav-link", isActive("/features") && "active")}
            >
              Features
            </Link>
            <Link 
              to="/demo" 
              className={cn("nav-link", isActive("/demo") && "active")}
            >
              Demo
            </Link>
            <Link 
              to="/resources" 
              className={cn("nav-link", isActive("/resources") && "active")}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className={cn("nav-link", isActive("/contact") && "active")}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="ml-4 btn-primary"
            >
              Get Started
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-secureblue-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-secureblue-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn(
                "px-4 py-2 rounded-md",
                isActive("/") ? "bg-secureblue-50 text-secureblue-600" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "px-4 py-2 rounded-md",
                isActive("/about") ? "bg-secureblue-50 text-secureblue-600" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className={cn(
                "px-4 py-2 rounded-md",
                isActive("/features") ? "bg-secureblue-50 text-secureblue-600" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/demo" 
              className={cn(
                "px-4 py-2 rounded-md",
                isActive("/demo") ? "bg-secureblue-50 text-secureblue-600" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              to="/resources" 
              className={cn(
                "px-4 py-2 rounded-md",
                isActive("/resources") ? "bg-secureblue-50 text-secureblue-600" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "px-4 py-2 rounded-md",
                isActive("/contact") ? "bg-secureblue-50 text-secureblue-600" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
