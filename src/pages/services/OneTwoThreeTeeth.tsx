import React from 'react';
import { ServiceLayout } from '../../components/ServiceLayout';

const OneTwoThreeTeeth: React.FC = () => {
  return (
    <ServiceLayout 
      title="123 Teeth™"
      subtitle="The 24-Hour Revolution"
      description="Our signature revolutionary 24-hour workflow. Walk in with missing teeth, walk out with a permanent, stunning smile in just one day. The ultimate in speed and precision."
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
      features={[
        "Proprietary 24-Hour Protocol",
        "Same-Day Final Prosthetics",
        "Fully Digital Workflow",
        "Concierge Patient Care"
      ]}
      benefits={[
        "Instant Transformation",
        "Minimal Downtime",
        "Unmatched Aesthetic Results",
        "Life-Changing Speed"
      ]}
    />
  );
};

export default OneTwoThreeTeeth;
