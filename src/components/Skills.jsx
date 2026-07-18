import { useState } from 'react';

const categories = [
  {
    name: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes', 'Helm', 'Podman'],
  },
  {
    name: 'CI/CD & GitOps',
    items: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitLab CI'],
  },
  {
    name: 'Infrastructure as Code',
    items: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
  },
  {
    name: 'Cloud & Monitoring',
    items: ['AWS', 'Prometheus', 'Grafana', 'Linux'],
  },
  {
    name: 'Languages & Scripting',
    items: ['Bash', 'Python', 'YAML', 'Go'],
  },
  {
    name: 'Networking & Security',
    items: ['Nginx', 'DNS/SSL', 'Firewalls', 'Vault'],
  },
];

const techIcons = {
  Docker: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M13.98 11.08h2.12a2.2 2.2 0 0 0-2.12-1.98 2.2 2.2 0 0 0-2.14 1.98h2.14zM21.28 12.64c-.28-.17-1.1-.22-1.68-.04-.03-.54-.35-1.02-.9-1.44l-.2-.13-.13.2c-.26.4-.37 1.08-.04 1.52-.23.13-.68.32-1.28.3H2.32a.04.04 0 0 0-.04.04c-.07.77.06 1.56.38 2.27.36.78 1 1.42 1.87 1.87 1.04.53 2.36.8 3.93.8.76 0 1.47-.07 2.12-.2a8.28 8.28 0 0 0 2.48-1 7.07 7.07 0 0 0 1.72-1.56c.7-.82 1.12-1.73 1.42-2.48h.12c.77 0 1.24-.3 1.5-.56.17-.17.28-.35.35-.56l.05-.15-.15-.08zM5.64 11.5h1.68V9.9H5.64v1.6zm2.1 0h1.68V9.9H7.74v1.6zm2.1 0h1.68V9.9H9.84v1.6zm2.1 0h1.68V9.9h-1.68v1.6zm-4.2-1.86h1.68V8.04H7.74v1.6zm2.1 0h1.68V8.04H9.84v1.6zm2.1 0h1.68V8.04h-1.68v1.6zm0-1.86h1.68V6.18h-1.68v1.6z" />
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.54 3.64-6.54 3.64-6.54-3.64L12 4.18zM5 8.82l6 3.34V18.5l-6-3.34V8.82zm8 9.68v-6.34l6-3.34v6.34l-6 3.34z" />
    </svg>
  ),
  Helm: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm-4 4c.83 0 1.5.67 1.5 1.5S8.83 12 8 12s-1.5-.67-1.5-1.5S7.17 9 8 9zm8 0c.83 0 1.5.67 1.5 1.5S16.83 12 16 12s-1.5-.67-1.5-1.5S15.17 9 16 9zm-4 7c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z" />
    </svg>
  ),
  Podman: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.59c2.93 1.19 5 4.06 5 7.59 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  'GitHub Actions': (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  Jenkins: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-1 3v4h2V7h-2zm0 6v2h2v-2h-2z" />
    </svg>
  ),
  ArgoCD: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.2L18 7.4v9.2L12 19.8 6 16.6V7.4L12 4.2z" />
    </svg>
  ),
  'GitLab CI': (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4.85 2L1 13.2l11 8.8 11-8.8L19.15 2 15.3 13.2H8.7L4.85 2z" />
    </svg>
  ),
  Terraform: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M1 3h6v6H1V3zm8 0h6v6H9V3zm8 0h6v6h-6V3zM1 11h6v6H1v-6zm8 0h6v6H9v-6z" />
    </svg>
  ),
  Ansible: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.87c-.22.17-.48.26-.76.26-.36 0-.64-.14-.84-.42l-3.72-5.2-1.56 5.04c-.14.38-.42.58-.84.58-.24 0-.46-.08-.66-.24-.2-.16-.3-.36-.3-.6 0-.1.02-.2.06-.3l2.1-6.72c.12-.36.38-.56.78-.56.36 0 .62.18.78.54l3.66 5.16 1.5-4.92c.14-.38.4-.58.82-.58.24 0 .46.08.66.24.2.16.3.36.3.6 0 .1-.02.2-.06.3l-1.98 6.42c-.14.4-.4.62-.8.62z" />
    </svg>
  ),
  CloudFormation: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  ),
  Pulumi: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M6.76 8.3l-.62.62a.3.3 0 0 1-.42 0L2.73 5.93a.3.3 0 0 1 0-.42l.62-.62 3.41 3.41zm4.74-3.41l-.62.62a.3.3 0 0 1-.42 0L7.05 1.8a.3.3 0 0 1 0-.42l.62-.62 3.83 3.73zm1.24 1.24l3.42 3.41-.62.62a.3.3 0 0 1-.42 0l-3.41-3.41.62-.62a.3.3 0 0 1 .41 0zm5.66 5.66l.62-.62a.3.3 0 0 1 .42 0l3.41 3.41a.3.3 0 0 1 0 .42l-.62.62-3.83-3.83zM2 20h20v2H2v-2z" />
    </svg>
  ),
  Prometheus: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z" />
    </svg>
  ),
  Grafana: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-4-6h2v4h-2v-4zm-4-4h2v8h-2V9zm-4-2h2v10H7V7z" />
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 16h4v1h-4v-1zm4-2H10v-1h4v1z" />
    </svg>
  ),
  Bash: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2l4 4-4 4V8z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M9.58 2a.5.5 0 0 0-.5.5v2.5h5.84V2.5a.5.5 0 0 0-.5-.5H9.58zM4.92 4.5a.5.5 0 0 0-.5.5v3.5h5.84V5a.5.5 0 0 0-.5-.5H4.92zm8.34 0a.5.5 0 0 0-.5.5v3.5h5.84V5a.5.5 0 0 0-.5-.5h-4.84zM4.42 9.5a.5.5 0 0 0-.5.5v3.5h5.84V10a.5.5 0 0 0-.5-.5H4.42zm8.34 0a.5.5 0 0 0-.5.5v3.5h5.84V10a.5.5 0 0 0-.5-.5h-4.84zM4.42 14.5a.5.5 0 0 0-.5.5v3h5.84V15a.5.5 0 0 0-.5-.5H4.42zm8.34 0a.5.5 0 0 0-.5.5v3h5.84V15a.5.5 0 0 0-.5-.5h-4.84zM9.58 19v2.5a.5.5 0 0 0 .5.5h4.84a.5.5 0 0 0 .5-.5V19H9.58z" />
    </svg>
  ),
  YAML: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4 4l4 8-4 8h4l4-8-4-8H4zm8 0l4 8-4 8h4l4-8-4-8h-4z" />
    </svg>
  ),
  Go: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M3.2 8.4c-.1 0-.1-.1 0-.2l.4-.4c0-.1.1-.1.2-.1h6.8c.1 0 .1.1.1.2l-.3.4c0 .1-.1.1-.2.1H3.2zm-1.6 1.9c-.1 0-.1-.1 0-.2l.4-.4c0-.1.1-.1.2-.1h8.6c.1 0 .1.1.1.2l-.2.3c0 .1-.1.1-.2.1H1.6zm2.6 1.9c-.1 0-.1-.1 0-.2l.3-.3c0-.1.1-.1.2-.1h5.9c.1 0 .1.1.1.1l0 .3c0 .1-.1.1-.1.1H4.2zm11.4-3.8c-.9.2-1.5.4-2.3.6-.2.1-.2.1-.3-.1-.2-.2-.3-.4-.5-.5-.6-.5-1.3-.3-1.8.2-.6.6-.6 1.6.1 2.2.6.5 1.4.5 2-.1.1-.1.2-.3.3-.4v-.3h-2.2c-.2 0-.2-.1-.2-.2.1-.4.2-.8.4-1.2 0-.1.1-.2.3-.2h3.2c.1 0 .2.1.2.2v.5c-.1.5-.4 1-.8 1.5-.7.8-1.5 1.3-2.6 1.4-1 .1-1.8-.2-2.5-.9-.6-.6-.9-1.3-.9-2.2 0-1 .4-1.8 1.1-2.5.8-.8 1.8-1.2 2.9-1.3 1-.1 1.8.2 2.5.8.2.2.4.4.5.6 0 .2 0 .3-.2.3z" />
    </svg>
  ),
  Nginx: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2z" />
    </svg>
  ),
  'DNS/SSL': (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  ),
  Firewalls: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" />
    </svg>
  ),
  Vault: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  ),
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-terminal-cyan/40 to-transparent" />
          <h2 className="font-mono text-sm text-terminal-cyan whitespace-nowrap">
            <span className="text-terminal-muted mr-2">03.</span>skill_matrix
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-terminal-cyan/40 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div key={cat.name} className="glass rounded-lg overflow-hidden">
              {/* Category header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border bg-terminal-bg/40">
                <div className="w-2 h-2 rounded-full bg-terminal-cyan/60" />
                <span className="text-[11px] font-mono text-terminal-muted truncate">
                  {cat.name.toLowerCase().replace(/ & /g, '/').replace(/ /g, '-')}
                </span>
                <span className="ml-auto text-[10px] font-mono text-terminal-muted/50">
                  [{cat.items.length}]
                </span>
              </div>

              {/* Skill logos grid */}
              <div className="p-4 grid grid-cols-2 gap-3">
                {cat.items.map(skill => (
                  <div
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-300 cursor-default ${
                      hoveredSkill === skill
                        ? 'border-terminal-cyan/40 bg-terminal-cyan/5 glow-cyan'
                        : 'border-terminal-border/50 bg-terminal-bg/30 hover:border-terminal-cyan/20'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      hoveredSkill === skill ? 'text-terminal-cyan' : 'text-terminal-muted'
                    }`}>
                      {techIcons[skill] || (
                        <div className="w-8 h-8 rounded-md bg-terminal-border/50 flex items-center justify-center text-[10px] font-mono text-terminal-muted">
                          {skill.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className={`text-[10px] font-mono text-center transition-colors duration-300 ${
                      hoveredSkill === skill ? 'text-terminal-text' : 'text-terminal-muted'
                    }`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal hint */}
        <div className="mt-8 text-center">
          <span className="text-[11px] font-mono text-terminal-muted/50">
            <span className="text-terminal-cyan/50">$</span> cat skills.yaml | grep -i "proficient"
          </span>
        </div>
      </div>
    </section>
  );
}
