import { useEffect, useRef } from 'react';
import { ArrowRight, Code2, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Animated dots grid
    const dots = [];
    const cols = 20;
    const rows = 12;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: (i / (cols - 1)) * canvas.width,
          y: (j / (rows - 1)) * canvas.height,
          ox: (i / (cols - 1)) * canvas.width,
          oy: (j / (rows - 1)) * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (Math.abs(d.x - d.ox) > 12) d.vx *= -1;
        if (Math.abs(d.y - d.oy) > 8) d.vy *= -1;
      });

      // Lines between close dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = canvas.width / cols * 1.8;
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(41,141,113,${(1 - dist / maxDist) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Dots
      dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(41,141,113,0.35)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-sv-primary overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sv-primary via-sv-primary/95 to-[#1B1E2E]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-sv-secondary/5 blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-sv-tertiary/10 blur-3xl -translate-x-1/2" />

      <div className="relative container-sv pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-sv-secondary/15 border border-sv-secondary/30 rounded-full">
            <Sparkles size={14} className="text-sv-secondary" />
            <span className="text-sv-secondary text-xs font-semibold font-mono tracking-widest uppercase">
              Software House
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Transformamos{' '}
            <span className="text-sv-secondary">ideias</span> em
            <br className="hidden sm:block" /> soluções digitais
          </h1>

          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            A SoftVerse é um ecossistema criativo onde tecnologia, design e inovação
            se unem para construir produtos digitais de alto impacto. Seu sucesso é
            o nosso código.
          </p>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-sv-secondary text-white font-semibold rounded-md hover:bg-[#218a67] transition-all duration-200 group"
            >
              Iniciar projeto
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white font-semibold rounded-md hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              Nossos serviços
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
            {[
              { value: '50+', label: 'Projetos entregues' },
              { value: '100%', label: 'Comprometimento' },
              { value: '4', label: 'Áreas de atuação' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col gap-6">
        {[Code2, Cpu].map((Icon, i) => (
          <div
            key={i}
            className="w-14 h-14 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          >
            <Icon size={22} className="text-sv-secondary" />
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white animate-pulse" />
        <span className="text-white text-xs font-mono tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}