import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  shipped: string;
  avatar: string;
  delay?: number;
}

export function TestimonialCard({
  name,
  location,
  quote,
  shipped,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-[#f8fafc] rounded-xl p-8 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
    >
      <Quote className="w-10 h-10 text-[#2d4a6f] mb-4 opacity-50" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      
      <p className="text-[#374151] mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#374151]">{name}</h4>
          <p className="text-sm text-[#6b7280]">{location}</p>
          <p className="text-xs text-[#2d4a6f] mt-1">Shipped: {shipped}</p>
        </div>
      </div>
    </motion.div>
  );
}
