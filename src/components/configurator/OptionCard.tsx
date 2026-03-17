import React from 'react';
import { ConfigOption } from '../../data/mockData';
import { CheckCircle } from 'lucide-react';

interface OptionCardProps {
  option: ConfigOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const OptionCard: React.FC<OptionCardProps> = ({ option, isSelected, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(option.id)}
      className={`
        group relative p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col gap-4
        ${isSelected 
          ? 'border-primary bg-primary/5' 
          : 'border-slate-200 bg-white hover:border-primary/50'}
      `}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          {option.image && (
            <div 
              className="h-14 w-14 rounded-lg overflow-hidden border border-slate-200 bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${option.image})` }}
            />
          )}
          <div>
            <h3 className="font-bold text-lg">{option.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`font-bold text-sm ${isSelected ? 'text-primary' : 'text-slate-600'}`}>
                {Array(option.priceLevel).fill('$').join('')}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300"></span>
              <span className="text-slate-500 text-xs">{option.description}</span>
            </div>
          </div>
        </div>
        {isSelected && <CheckCircle className="w-6 h-6 text-primary" />}
      </div>

      {option.metrics && (
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-200/50">
          {Object.entries(option.metrics).map(([key, val]) => (
            <div key={key} className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">{key}</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className={`w-2.5 h-1 rounded-full ${i <= val ? 'bg-primary' : 'bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
