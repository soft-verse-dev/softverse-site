import ServicePageLayout from '../components/softverse/servicePageLayout';
import { Palette, Monitor, Smartphone, Layout, Search, PenTool, Eye, BarChart2, Users, Layers } from 'lucide-react';

const SERVICE = {
  tag: '03 — Design UI/UX',
  title: 'Design UI/UX',
  subtitle: 'Funcionalidade, Estética e Resultado',
  hero: {
    headline: 'Design UI/UX: Funcionalidade, Estética e Resultado',
    sub: 'Na SoftVerse, design é muito mais que aparência. Criamos interfaces que comunicam, convertem e transformam — porque cada pixel tem o poder de influenciar resultados reais.',
  },
  intro: {
    title: 'Design UI/UX que Conecta Pessoas e Tecnologia',
    paragraphs: [
      'Acreditamos que um bom design vai muito além do visual: ele é estratégia, comunicação e resultado. Nosso time cria interfaces que transformam — e há uma única coisa que nos define: a busca constante por soluções que realmente funcionam.',
      'Trabalhamos com metodologias ágeis e centradas no usuário, combinando pesquisa, prototipagem e validação contínua para criar produtos digitais que encantam, convertem e fidelizam.',
    ],
    stats: [
      { value: '3x', label: 'Aumento médio em conversão' },
      { value: '80%', label: 'Redução de retrabalho' },
      { value: '50+', label: 'Interfaces entregues' },
      { value: '100%', label: 'Foco no usuário' },
    ],
  },
  whatWeDo: {
    title: 'O que desenvolvemos',
    desc: 'Na SoftVerse desenvolvemos experiências digitais que unem estética, estratégia e usabilidade.',
    items: [
      { icon: Monitor, title: 'Interfaces Web', desc: 'Layouts responsivos e modernos para sistemas, portais e plataformas.' },
      { icon: Smartphone, title: 'Apps Mobile', desc: 'Experiências nativas e híbridas centradas no comportamento do usuário.' },
      { icon: Layers, title: 'Design Systems', desc: 'Bibliotecas de componentes consistentes e escaláveis para times de produto.' },
      { icon: Search, title: 'Pesquisa UX', desc: 'Entrevistas, testes de usabilidade e análise de jornada do usuário.' },
      { icon: PenTool, title: 'Prototipagem', desc: 'Wireframes e protótipos interativos para validar antes de desenvolver.' },
      { icon: BarChart2, title: 'UI para Dashboards', desc: 'Visualização de dados clara, objetiva e intuitiva para tomada de decisão.' },
    ],
  },
  benefits: {
    title: 'Benefícios de um Design Inteligente',
    desc: 'Design bem feito não é custo — é investimento com retorno mensurável.',
    items: [
      { title: 'Mais Conversões', desc: 'Interfaces otimizadas aumentam taxa de conversão e reduzem abandono.' },
      { title: 'Menos Retrabalho', desc: 'Prototipagem antes do código elimina mudanças caras no desenvolvimento.' },
      { title: 'Consistência Visual', desc: 'Design Systems garantem identidade visual coerente em todos os produtos.' },
      { title: 'Usuários Satisfeitos', desc: 'Fluxos intuitivos reduzem fricção e aumentam engajamento.' },
      { title: 'Vantagem Competitiva', desc: 'Produtos bem desenhados se destacam e são percebidos como mais confiáveis.' },
      { title: 'Equipe de Dev Ágil', desc: 'Especificações claras aceleram o desenvolvimento e reduzem bugs de interface.' },
    ],
  },
  forWho: {
    title: 'Para quem é indicado?',
    items: [
      'Empresas com MVPs que precisam evoluir a experiência do produto para crescer.',
      'Startups que desejam validar ideias com protótipos antes de investir em código.',
      'Times que têm dificuldade em converter visitantes em clientes por questões de interface.',
      'Negócios que querem manter uma identidade visual consistente em múltiplos canais digitais.',
      'Negócios que desejam lançar novos produtos ou canais digitais com qualidade profissional.',
    ],
  },
  cta: {
    title: 'Conte-nos sobre o que você precisa',
    desc: 'Obtenha uma consultoria técnica gratuita e descubra como o design certo pode transformar seus resultados.',
  },
  whyHire: {
    title: 'Por que contratar design na SoftVerse?',
    desc: 'Nosso diferencial está na combinação de visão estratégica com execução precisa.',
    items: [
      { value: '↑ ROI', title: 'Foco em Resultado', desc: 'Design orientado a métricas de negócio.' },
      { value: 'Full', title: 'Equipe Completa', desc: 'UX Researcher, UI Designer e Estrategista.' },
      { value: 'Dev+', title: 'Integração com Dev', desc: 'Design pronto para ser implementado.' },
      { value: 'Ágil', title: 'Entregas Rápidas', desc: 'Sprints de design com validação contínua.' },
    ],
  },
  process: {
    title: 'Como entregamos o Design UI/UX na SoftVerse',
    desc: 'Um processo estruturado que une rigor técnico com criatividade.',
    steps: [
      { title: 'Imersão e Diagnóstico', desc: 'Entendemos profundamente o negócio, usuários e contexto competitivo.' },
      { title: 'Arquitetura e Fluxo de Navegação (UX)', desc: 'Definimos a estrutura, fluxos e hierarquia da informação.' },
      { title: 'Criar Visual (UI)', desc: 'Desenvolvemos a identidade visual e componentes do Design System.' },
      { title: 'Validar e Handoff', desc: 'Testes de usabilidade, ajustes e entrega com especificações para dev.' },
    ],
  },
  closing: {
    title: 'Pronto para transformar sua interface em um design memorável?',
    desc: 'Fale com nosso time e descubra como o design certo pode impulsionar seus resultados.',
  },
};

export default function DesignUiUx() {
  return <ServicePageLayout service={SERVICE} />;
}