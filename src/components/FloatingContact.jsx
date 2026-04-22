import React from 'react';
import { Snowflake } from 'lucide-react';

export default function FloatingContact() {
  return (
    /* fixed: garante que o botão acompanhe o scroll da página em tempo real */
    <div className="fixed bottom-10 right-10 z-[100] group flex flex-col items-end gap-4">
      
      {/* LABEL FLUTUANTE - Aparece apenas no Hover */}
      <div className="bg-[#194680] text-white text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none border border-white/10">
        Fale Conosco
      </div>

      {/* BOTÃO COM EFEITO DE VIDRO INTELIGENTE (BACKDROP BLUR) */}
      <a 
        href="https://wa.me/5511940805407" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-500 active:scale-90"
      >
        {/* O SEGREDO DO CONTRASTE: 
            - bg-slate-900/10: cria uma base leve para o branco aparecer.
            - backdrop-blur-md: distorce o fundo da página, criando separação visual.
        */}
        <div className="absolute inset-0 rounded-full border border-white/40 bg-slate-900/10 backdrop-blur-md shadow-xl group-hover:border-orange-500/50 group-hover:bg-[#194680]/10 transition-all duration-500"></div>

        {/* ÍCONE SNOWFLAKE QUE GIRA CONTINUAMENTE */}
        <div className="relative text-white group-hover:text-orange-500 transition-colors duration-500">
          <Snowflake 
            size={40} 
            strokeWidth={1.2}
            /* drop-shadow marinho: garante que o ícone apareça mesmo em fundos brancos */
            className="drop-shadow-[0_4px_6px_rgba(25,70,128,0.4)] animate-[spin_10s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite]" 
          />
        </div>

        {/* INDICADOR DE STATUS ONLINE (PING) */}
        <span className="absolute top-1 right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}