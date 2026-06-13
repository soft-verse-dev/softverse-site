import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_URL = '/logo.png';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sv-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-sv flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" onClick={() => handleNav('#inicio')} className="flex items-center">
          <img
            src={LOGO_URL}
            alt="SoftVerse"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 hover:text-sv-secondary relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sv-secondary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleNav('#contato')}
            className="ml-4 px-5 py-2.5 bg-sv-secondary text-white text-sm font-semibold rounded-md hover:bg-[#218a67] transition-colors duration-200"
          >
            Fale Conosco
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-sv-primary border-t border-white/10">
          <nav className="container-sv py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-3 px-2 text-white/80 hover:text-white font-medium border-b border-white/10 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contato')}
              className="mt-3 w-full py-3 bg-sv-secondary text-white font-semibold rounded-md"
            >
              Fale Conosco
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}