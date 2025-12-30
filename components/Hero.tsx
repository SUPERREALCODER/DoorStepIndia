
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-700 mb-6">
              Expert Home Essentials Care
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Professional Care for Your <span className="text-indigo-600">Smart Home</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Why settle for generic? We specialize exclusively in Home Essentials. 
              Verified experts, honest pricing, and a 30-day guarantee on every fix.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                Book a Service
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                How it works
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="avatar" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Trusted by <span className="text-slate-900 font-bold">2,400+</span> households this month
              </p>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800" 
                  alt="Technician working" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Our Promise</p>
                  <p className="text-2xl font-bold">Background Verified Professionals</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
