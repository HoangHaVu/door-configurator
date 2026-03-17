import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepTitle }) => {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">Configuration Process</span>
          <h1 className="text-slate-900 text-2xl font-bold">Step {currentStep}: {stepTitle}</h1>
        </div>
        <p className="text-slate-500 text-sm font-medium">{currentStep} of {totalSteps} steps</p>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div 
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
