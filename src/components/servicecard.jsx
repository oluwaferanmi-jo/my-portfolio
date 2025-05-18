import React from 'react';
import * as FaIcons from 'react-icons/fa'; // import all FA icons

const ServiceCard = ({ icon, title, description }) => {
  const IconComponent = FaIcons[icon]; // dynamically resolve icon from string

  return (
    <div className=" bg-zinc-800 rounded-lg p-6 text-center shadow-md hover:scale-105 transition-transform">
      {IconComponent && <IconComponent className="text-orange-500 text-4xl mb-4 mx-auto" />}
<h3
  className="text-xl font-semibold mb-2 text-transparent bg-clip-text"
  style={{
    backgroundImage: 'linear-gradient(to right, #FA6E00 30%, #E60026 70%)',
  }}
>
  {title}
</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
