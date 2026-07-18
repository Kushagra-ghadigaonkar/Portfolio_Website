import { useState, useEffect } from 'react';
import {
  Home,
  User,
  Cpu,
  FolderGit2,
  GitBranch,
  Mail,
  Download,
  X,
  ChevronRight,
  Activity,
  Wifi,
  Battery,
  Signal,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home, color: 'text-terminal-green' },
  { name: 'About', href: '#about', icon: User, color: 'text-terminal-cyan' },
  { name: 'Skills', href: '#skills', icon: Cpu, color: 'text-terminal-amber' },
  { name: 'Projects', href: '#projects', icon: FolderGit2, color: 'text-terminal-green' },
  { name: 'Journey', href: '#journey', icon: GitBranch, color: 'text-terminal-cyan' },
  { name: 'Contact', href: '#contact', icon: Mail, color: 'text-terminal-amber' },
];

export default function MobileDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Active section
      const sections = navItems.map(l => l.href.slice(1));
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

  // Only show on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!isMobile) return null;

  const handleNav = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-terminal-green/20 border border-terminal-green/40 text-terminal-green rotate-0'
            : 'bg-terminal-surface/80 border border-terminal-border text-terminal-text hover:border-terminal-green/30 hover:text-terminal-green'
        } backdrop-blur-lg shadow-lg`}
        aria-label="Toggle dashboard"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
      </button>

      {/* Mini status bar - always visible on mobile */}
      <div className="fixed bottom-6 left-4 z-40 glass rounded-lg px-3 py-2 flex items-center gap-3 text-[9px] font-mono">
        <div className="flex items-center gap-1">
          <Signal className="w-3 h-3 text-terminal-green" />
          <span className="text-terminal-green">online</span>
        </div>
        <div className="w-px h-3 bg-terminal-border" />
        <div className="flex items-center gap-1">
          <Wifi className="w-3 h-3 text-terminal-cyan" />
          <span className="text-terminal-muted">{scrollPercent.toFixed(0)}%</span>
        </div>
        <div className="w-px h-3 bg-terminal-border" />
        <div className="flex items-center gap-1">
          <Battery className="w-3 h-3 text-terminal-amber" />
          <span className="text-terminal-muted">{activeSection}</span>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-terminal-bg/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Dashboard panel */}
      <div
        className={`fixed bottom-20 right-4 z-50 w-64 glass rounded-xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-terminal-border bg-terminal-bg/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-terminal-green">
              system_dashboard
            </span>
            <span className="text-[9px] font-mono text-terminal-muted">
              v0.1.0
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] font-mono text-terminal-muted">scroll_progress</span>
              <span className="text-[8px] font-mono text-terminal-cyan">{scrollPercent.toFixed(0)}%</span>
            </div>
            <div className="h-1 bg-terminal-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-terminal-green to-terminal-cyan rounded-full transition-all duration-200"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Navigation items */}
        <div className="p-2 space-y-0.5">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.name}
                onClick={() => handleNav(item.href)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-terminal-green/10 border border-terminal-green/20'
                    : 'hover:bg-terminal-surface/60 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-terminal-muted'}`} />
                <span className={`text-xs font-mono ${isActive ? 'text-terminal-text' : 'text-terminal-muted'}`}>
                  {item.name.toLowerCase()}
                </span>
                {isActive && (
                  <ChevronRight className="w-3 h-3 text-terminal-green ml-auto" />
                )}
              </button>
            );
          })}
        </div>

        {/* Resume download */}
        <div className="px-2 pb-2">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-terminal-green/20 bg-terminal-green/5 hover:bg-terminal-green/10 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-terminal-green" />
            <span className="text-xs font-mono text-terminal-green">resume.pdf</span>
          </a>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-terminal-border/50 bg-terminal-bg/30">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-mono text-terminal-muted/50">
              uptime: {Math.floor(scrollPercent)}s
            </span>
            <span className="text-[8px] font-mono text-terminal-green/50">
              connected
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
