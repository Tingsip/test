import { motion } from 'framer-motion';
import { Package, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Tracking', href: '#tracking' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Express Delivery', href: '#services' },
  { name: 'Standard Shipping', href: '#services' },
  { name: 'Bulk Cargo', href: '#services' },
  { name: 'Document Courier', href: '#services' },
  { name: 'Medicine Shipping', href: '#services' },
  { name: 'E-commerce Solutions', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0f1a24] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#2d4a6f] rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">GlobalExpress</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for international shipping from Hyderabad to
              the USA. Fast, reliable, and affordable courier services since
              2015.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2d4a6f] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(service.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm relative group"
                  >
                    {service.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p>
                123 Business Street, Hitech City
                <br />
                Hyderabad - 500081, Telangana, India
              </p>
              <p>
                <span className="text-white">Phone:</span>
                <br />
                +91 40 1234 5678
              </p>
              <p>
                <span className="text-white">Email:</span>
                <br />
                info@globalexpress.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 GlobalExpress. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
