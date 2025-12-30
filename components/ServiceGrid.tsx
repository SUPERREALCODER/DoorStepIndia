
import React from 'react';
import { SERVICES } from '../constants';

const ServiceGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Essential Focus</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            By focusing only on core home systems, we deliver unmatched expertise. No generic hands, only specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{service.name}</h3>
              <p className="text-slate-500 mb-6 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Starts at</span>
                  <p className="text-lg font-bold text-slate-900">₹{service.priceStart}</p>
                </div>
                <button className="bg-slate-50 text-indigo-600 px-4 py-2 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition-all text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
