import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What documents are required for shipping?',
    answer:
      'For personal shipments, you need a copy of your PAN card and Aadhar card. For commercial shipments, we require IEC (Import Export Code), GST certificate, and commercial invoice. We assist with all documentation to ensure smooth customs clearance.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Express delivery takes 4-6 business days, Standard shipping takes 7-10 business days, and Premium service delivers in 2-4 business days. Delivery times may vary based on customs processing and destination within the USA.',
  },
  {
    question: 'What items cannot be shipped?',
    answer:
      'Prohibited items include perishable foods, flammable materials, weapons, counterfeit goods, and certain medications without proper documentation. Contact us for a complete list or if you\'re unsure about specific items.',
  },
  {
    question: 'How is customs duty handled?',
    answer:
      'We handle all export customs clearance from India. Import duties and taxes in the USA are the responsibility of the recipient. We provide all necessary documentation to facilitate smooth customs clearance in the USA.',
  },
  {
    question: 'Do you provide packaging materials?',
    answer:
      'Yes, we provide free standard packaging for all shipments. For fragile or special items, we offer premium packaging options including bubble wrap, foam inserts, and custom boxes at nominal charges.',
  },
  {
    question: 'How can I track my shipment?',
    answer:
      'Once your package is shipped, you\'ll receive a tracking number via SMS and email. You can track your shipment in real-time on our website or mobile app. We also send automated updates at key milestones.',
  },
];

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f7fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold text-[#2d4a6f] uppercase tracking-wider mb-4">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] mb-4">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-[#6b7280]">
              Find answers to common questions about shipping from Hyderabad to
              the USA.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion */}
        <ScrollReveal delay={0.3}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-sm data-[state=open]:border-l-4 data-[state=open]:border-[#2d4a6f]"
              >
                <AccordionTrigger className="text-left text-[#374151] font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6b7280] pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
