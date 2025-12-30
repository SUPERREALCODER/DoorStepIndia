
import React from 'react';
import { BRAND_MISSION } from '../constants';

const StorySection: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-20">
          <div className="lg:w-1/2 mb-16 lg:mb-0 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            
            <div className="relative grid grid-cols-2 gap-6">
               <div className="space-y-6">
                 <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" alt="Specialist" />
                 <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-lg">
                    <p className="text-4xl font-bold mb-1">12k+</p>
                    <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Fixes Completed</p>
                 </div>
               </div>
               <div className="pt-12 space-y-6">
                 <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-lg">
                    <p className="text-sm font-medium italic opacity-70">"A repair shouldn't be a gamble. It should be a guarantee."</p>
                    <p className="mt-4 font-bold text-indigo-400">— Founder, DSE</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" alt="Trust" />
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 mb-6 uppercase tracking-[0.2em]">
              Our Brand Story
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              {BRAND_MISSION.title}
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {BRAND_MISSION.story}
            </p>
            
            <div className="space-y-8">
              {BRAND_MISSION.values.map((val, i) => (
                <div key={i} className="flex group">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <span className="font-bold text-indigo-600 group-hover:text-white">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-200">
                <img src="https://i.pravatar.cc/150?u=founder" alt="Founder" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg">Aryan Sharma</p>
                <p className="text-slate-500 font-medium">Founder & CEO, DoorStep Essentials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
