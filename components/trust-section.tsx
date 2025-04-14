import React from 'react';
import Image from 'next/image'; // Usamos next/image para optimización

const TrustSection: React.FC = () => {
    return (
  


<section className="container mx-auto px-6 md:px-12 py-8">
<div className="grid md:grid-cols-2 gap-8 items-center">
  <div className="order-2 md:order-1">
    <Image
      src="/placeholder.svg?height=150&width=150"
      alt="Caregiver with client"
      width={150}
      height={150}
      className="rounded-lg object-cover mb-4"
    />
    <Image
      src="/placeholder.svg?height=150&width=300"
      alt="Team of caregivers"
      width={300}
      height={150}
      className="rounded-lg object-cover ml-auto"
    />
  </div>
  <div className="order-1 md:order-2">
    <p className="text-gray-800 leading-relaxed">
      We are a trusted network that provides exceptional care and trusted services. We understand the local
      lifestyle, and our community.
    </p>
  </div>
</div>
</section>
  );
};

export default TrustSection;
