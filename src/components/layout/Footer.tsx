import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-3xl text-primary">door_front</span>
            <h2 className="text-lg font-black uppercase tracking-tight">Premium<span className="text-primary">Doors</span></h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Setting the global standard for premium entrance solutions through innovation and traditional craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-slate-400">Products</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-600">
            <li>Front Doors</li>
            <li>Sliding Doors</li>
            <li>Smart Access</li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-slate-400">Support</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-600">
            <li>Dealer Portal</li>
            <li>Warranty</li>
            <li>Installation Guides</li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-slate-400">Company</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-600">
            <li>About Us</li>
            <li>Contact</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
        <p>© 2024 Premium Door Systems GmbH.</p>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
