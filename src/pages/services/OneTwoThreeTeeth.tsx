import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star, Shield, Sparkles, Zap, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadForm } from '../../components/LeadForm';

const steps = [
  {
    icon: <Zap className="w-6 h-6" />,
    label: "Precision Start",
    detail: "3D Smile Design & Mild/Moderate Sedation"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    label: "The Foundation",
    detail: "All Extractions, Implant Surgery, & High-Grade Abutments"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Immediate Lifestyle",
    detail: "RapidCeramic™ Prototype & SpeedZirconia™ Temporary"
  },
  {
    icon: <Star className="w-6 h-6" />,
    label: "The Final Masterpiece",
    detail: "MaxZirconia™ Final — The gold standard in durability and aesthetics"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    label: "Peace of Mind",
    detail: "6 Weeks of Post-Op Care & our Signature Lifestyle Warranty"
  }
];

const OneTwoThreeTeeth: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-deep-teal font-sans font-bold uppercase tracking-widest text-xs mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
                The 24-Hour Revolution
              </h1>
              <h2 className="text-5xl md:text-7xl font-heading text-white mb-8 leading-tight">
                123 Teeth™
              </h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12">
                Our signature revolutionary 24-hour workflow. Walk in with missing teeth, walk out with a permanent, stunning smile in just one day. The ultimate in speed and precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-white font-heading text-xl mb-4">Key Features</h3>
                  {["Proprietary 24-Hour Protocol", "Same-Day Final Prosthetics", "Fully Digital Workflow", "Concierge Patient Care"].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-deep-teal" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-heading text-xl mb-4">Patient Benefits</h3>
                  {["Instant Transformation", "Minimal Downtime", "Unmatched Aesthetic Results", "Life-Changing Speed"].map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-deep-teal" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block px-10 py-5 bg-deep-teal text-white rounded-full font-sans font-bold hover:bg-oceanic-teal transition-all shadow-xl shadow-deep-teal/20"
              >
                Schedule Consultation
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]"
            >
              <img
                src="/123-teeth-service.png"
                alt="123 Teeth™"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-deep-teal/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-deep-teal/5 rounded-[48px] blur-3xl -z-10" />

          <div className="rounded-[48px] border border-deep-teal/30 bg-white/3 backdrop-blur-sm overflow-hidden">
            {/* Header */}
            <div className="bg-deep-teal px-10 py-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Sparkles className="w-48 h-48 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" /> Exclusive Package
              </div>
              <h2 className="text-4xl md:text-6xl font-heading text-white mb-4">
                The 123Teeth™ Exclusive Package
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <span className="text-white/50 text-xl line-through font-sans">A $25,000 Total Value</span>
                <span className="w-px h-6 bg-white/20 hidden sm:block" />
                <span className="text-white text-3xl font-heading font-bold">Now $9,995</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest">Limited Time</span>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="px-10 py-14">
              <h3 className="text-white/50 font-sans font-bold uppercase tracking-widest text-xs mb-10 text-center">
                The All-Inclusive Workflow
              </h3>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-deep-teal/40 transition-all group"
                  >
                    <div className="w-12 h-12 bg-deep-teal/20 rounded-xl flex items-center justify-center text-deep-teal flex-shrink-0 group-hover:bg-deep-teal group-hover:text-white transition-all">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-deep-teal">Step {index + 1}</span>
                      </div>
                      <h4 className="text-white font-heading text-xl mb-1">{step.label}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                <a
                  href="#contact"
                  className="px-12 py-5 bg-deep-teal text-white rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-oceanic-teal transition-all shadow-2xl shadow-deep-teal/30"
                >
                  Claim This Package
                </a>
              </div>

              {/* Fine print */}
              <div className="mt-10 p-6 rounded-2xl bg-white/3 border border-white/10">
                <p className="text-white/40 text-sm leading-relaxed text-center">
                  <span className="text-white/60 font-semibold">Note:</span> $9,995 is the exclusive rate for cash/check paid in full at your pre-surgical consultation. Flexible financing is available through{' '}
                  <span className="text-white/60">CareCredit, Proceed, Cherry,</span> and more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Consultation Form */}
      <div id="contact">
        <LeadForm />
      </div>
    </div>
  );
};

export default OneTwoThreeTeeth;
