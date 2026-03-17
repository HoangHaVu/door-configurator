import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Settings2, Shield, Thermometer, Palette, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPFLCvCRBKYTSc_79oEJN1WmKb66kDDQe-mLdQl14iER4l3TZlJvCl885nu5-amEPOB-pnVIGIJYMnpqKnMsgOcWdG81a-FlnK7Sb0K4pK2wdmpNbIHvRp2wGYdHWreTP8vEYDw54YiGeVnyptwaUfDDQzA6twFmaqunOTvirKmYVXkx3ZSmxJZQ0ka58tdQb74PuCwIT9GKeoVpWrySpZ4-EdfF89vNPcu6ML5zImp_HT_GZcWvHNn3erA9XeY6NRvT5I7ZqoQ5Ap" 
              alt="Premium Door Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                Your Perfect Door—<br/>
                <span className="text-primary italic">In Minutes.</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-xl font-medium leading-relaxed">
                Experience German precision and architectural elegance with our intuitive 3D configurator.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/configure/step/1" className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-xl font-black text-lg shadow-2xl flex items-center gap-3 transition-all">
                  <Settings2 className="w-6 h-6" /> Start Configuring
                </Link>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black text-lg transition-all">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background-whisper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Craftsmanship in Every Detail</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Discover why our doors are the preferred choice for architects worldwide.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Unrivaled Security", desc: "Multi-point locking systems and RC3 certified security glass." },
                { icon: Thermometer, title: "Thermal Excellence", desc: "Advanced composite insulation with U-values as low as 0.67." },
                { icon: Palette, title: "Limitless Design", desc: "Over 500 RAL colors and bespoke handle collections." },
              ].map((feature, i) => (
                <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">{feature.desc}</p>
                  <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 translate-x-1/4"></div>
              <div className="relative z-10 max-w-xl">
                <h2 className="text-4xl font-black text-white mb-6">Ready to create your dream entrance?</h2>
                <p className="text-white/80 text-lg italic font-light">"The configurator made it so easy to visualize exactly how it looks." — Sarah J.</p>
              </div>
              <Link to="/configure/step/1" className="relative z-10 bg-white text-primary px-12 py-5 rounded-xl font-black text-lg shadow-2xl hover:bg-slate-50 transition-all flex items-center gap-3">
                <Settings2 className="w-6 h-6" /> Open Configurator
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
