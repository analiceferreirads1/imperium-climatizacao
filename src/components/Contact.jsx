import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  // --- LÓGICA DE AUTOMAÇÃO ---
  // --- LÓGICA DE AUTOMAÇÃO ATUALIZADA ---
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',    // Adicionado para evitar erro de 'undefined'
    empresa: '',
    servico: 'Instalação Residencial',
    detalhes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // IMPORTANTE: Verifique se no n8n o PATH está exatamente 'contato-imperium-climatizacao'
      const WEBHOOK_URL = 'http://localhost:5678/webhook-test/contato-imperium-climatizacao';

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // Útil para testes em localhost
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      // Como no-cors não permite ler a resposta, assumimos que se chegou aqui, foi enviado
      setEnviado(true);
      setFormData({ nome: '', telefone: '', email: '', empresa: '', servico: 'Instalação Residencial', detalhes: '' });

    } catch (error) {
      console.error('Erro na automação:', error);
      alert('Erro ao conectar com o servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  // --- FIM DA LÓGICA ---

  return (
    <section className="py-16 md:py-24 bg-white" id="contato">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LADO ESQUERDO: INFOS E CARDS DE CONTATO */}
          <div className="space-y-8 md:sticky md:top-32">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#194680] font-black tracking-[0.3em] text-[10px] uppercase">Contato</span>
                <div className="h-[1px] w-12 bg-[#194680]/30"></div>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                Pronto para elevar o <br />
                <span className="text-[#194680]">clima do seu projeto?</span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                Seja para uma residência ou complexo industrial, nossa equipe desenha a solução ideal sob medida.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* CARD WHATSAPP */}
              <a
                href="https://wa.me/5511940805407"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 group cursor-pointer hover:border-[#194680]/20 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-200 text-[#194680] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:bg-[#194680] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#194680]/20">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-base font-bold text-[#194680]">11 94080-5407</p>
                </div>
              </a>

              {/* CARD E-MAIL */}
              <a
                href="mailto:contato@imperium.com.br"
                className="flex items-center gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 group cursor-pointer hover:border-[#194680]/20 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-200 text-[#194680] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:bg-[#194680] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#194680]/20">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">E-mail Profissional</p>
                  <p className="text-base font-bold text-slate-800 group-hover:text-[#194680] transition-colors duration-300">contato@imperium.com.br</p>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-slate-100 flex items-center gap-3 text-slate-400">
              <CheckCircle2 size={18} className="text-[#194680]" />
              <p className="text-xs font-bold uppercase tracking-wider">Resposta técnica em até 2h</p>
            </div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO COM INTEGRAÇÃO */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#194680]/5 rounded-bl-full -mr-16 -mt-16"></div>

            {enviado ? (
              <div className="relative z-10 text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-black text-slate-900">Mensagem Enviada!</h4>
                <p className="text-slate-500">Nossa inteligência comercial já recebeu seus dados e entrará em contato em breve.</p>
                <button onClick={() => setEnviado(false)} className="text-[#194680] font-bold text-sm underline mt-4">Enviar outra mensagem</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nome Completo</label>
                    <input
                      required
                      type="text"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#194680] focus:ring-4 focus:ring-[#194680]/5 transition-all text-slate-900 placeholder:text-slate-300"
                      placeholder="Ex: Ana Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Telefone</label>
                    <input
                      required
                      type="text"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#194680] focus:ring-4 focus:ring-[#194680]/5 transition-all text-slate-900 placeholder:text-slate-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-mail</label>
                    <input
                      required
                      type="text"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#194680] focus:ring-4 focus:ring-[#194680]/5 transition-all text-slate-900 placeholder:text-slate-300"
                      placeholder="exemplo@dominio.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Empresa</label>
                    <input
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#194680] focus:ring-4 focus:ring-[#194680]/5 transition-all text-slate-900 placeholder:text-slate-300"
                      placeholder="Ex: Imperium LTDA"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Serviço de Interesse</label>
                  <div className="relative">
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#194680] focus:bg-white transition-all text-slate-900 appearance-none cursor-pointer"
                    >
                      <option>Instalação Residencial</option>
                      <option>Manutenção / PMOC</option>
                      <option>Projeto Corporativo / VRF</option>
                      <option>Outros Assuntos</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Detalhes do Projeto</label>
                  <textarea
                    rows="4"
                    value={formData.detalhes}
                    onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#194680] focus:ring-4 focus:ring-[#194680]/5 transition-all text-slate-900 placeholder:text-slate-300 resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button
                  disabled={loading}
                  className="group w-full py-6 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl shadow-orange-500/30 transform hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <>Processando <Loader2 size={16} className="animate-spin" /></>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}