import ServicePageLayout from '../components/softverse/servicePageLayout';
import { Brain, Bot, Database, Zap, TrendingUp, Shield, MessageSquare, BarChart2, RefreshCw, Layers } from 'lucide-react';

const SERVICE = {
  tag: '04 — Inteligência Artificial',
  title: 'Inteligência Artificial',
  subtitle: 'Soluções Inteligentes que Impulsionam o Futuro',
  hero: {
    headline: 'Inteligência Artificial: Soluções Inteligentes que Impulsionam o Futuro',
    sub: 'Na SoftVerse, integramos IA generativa, automação inteligente e machine learning diretamente no coração do seu negócio — transformando dados em decisões e processos em resultados.',
  },
  intro: {
    title: 'Inteligência Artificial que Transforma Dados em Resultados',
    paragraphs: [
      'A IA não é mais o futuro — é o presente. Na SoftVerse, desenvolvemos soluções de Inteligência Artificial sob medida para o seu negócio, desde chatbots inteligentes até sistemas de machine learning que preveem comportamentos e automatizam decisões complexas.',
      'Nossa abordagem é prática e orientada a resultado: identificamos onde a IA pode gerar mais valor para sua operação e implementamos soluções robustas, escaláveis e integradas ao seu ecossistema tecnológico.',
    ],
    stats: [
      { value: '10x', label: 'Ganho de produtividade' },
      { value: '70%', label: 'Redução de tarefas manuais' },
      { value: '24/7', label: 'Automações ativas' },
      { value: 'GPT-4o', label: 'Tecnologia de ponta' },
    ],
  },
  whatWeDo: {
    title: 'O que desenvolvemos com IA',
    desc: 'Aplicações reais de IA que resolvem problemas reais do seu negócio.',
    items: [
      { icon: MessageSquare, title: 'Chatbots & Assistentes IA', desc: 'Atendimento inteligente 24/7 com linguagem natural via WhatsApp, web ou app.' },
      { icon: Brain, title: 'IA Generativa', desc: 'Geração de conteúdo, imagens, código e documentos com LLMs e modelos de última geração.' },
      { icon: Database, title: 'RAG & Knowledge Base', desc: 'Sistemas que respondem perguntas com base nos documentos e dados da sua empresa.' },
      { icon: BarChart2, title: 'Análise Preditiva', desc: 'Machine learning para prever churn, demanda, riscos e oportunidades de negócio.' },
      { icon: RefreshCw, title: 'Automação Inteligente', desc: 'Fluxos automatizados com decisão baseada em IA para processos repetitivos.' },
      { icon: Layers, title: 'Integração com APIs de IA', desc: 'OpenAI, Gemini, Claude, Whisper, Stable Diffusion e outros modelos líderes de mercado.' },
    ],
  },
  benefits: {
    title: 'Benefícios da IA para o Seu Negócio',
    desc: 'A IA aplicada estrategicamente gera vantagem competitiva real.',
    items: [
      { title: 'Produtividade Elevada', desc: 'Automatize tarefas manuais e libere sua equipe para atividades de maior valor.' },
      { title: 'Decisões Mais Rápidas', desc: 'Insights em tempo real a partir de dados para embasar decisões estratégicas.' },
      { title: 'Escalabilidade', desc: 'Soluções que crescem com o seu negócio sem aumento proporcional de custo.' },
      { title: 'Personalização em Massa', desc: 'Experiências hiperpersonalizadas para clientes, em qualquer escala.' },
      { title: 'Redução de Erros', desc: 'Processos automatizados com IA reduzem falhas humanas em operações críticas.' },
      { title: 'Inovação Contínua', desc: 'Fique à frente da concorrência com tecnologia de ponta integrada ao seu produto.' },
    ],
  },
  forWho: {
    title: 'Para quem é indicado?',
    items: [
      'Empresas que querem automatizar atendimento ao cliente com qualidade e inteligência.',
      'Times de produto que desejam incorporar funcionalidades de IA generativa nos seus apps.',
      'Empresas com grandes volumes de dados que ainda não extraem valor deles.',
      'Gestores que querem reduzir custos operacionais com automações inteligentes.',
      'Startups que querem diferenciação de produto com IA como core feature.',
    ],
  },
  cta: {
    title: 'Conte-nos sobre o que você precisa',
    desc: 'Nossa equipe de IA avaliará seu cenário e apresentará uma proposta de solução com consultoria técnica gratuita.',
  },
  whyHire: {
    title: 'Por que contratar a IA para seu negócio?',
    desc: 'Nosso diferencial: expertise técnica aliada a visão de negócio.',
    items: [
      { value: 'GPT-4o', title: 'Modelos de Ponta', desc: 'Acesso aos melhores LLMs do mercado.' },
      { value: 'On-prem', title: 'Segurança de Dados', desc: 'Soluções com total controle dos seus dados.' },
      { value: 'API-first', title: 'Integração Fácil', desc: 'Conectamos IA ao seu stack existente.' },
      { value: 'ROI', title: 'Foco em Resultado', desc: 'Métricas claras de impacto e retorno.' },
    ],
  },
  process: {
    title: 'Como entregamos soluções com IA',
    desc: 'Metodologia estruturada para garantir soluções que realmente funcionam.',
    steps: [
      { title: 'Imersão e Requisitos', desc: 'Mapeamos processos, dados disponíveis e objetivos de negócio.' },
      { title: 'Análise de Dados e Estratégia', desc: 'Definimos arquitetura da solução, modelos e métricas de sucesso.' },
      { title: 'Treinar, Validar e Ajustar', desc: 'Desenvolvemos, treinamos e validamos os modelos com dados reais.' },
      { title: 'Integração e Evolução Contínua', desc: 'Deploy em produção com monitoramento e melhorias constantes.' },
    ],
  },
  closing: {
    title: 'Vamos construir soluções inteligentes para o seu negócio',
    desc: 'Fale com nosso time de IA e descubra como a tecnologia pode transformar sua operação.',
  },
};

export default function InteligenciaArtificial() {
  return <ServicePageLayout service={SERVICE} />;
}