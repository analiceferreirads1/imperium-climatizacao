import React from 'react';
import { ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const differentials = [
    {
      title: "Atendimento Rápido",
      description: "Sabemos que o conforto térmico é prioridade. Nossa logística é otimizada para respostas em tempo recorde.",
      icon: <Clock size={32} />
    },
    {
      title: "Técnicos Especialistas",
      description: "Equipe treinada nos padrões dos principais fabricantes, garantindo a performance do seu projeto.",
      icon: <Award size={32} />
    },
    {
      title: "Garantia Estendida",
      description: "Utilizamos apenas peças originais e processos certificados para assegurar a longevidade do sistema.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="diferenciais">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO - RESPONSIVO */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-6 md:w-10 bg-[#194680]/20"></div>
            <span className="text-[#194680] font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">
              Diferenciais
            </span>
            <div className="h-[1px] w-6 md:w-10 bg-[#194680]/20"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Por que confiar na <br className="md:hidden" />
            <span className="text-[#194680]">Imperium?</span>
          </h2>
        </div>

        {/* GRID DE DIFERENCIAIS - AJUSTE DE GAP E PADDING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 rounded-2xl bg-white border border-[#194680]/5 hover:border-[#194680]/20 hover:shadow-2xl hover:shadow-[#194680]/5 transition-all duration-500"
            >
              {/* ÍCONE COM CONTAINER DE FOCO */}
              <div className="mb-6 md:mb-8 text-[#194680] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 origin-left">
                {item.icon}
              </div>
              
              <h4 className="text-xl font-bold text-[#194680] mb-3 md:mb-4">
                {item.title}
              </h4>
              
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                {item.description}
              </p>

              {/* DETALHE TÉCNICO - MAIS DISCRETO E REFINADO */}
              <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <CheckCircle2 size={12} className="text-[#194680]/40" />
                Padrão de Excelência
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}