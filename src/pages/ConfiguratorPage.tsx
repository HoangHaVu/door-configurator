import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Visualizer } from '../components/configurator/Visualizer';
import { ProgressBar } from '../components/configurator/ProgressBar';
import { OptionCard } from '../components/configurator/OptionCard';
import { CONFIG_STEPS, MOCK_SUMMARY } from '../data/mockData';
import { useConfigurator } from '../hooks/useConfigurator';
import { ArrowRight, ChevronRight, HelpCircle } from 'lucide-react';

const ConfiguratorPage: React.FC = () => {
  const { stepId } = useParams<{ stepId: string }>();
  const navigate = useNavigate();
  const { state, updateField } = useConfigurator();
  
  const currentStepIndex = parseInt(stepId || '1');
  const step = CONFIG_STEPS.find(s => s.id === currentStepIndex) || CONFIG_STEPS[0];
  const totalSteps = 7; // As per design

  const handleNext = () => {
    if (currentStepIndex < CONFIG_STEPS.length) {
      navigate(`/configure/step/${currentStepIndex + 1}`);
    } else {
      navigate('/result');
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 1) {
      navigate(`/configure/step/${currentStepIndex - 1}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Visualizer */}
        <Visualizer 
          currentCategory={state.category} 
          currentMaterial={state.material} 
        />

        {/* Right Side: Configuration Panel */}
        <aside className="w-full lg:w-2/5 bg-background-whisper border-l border-slate-200 flex flex-col overflow-y-auto">
          <div className="p-8 lg:p-12 space-y-8 max-w-2xl mx-auto w-full">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span className="hover:text-primary cursor-pointer">Start</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary">{step.title} Selection</span>
            </nav>

            <ProgressBar 
              currentStep={currentStepIndex} 
              totalSteps={totalSteps} 
              stepTitle={step.title}
            />

            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-3">{step.question}</h2>
              <p className="text-slate-500 font-medium leading-relaxed">{step.description}</p>
            </div>

            {/* Options Grid */}
            <div className="grid gap-4">
              {step.options.map(option => (
                <OptionCard 
                  key={option.id}
                  option={option}
                  isSelected={(state as any)[step.slug] === option.id}
                  onSelect={(id) => updateField(step.slug as any, id)}
                />
              ))}
            </div>

            {/* Quick Support */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <h4 className="text-sm font-bold">Need assistance?</h4>
                  <p className="text-xs text-slate-500">Talk to a specialist now.</p>
                </div>
              </div>
              <button className="text-primary font-bold text-sm px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">
                Chat Live
              </button>
            </div>

            {/* Footer Summary & Actions */}
            <div className="pt-8 border-t border-slate-200 mt-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Estimated Total</p>
                  <p className="text-3xl font-black text-slate-900">${MOCK_SUMMARY.currentPrice.toLocaleString()}.00</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-500 leading-tight">
                    Includes basic installation <br/> and 10-year warranty.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={handleBack}
                  className="px-8 py-5 rounded-xl border-2 border-slate-200 font-black hover:bg-white transition-all text-slate-600"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext}
                  className="flex-1 px-8 py-5 rounded-xl bg-primary text-white font-black shadow-2xl shadow-primary/25 hover:brightness-110 transition-all flex items-center justify-center gap-3"
                >
                  {currentStepIndex === totalSteps ? 'View Result' : `Next: ${CONFIG_STEPS[currentStepIndex]?.title || 'Hardware'}`}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default ConfiguratorPage;
