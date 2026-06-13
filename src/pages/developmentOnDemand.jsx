import ServicePageLayout from '../components/softverse/ServicePageLayout';
import { Code, Smartphone, Globe, Database, GitBranch, Shield, Zap, RefreshCw, Layers, BarChart2 } from 'lucide-react';

const SERVICE = {
  tag: '02 — Desenvolvimento Sob Demanda',
  title: 'Desenvolvimento Sob Demanda',
  subtitle: 'Soluções Únicas para Desafios Reais',
  hero: {
    headline: 'Desenvolvimento Sob Demanda: Soluções Únicas para Desafios Reais',
    sub: 'Na SoftVerse, construímos soluções digitais sob medida — desde sistemas e plataformas até aplicativos completos — com foco em qualidade, prazo e escalabilidade.',
  },
  intro: {
    title: 'Desenvolvimento Sob Demanda',
    paragraphs: [
      'A SoftVerse entrega soluções digitais personalizadas do zero à produção. Seja um MVP para validar sua ideia, um sistema corporativo robusto ou a evolução de um produto existente — desenvolvemos com as tecnologias mais adequadas para o seu contexto.',
      'Nossa equipe multidisciplinar garante que cada linha de código seja pensada para resolver o problema certo da forma certa, com arquitetura escalável, boas práticas e documentação completa.',
    ],
    stats: [
      { value: '50+', label: 'Projetos entregues' },
      { value: '100%', label: 'No prazo acordado' },
      { value: '3+', label: 'Anos de experiência' },
      { value: '20+', label: 'Tecnologias dominadas' },
    ],
  },
  whatWeDo: {
    title: 'O que fazemos',
    desc: 'Na SoftVerse, desenvolvemos todos os tipos de soluções digitais, das mais simples às mais complexas.',
    items: [
      { icon: Globe, title: 'Sistemas e Plataformas Web', desc: 'ERPs, CRMs, plataformas SaaS e portais corporativos do zero à entrega.' },
      { icon: Smartphone, title: 'Aplicativos Mobile', desc: 'Apps iOS e Android nativos ou híbridos (React Native, Flutter) com foco em performance.' },
      { icon: Database, title: 'APIs e Integrações', desc: 'Desenvolvimento de APIs RESTful, GraphQL e integrações com serviços terceiros.' },
      { icon: Layers, title: 'MVPs e Startups', desc: 'Construção ágil de produtos mínimos viáveis para validação rápida de mercado.' },
      { icon: GitBranch, title: 'Evolução de Produtos', desc: 'Refatoração, novas features e modernização de sistemas legados.' },
      { icon: Shield, title: 'Segurança e Performance', desc: 'Auditoria de código, testes, otimização e arquitetura de alta disponibilidade.' },
    ],
  },
  benefits: {
    title: 'Vantagens do Desenvolvimento Sob Demanda',
    desc: 'Escolher o desenvolvimento personalizado significa investir em uma solução que realmente resolve o seu problema.',
    items: [
      { title: 'Soluções 100% Personalizadas', desc: 'Nenhum software genérico. Cada linha de código é pensada para o seu negócio.' },
      { title: 'Escalabilidade', desc: 'Arquiteturas preparadas para crescer junto com a demanda da sua empresa.' },
      { title: 'Propriedade Total', desc: 'O código é seu. Você tem acesso completo ao repositório e documentação.' },
      { title: 'Stack Moderno', desc: 'Tecnologias atuais com comunidade ativa, suporte e longa vida útil.' },
      { title: 'Time Dedicado', desc: 'Equipe focada no seu projeto com comunicação direta e transparente.' },
      { title: 'Manutenção Contínua', desc: 'Suporte pós-entrega com SLAs definidos para garantir disponibilidade.' },
    ],
  },
  forWho: {
    title: 'Para quem é indicado?',
    items: [
      'Startups que precisam de um MVP robusto para apresentar a investidores e validar hipóteses.',
      'Empresas que têm processos manuais que precisam ser digitalizados e automatizados.',
      'Negócios que precisam de funcionalidades específicas que plataformas prontas não oferecem.',
      'Times que precisam evoluir tecnologicamente recursos e processos já existentes.',
      'Empresas que querem inovar com novas tecnologias e precisam de parceiro técnico confiável.',
    ],
  },
  cta: {
    title: 'Conte-nos sobre o seu projeto',
    desc: 'Descreva seu desafio e obtenha uma consultoria técnica gratuita com nossa equipe de desenvolvimento.',
  },
  whyHire: {
    title: 'Por que contratar desenvolvimento sob demanda?',
    desc: 'Na SoftVerse, a diferença está na atenção a cada projeto e na consistência de entrega.',
    items: [
      { value: 'Clean', title: 'Código Limpo', desc: 'Padrões que facilitam manutenção e evolução.' },
      { value: 'Doc', title: 'Documentado', desc: 'Código e APIs totalmente documentados.' },
      { value: 'Test', title: 'Testado', desc: 'Cobertura de testes para garantir qualidade.' },
      { value: 'Git', title: 'Versionado', desc: 'Controle total com Git e boas práticas de CI/CD.' },
    ],
  },
  process: {
    title: 'Nosso Processo de Desenvolvimento Sob Demanda',
    desc: 'Na SoftVerse, acreditamos que um bom processo é a base de um ótimo produto.',
    steps: [
      { title: 'Descoberta e Planejamento', desc: 'Entendemos o problema, mapeamos requisitos e definimos o escopo técnico.' },
      { title: 'Arquitetura e Setup', desc: 'Definimos tecnologias, estrutura de projeto e configuramos o ambiente de desenvolvimento.' },
      { title: 'Desenvolvimento Iterativo', desc: 'Sprints com entregas frequentes, feedback contínuo e comunicação transparente.' },
      { title: 'Testes, Deploy e Handover', desc: 'QA rigoroso, deploy em produção e entrega com documentação completa.' },
    ],
  },
  closing: {
    title: 'Vamos conversar sobre seu projeto?',
    desc: 'Fale com nossa equipe de desenvolvimento e transforme sua ideia em realidade.',
  },
};

export default function DesenvolvimentoSobDemanda() {
  return <ServicePageLayout service={SERVICE} />;
}