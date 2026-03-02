import React, { useState, useEffect } from 'react';
import { Printer, Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (localStorage.getItem('theme') === 'system' || !localStorage.getItem('theme')) {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (
      mode === 'dark' || 
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const cycleTheme = () => {
    const modes = ['system', 'light', 'dark'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    const nextMode = modes[nextIndex];
    
    setTheme(nextMode);
    localStorage.setItem('theme', nextMode);
    applyTheme(nextMode);
  };

  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor size={20} className="text-blue-500" />;
    if (theme === 'light') return <Sun size={20} className="text-yellow-500" />;
    return <Moon size={20} className="text-indigo-400" />;
  };

  return (
    <nav className="fixed w-full z-[100] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
        <Link to="/">
         <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform">
              <Printer className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase leading-none dark:text-white">
                Print N Pack <span className="text-blue-600">Hub</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase">
                Precision Printing
              </span>
            </div>
          </div> 
        </Link>

          {/* Desktop Links & Single Icon Toggle */}
          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'About', 'Products'].map((item) => (
              <a 
                key={item}
                href={`${item.toLowerCase()}`} 
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Icon-Only Theme Toggle */}
            <button 
              onClick={cycleTheme}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:ring-2 ring-blue-500/50 transition-all flex items-center justify-center"
              aria-label="Cycle Theme"
              title={`Current: ${theme} mode`}
            >
              {getThemeIcon()}
            </button>
         

            <a 
              href="contact" 
              className="px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-xl text-sm font-bold hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu & Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={cycleTheme} className="p-2 text-slate-600 dark:text-slate-300" aria-label="Cycle Theme">
                {getThemeIcon()}
             </button>
             <button 
              className="p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-6 space-y-4">
          {['Services', 'About', 'Products', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`${item.toLowerCase()}`}
              className="block text-lg font-bold p-2 text-slate-800 dark:text-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;