import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const stats = [
  { value: 50000, suffix: '+', label: 'Packages Delivered', decimals: 0 },
  { value: 4.9, suffix: '/5', label: 'Customer Rating', decimals: 1 },
  { value: 4, suffix: '-6 Days', label: 'Average Delivery Time', decimals: 0 },
  { value: 220, suffix: '+', label: 'US Cities Covered', decimals: 0 },
];

export function StatsSection() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: 'linear-gradient(90deg, #2d4a6f 0%, #3d6a9f 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.label === 'Average Delivery Time' ? (
                  <span>4-6<span className="text-2xl lg:text-3xl"> Days</span></span>
                ) : (
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2000}
                  />
                )}
              </div>
              <p className="text-white/80 text-sm lg:text-base">{stat.label}</p>
              
              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
