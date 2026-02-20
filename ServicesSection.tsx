import { Zap, Package, Truck, FileText, Heart, ShoppingBag } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const services = [
  {
    icon: Zap,
    title: 'Express Delivery',
    description:
      'Priority shipping with 4-6 business days delivery. Perfect for urgent documents and time-sensitive packages.',
    features: ['Door-to-door pickup', 'Real-time tracking', 'Insurance included'],
  },
  {
    icon: Package,
    title: 'Standard Shipping',
    description:
      'Economical option for non-urgent shipments. Reliable delivery within 7-10 business days.',
    features: ['Cost-effective rates', 'Full tracking', 'Customs handling'],
  },
  {
    icon: Truck,
    title: 'Bulk Cargo',
    description:
      'Specialized service for large shipments, commercial goods, and e-commerce orders.',
    features: ['Volume discounts', 'Dedicated support', 'Warehousing available'],
  },
  {
    icon: FileText,
    title: 'Document Courier',
    description:
      'Secure handling for important documents, certificates, and legal papers.',
    features: ['Tamper-proof packaging', 'Priority processing', 'Digital copies'],
  },
  {
    icon: Heart,
    title: 'Medicine Shipping',
    description:
      'Temperature-controlled shipping for medicines and healthcare products with proper documentation.',
    features: ['Prescription handling', 'Cold chain available', 'FDA compliant'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description:
      'End-to-end logistics for online sellers shipping to US customers.',
    features: ['Amazon FBA support', 'Return management', 'API integration'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#2d4a6f] uppercase tracking-wider mb-4">
              Our Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-4">
              Shipping Solutions Tailored for You
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#6b7280]">
              From documents to large parcels, we handle every shipment with care
              and precision.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
