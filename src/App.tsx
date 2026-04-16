import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AdvantageSection } from './components/AdvantageSection';
import { DrMikeBio } from './components/DrMikeBio';
import { PricingTiers } from './components/PricingTiers';
import { YouTubeGallery } from './components/YouTubeGallery';
import { LeadForm } from './components/LeadForm';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Import Service Pages
import SingleToothImplant from './pages/services/SingleToothImplant';
import MultipleImplants from './pages/services/MultipleImplants';
import FullMouthImplants from './pages/services/FullMouthImplants';
import AdvancedCustomSolutions from './pages/services/AdvancedCustomSolutions';
import OneTwoThreeTeeth from './pages/services/OneTwoThreeTeeth';
import Contact from './pages/Contact';
import MeetDrMike from './pages/MeetDrMike';
import OneTwoThreeTeethWorkflow from './pages/OneTwoThreeTeethWorkflow';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { name: "Single Tooth Implant", path: "/services/single-tooth-implant" },
    { name: "Multiple Implants", path: "/services/multiple-implants" },
    { name: "Full Mouth Implants", path: "/services/full-mouth-implants" },
    { name: "Advanced Custom Solutions", path: "/services/advanced-custom-solutions" },
    { name: "123 Teeth™", path: "/services/123-teeth" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.avif"
            alt="Orlando Lifestyle Dentistry"
            className="h-16 w-auto object-contain"
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-xs font-sans font-bold uppercase tracking-widest text-white/60">
          <Link to="/" className="hover:text-deep-teal transition-colors">Home</Link>
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-deep-teal transition-colors py-8">
              Services <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-muted border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-4 backdrop-blur-xl"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/123-teeth" className="hover:text-deep-teal transition-colors">123Teeth™</Link>
          <Link to="/meet-dr-mike" className="hover:text-deep-teal transition-colors">Meet Dr. Mike</Link>
          <a href="/#pricing" className="hover:text-deep-teal transition-colors">Pricing</a>
          <Link to="/contact" className="hover:text-deep-teal transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:4075550123" className="hidden xl:flex items-center gap-2 text-white font-bold text-sm">
            <Phone className="w-4 h-4 text-deep-teal" /> (407) 555-0123
          </a>
          <a href="/#contact" className="px-8 py-3 bg-deep-teal text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-oceanic-teal transition-all shadow-lg shadow-deep-teal/20">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => (
  <main>
    <Hero />
    
    <div id="services">
      <ServicesSection />
    </div>
    
    <div id="advantage">
      <AdvantageSection />
    </div>
    
    <div id="dr-mike">
      <DrMikeBio />
    </div>
    
    <div id="pricing">
      <PricingTiers />
    </div>
    
    <div id="gallery">
      <YouTubeGallery />
    </div>
    
    <div id="contact">
      <LeadForm />
    </div>
  </main>
);

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <footer className="bg-muted text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <img
                src="/logo.avif"
                alt="Orlando Lifestyle Dentistry"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Redefining the dental experience through innovation, empathy, and surgical excellence.
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/orlandolifestyledentistry/#" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-white/20 hover:text-deep-teal cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/OrlandosPlaceForImplants" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-white/20 hover:text-deep-teal cursor-pointer transition-colors" />
              </a>
              <a href="https://www.youtube.com/@orlandolifestyledentistry10" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-white/20 hover:text-deep-teal cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/123-teeth" className="hover:text-white transition-colors">123Teeth™ Workflow</Link></li>
              <li><Link to="/meet-dr-mike" className="hover:text-white transition-colors">About Dr. Mike</Link></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Financing Options</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-white/40">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-deep-teal flex-shrink-0" />
                <span className="leading-relaxed">123 Winter Park Way,<br />Orlando, FL 32801</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-deep-teal flex-shrink-0" />
                <a href="tel:4075550123" className="hover:text-deep-teal transition-colors"><span>(407) 555-0123</span></a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white mb-8">Hours</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-white">8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span className="text-deep-teal font-bold uppercase tracking-widest text-[10px]">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 Orlando Lifestyle Dentistry. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background selection:bg-deep-teal selection:text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/single-tooth-implant" element={<SingleToothImplant />} />
          <Route path="/services/multiple-implants" element={<MultipleImplants />} />
          <Route path="/services/full-mouth-implants" element={<FullMouthImplants />} />
          <Route path="/services/advanced-custom-solutions" element={<AdvancedCustomSolutions />} />
          <Route path="/services/123-teeth" element={<OneTwoThreeTeeth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meet-dr-mike" element={<MeetDrMike />} />
          <Route path="/123-teeth" element={<OneTwoThreeTeethWorkflow />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}



