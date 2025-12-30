
import React from 'react';
import { REFUND_POLICY_TEXT } from '../constants';

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-indigo-100/50 border border-indigo-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center space-x-4 text-indigo-600">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-200">
                🛡️
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Service Standards</h1>
                <p className="text-slate-500 font-medium">Your trust is our primary asset.</p>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Support Line</p>
              <p className="text-lg font-bold text-indigo-600">1800-419-544</p>
            </div>
          </div>
          
          <div className="prose prose-indigo max-w-none">
            {REFUND_POLICY_TEXT.split('\n').map((line, i) => {
              if (line.startsWith('# ')) return null; // Handled by header
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-indigo-600 rounded-full mr-4 inline-block"></span>
                  {line.substring(4)}
                </h3>;
              }
              if (line.startsWith('- ')) {
                return (
                  <div key={i} className="flex items-start space-x-3 mb-4 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span className="text-slate-600 text-lg leading-relaxed">{line.substring(2)}</span>
                  </div>
                );
              }
              if (line.trim() === '') return <div key={i} className="h-2" />;
              
              // Highlight bold text
              const parts = line.split('**');
              return (
                <p key={i} className="text-slate-600 text-lg leading-relaxed mb-4">
                  {parts.map((part, index) => (
                    index % 2 === 1 ? <strong key={index} className="text-slate-900 font-bold">{part}</strong> : part
                  ))}
                </p>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
            <div className="flex-1 z-10 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2 italic">Still have concerns?</h4>
              <p className="text-slate-400">Our senior trust advocates are available 24/7 to listen and resolve.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
              <a href="mailto:support-trust@doorstepessentials.com" className="bg-indigo-600 text-center px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/40">
                Email Resolution Team
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                Download Terms (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
