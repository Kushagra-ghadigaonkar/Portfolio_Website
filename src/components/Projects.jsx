import { ExternalLink, Github, GitBranch, Box, Cloud, Shield } from 'lucide-react';

const colorMap = {
  'terminal-amber': {
    border: 'border-terminal-amber/30',
    bg: 'bg-terminal-amber/10',
    text: 'text-terminal-amber',
  },
  'terminal-green': {
    border: 'border-terminal-green/30',
    bg: 'bg-terminal-green/10',
    text: 'text-terminal-green',
  },
};

const projects = [
  {
    title: 'K8s Cluster Automation',
    description:
      'Automated Kubernetes cluster provisioning on AWS using Terraform and Ansible. Includes Helm chart deployments and monitoring stack.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'Helm', 'Ansible'],
    icon: Box,
    status: 'In Progress',
    statusColor: 'terminal-amber',
    github: '#',
    demo: '#',
  },
  {
    title: 'CI/CD Pipeline Builder',
    description:
      'Multi-stage GitHub Actions pipeline with automated testing, container builds, and blue-green deployments to production.',
    tags: ['GitHub Actions', 'Docker', 'Bash', 'YAML'],
    icon: GitBranch,
    status: 'Completed',
    statusColor: 'terminal-green',
    github: '#',
    demo: '#',
  },
  {
    title: 'Cloud Infra Template',
    description:
      'Reusable Terraform modules for AWS VPC, ECS, and RDS provisioning with state management via S3 backend and DynamoDB locking.',
    tags: ['Terraform', 'AWS', 'IaC'],
    icon: Cloud,
    status: 'Completed',
    statusColor: 'terminal-green',
    github: '#',
    demo: null,
  },
  {
    title: 'Monitoring Dashboard',
    description:
      'Prometheus + Grafana observability stack with custom alerting rules, service discovery, and log aggregation via Loki.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Docker'],
    icon: Shield,
    status: 'In Progress',
    statusColor: 'terminal-amber',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-terminal-amber/40 to-transparent" />
          <h2 className="font-mono text-sm text-terminal-amber whitespace-nowrap">
            <span className="text-terminal-muted mr-2">04.</span>deployments
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-terminal-amber/40 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map(project => {
            const Icon = project.icon;
            const c = colorMap[project.statusColor];
            return (
              <div
                key={project.title}
                className="group glass rounded-lg overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-terminal-border bg-terminal-bg/30">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-terminal-muted group-hover:text-terminal-green transition-colors" />
                    <span className="font-mono text-xs text-terminal-muted">
                      {project.title.toLowerCase().replace(/ /g, '-')}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${c.border} ${c.bg} ${c.text}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-terminal-text font-semibold text-sm mb-2 group-hover:text-terminal-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-terminal-muted text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded border border-terminal-border text-terminal-muted bg-terminal-bg/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs font-mono text-terminal-muted hover:text-terminal-green transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>source</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1.5 text-xs font-mono text-terminal-muted hover:text-terminal-cyan transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
