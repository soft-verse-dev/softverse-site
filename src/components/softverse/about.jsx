import { Shield, Zap, Users, Star } from 'lucide-react';

const VALUES = [
  {
    icon: Shield,
    title: 'Transparência',
    desc: 'Atuamos com clareza e integridade em cada etapa dos projetos.',
  },
  {
    icon: Zap,
    title: 'Inovação',
    desc: 'Buscamos constantemente novas tecnologias e métodos para evoluir nossas entregas.',
  },
  {
    icon: Users,
    title: 'Colaboração',
    desc: 'Valorizamos o trabalho em equipe e a troca de conhecimento como força propulsora.',
  },
  {
    icon: Star,
    title: 'Excelência',
    desc: 'Do design ao código, prezamos por qualidade em cada detalhe do projeto.',
  },
];

export default function About() {
  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="container-sv">
        {/* Top grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: text */}
          <div>
            <span className="inline-block text-sv-secondary font-semibold text-sm font-mono tracking-widest uppercase mb-4">
              // Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sv-primary leading-tight mb-6">
              Mais do que uma software house
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              A <strong className="text-sv-primary">SoftVerse</strong> é um ecossistema criativo onde ideias ganham
              forma por meio da tecnologia. Fundada com o propósito de oferecer experiências digitais
              de alto nível, nossa empresa atua com foco em inovação, precisão e excelência em cada entrega.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Acreditamos que a tecnologia é uma ponte entre o presente e o futuro, e que por trás
              de cada código existe uma visão transformadora. Com uma equipe multidisciplinar e
              processos bem definidos, nos destacamos por entregar soluções personalizadas.
            </p>

            {/* Mission / Vision */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-sv-light rounded-lg border-l-4 border-sv-secondary">
                <h4 className="font-bold text-sv-primary mb-1.5 text-sm uppercase tracking-wide">Missão</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Levar uma experiência de alto nível, transformando ideias em soluções digitais de impacto.
                </p>
              </div>
              <div className="p-4 bg-sv-light rounded-lg border-l-4 border-sv-tertiary">
                <h4 className="font-bold text-sv-primary mb-1.5 text-sm uppercase tracking-wide">Visão</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ser referência em desenvolvimento de software com qualidade, criatividade e comprometimento.
                </p>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="relative bg-sv-primary rounded-xl overflow-hidden aspect-square max-w-sm mx-auto lg:max-w-none">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(41,141,113,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(41,141,113,0.5) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-sv-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-sv-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SV</span>
                  </div>
                </div>
                <p className="text-white font-bold text-xl mb-2">SoftVerse</p>
                <p className="text-white/60 text-sm font-mono">{"</>"} We build the future</p>

                <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                  {[
                    { label: 'Projetos', value: '50+' },
                    { label: 'Clientes', value: '30+' },
                    { label: 'Tecnologias', value: '20+' },
                    { label: 'Anos', value: '3+' },
                  ].map(item => (
                    <div key={item.label} className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-sv-secondary font-bold text-xl">{item.value}</p>
                      <p className="text-white/50 text-xs mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-lg p-4 flex items-center gap-3 max-w-48">
              <div className="w-10 h-10 bg-sv-secondary/15 rounded-full flex items-center justify-center flex-shrink-0">
                <Star size={16} className="text-sv-secondary" />
              </div>
              <div>
                <p className="font-bold text-sv-primary text-sm">Qualidade</p>
                <p className="text-gray-500 text-xs">Certificada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-xl font-bold text-sv-primary text-center mb-8">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 bg-sv-light rounded-lg hover:bg-sv-primary transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-sv-secondary/15 group-hover:bg-sv-secondary/25 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon size={18} className="text-sv-secondary" />
                </div>
                <h4 className="font-bold text-sv-primary group-hover:text-white text-sm mb-2 transition-colors">
                  {title}
                </h4>
                <p className="text-gray-500 group-hover:text-white/60 text-xs leading-relaxed transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}