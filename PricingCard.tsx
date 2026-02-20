import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingCardProps {
  name: string;
  price: string;
  delivery: string;
  features: string[];
  featured?: boolean;
  delay?: number;
}

export function PricingCard({
  name,
  price,
  delivery,
  features,
  featured = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative bg-white rounded-xl p-8 ${
        featured
          ? 'border-2 border-[#2d4a6f] scale-105 shadow-xl'
          : 'border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: featured ? 0 : -4 }}
    >
      {featured && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2d4a6f] text-white px-4 py-1">
          MOST POPULAR
        </Badge>
      )}
      
      <h3 className="text-xl font-semibold text-[#374151] mb-2">{name}</h3>
      <div className="mb-2">
        <span className="text-4xl font-bold text-[#1a2b3c]">{price}</span>
      </div>
      <p className="text-sm text-[#6b7280] mb-6">{delivery}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-[#6b7280]">
            <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button
        className={`w-full ${
          featured
            ? 'bg-[#2d4a6f] hover:bg-[#1a2b3c] text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-[#374151]'
        }`}
        size="lg"
      >
        Choose {name}
      </Button>
    </motion.div>
  );
}
