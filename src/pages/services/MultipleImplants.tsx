import React from 'react';
import { ServiceLayout } from '../../components/ServiceLayout';

const MultipleImplants: React.FC = () => {
  return (
    <ServiceLayout 
      title="Multiple Implants"
      subtitle="Comprehensive Restoration"
      description="Strategically placed implants to support bridges or multiple crowns, restoring full function and aesthetics to your smile when several teeth are missing."
      image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
      features={[
        "Implant-Supported Bridges",
        "Multi-Unit Abutments",
        "3D Surgical Templates",
        "Custom Aesthetic Design"
      ]}
      benefits={[
        "Restores Chewing Power",
        "Eliminates Gaps & Shifting",
        "Stable & Non-Removable",
        "Preserves Facial Structure"
      ]}
    />
  );
};

export default MultipleImplants;
