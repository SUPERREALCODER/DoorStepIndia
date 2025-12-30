
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'refund') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-indigo-600 p-2 rounded-lg text-white font-bold text-xl mr-2 transition-transform group-hover:scale-110">DS</div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              DoorStep <span className="text-indigo-600 underline decoration-2 decoration-indigo-200 underline-offset-4">Essentials</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</button>
            <button onClick={() => onNavigate('refund')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Our Guarantee</button>
            <a href="tel:+918851701544" className="bg-slate-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200/50">
              Call Support
            </a>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
