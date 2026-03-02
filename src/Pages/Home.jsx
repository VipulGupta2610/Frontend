import React from 'react';
import { Package, Layout, CheckCircle, Printer, ChevronRight, ShieldCheck, Zap, Globe, Award, Beaker, ShoppingBag, Coffee, Laptop } from 'lucide-react';

const Home = () => {
  const services = [
    { title: "Printed Mono Cartons", description: "High-quality paperboard packaging for Pharma & FMCG. [cite: 45]", icon: <Package className="w-8 h-8 text-blue-600" /> },
    { title: "Laminated Cartons", description: "Protection against moisture and scratches with smooth matte/glossy finish. [cite: 71]", icon: <ShieldCheck className="w-8 h-8 text-blue-600" /> },
    { title: "Marketing Media", description: "Vibrant brochures, catalogues, and pamphlets for brand visibility. [cite: 111]", icon: <Layout className="w-8 h-8 text-blue-600" /> },
    { title: "Specialty Printing", description: "Custom Menu Cards, Bill Books, and Cloth Tags for retail. [cite: 256, 312, 375]", icon: <Award className="w-8 h-8 text-blue-600" /> }
  ];

  const industries = [
    { name: "Pharmaceutical", icon: <Beaker /> },
    { name: "Cosmetics", icon: <ShoppingBag /> },
    { name: "Food & FMCG", icon: <Coffee /> },
    { name: "Retail", icon: <Laptop /> }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 italic">
              "Portraying powerful brand stories" [cite: 10]
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Bespoke Digital & <br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Print Media Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              "We strive towards making real connections with people" through complete value for money printing solutions. [cite: 10, 23]
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center group">
                Explore Services <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl aspect-square flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
               {/* 14554.jpg packaging shot goes here */}
               <Package className="w-32 h-32 text-blue-600/30" />
               <p className="absolute bottom-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Premium Output Sample</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="flex items-center space-x-4">
            <Zap className="w-10 h-10 flex-shrink-0" />
            <p className="font-bold">Continuous upgrade of equipment & skills [cite: 24]</p>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="w-10 h-10 flex-shrink-0" />
            <p className="font-bold">Reaching million hearts across the globe [cite: 16]</p>
          </div>
          <div className="flex items-center space-x-4">
            <ShieldCheck className="w-10 h-10 flex-shrink-0" />
            <p className="font-bold">Highest level of precision & clarity [cite: 24, 28]</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Printing Services</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
  <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
    
    <div>
      <h2 className="text-4xl font-bold mb-6">Why Choose Print N Pack Hub?</h2>
      <ul className="space-y-4">
        <li>✔ Advanced Offset Printing Machines</li>
        <li>✔ High-Quality Paper & Finishing</li>
        <li>✔ Custom Packaging Solutions</li>
        <li>✔ Timely Delivery & Bulk Orders</li>
      </ul>
    </div>

    <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl h-80 flex items-center justify-center">
      Factory Image Placeholder
    </div>

  </div>
</section>

      {/* Industry Bar */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-12 text-slate-400">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="text-blue-600 scale-150">{industry.icon}</div>
                <span className="font-bold uppercase text-xs tracking-tighter">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;