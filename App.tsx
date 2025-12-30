
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RefundPolicy from './pages/RefundPolicy';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'refund'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar onNavigate={setCurrentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' ? <Home /> : <RefundPolicy />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
