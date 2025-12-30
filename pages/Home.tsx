
import React from 'react';
import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';
import StorySection from '../components/StorySection';
import Chatbot from '../components/Chatbot';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-bold text-xl">Havells</span>
          <span className="font-bold text-xl">Samsung</span>
          <span className="font-bold text-xl">Whirlpool</span>
          <span className="font-bold text-xl">LG</span>
          <span className="font-bold text-xl">Voltas</span>
          <span className="font-bold text-xl">Daikin</span>
        </div>
      </section>
      <ServiceGrid />
      <StorySection />
      <Chatbot />
    </>
  );
};

export default Home;
