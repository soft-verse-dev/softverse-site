import { useState } from 'react';
import { Mail, MessageCircle, Instagram, Youtube, Send, CheckCircle, MapPin, AlertCircle, Loader } from 'lucide-react';
import { sendContactEmail } from '@/lib/sendContactEmail';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await sendContactEmail(form);
      setSent(true);
      setForm({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente ou entre em contato direto.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = encodeURIComponent('Olá! Vim pelo site da SoftVerse e gostaria de saber mais sobre os serviços.');

  return (
    <section id="contato" className="section-padding bg-sv-primary">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
            // Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Vamos construir algo juntos
          </h2>
          <p className="text-white/55 text-base max-w-lg mx-auto">
            Conte-nos sobre seu projeto. Nossa equipe está pronta para transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <a
              href="mailto:contato@softverse.dev.br"
              className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 bg-sv-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sv-secondary/35 transition-colors">
                <Mail size={18} className="text-sv-secondary" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-mono mb-0.5">E-MAIL</p>
                <p className="text-white font-medium text-sm">contato@softverse.dev.br</p>
              </div>
            </a>

            <a
              href={`https://wa.me/5511943278584?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 bg-sv-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sv-secondary/35 transition-colors">
                <MessageCircle size={18} className="text-sv-secondary" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-mono mb-0.5">WHATSAPP</p>
                <p className="text-white font-medium text-sm">+55 11 94327-8584</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-lg">
              <div className="w-10 h-10 bg-sv-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-sv-secondary" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-mono mb-0.5">LOCALIZAÇÃO</p>
                <p className="text-white font-medium text-sm">São Paulo, SP — Brasil</p>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs font-mono mb-4 uppercase tracking-wider">Redes Sociais</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/softverse.softwarehouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-sv-secondary/25 hover:border-sv-secondary/50 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={16} className="text-white/70 hover:text-white" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCA2nSUb8zXmhWXA4sowJw9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-sv-secondary/25 hover:border-sv-secondary/50 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube size={16} className="text-white/70 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-7 md:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-sv-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-sv-secondary" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada com sucesso!</h3>
                  <p className="text-white/55 text-sm">Obrigado pelo contato. Nossa equipe responderá em breve.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-500/15 border border-red-500/30 rounded-lg mb-4">
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-200 text-sm">{error}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-white/60 text-xs font-mono mb-1.5 uppercase tracking-wider">Nome</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full h-11 px-4 bg-white/8 border border-white/15 rounded-md text-white placeholder-white/30 text-sm focus:outline-none focus:border-sv-secondary focus:bg-white/12 transition-all"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-white/60 text-xs font-mono mb-1.5 uppercase tracking-wider">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full h-11 px-4 bg-white/8 border border-white/15 rounded-md text-white placeholder-white/30 text-sm focus:outline-none focus:border-sv-secondary focus:bg-white/12 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-mono mb-1.5 uppercase tracking-wider">Serviço de interesse</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-white/8 border border-white/15 rounded-md text-white text-sm focus:outline-none focus:border-sv-secondary transition-all appearance-none"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <option value="" className="bg-sv-primary">Selecione um serviço</option>
                      <option value="Body Shop" className="bg-sv-primary">Body Shop</option>
                      <option value="Desenvolvimento Sob Demanda" className="bg-sv-primary">Desenvolvimento Sob Demanda</option>
                      <option value="Design UI/UX" className="bg-sv-primary">Design UI/UX</option>
                      <option value="Inteligência Artificial" className="bg-sv-primary">Inteligência Artificial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-mono mb-1.5 uppercase tracking-wider">Mensagem</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto ou dúvida..."
                      rows={5}
                      className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-md text-white placeholder-white/30 text-sm focus:outline-none focus:border-sv-secondary focus:bg-white/12 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-sv-secondary text-white font-semibold rounded-md hover:bg-[#218a67] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <>
                        <Loader size={15} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}