import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-whisper">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center">
          <div className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-[2rem] text-green-600 animate-bounce">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Configuration Received!</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
            Thank you for your interest in PremiumDoors. Our technical team is reviewing your design and will send your personalized offer shortly.
          </p>

          <div className="grid gap-4">
            <Link to="/" className="w-full py-5 rounded-2xl bg-white text-slate-900 border-2 border-slate-100 font-black shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              <Home className="w-6 h-6" /> Back to Home
            </Link>
            <div className="p-8 bg-primary rounded-3xl text-white text-left relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60 mb-2">Next Step</p>
              <h3 className="text-xl font-bold mb-4">While you wait, check our Installation Guide</h3>
              <button className="flex items-center gap-2 font-black text-sm group-hover:gap-4 transition-all">
                Download PDF <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
