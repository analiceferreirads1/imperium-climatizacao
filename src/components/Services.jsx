import React from 'react';
import { Wind, Building2, HardHat, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Climatização Residencial",
      desc: "Instalação e manutenção de sistemas Split e Multi-split com foco em silêncio e eficiência energética.",
      features: ["Instalação Limpa", "Cálculo de Carga Térmica", "Garantia de Fábrica"],
      icon: <Wind size={32} />
    },
    {
      title: "Sistemas Corporativos",
      desc: "Soluções complexas para escritórios e prédios comerciais, incluindo sistemas VRF e Chiller.",
      features: ["Projetos Personalizados", "Eficiência em Escala", "Baixo Consumo"],
      icon: <Building2 size={32} />
    },
    {
      title: "Manutenção & PMOC",
      desc: "Gestão completa de manutenção preventiva e corretiva seguindo rigorosamente as normas da ANVISA.",
      features: ["Laudo Técnico", "Qualidade do Ar", "Redução de Custos"],
      icon: <HardHat size={32} />
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER DA SEÇÃO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#194680] mb-4">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Engenharia de precisão para <br />
              <span className="text-[#194680]">cada tipo de ambiente.</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed border-l-2 border-[#194680]/20 pl-6">
            Atuamos desde a infraestrutura inicial até o suporte técnico especializado, garantindo ar puro e temperatura ideal.
          </p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#194680]/30 hover:shadow-2xl hover:shadow-[#194680]/10 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* ICON CONTAINER */}
                <div className="w-16 h-16 bg-[#194680]/5 rounded-2xl flex items-center justify-center text-[#194680] mb-8 group-hover:bg-[#194680] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-[#194680] mb-4">{service.title}</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>

                {/* LISTA DE FEATURES */}
                <ul className="space-y-3 mb-10">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#194680]/30" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA LINK */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/5511940805407?text=Olá! Gostaria de solicitar um orçamento para o serviço de ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#194680] hover:text-orange-600 transition-all group"
                >
                  <span className="relative">
                    Solicitar Orçamento
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  <div className="p-2 bg-slate-100 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}