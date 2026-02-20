import { TestimonialCard } from '@/components/TestimonialCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Hyderabad, India',
    quote:
      "I've been using GlobalExpress for my business shipments for over 2 years. Their service is impeccable - always on time, great tracking, and excellent customer support. Highly recommended!",
    shipped: 'Electronics to New York',
    avatar: '/images/avatar-rahul.jpg',
  },
  {
    name: 'Priya Patel',
    location: 'Secunderabad, India',
    quote:
      'Sent documents to my university in California. The process was so smooth and they arrived in just 5 days. The tracking updates kept me informed throughout. Thank you!',
    shipped: 'Documents to California',
    avatar: '/images/avatar-priya.jpg',
  },
  {
    name: 'Amit Reddy',
    location: 'Hyderabad, India',
    quote:
      'As an Amazon seller, I need reliable shipping partners. GlobalExpress handles my bulk orders efficiently and their rates are very competitive. A game-changer for my business.',
    shipped: 'E-commerce products to Texas',
    avatar: '/images/avatar-amit.jpg',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#2d4a6f] uppercase tracking-wider mb-4">
              Testimonials
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-4">
              What Our Customers Say
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#6b7280]">
              Trusted by thousands of customers for reliable international shipping.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              location={testimonial.location}
              quote={testimonial.quote}
              shipped={testimonial.shipped}
              avatar={testimonial.avatar}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
