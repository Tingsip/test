import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Tracking', href: '#tracking' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-gray-100'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-[#2d4a6f] rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-[#1a2b3c]' : 'text-white'}`}>
                GlobalExpress
              </span>
              <span className={`text-xs transition-colors ${isScrolled ? 'text-[#6b7280]' : 'text-white/70'}`}>
                Hyderabad to USA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative text-sm font-medium transition-colors group ${
                  isScrolled ? 'text-[#374151] hover:text-[#2d4a6f]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-[#2d4a6f]' : 'bg-white'
                }`} />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`transition-all ${
                isScrolled
                  ? 'bg-[#2d4a6f] hover:bg-[#1a2b3c] text-white'
                  : 'bg-white text-[#1a2b3c] hover:bg-white/90'
              }`}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#1a2b3c]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1a2b3c]' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="py-3 px-4 text-[#374151] hover:text-[#2d4a6f] hover:bg-[#f5f7fa] rounded-lg transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="mt-4 bg-[#2d4a6f] hover:bg-[#1a2b3c] text-white"
              >
                Get Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
