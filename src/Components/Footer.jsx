import React from 'react';
import { Mail, Phone, MapPin, Printer, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Printer className="text-blue-600 w-6 h-6" />
              <span className="text-lg font-black uppercase">Print N Pack Hub</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              "We believe in nurturing creativity and technology to portray powerful brand stories." [cite: 10]
              Specializing in premium offset and digital media solutions. [cite: 5]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-600">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-blue-600 transition">Mono Cartons</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Pharma LBL Cards</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Marketing Brochures</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Corporate Stationery</a></li>
            </ul>
          </div>

          {/* Location Col */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-600">Factory</h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p>Plot No: 385, Sector: 2, IGC, HSIIDC,<br/>Saha Distt: Ambala (Haryana) 133104 </p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p>GST: 06BANPG8866J1Z2</p>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-600">Connect</h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 font-bold">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 80590 21112 [cite: 386]</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:printnpackhub@gmail.com" className="hover:text-blue-600">printnpackhub@gmail.com [cite: 386]</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <p>© 2026 Print N Pack Hub. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;