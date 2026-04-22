import React from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] md:h-[95vh] flex items-center overflow-hidden bg-[#194680]">
      
      {/* BACKGROUND COM TRATAMENTO PROFISSIONAL */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" 
          alt="Tecnologia e Climatização Imperium" 
          className="w-full h-full object-cover opacity-30 md:opacity-50 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#194680] via-[#194680]/90 md:via-[#194680]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 md:py-0">
        <div className="max-w-4xl text-center md:text-left">
          
          {/* INDICADOR DE QUALIDADE */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full animate-pulse">
            <CheckCircle className="w-4 h-4 text-orange-500" />
            <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Engenharia de Climatização Profissional</span>
          </div>

          {/* TÍTULO */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-8">
            Conforto que <br/>
            <span className="text-orange-500">Você merece.</span>
          </h1>

          {/* PARÁGRAFO */}
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Projetos, instalações e manutenções com o rigor técnico que você só encontra na <span className="font-bold text-white">Imperium</span>. 
            Soluções inteligentes para máxima performance do seu ambiente.
          </p>
          
          {/* BOTÕES - SIMETRIA E ANIMAÇÃO UNIFICADA */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center sm:items-stretch">
            <a 
              href="#contato" 
              className="w-full sm:w-auto md:w-[260px] px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl transition-all shadow-2xl shadow-orange-500/20 flex items-center justify-center transform hover:-translate-y-1 active:scale-[0.98]"
            >
              Solicitar Orçamento
            </a>
            
            <a 
              href="#servicos" 
              className="w-full sm:w-auto md:w-[260px] px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center transform hover:-translate-y-1 active:scale-[0.98]"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* ELEMENTO DE NAVEGAÇÃO */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
        <ChevronDown size={24} className="animate-bounce" />
      </div>

    </section>
  );
}