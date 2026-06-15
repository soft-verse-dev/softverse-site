import ServicePageLayout from '../components/softverse/servicePageLayout';
import { Users, Clock, TrendingUp, Shield, Zap, Star, Briefcase, RefreshCw, DollarSign, Award } from 'lucide-react';

const SERVICE = {
  tag: '01 — Body Shop',
  title: 'Body Shop',
  subtitle: 'Alocação de Talentos Sob Medida',
  hero: {
    headline: 'Body Shop: Talentos Sob Medida para o Seu Time',
    sub: 'Fornecemos profissionais qualificados que se integram ao seu ambiente de trabalho, trazendo expertise técnica sem os custos e complexidade de uma contratação tradicional.',
  },
  intro: {
    title: 'Alocação Profissional Sob Demanda',
    paragraphs: [
      'O modelo Body Shop da SoftVerse permite que sua empresa acesse talentos de alto nível de forma ágil, flexível e econômica. Nossos profissionais se integram à sua equipe, seguindo sua cultura, metodologia e objetivos.',
      'Seja para reforçar um time existente, suprir uma demanda pontual ou escalar rapidamente um projeto, oferecemos a solução certa no momento certo — com qualidade garantida e total transparência no processo.',
    ],
    stats: [
      { value: '48h', label: 'Tempo médio de alocação' },
      { value: '100%', label: 'Alinhamento cultural' },
      { value: '30+', label: 'Especialistas disponíveis' },
      { value: '0', label: 'Burocracias de contratação' },
    ],
  },
  whatWeDo: {
    title: 'Perfis Disponíveis para Alocação',
    desc: 'Contamos com um ecossistema de talentos multidisciplinares prontos para atuar no seu projeto.',
    items: [
      { icon: Users, title: 'Desenvolvedores Full Stack', desc: 'Front-end, back-end e mobile com expertise em React, Node.js, Python, Flutter e mais.' },
      { icon: Briefcase, title: 'Tech Leads & Arquitetos', desc: 'Profissionais seniores para liderar equipes técnicas e definir arquiteturas escaláveis.' },
      { icon: Star, title: 'Designers UI/UX', desc: 'Especialistas em experiência do usuário, prototipagem e design systems.' },
      { icon: Shield, title: 'QA Engineers', desc: 'Garantia de qualidade com testes manuais, automatizados e de performance.' },
      { icon: Zap, title: 'Especialistas em IA & Dados', desc: 'Cientistas de dados, engenheiros de ML e especialistas em IA generativa.' },
      { icon: RefreshCw, title: 'DevOps & Cloud', desc: 'Infraestrutura, CI/CD, Kubernetes, AWS, GCP e Azure.' },
    ],
  },
  benefits: {
    title: 'Benefícios do Body Shop SoftVerse',
    desc: 'Por que empresas escolhem nosso modelo de alocação em vez de contratar diretamente.',
    items: [
      { title: 'Redução de Custos', desc: 'Sem encargos trabalhistas, benefícios, infraestrutura ou riscos de rescisão.' },
      { title: 'Agilidade', desc: 'Profissionais disponíveis em até 48 horas para iniciar no seu projeto.' },
      { title: 'Flexibilidade de Escala', desc: 'Aumente ou reduza o time conforme a demanda do projeto, sem burocracia.' },
      { title: 'Qualidade Certificada', desc: 'Todos os profissionais passam por processo seletivo rigoroso antes da alocação.' },
      { title: 'Gestão Simplificada', desc: 'Você foca no produto, nós cuidamos dos aspectos administrativos da alocação.' },
      { title: 'Manutenção do Conhecimento', desc: 'Documentação e transferência de conhecimento garantidas ao final de cada projeto.' },
    ],
  },
  forWho: {
    title: 'Para quem é indicado?',
    items: [
      'Empresas com projetos de alta demanda que precisam escalar o time rapidamente.',
      'Startups que precisam de profissionais técnicos sem overhead de contratação CLT.',
      'Empresas em transformação digital que precisam de expertise que não têm internamente.',
      'Times que precisam de reforço técnico pontual para entregar um projeto crítico.',
      'Gestores que querem controle e visibilidade sem abrir mão de qualidade técnica.',
    ],
  },
  cta: {
    title: 'Conte-nos o que você precisa',
    desc: 'Nossa equipe analisará seu perfil ideal e apresentará candidatos qualificados em até 48 horas, com consultoria técnica gratuita.',
  },
  whyHire: {
    title: 'Por que contratar a SoftVerse?',
    desc: 'Diferenciais que nos tornam a escolha certa para alocação de talentos.',
    items: [
      { value: 'Custo', title: 'Custo Fixo', desc: 'Previsibilidade financeira sem surpresas.' },
      { value: 'Fit', title: 'Fit Cultural', desc: 'Profissional alinhado ao seu ambiente.' },
      { value: 'Gestão', title: 'Gestão Ativa', desc: 'Acompanhamento durante toda a alocação.' },
      { value: 'Controle', title: 'Controle Total', desc: 'Você direciona o trabalho do profissional.' },
    ],
  },
  process: {
    title: 'Como funciona o nosso processo',
    desc: 'Da solicitação à alocação em passos simples e transparentes.',
    steps: [
      { title: 'Briefing', desc: 'Você descreve o perfil técnico e comportamental desejado.' },
      { title: 'Construção e avaliação da shortlist', desc: 'Selecionamos e triamos os melhores candidatos do nosso banco de talentos.' },
      { title: 'Integração', desc: 'O profissional é apresentado e integrado ao seu time e processos.' },
      { title: 'Avaliação e evolução contínua', desc: 'Acompanhamento ativo para garantir performance e satisfação.' },
    ],
  },
  closing: {
    title: 'Como podemos te ajudar?',
    desc: 'Fale com nossa equipe e descubra o talento ideal para o seu projeto. Consultoria gratuita, sem compromisso.',
  },
};

export default function BodyShop() {
  return <ServicePageLayout service={SERVICE} />;
}