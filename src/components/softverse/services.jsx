import { Users, Code, Palette, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: Users,
    tag: '01',
    title: 'Body Shop',
    subtitle: 'Alocação de Talentos',
    desc: 'Disponibilizamos profissionais qualificados para integrar sua equipe de forma ágil e eficiente. Desenvolvedores, designers e especialistas prontos para impulsionar seus projetos.',
    features: ['Alocação dedicada', 'Profissionais seniores', 'Integração rápida', 'Flexibilidade de escala'],
    color: 'from-sv-primary to-sv-tertiary',
    accent: '#298D71',
    href: '/servicos/body-shop',
  },
  {
    icon: Code,
    tag: '02',
    title: 'Desenvolvimento Sob Demanda',
    subtitle: 'Soluções Personalizadas',
    desc: 'Construímos soluções digitais completas do zero ou evoluímos seu produto existente. Do MVP à arquitetura enterprise, entregamos com qualidade técnica e no prazo.',
    features: ['Web & Mobile', 'APIs & Integrações', 'Arquitetura escalável', 'Code Review'],
    color: 'from-sv-tertiary to-sv-primary',
    accent: '#3751A0',
    href: '/servicos/desenvolvimento-sob-demanda',
  },
  {
    icon: Palette,
    tag: '03',
    title: 'Design UI/UX',
    subtitle: 'Experiências Digitais',
    desc: 'Criamos interfaces intuitivas e visualmente impactantes que colocam o usuário no centro de cada decisão. Design System, Prototipagem e Pesquisa de UX.',
    features: ['Design System', 'Prototipagem', 'Pesquisa UX', 'Usability Testing'],
    color: 'from-[#298D71] to-sv-tertiary',
    accent: '#0E1148',
    href: '/servicos/design-ui-ux',
  },
  {
    icon: Brain,
    tag: '04',
    title: 'Inteligência Artificial',
    subtitle: 'IA Aplicada ao Negócio',
    desc: 'Integramos soluções de IA generativa, automação inteligente e modelos de machine learning ao seu negócio para aumentar produtividade e gerar vantagem competitiva.',
    features: ['IA Generativa', 'Automação', 'Machine Learning', 'LLMs & RAG'],
    color: 'from-sv-primary to-[#298D71]',
    accent: '#298D71',
    href: '/servicos/inteligencia-artificial',
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="section-padding bg-sv-light">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
            // Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sv-primary leading-tight mb-4">
            O que construímos juntos
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Do planejamento estratégico à entrega final, oferecemos um ecossistema completo
            de soluções digitais para transformar sua visão em realidade.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.tag}
                className="group bg-white rounded-xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 overflow-hidden"
              >
                {/* Card top accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.color}`} />

                <div className="p-7 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${service.accent}15` }}
                      >
                        <Icon size={22} style={{ color: service.accent }} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-mono mb-0.5">{service.tag}</p>
                        <h3 className="font-bold text-sv-primary text-lg leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sv-secondary text-xs font-semibold mt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-sv-light text-gray-600 border border-gray-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-sv-secondary font-semibold text-sm hover:gap-3 transition-all duration-200 group-hover:underline"
                  >
                    Saiba mais
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4 text-sm">
            Não encontrou o que procura? Vamos conversar sobre sua necessidade.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-sv-primary text-white font-semibold rounded-md hover:bg-sv-tertiary transition-colors duration-200"
          >
            Falar com especialista
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}