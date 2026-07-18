import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-terminal-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-terminal-green/60" />
            <span className="text-xs font-mono text-terminal-muted">
              ~/devops-portfolio
            </span>
          </div>

          <p className="text-[11px] font-mono text-terminal-muted flex items-center gap-1">
            built with <Heart className="w-3 h-3 text-terminal-red/60 inline" /> and yaml files
            <span className="text-terminal-border mx-1">|</span>
            {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-1">
            <span className="text-[10px] font-mono text-terminal-muted">
              v0.1.0
            </span>
            <span className="text-terminal-border mx-1">-</span>
            <span className="text-[10px] font-mono text-terminal-green">
              deploying...
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
