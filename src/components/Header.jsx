import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImg from '../assets/LogoImperium.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[60] transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-lg py-3 shadow-xl'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">

            {/* LOGO COM TRANSIÇÃO DE ESCALA */}
            <a href="#" className="flex items-center transition-transform hover:scale-105 active:scale-95">
              <img
                src={LogoImg}
                alt="Imperium Climatização"
                className={`transition-all duration-500 object-contain ${isScrolled ? 'h-24 md:h-34' : 'h-14 md:h-1'
                  }`}
              />
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 group ${isScrolled ? 'text-slate-700' : 'text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full`}></span>
                </a>
              ))}

              <a
                href="https://wa.me/5511940805407?text=Olá! Gostaria de solicitar um Orçamento Rápido para climatização com a Imperium."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center text-center"
              >
                Orçamento Rápido
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir Menu"
                className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'
                  }`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-8 py-12 space-y-8 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black text-slate-800 hover:text-orange-500 transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-orange-500/20">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY PARA O MENU MOBILE */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}