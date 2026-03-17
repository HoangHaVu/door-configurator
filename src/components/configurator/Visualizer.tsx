import React from 'react';
import { Eye, View, ZoomIn } from 'lucide-react';

interface VisualizerProps {
  currentCategory?: string | null;
  currentMaterial?: string | null;
}

export const Visualizer: React.FC<VisualizerProps> = ({ currentCategory, currentMaterial }) => {
  return (
    <section className="w-full lg:w-3/5 bg-slate-200 flex flex-col items-center justify-center p-8 lg:p-12 relative min-h-[400px]">
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm z-10">
        <Eye className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-widest">Live Preview</span>
      </div>

      <div className="w-full max-w-sm aspect-[1/2] bg-white rounded-2xl shadow-2xl overflow-hidden border-[16px] border-slate-300 relative group transition-all duration-700">
        {/* Mock Door Rendering */}
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-all duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
        </div>
        
        {/* Handle */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-slate-400 rounded-full shadow-inner" />
      </div>

      <div className="mt-8 flex gap-4">
        <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-sm text-slate-600">
          <View className="w-4 h-4" /> View in Space
        </button>
        <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-sm text-slate-600">
          <ZoomIn className="w-4 h-4" /> Detail Zoom
        </button>
      </div>
    </section>
  );
};
