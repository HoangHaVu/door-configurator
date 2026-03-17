import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Mail, Phone, User, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

const ResultPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-whisper">
      <Navbar />

      <main className="flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Left: Summary */}
          <div className="space-y-8">
            <div>
              <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                <span>Configuration</span>
                <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                <span className="text-primary font-black">Ready for Quote</span>
              </nav>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">Your Design is Ready.</h1>
              <p className="mt-4 text-lg text-slate-500 font-medium">Please review your selections and provide your contact details to receive a formal offer within 24 hours.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" /> Configuration Summary
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Selected Category", value: "Front Door / Entrance" },
                  { label: "Material core", value: "Solid Natural Timber" },
                  { label: "Surface Finish", value: "Matte Anthracite Gray" },
                  { label: "Hardware Suite", value: "Professional Secure-X Handle" },
                  { label: "Thermal Value", value: "0.67 W/(m²K)" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                    <span className="font-bold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t-2 border-dashed border-slate-100 flex justify-between items-center">
                <span className="text-lg font-black text-slate-400">Total Estimate</span>
                <span className="text-3xl font-black text-primary">$3,420.00</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-black mb-2">Get Your Personal Offer</h2>
              <p className="text-slate-500 font-medium mb-10">All quotes include delivery and professional measurement.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="tel" placeholder="+49 123 456789" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input required type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Installation Postcode</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input required type="text" placeholder="10115 Berlin" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium" />
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-slate-200 text-primary focus:ring-primary" />
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    I agree to the processing of my data and wish to receive a personalized quote via email or phone.
                  </p>
                </div>

                <button type="submit" className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Submit Configuration <CheckCircle className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResultPage;
