import { BookOpen, Code2, Server, Rocket, GraduationCap } from 'lucide-react';

const colorMap = {
  'terminal-green': {
    border: 'border-terminal-green',
    hoverBg: 'group-hover:bg-terminal-green',
    iconBg: 'bg-terminal-green/10',
    iconText: 'text-terminal-green',
  },
  'terminal-cyan': {
    border: 'border-terminal-cyan',
    hoverBg: 'group-hover:bg-terminal-cyan',
    iconBg: 'bg-terminal-cyan/10',
    iconText: 'text-terminal-cyan',
  },
  'terminal-amber': {
    border: 'border-terminal-amber',
    hoverBg: 'group-hover:bg-terminal-amber',
    iconBg: 'bg-terminal-amber/10',
    iconText: 'text-terminal-amber',
  },
  'terminal-muted': {
    border: 'border-terminal-muted',
    hoverBg: 'group-hover:bg-terminal-muted',
    iconBg: 'bg-terminal-muted/10',
    iconText: 'text-terminal-muted',
  },
};

const milestones = [
  {
    date: '2024 - Present',
    title: 'DevOps Deep Dive',
    description:
      'Immersing into Kubernetes, Terraform, and cloud-native ecosystems. Building homelab clusters and automating everything.',
    icon: Rocket,
    color: 'terminal-green',
  },
  {
    date: '2023 - 2024',
    title: 'Containerization & CI/CD',
    description:
      'Learned Docker, built multi-stage builds, and set up GitHub Actions pipelines for automated testing and deployment.',
    icon: Server,
    color: 'terminal-cyan',
  },
  {
    date: '2022 - 2023',
    title: 'Linux & Scripting',
    description:
      'Mastered Linux administration, wrote Bash scripts for automation, and explored networking fundamentals.',
    icon: Code2,
    color: 'terminal-amber',
  },
  {
    date: '2021 - 2022',
    title: 'Programming Foundations',
    description:
      'Started with Python and web development. Built small projects and discovered the joy of solving problems through code.',
    icon: BookOpen,
    color: 'terminal-cyan',
  },
  {
    date: 'Starting Point',
    title: 'The Beginning',
    description:
      'Curiosity sparked. Started exploring technology, reading docs, and wondering how the internet actually works.',
    icon: GraduationCap,
    color: 'terminal-muted',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-terminal-green/40 to-transparent" />
          <h2 className="font-mono text-sm text-terminal-green whitespace-nowrap">
            <span className="text-terminal-muted mr-2">05.</span>git_log --oneline
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-terminal-green/40 to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green/40 via-terminal-cyan/40 to-terminal-border" />

          <div className="space-y-8">
            {milestones.map((ms, i) => {
              const Icon = ms.icon;
              const c = colorMap[ms.color];
              return (
                <div key={ms.title} className="relative pl-12 sm:pl-16 group">
                  <div
                    className={`absolute top-1 w-3 h-3 rounded-full border-2 ${c.border} bg-terminal-bg ${c.hoverBg} transition-all duration-300`}
                    style={{ left: 'calc(1rem - 6px)', transform: 'translateX(0.5px)' }}
                  />

                  <div className="glass rounded-lg p-4 sm:p-5 group-hover:glow-green transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                      <div
                        className={`p-2 rounded-md ${c.iconBg} ${c.iconText} shrink-0 self-start`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                          <h3 className="text-terminal-text text-sm font-semibold">
                            {ms.title}
                          </h3>
                          <span className="text-[10px] font-mono text-terminal-muted bg-terminal-bg/60 px-2 py-0.5 rounded self-start">
                            {ms.date}
                          </span>
                        </div>
                        <p className="text-terminal-muted text-xs leading-relaxed">
                          {ms.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-terminal-border/50">
                      <span className="text-[10px] font-mono text-terminal-green/50">
                        commit {String(i).padStart(2, '0')}a3f{String.fromCharCode(97 + i)}8d2
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
