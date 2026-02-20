import { motion } from 'framer-motion';
import { MousePointer, Home, Plane, MapPin } from 'lucide-react';
import { ProcessStep } from '@/components/ProcessStep';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: MousePointer,
    title: 'Book Online',
    description:
      'Fill out our simple booking form or call us. Get an instant quote based on your package details.',
  },
  {
    number: '02',
    icon: Home,
    title: 'We Pick Up',
    description:
      'Our courier collects your package from your doorstep anywhere in Hyderabad. Free packaging included.',
  },
  {
    number: '03',
    icon: Plane,
    title: 'Customs & Transit',
    description:
      'We handle all customs documentation and clearance. Your package ships via air freight.',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Door Delivery',
    description:
      'Your package is delivered to the recipient\'s address in the USA with proof of delivery.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#2d4a6f] uppercase tracking-wider mb-4">
              How It Works
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-4">
              Ship in 4 Simple Steps
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#6b7280]">
              We&apos;ve streamlined the shipping process to make international
              delivery hassle-free.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={index * 0.15}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Connecting Line (Desktop) */}
        <motion.div
          className="hidden lg:block relative mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5">
            <motion.div
              className="h-full border-t-2 border-dashed border-gray-200"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
