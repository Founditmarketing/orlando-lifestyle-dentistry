import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Shield, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const OneTwoThreeTeethWorkflow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Digital Blueprint",
      description: "We use ultra-high-definition 3D imaging and facial scanning to create a precise digital map of your anatomy. No messy impressions, just pure data."
    },
    {
      number: "02",
      title: "Surgical Precision",
      description: "Using guided surgery technology, Dr. Mike places your implants with sub-millimeter accuracy, often avoiding the need for bone grafting entirely."
    },
    {
      number: "03",
      title: "Immediate Smile",
      description: "Within 24 hours, your custom-designed, permanent Zirconia teeth are fixed in place. You walk out with a fully functional, stunning smile."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
              The Future of Implant Dentistry
            </h1>
            <h2 className="text-6xl md:text-8xl font-heading text-white mb-8 leading-tight">
              123 Teeth™ <br />
              <span className="text-deep-teal italic">The 24-Hour Revolution</span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              Why wait months for a smile when you can have it in a day? Our proprietary 123 Teeth™ 
              workflow combines advanced robotics, digital design, and surgical mastery to deliver 
              permanent results in record time.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all"
            >
              <div className="text-8xl font-heading text-deep-teal/10 absolute top-4 right-8 group-hover:text-deep-teal/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-3xl font-heading text-white mb-6 relative z-10">{step.title}</h3>
              <p className="text-white/50 text-lg leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-heading text-white mb-8">Traditional vs. 123 Teeth™</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-4">Traditional Method</h4>
                <ul className="space-y-3 text-white/40 text-sm">
                  <li className="flex items-center gap-3">✕ 6-12 Months Treatment Time</li>
                  <li className="flex items-center gap-3">✕ Multiple Invasive Surgeries</li>
                  <li className="flex items-center gap-3">✕ Painful Bone Grafting Required</li>
                  <li className="flex items-center gap-3">✕ Removable "Flipper" Dentures</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-deep-teal/10 border border-deep-teal/20">
                <h4 className="text-deep-teal font-bold uppercase tracking-widest text-xs mb-4">123 Teeth™ Workflow</h4>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-deep-teal" /> 24-Hour Total Transformation</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-deep-teal" /> Minimally Invasive Single Session</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-deep-teal" /> No Bone Grafting in Most Cases</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-deep-teal" /> Fixed, Permanent Zirconia Teeth</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[48px] overflow-hidden shadow-2xl border border-white/10 aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Dentistry" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-deep-teal rounded-full flex items-center justify-center text-white font-heading text-center p-4 shadow-xl rotate-12">
              Final Teeth in 24h
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-6 bg-deep-teal text-white rounded-full font-sans font-bold text-lg hover:bg-oceanic-teal transition-all shadow-2xl shadow-deep-teal/30"
          >
            Start Your 24-Hour Journey <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OneTwoThreeTeethWorkflow;
