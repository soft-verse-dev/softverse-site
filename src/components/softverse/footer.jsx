import { Instagram, Youtube, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a1dc3f9a0e9f9a443a65228/1977ff950_logo_white_transparent.png';

const SITEMAP = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Body Shop',
  'Desenvolvimento Sob Demanda',
  'Design UI/UX',
  'Inteligência Artificial',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-sv-dark border-t border-white/5">
      <div className="container-sv py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={LOGO_URL} alt="SoftVerse" className="h-9 w-auto mb-4" />
            <p className="text-white/45 text-sm leading-relaxed max-w-48">
              Transformamos ideias em soluções digitais de alto impacto.
            </p>
            {/* Social */}
            <div className="flex gap-2.5 mt-5">
              <a
                href="https://www.instagram.com/softverse.softwarehouse/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sv-secondary/25 transition-colors"
              >
                <Instagram size={15} className="text-white/60" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCA2nSUb8zXmhWXA4sowJw9A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sv-secondary/25 transition-colors"
              >
                <Youtube size={15} className="text-white/60" />
              </a>
              <a
                href="mailto:contato@softverse.dev.br"
                aria-label="E-mail"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sv-secondary/25 transition-colors"
              >
                <Mail size={15} className="text-white/60" />
              </a>
              <a
                href="https://wa.me/5511943278584"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sv-secondary/25 transition-colors"
              >
                <MessageCircle size={15} className="text-white/60" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {SITEMAP.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/45 hover:text-sv-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#servicos')}
                    className="text-white/45 hover:text-sv-secondary text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Newsletter</h4>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Receba novidades sobre tecnologia e inovação.
            </p>
            {subscribed ? (
              <p className="text-sv-secondary text-sm font-medium">✓ Inscrição confirmada!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="flex-1 h-9 px-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-white/25 text-xs focus:outline-none focus:border-sv-secondary transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="h-9 w-9 bg-sv-secondary rounded-md flex items-center justify-center hover:bg-[#218a67] transition-colors flex-shrink-0"
                  aria-label="Inscrever"
                >
                  <ArrowRight size={14} className="text-white" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} SoftVerse. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-xs font-mono">
            contato@softverse.dev.br
          </p>
        </div>
      </div>
    </footer>
  );
}