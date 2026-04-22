import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Share2 } from 'lucide-react';
import LogoImg from '../assets/LogoImperium.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#194680] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <img
                            src={LogoImg}
                            alt="Imperium Logo"
                            className="h-20 md:h-32 brightness-0 invert object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                            Excelência em engenharia térmica e soluções de climatização para ambientes que exigem o máximo de performance e conforto.
                        </p>
                        <div className="flex gap-4">

                            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#bb9854] transition-colors"><Share2 size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 relative inline-block">
                            Navegação
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-white/20"></span>
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'Serviços', 'Diferenciais', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-400 hover:text-orange-500 text-sm flex items-center gap-0 hover:gap-2 transition-all duration-300 group"
                                    >
                                        {/* Um traço sutil que aparece no hover */}
                                        <span className="w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-3"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 relative inline-block">
                            Soluções
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-white/20"></span>
                        </h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex items-center gap-2">Instalação Residencial</li>
                            <li className="flex items-center gap-2">Sistemas Industriais (VRF)</li>
                            <li className="flex items-center gap-2">Contratos PMOC</li>
                            <li className="flex items-center gap-2">Manutenção Corretiva</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 relative inline-block">
                            Fale Conosco
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-white/20"></span>
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="p-2 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-[#194680] transition-all">
                                    <Phone size={16} />
                                </div>
                                <a href="https://wa.me/5511940805407" target="_blank" rel="noreferrer" className="text-slate-300 text-sm group-hover:text-white transition-colors">
                                    11 94080-5407 <br />
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <div className="p-2 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-[#194680] group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    <Mail size={16} />
                                </div>
                                <span className="text-slate-400 group-hover:text-white text-sm transition-colors duration-300">
                                    contato@imperium.com.br
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <div className="p-2 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-[#194680] group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-slate-400 group-hover:text-white text-sm transition-colors duration-300">
                                    São Paulo, SP - Brasil
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-slate-400 text-xs font-medium">
                            © {currentYear} Imperium Climatização. Todos os direitos reservados.
                        </p>
                        <p className="text-slate-500 text-[10px] mt-1 tracking-widest uppercase">
                            CNPJ: 61.987.487.0001-32
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors"
                    >
                        Voltar ao Topo
                        <div className="p-2 rounded-full border border-white/10 group-hover:border-white transition-all">
                            <ArrowUp size={12} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}