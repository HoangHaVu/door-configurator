import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="flex items-center justify-between border-b border-primary/10 bg-white px-6 md:px-10 py-4 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="text-primary">
          <span className="material-symbols-outlined text-3xl">door_front</span>
        </div>
        <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight uppercase">
          Premium<span className="text-primary">Doors</span>
        </h2>
      </Link>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <Link to="/" className="hidden md:block text-slate-600 hover:text-primary transition-colors text-sm font-medium">Home</Link>
        <Link to="/configure/step/1" className="bg-primary hover:bg-primary-hover transition-all rounded-lg h-10 px-5 text-white text-sm font-bold flex items-center shadow-sm">
          Open Configurator
        </Link>
      </div>
    </header>
  );
};
