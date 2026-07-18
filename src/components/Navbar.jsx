import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-terminal-green/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-terminal-green group-hover:animate-pulse" />
            <span className="font-mono text-terminal-green font-semibold text-sm">
              ~/devops-portfolio
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded text-xs font-mono transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-terminal-green bg-terminal-green/10'
                    : 'text-terminal-muted hover:text-terminal-text hover:bg-terminal-surface/40'
                }`}
              >
                <span className="text-terminal-green mr-1">$</span>
                {link.name.toLowerCase()}
              </a>
            ))}

            {/* Resume download button */}
            <a
              href="/resume.pdf"
              download
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-terminal-green/30 text-terminal-green bg-terminal-green/5 hover:bg-terminal-green/15 hover:border-terminal-green/50 hover-glow transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              <span>resume.pdf</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-terminal-text p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-terminal-border px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded text-xs font-mono transition-all ${
                activeSection === link.href.slice(1)
                  ? 'text-terminal-green bg-terminal-green/10'
                  : 'text-terminal-muted hover:text-terminal-text'
              }`}
            >
              <span className="text-terminal-green mr-1">$</span>
              {link.name.toLowerCase()}
            </a>
          ))}

          {/* Resume download in mobile menu */}
          <a
            href="/resume.pdf"
            download
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-1.5 px-3 py-2 rounded text-xs font-mono text-terminal-green border border-terminal-green/30 bg-terminal-green/5 mt-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>resume.pdf</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
