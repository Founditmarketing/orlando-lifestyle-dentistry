import React from 'react';
import { ServiceLayout } from '../../components/ServiceLayout';

const SingleToothImplant: React.FC = () => {
  return (
    <ServiceLayout 
      title="Single Tooth Implant"
      subtitle="Precision Restoration"
      description="A permanent, natural-looking replacement for a single missing tooth that preserves your jawbone and surrounding teeth without the need for bridges or dentures."
      image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000"
      features={[
        "Biocompatible Titanium Post",
        "Custom Zirconia Crown",
        "Digital Shade Matching",
        "Minimally Invasive Guided Surgery"
      ]}
      benefits={[
        "Prevents Bone Loss",
        "Looks & Feels Like a Natural Tooth",
        "Protects Adjacent Teeth",
        "Lifetime Durability"
      ]}
    />
  );
};

export default SingleToothImplant;
