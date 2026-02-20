import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PricingCard } from '@/components/PricingCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const pricingPlans = {
  small: [
    {
      name: 'Standard',
      price: '₹599/kg',
      delivery: '7-10 business days',
      features: [
        'Door-to-door pickup',
        'Basic tracking',
        'Standard packaging',
        'Customs handling',
        'Up to ₹10,000 insurance',
      ],
      featured: false,
    },
    {
      name: 'Express',
      price: '₹899/kg',
      delivery: '4-6 business days',
      features: [
        'Priority pickup',
        'Real-time tracking',
        'Premium packaging',
        'Express customs clearance',
        'Up to ₹50,000 insurance',
        '24/7 support',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      price: '₹1,299/kg',
      delivery: '2-4 business days',
      features: [
        'Same-day pickup',
        'Live GPS tracking',
        'Custom packaging',
        'Dedicated customs agent',
        'Up to ₹1,00,000 insurance',
        'Priority support hotline',
      ],
      featured: false,
    },
  ],
  medium: [
    {
      name: 'Standard',
      price: '₹499/kg',
      delivery: '7-10 business days',
      features: [
        'Door-to-door pickup',
        'Basic tracking',
        'Standard packaging',
        'Customs handling',
        'Up to ₹10,000 insurance',
      ],
      featured: false,
    },
    {
      name: 'Express',
      price: '₹799/kg',
      delivery: '4-6 business days',
      features: [
        'Priority pickup',
        'Real-time tracking',
        'Premium packaging',
        'Express customs clearance',
        'Up to ₹50,000 insurance',
        '24/7 support',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      price: '₹1,099/kg',
      delivery: '2-4 business days',
      features: [
        'Same-day pickup',
        'Live GPS tracking',
        'Custom packaging',
        'Dedicated customs agent',
        'Up to ₹1,00,000 insurance',
        'Priority support hotline',
      ],
      featured: false,
    },
  ],
  large: [
    {
      name: 'Standard',
      price: '₹399/kg',
      delivery: '7-10 business days',
      features: [
        'Door-to-door pickup',
        'Basic tracking',
        'Standard packaging',
        'Customs handling',
        'Up to ₹10,000 insurance',
      ],
      featured: false,
    },
    {
      name: 'Express',
      price: '₹699/kg',
      delivery: '4-6 business days',
      features: [
        'Priority pickup',
        'Real-time tracking',
        'Premium packaging',
        'Express customs clearance',
        'Up to ₹50,000 insurance',
        '24/7 support',
      ],
      featured: true,
    },
    {
      name: 'Premium',
      price: '₹999/kg',
      delivery: '2-4 business days',
      features: [
        'Same-day pickup',
        'Live GPS tracking',
        'Custom packaging',
        'Dedicated customs agent',
        'Up to ₹1,00,000 insurance',
        'Priority support hotline',
      ],
      featured: false,
    },
  ],
};

const weightRanges = [
  { key: 'small', label: 'Up to 5kg' },
  { key: 'medium', label: '5-10kg' },
  { key: 'large', label: '10kg+' },
];

export function PricingSection() {
  const [selectedRange, setSelectedRange] = useState<'small' | 'medium' | 'large'>('small');

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #1a2b3c 0%, #2d4a6f 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#3d6a9f] uppercase tracking-wider mb-4">
              Transparent Pricing
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Affordable Rates
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/70">
              No hidden fees. All prices include pickup, packaging, customs
              clearance, and door delivery.
            </p>
          </ScrollReveal>
        </div>

        {/* Weight Range Toggle */}
        <ScrollReveal delay={0.3} className="flex justify-center mb-12">
          <div className="inline-flex bg-white/10 rounded-full p-1">
            {weightRanges.map((range) => (
              <button
                key={range.key}
                onClick={() => setSelectedRange(range.key as 'small' | 'medium' | 'large')}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRange === range.key
                    ? 'text-[#1a2b3c]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {selectedRange === range.key && (
                  <motion.div
                    layoutId="pricingToggle"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{range.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <AnimatePresence mode="wait">
            {pricingPlans[selectedRange].map((plan, index) => (
              <motion.div
                key={`${selectedRange}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <PricingCard
                  name={plan.name}
                  price={plan.price}
                  delivery={plan.delivery}
                  features={plan.features}
                  featured={plan.featured}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note */}
        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <p className="text-sm text-white/60">
            Customs duties and taxes in the USA are the responsibility of the
            recipient. Contact us for bulk shipping discounts.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
