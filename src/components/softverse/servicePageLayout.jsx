import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ServicePageLayout({ service }) {
  const {
    tag,
    title,
    subtitle,
    hero,
    intro,
    whatWeDo,
    benefits,
    forWho,
    cta,
    whyHire,
    process,
    closing,
  } = service;

  const whatsappMsg = encodeURIComponent(`Olá! Vim pelo site da SoftVerse e tenho interesse em ${title}. Gostaria de saber mais.`);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-sv-primary pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(41,141,113,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(41,141,113,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-sv-secondary/10 rounded-full blur-3xl translate-x-1/2" />

        <div className="container-sv relative">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-sv-secondary text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Voltar ao início
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-sv-secondary/15 border border-sv-secondary/30 rounded-full">
            <span className="text-sv-secondary text-xs font-semibold font-mono tracking-widest uppercase">{tag}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {hero.headline}
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            {hero.sub}
          </p>

          <div className="flex flex-col xs:flex-row gap-4">
            <a
              href={`https://wa.me/5511943278584?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-sv-secondary text-white font-semibold rounded-md hover:bg-[#218a67] transition-colors"
            >
              <MessageCircle size={16} /> Falar com especialista
            </a>
            <Link
              to="/#contato"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white font-semibold rounded-md hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Solicitar proposta
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      {intro && (
        <section className="section-padding bg-white">
          <div className="container-sv">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
                  // O Serviço
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-sv-primary mb-6 leading-tight">
                  {intro.title}
                </h2>
                {intro.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-500 text-base leading-relaxed mb-4">{p}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {intro.stats.map((s) => (
                  <div key={s.label} className="bg-sv-light rounded-xl p-6 text-center">
                    <p className="text-3xl md:text-4xl font-bold text-sv-primary mb-1">{s.value}</p>
                    <p className="text-gray-500 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What We Do */}
      {whatWeDo && (
        <section className="section-padding bg-sv-light">
          <div className="container-sv">
            <div className="text-center mb-12">
              <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
                // O que desenvolvemos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-sv-primary mb-4">{whatWeDo.title}</h2>
              {whatWeDo.desc && <p className="text-gray-500 max-w-xl mx-auto">{whatWeDo.desc}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {whatWeDo.items.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-sv-secondary/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-sv-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-sv-secondary" />
                  </div>
                  <h3 className="font-bold text-sv-primary text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && (
        <section className="section-padding bg-white">
          <div className="container-sv">
            <div className="text-center mb-12">
              <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
                // Benefícios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-sv-primary mb-4">{benefits.title}</h2>
              {benefits.desc && <p className="text-gray-500 max-w-xl mx-auto">{benefits.desc}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {benefits.items.map((item) => (
                <div key={item.title} className="p-6 border border-gray-100 rounded-xl hover:border-sv-secondary/40 hover:shadow-md transition-all group">
                  <div className="w-2 h-2 bg-sv-secondary rounded-full mb-4" />
                  <h3 className="font-bold text-sv-primary text-sm mb-2 group-hover:text-sv-secondary transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* For Who */}
      {forWho && (
        <section className="section-padding bg-sv-primary">
          <div className="container-sv">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
                  // Para Quem é Indicado
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {forWho.title}
                </h2>
                <ul className="space-y-3">
                  {forWho.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-sv-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-3">
                  Pronto para começar?
                </p>
                <h3 className="text-white font-bold text-xl mb-4">{cta?.title || 'Conte-nos sobre o seu projeto'}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {cta?.desc || 'Nossa equipe analisará sua necessidade e retornará com uma consultoria técnica gratuita.'}
                </p>
                <a
                  href={`https://wa.me/5511943278584?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sv-secondary text-white font-semibold rounded-md hover:bg-[#218a67] transition-colors text-sm"
                >
                  <MessageCircle size={15} /> Falar agora pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Hire */}
      {whyHire && (
        <section className="section-padding bg-white">
          <div className="container-sv">
            <div className="text-center mb-12">
              <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
                // Por que contratar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-sv-primary mb-4">{whyHire.title}</h2>
              {whyHire.desc && <p className="text-gray-500 max-w-xl mx-auto">{whyHire.desc}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyHire.items.map((item, i) => (
                <div key={i} className="bg-sv-light rounded-xl p-6 text-center hover:bg-sv-primary group transition-all duration-300">
                  <p className="text-2xl font-bold text-sv-secondary mb-1 group-hover:text-sv-secondary">{item.value}</p>
                  <p className="font-bold text-sv-primary group-hover:text-white text-sm mb-2 transition-colors">{item.title}</p>
                  <p className="text-gray-500 group-hover:text-white/60 text-xs leading-relaxed transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {process && (
        <section className="section-padding bg-sv-light">
          <div className="container-sv">
            <div className="text-center mb-12">
              <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
                // Processo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-sv-primary mb-4">{process.title}</h2>
              {process.desc && <p className="text-gray-500 max-w-xl mx-auto">{process.desc}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {process.steps.map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 relative">
                  <div className="w-8 h-8 bg-sv-secondary/15 rounded-full flex items-center justify-center mb-4">
                    <span className="text-sv-secondary font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-sv-primary text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      {closing && (
        <section className="section-padding bg-sv-primary">
          <div className="container-sv text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{closing.title}</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto mb-8">{closing.desc}</p>
            <div className="flex flex-col xs:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/5511943278584?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-sv-secondary text-white font-semibold rounded-md hover:bg-[#218a67] transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="mailto:contato@softverse.dev.br"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white font-semibold rounded-md hover:border-white/60 hover:bg-white/5 transition-all"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}