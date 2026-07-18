import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import TerminalTyping from './TerminalTyping';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const terminalLines = [
  { prompt: '~$', text: 'whoami' },
  { prompt: '~$', text: 'Aspiring DevOps Engineer' },
  { prompt: '~$', text: 'Building infrastructure as code' },
  { prompt: '~$', text: 'Automating everything...' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg scanline overflow-hidden"
    >
      {/* Decorative nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-terminal-green/30 rounded-full node-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-terminal-cyan/30 rounded-full node-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-terminal-amber/30 rounded-full node-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-terminal-green/20 rounded-full node-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-terminal-cyan/20 rounded-full node-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Pipeline SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="5%" y1="25%" x2="25%" y2="25%" className="pipeline-line" stroke="#00e676" strokeWidth="1" />
          <line x1="25%" y1="25%" x2="25%" y2="60%" className="pipeline-line" stroke="#00e676" strokeWidth="1" style={{ animationDelay: '0.5s' }} />
          <line x1="75%" y1="30%" x2="95%" y2="30%" className="pipeline-line" stroke="#00bcd4" strokeWidth="1" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="30%" x2="75%" y2="70%" className="pipeline-line" stroke="#00bcd4" strokeWidth="1" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          {/* Photo section */}
          <div className="shrink-0 order-1 lg:order-1">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-terminal-green/20 to-terminal-cyan/20 rounded-full blur-xl group-hover:from-terminal-green/30 group-hover:to-terminal-cyan/30 transition-all duration-500" />

              {/* Photo container */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-terminal-green/40 glow-green">
                <img
                  src="../../assets/MyPhoto.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay scanline on photo */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-terminal-bg/40" />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex items-center gap-1.5 bg-terminal-bg/80 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 border border-terminal-border">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-terminal-green rounded-full animate-pulse" />
                <span className="text-[8px] sm:text-[10px] font-mono text-terminal-green">online</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-full lg:max-w-none lg:pl-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-mono text-terminal-cyan border border-terminal-cyan/30 rounded-full bg-terminal-cyan/5 mb-4">
                &lt;devops-enthusiast /&gt;
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              <span className="text-terminal-text">Hi, I'm </span>
              <span className="text-gradient"> Kushagra </span>
            </h1>

            <p className="text-terminal-muted text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
              Crafting resilient infrastructure & automating deployments.
              Currently deep-diving into the world of DevOps & Cloud Native.
            </p>

            {/* Terminal window */}
            <div className="glass rounded-lg overflow-hidden max-w-lg mx-auto lg:mx-0 glow-green">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-terminal-border bg-terminal-bg/40">
                <div className="w-3 h-3 rounded-full bg-terminal-red/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
                <span className="ml-2 text-xs font-mono text-terminal-muted">terminal</span>
              </div>
              <div className="p-4 bg-terminal-bg/60 min-h-[100px]">
                <TerminalTyping lines={terminalLines} speed={50} />
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2.5 rounded-lg border border-terminal-border bg-terminal-surface/40 text-terminal-muted hover:text-terminal-green hover:border-terminal-green/40 hover-glow transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-terminal-muted hover:text-terminal-green transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
