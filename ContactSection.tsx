import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollReveal } from '@/components/ScrollReveal';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    content: '123 Business Street, Hitech City\nHyderabad - 500081, Telangana, India',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 40 1234 5678 (Office)\n+91 98765 43210 (24/7 Helpline)',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@globalexpress.in\nsupport@globalexpress.in',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 4:00 PM',
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #1a2b3c 0%, #2d4a6f 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <div>
            <ScrollReveal direction="left">
              <span className="inline-block text-sm font-semibold text-[#3d6a9f] uppercase tracking-wider mb-4">
                Get In Touch
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Ship?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-white/70 mb-8">
                Get a free quote or ask us anything. Our team is here to help you
                24/7.
              </p>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <ScrollReveal direction="left" delay={0.3}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.4}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Service Type
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-white">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="express">Express Delivery</SelectItem>
                            <SelectItem value="standard">Standard Shipping</SelectItem>
                            <SelectItem value="bulk">Bulk Cargo</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.5}>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your shipping needs..."
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white focus:ring-white resize-none"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.6}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-white text-[#1a2b3c] hover:bg-gray-100 w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-[#1a2b3c]/30 border-t-[#1a2b3c] rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                      ) : (
                        <>
                          Get Free Quote
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </ScrollReveal>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-white/70">
                    We&apos;ve received your request. Our team will contact you within
                    24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:pl-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <ScrollReveal
                  key={info.title}
                  direction="right"
                  delay={0.2 + index * 0.1}
                >
                  <motion.div
                    className="bg-white/10 rounded-xl p-6 h-full"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-white/70 whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
