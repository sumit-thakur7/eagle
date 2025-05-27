// components/EquipmentMaintenanceSection.jsx
import React from 'react';

const EquipmentMaintenanceSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">EQUIPMENT MAINTENANCE</h2>
      <p className="text-center mb-8">
        Regular maintenance & proper care of paragliding equipment is essential for safety & longevity. Our on-site workshop offers comprehensive maintenance services performed by certified technicians.
      </p>
      <p className="text-center mb-8">
        We recommend annual inspections for all paragliding equipment, especially wings, harnesses, and reserve parachutes. Our technicians can identify potential issues before they become safety hazards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">WING INSPECTIONS</h3>
          <p>Porosity testing, line measurements, trim checks, and repair services for all brands of paragliders.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">RESERVE REPACKING</h3>
          <p>Professional reserve parachute inspection and repacking services, recommended every 6-12 months.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">HARNESS REPAIRS</h3>
          <p>Harness inspections, airbag testing, and repairs to ensure your safety and comfort in flight.</p>
        </div>
      </div>
    </section>
  );
};

export default EquipmentMaintenanceSection;