import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PricingTiers: React.FC = () => {
  const tiers = [
    {
      name: "Single Tooth Implant",
      price: "99",
      description: "The gold standard for replacing a single missing tooth with precision.",
      features: [
        "Premium Zirconia Crown",
        "Custom Abutment",
        "Digital Shade Matching",
        "Minimally Invasive Placement"
      ],
      highlight: false
    },
    {
      name: "Partial Mouth Implants",
      price: "199",
      description: "Perfect for replacing multiple teeth in a row. Includes premium Zirconia Prosthetic!",
      features: [
        "Premium Zirconia Prosthetic",
        "Custom Implant Abutments",
        "3D Digital Planning",
        "Local Anesthesia Included",
        "Lifetime Warranty on Hardware"
      ],
      highlight: false
    },
    {
      name: "Full Mouth Restoration",
      price: "399",
      description: "The complete 123Teeth™ experience for total smile transformation.",
      features: [
        "Full Arch Zirconia Bridge",
        "Zygomatic/Pterygoid Options",
        "Sedation Dentistry Available",
        "Same-Day Fixed Temporaries",
        "Post-Op Care Package",
        "Concierge Support"
      ],
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-oceanic-teal/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
            Investment in Yourself
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading text-white mb-6">
            Transparent, Accessible Pricing
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Premium dentistry shouldn't be a mystery. We offer flexible financing options to fit your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-3xl border transition-all ${
                tier.highlight 
                  ? 'bg-deep-teal text-white border-deep-teal shadow-2xl shadow-deep-teal/20 scale-105 z-10' 
                  : 'bg-white/5 text-white border-white/10 backdrop-blur-sm hover:bg-white/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-deep-teal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-heading mb-2">{tier.name}</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm font-sans opacity-70">Starting at</span>
                <span className="text-5xl font-heading">${tier.price}</span>
                <span className="text-lg font-sans opacity-70">/mo</span>
              </div>
              <p className={`mb-8 ${tier.highlight ? 'text-white/80' : 'text-white/50'}`}>
                {tier.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      tier.highlight ? 'bg-white/20 text-white' : 'bg-deep-teal/20 text-deep-teal'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-sans">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-sans font-semibold transition-all ${
                tier.highlight 
                  ? 'bg-white text-deep-teal hover:bg-white/90' 
                  : 'bg-deep-teal text-white hover:bg-oceanic-teal shadow-lg shadow-deep-teal/20'
              }`}>
                Check Eligibility
              </button>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-sm text-white/30 italic">
          *Subject to credit approval. Terms and conditions apply. Zirconia prosthetics included in all full-mouth plans.
        </p>
      </div>
    </section>
  );
};
