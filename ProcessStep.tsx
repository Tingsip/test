import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  isLast?: boolean;
}

export function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  delay = 0,
  isLast = false,
}: ProcessStepProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Connecting line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-gray-200" />
      )}
      
      {/* Step number badge */}
      <motion.div
        className="w-20 h-20 bg-[#2d4a6f] rounded-full flex items-center justify-center mb-6 relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-2xl font-bold text-white">{number}</span>
      </motion.div>
      
      {/* Icon */}
      <div className="w-14 h-14 bg-[#f5f7fa] rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-[#2d4a6f]" strokeWidth={2} />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-[#374151] mb-3">{title}</h3>
      <p className="text-[#6b7280] max-w-xs leading-relaxed">{description}</p>
    </motion.div>
  );
}
