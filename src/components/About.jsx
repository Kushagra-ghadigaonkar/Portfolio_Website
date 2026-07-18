import { Server, Cloud, GitBranch, Cpu, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: 'Infrastructure as Code',
    desc: 'Terraform, Ansible, Pulumi — defining infra the way it should be.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    desc: 'AWS, Docker, Kubernetes — building scalable, resilient systems.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    desc: 'GitHub Actions, Jenkins, ArgoCD — automating the delivery flow.',
  },
  {
    icon: Cpu,
    title: 'Monitoring & Observability',
    desc: 'Prometheus, Grafana, ELK — knowing before things break.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-terminal-green/40 to-transparent" />
          <h2 className="font-mono text-sm text-terminal-green whitespace-nowrap">
            <span className="text-terminal-muted mr-2">02.</span>about_me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-terminal-green/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-terminal-text text-base sm:text-lg leading-relaxed">
              I'm a passionate learner currently diving deep into{' '}
              <span className="text-terminal-green font-medium">DevOps and Cloud Engineering</span>.
              My journey started with software development, but I quickly realized that the real
              magic happens when you bridge the gap between code and infrastructure.
            </p>
            <p className="text-terminal-muted text-sm sm:text-base leading-relaxed">
              Right now, I'm focused on mastering container orchestration, CI/CD automation,
              and cloud architecture patterns. I believe in the philosophy of "automate everything"
              and I'm constantly experimenting with new tools and techniques to build
              more resilient, scalable systems.
            </p>
            <p className="text-terminal-muted text-sm sm:text-base leading-relaxed">
              When I'm not writing YAML files or debugging pipelines, you'll find me
              reading about SRE practices, contributing to open-source projects,
              or setting up homelab experiments to test new deployment strategies.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-terminal-green font-mono text-sm">{'/* '}</span>
              <span className="text-terminal-cyan font-mono text-sm">
                currently learning: Kubernetes, Terraform, AWS
              </span>
              <span className="text-terminal-green font-mono text-sm">{' */'}</span>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group glass rounded-lg p-4 hover-glow transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-terminal-green/10 text-terminal-green group-hover:bg-terminal-green/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-terminal-text text-sm font-medium mb-1 flex items-center gap-1">
                      {title}
                      <ArrowRight className="w-3 h-3 text-terminal-green opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-terminal-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
