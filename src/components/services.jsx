import React from 'react';
import * as FaIcons from 'react-icons/fa'; // Import all FontAwesome icons
import services from '../data/services';
import ServiceCard from './servicecard'; // component to display each card

const Services = () => {
  return (
    <section className="bg-gray-900 py-4 px-4 lg:py-4">
      <h2 className="text-white text-3xl text-center font-bold mb-4">Services</h2>
      <p className="text-gray-400 text-center mb-10">
        Every pixel, every line of code — tailored to meet your goals and solve real business problems through beautiful and functional digital design.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => {
  const IconComponent = FaIcons[service.icon];
  console.log(service.icon, IconComponent); // 👀

  return (
    <ServiceCard
      key={index}
      icon={
        IconComponent ? (
          <IconComponent size={30} className="text-orange-500" />
        ) : (
          <div className="text-red-500 text-sm">Icon not found</div> // fallback
        )
      }
      title={service.title}
      description={service.description}
    />
  );
})}


      </div>
    </section>
  );
};

export default Services;
