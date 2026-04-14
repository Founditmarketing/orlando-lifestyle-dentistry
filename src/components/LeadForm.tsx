import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, Calendar } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lastProcedure: '',
    primaryConcern: '',
    opinionType: '',
    urgency: '',
    creditScore: '',
    cosigner: '',
    agreement: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    { title: "Clinical History", subtitle: "Tell us about your dental journey" },
    { title: "Financial Assessment", subtitle: "Options tailored to your budget" },
    { title: "Contact Details", subtitle: "How can we reach you?" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-deep-teal/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-oceanic-teal/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <div className="md:w-1/3 bg-deep-teal p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-heading mb-12">Free Consultation</h3>
              <div className="space-y-10">
                {steps.map((s, i) => (
                  <div key={i} className={`flex gap-5 items-start transition-all duration-500 ${step > i + 1 ? 'opacity-100' : step === i + 1 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${step > i + 1 ? 'bg-white text-deep-teal border-white' : 'border-white/30'}`}>
                      {step > i + 1 ? <CheckCircle2 className="w-6 h-6" /> : <span className="text-sm font-bold">{i + 1}</span>}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest mb-1">{s.title}</p>
                      <p className="text-xs text-white/60">{s.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-24 p-8 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                <Calendar className="w-8 h-8 mb-4 text-white/40" />
                <p className="text-sm italic leading-relaxed text-white/80">
                  "Our goal is to give you a permanent solution that lasts a lifetime."
                </p>
                <p className="text-xs mt-4 font-bold tracking-widest uppercase text-deep-teal-light">— Dr. Mike</p>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="md:w-2/3 p-10 md:p-20 bg-white/5">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Last Dental Procedure</label>
                    <select 
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all appearance-none cursor-pointer"
                      value={formData.lastProcedure}
                      onChange={e => setFormData({...formData, lastProcedure: e.target.value})}
                    >
                      <option value="" className="bg-background">Select an option</option>
                      <option value="cleaning" className="bg-background">Routine Cleaning</option>
                      <option value="extraction" className="bg-background">Tooth Extraction</option>
                      <option value="implant" className="bg-background">Dental Implant</option>
                      <option value="denture" className="bg-background">Denture Fitting</option>
                      <option value="none" className="bg-background">None in 2+ Years</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Primary Concerns</label>
                    <select 
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all appearance-none cursor-pointer"
                      value={formData.primaryConcern}
                      onChange={e => setFormData({...formData, primaryConcern: e.target.value})}
                    >
                      <option value="" className="bg-background">Select an option</option>
                      <option value="missing" className="bg-background">Missing Teeth</option>
                      <option value="failing" className="bg-background">Failing Dentures</option>
                      <option value="cosmetic" className="bg-background">Cosmetic Appearance</option>
                      <option value="pain" className="bg-background">Pain / Discomfort</option>
                      <option value="function" className="bg-background">Difficulty Chewing</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Opinion Type</label>
                      <select 
                        className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all appearance-none cursor-pointer"
                        value={formData.opinionType}
                        onChange={e => setFormData({...formData, opinionType: e.target.value})}
                      >
                        <option value="" className="bg-background">Select an option</option>
                        <option value="first" className="bg-background">First Opinion</option>
                        <option value="second" className="bg-background">Second Opinion</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Urgency Level</label>
                      <select 
                        className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all appearance-none cursor-pointer"
                        value={formData.urgency}
                        onChange={e => setFormData({...formData, urgency: e.target.value})}
                      >
                        <option value="" className="bg-background">Select an option</option>
                        <option value="immediate" className="bg-background">Immediate (Ready Now)</option>
                        <option value="soon" className="bg-background">Within 3 Months</option>
                        <option value="planning" className="bg-background">Researching / Planning</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full py-5 bg-deep-teal text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-oceanic-teal transition-all shadow-xl shadow-deep-teal/20 mt-4"
                  >
                    Continue <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Credit History Assessment</label>
                    <select 
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all appearance-none cursor-pointer"
                      value={formData.creditScore}
                      onChange={e => setFormData({...formData, creditScore: e.target.value})}
                    >
                      <option value="" className="bg-background">Select an option</option>
                      <option value="excellent" className="bg-background">Excellent (720+)</option>
                      <option value="good" className="bg-background">Good (660-719)</option>
                      <option value="fair" className="bg-background">Fair (600-659)</option>
                      <option value="poor" className="bg-background">Poor (Below 600)</option>
                      <option value="unsure" className="bg-background">Unsure</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Cosigner Availability</label>
                    <select 
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all appearance-none cursor-pointer"
                      value={formData.cosigner}
                      onChange={e => setFormData({...formData, cosigner: e.target.value})}
                    >
                      <option value="" className="bg-background">Select an option</option>
                      <option value="yes" className="bg-background">Yes, I have a cosigner if needed</option>
                      <option value="no" className="bg-background">No cosigner available</option>
                      <option value="maybe" className="bg-background">Maybe</option>
                    </select>
                  </div>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex gap-5 items-start">
                    <input 
                      type="checkbox" 
                      id="agreement" 
                      className="mt-1 w-6 h-6 rounded-lg border-white/20 bg-white/5 text-deep-teal focus:ring-deep-teal cursor-pointer"
                      checked={formData.agreement}
                      onChange={e => setFormData({...formData, agreement: e.target.checked})}
                    />
                    <label htmlFor="agreement" className="text-sm text-white/50 leading-relaxed cursor-pointer">
                      I understand that Dr. Mike's time is valuable. I agree to be on time for my consultation and provide 24-hour notice if I need to reschedule.
                    </label>
                  </div>

                  <div className="flex gap-6 mt-4">
                    <button 
                      onClick={prevStep}
                      className="w-1/3 py-5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button 
                      onClick={nextStep}
                      disabled={!formData.agreement}
                      className="w-2/3 py-5 bg-deep-teal text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-oceanic-teal transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-deep-teal/20"
                    >
                      Continue <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">First Name</label>
                      <input 
                        type="text"
                        className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all placeholder:text-white/20"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Last Name</label>
                      <input 
                        type="text"
                        className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all placeholder:text-white/20"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input 
                      type="email"
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all placeholder:text-white/20"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-deep-teal outline-none transition-all placeholder:text-white/20"
                      placeholder="(407) 555-0123"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-6 mt-4">
                    <button 
                      onClick={prevStep}
                      className="w-1/3 py-5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button 
                      className="w-2/3 py-5 bg-deep-teal text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-oceanic-teal transition-all shadow-2xl shadow-deep-teal/40"
                    >
                      Submit Application
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
