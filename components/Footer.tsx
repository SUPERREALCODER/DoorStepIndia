
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-6">
               <div className="bg-indigo-600 p-1.5 rounded-lg text-white font-bold text-lg mr-2">DS</div>
               <span className="text-xl font-bold tracking-tight">DoorStep Essentials</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's first niche service marketplace for Home Essentials. Crafting reliability, one visit at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Expert Network</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Safety Protocols</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91-8851701544</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>care@doorstepessentials.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>DLF Cyber Hub, Gurugram</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Greatmove Technologies Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
