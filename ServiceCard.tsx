import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="w-14 h-14 bg-[#2d4a6f]/10 rounded-xl flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-7 h-7 text-[#2d4a6f]" strokeWidth={2} />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-[#374151] mb-3">{title}</h3>
      <p className="text-[#6b7280] mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-[#6b7280]">
            <span className="w-1.5 h-1.5 bg-[#2d4a6f] rounded-full flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
