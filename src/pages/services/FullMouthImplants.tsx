import React from 'react';
import { ServiceLayout } from '../../components/ServiceLayout';

const FullMouthImplants: React.FC = () => {
  return (
    <ServiceLayout 
      title="Full Mouth Implants"
      subtitle="Total Smile Transformation"
      description="A life-changing solution for patients with significant tooth loss or failing dentures, providing a fixed, non-removable set of beautiful teeth supported by 4-6 implants."
      image="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000"
      features={[
        "All-on-X Protocol",
        "Full Arch Zirconia Bridge",
        "Immediate Load Temporaries",
        "Digital Aesthetic Planning"
      ]}
      benefits={[
        "Eat Any Food Again",
        "No Adhesives or Slipping",
        "Youthful Facial Support",
        "Confidence in Every Smile"
      ]}
    />
  );
};

export default FullMouthImplants;
