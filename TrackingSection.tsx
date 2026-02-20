import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Bell, Signature, Check, Package, Truck, Plane, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollReveal } from '@/components/ScrollReveal';

const trackingSteps = [
  { icon: Home, label: 'Picked Up', time: 'Dec 15, 10:30 AM', completed: true },
  { icon: Package, label: 'Processing', time: 'Dec 15, 2:45 PM', completed: true },
  { icon: Truck, label: 'In Transit', time: 'Dec 16, 8:00 AM', completed: true },
  { icon: Plane, label: 'International', time: 'Dec 17, 6:30 PM', completed: true },
  { icon: MapPin, label: 'Out for Delivery', time: 'Dec 19, 9:00 AM', completed: false },
  { icon: Signature, label: 'Delivered', time: 'Estimated: Dec 19', completed: false },
];

export function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsTracking(true);
    setShowResults(false);
    
    // Simulate tracking API call
    setTimeout(() => {
      setIsTracking(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <section id="tracking" className="py-24 lg:py-32 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal direction="left">
              <span className="inline-block text-sm font-semibold text-[#2d4a6f] uppercase tracking-wider mb-4">
                Track Your Shipment
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-4">
                Track Your Package Anytime, Anywhere
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-[#6b7280] mb-8">
                Enter your tracking number to get real-time updates on your
                shipment&apos;s location and estimated delivery time.
              </p>
            </ScrollReveal>

            {/* Tracking Form */}
            <ScrollReveal direction="left" delay={0.3}>
              <form onSubmit={handleTrack} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
                    <Input
                      type="text"
                      placeholder="Enter your tracking number (e.g., GE123456789)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="pl-12 py-6 text-base border-gray-200 focus:border-[#2d4a6f] focus:ring-[#2d4a6f]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isTracking}
                    className="bg-[#2d4a6f] hover:bg-[#1a2b3c] text-white px-8"
                  >
                    {isTracking ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      'Track Now'
                    )}
                  </Button>
                </div>
              </form>
            </ScrollReveal>

            {/* Tracking Features */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2d4a6f]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2d4a6f]" />
                  </div>
                  <span className="text-[#374151]">Real-time location updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2d4a6f]/10 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#2d4a6f]" />
                  </div>
                  <span className="text-[#374151]">Delivery notifications via SMS/Email</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2d4a6f]/10 rounded-lg flex items-center justify-center">
                    <Signature className="w-5 h-5 text-[#2d4a6f]" />
                  </div>
                  <span className="text-[#374151]">Proof of delivery with signature</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Tracking Results */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-[#6b7280]">Tracking Number</p>
                      <p className="font-semibold text-[#374151]">{trackingNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#6b7280]">Status</p>
                      <p className="font-semibold text-[#10b981]">In Transit</p>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200">
                      <motion.div
                        className="w-full bg-[#2d4a6f]"
                        initial={{ height: '0%' }}
                        animate={{ height: '66%' }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>

                    {/* Steps */}
                    <div className="space-y-6">
                      {trackingSteps.map((step, index) => (
                        <motion.div
                          key={step.label}
                          className="flex items-start gap-4 relative"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                              step.completed
                                ? 'bg-[#2d4a6f] text-white'
                                : 'bg-gray-200 text-gray-400'
                            }`}
                          >
                            {step.completed ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <step.icon className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <p
                              className={`font-medium ${
                                step.completed ? 'text-[#374151]' : 'text-gray-400'
                              }`}
                            >
                              {step.label}
                            </p>
                            <p className="text-sm text-[#6b7280]">{step.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Content - Illustration */}
          <ScrollReveal direction="right" delay={0.2} className="hidden lg:block">
            <img
              src="/images/tracking-illustration.jpg"
              alt="Package tracking illustration"
              className="w-full rounded-2xl shadow-xl"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
