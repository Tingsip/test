import { motion } from 'framer-motion';
import { ArrowRight, Package, Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2b3c 0%, #2d4a6f 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-[#3d6a9f]/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm mb-6">
                <Package className="w-4 h-4" />
                Trusted by 50,000+ customers
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              Fast & Reliable Courier Service{' '}
              <span className="text-[#3d6a9f]">From Hyderabad to USA</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              Ship your packages with confidence. Door-to-door delivery, real-time
              tracking, and customs clearance handled for you. Starting at just
              ₹599/kg.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-white text-[#1a2b3c] hover:bg-gray-100 group"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#tracking')}
                className="border-white text-white hover:bg-white/10"
              >
                Track Shipment
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Package className="w-4 h-4" />
                <span className="text-sm">50,000+ Deliveries</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                <span className="text-sm">4-6 Days Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="/images/hero-illustration.jpg"
                alt="Global shipping illustration"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#374151]">220+ Cities</p>
                  <p className="text-xs text-[#6b7280]">Across USA</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2d4a6f]/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#2d4a6f]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#374151]">Express</p>
                  <p className="text-xs text-[#6b7280]">4-6 Days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
