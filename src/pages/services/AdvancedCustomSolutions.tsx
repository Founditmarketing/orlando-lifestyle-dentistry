import React from 'react';
import { ServiceLayout } from '../../components/ServiceLayout';

const AdvancedCustomSolutions: React.FC = () => {
  return (
    <ServiceLayout 
      title="Advanced Custom Solutions"
      subtitle="Complex Case Expertise"
      description="Specialized Zygomatic and Pterygoid implants for complex cases where traditional bone structure may be lacking, avoiding the need for extensive bone grafting."
      image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
      features={[
        "Zygomatic Implants",
        "Pterygoid Implants",
        "No Bone Grafting Required",
        "Advanced Surgical Navigation"
      ]}
      benefits={[
        "Solution for Severe Bone Loss",
        "Faster Treatment Time",
        "High Success Rates",
        "Fixed Teeth in 24 Hours"
      ]}
    />
  );
};

export default AdvancedCustomSolutions;
