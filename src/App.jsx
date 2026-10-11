import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Lucide from 'lucide-react';

// --- DATA ---
const PROFILE = {
  name: "Kushagra Ghadigaonkar",
  role: "Junior DevOps Engineer",
  status: "Available for New Opportunities",
  about: "Junior DevOps Engineer with hands-on experience automating and deploying 3-tier applications on AWS using Kubernetes, constructing DevSecOps CI/CD pipelines, provisioning AWS infrastructure with Terraform, and establishing end-to-end observability with Prometheus, Grafana, and Loki.",
  email: "kushagraghadigaonkar926@gmail.com",
  github: "https://github.com/Kushagra-ghadigaonkar",
  linkedin: "https://www.linkedin.com/in/kushagraghadi",
  resume: "https://github.com/Kushagra-ghadigaonkar/Portfolio_Website/blob/main/public/My-Resume.pdf",

};

const SKILLS = [
  {
    category: "Cloud & Infrastructure",
    tools: ["AWS", "EC2", "EBS", "IAM", "S3", "ALB", "NLB", "EKS"],
    icon: "Code",
    color: "text-blue-500"
  },
  {
    category: "IaC & Automation",
    tools: ["Terraform", "Ansible"],
    icon: "Layout",
    color: "text-cyan-500"
  },
  {
    category: "Containers & Orchestration",
    tools: ["Kubernetes", "Docker"],
    icon: "Server",
    color: "text-green-500"
  },
  {
    category: "Operating Systems & Networking",
    tools: ["Linux (Ubuntu)", "Bash Scripting", "Networking", "OSI Model", "Firewalls", "Subnetting & CIDR"],
    icon: "Cloud",
    color: "text-orange-500"
  },
  {
    category: "CI/CD & GitOps",
    tools: ["GitHub Actions", "Git", "ArgoCD", "DevSecOps","Jenkins"],
    icon: "Database",
    color: "text-indigo-500"
  }
];

const PROJECTS = [
  {
    title: "TaskPilot (Task Management Website)",
    description: "Deployed a 3-tier web application from local development to production using optimized Docker images and Kubernetes on AWS. Built a DevSecOps CI pipeline with GitHub Actions, Trivy, and SonarQube; configured HPA, readiness and liveness probes, ArgoCD GitOps, observability, Slack alerting, Terraform, Ansible, and Envoy Gateway with an AWS NLB.",
    impact: "Automated application testing and container security, enabled autoscaling and recovery of unhealthy workloads, and centralized metrics, logs, traces, and Slack-based alerting.",
    tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Trivy", "SonarQube", "ArgoCD", "Prometheus", "Grafana", "Loki", "OpenTelemetry", "Terraform", "Ansible", "Envoy Gateway"],
    link: "https://github.com/Kushagra-ghadigaonkar/TaskPilot",
    icon: "Cloud",
    iconColor: "text-blue-500"
  },
  {
    title: "FlowForm (Form Making Website)",
    description: "Containerized a 3-tier web application with Docker Compose and configured isolated service networking. Built a GitHub Actions CI/CD pipeline using a GitHub self-hosted runner for automated testing and Docker image deployment to Kubernetes.",
    impact: "Implemented Kubernetes autoscaling for availability and StatefulSets to keep the database deployment persistent.",
    tags: ["Docker Compose", "GitHub Actions", "Self-hosted Runner", "Kubernetes", "Autoscaling", "StatefulSets"],
    link: "https://github.com/Kushagra-ghadigaonkar/FlowForm",
    icon: "Activity",
    iconColor: "text-green-500"
  }
];

const CERTIFICATIONS = [
  {
    name: "Certified DevOps Engineer Associate",
    issuer: "TrainWithShubham",
    date: "Sep 2026",
    link: "https://credentials.certdirectory.io/verify/CRD-ANFMJQZM",
    icon: "Award"
  },
  {
    name: "KodeKloud Engineer - 100 Days of DevOps",
    issuer: "KodeCloud LLC",
    date: "Oct 2026",
    link: "https://engineer.kodekloud.com/certificate-verification/fa11ef72-8b11-4b08-a834-703e46edbf8c",
    icon: "Award"
  }
];

const EDUCATION = [
  {
    degree: "B.Sc. IT",
    institution: "PTVA’s Sathaye College, Mumbai",
    year: "2023–2026",
    cgpa: "8.14",
    details: "Developed a College Event Management Website and Dockerized the application in a single Docker Compose file; led a departmental event for 500+ participants."
  },
  {
    degree: "Commerce",
    institution: "Yojna Jr College, Mumbai",
    year: "2021–2023",
    cgpa: "72 %",
    details: ""
  }
];

// Helper to render Lucide icons safely
const Icon = ({ name, className = "" }) => {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.02 3.52 1.53.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.2h2.97v9.54ZM6.45 7.9a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.29 10.84h-2.97V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.46V9.2h2.85v1.3h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.24Z" />
      </svg>
    );
  }
  const LucideIcon = Lucide[name];
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }
  return <LucideIcon className={className} />;
};

// --- COMPONENTS ---

const SectionTitle = ({ children }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {children}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: 60 }}
      viewport={{ once: true }}
      className="h-1 bg-emerald-400 rounded-full"
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-white flex items-center gap-2"
        >
          <Icon name="Terminal" className="w-6 h-6 text-emerald-400" />
          <span>{PROFILE.name.split(' ')[0]}.dev</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PROFILE.resume}
            className="bg-emerald-400 text-obsidian-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-emerald-300 transition-all"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <Icon name="X" /> : <Icon name="Menu" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian-800 border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-300 hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={PROFILE.resume}
                className="bg-emerald-400 text-obsidian-900 px-4 py-2 rounded-full text-center font-bold"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="about" className="min-h-screen flex items-center pt-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          {PROFILE.status}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Infrastructure <span className="text-emerald-400">Engineering.</span><br />
          Seamless <span className="text-indigo-500">Delivery.</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
          {PROFILE.about}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-emerald-400 text-obsidian-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-300 transition-all flex items-center gap-2"
          >
            View Work <Icon name="ChevronRight" className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-4 ml-2">
            <a href={PROFILE.github} className="p-3 rounded-full bg-obsidian-800 text-gray-400 hover:text-white transition-all border border-gray-800 hover:border-emerald-400">
              <Icon name="github" className="w-5 h-5" />
            </a>
            <a href={PROFILE.linkedin} className="p-3 rounded-full bg-obsidian-800 text-gray-400 hover:text-white transition-all border border-gray-800 hover:border-emerald-400">
              <Icon name="linkedin" className="w-5 h-5" />
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`} className="p-3 rounded-full bg-obsidian-800 text-gray-400 hover:text-white transition-all border border-gray-800 hover:border-emerald-400">
              <Icon name="Mail" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative hidden md:block"
      >
        <div className="absolute -inset-4 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="relative aspect-square bg-obsidian-800 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden p-8">
          <div className="absolute top-0 left-0 right-0 bg-obsidian-700 p-3 flex items-center gap-2 border-b border-gray-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-xs text-gray-400 font-mono">bash — kushagra@devops-portfolio</div>
          </div>
          <div className="mt-12 font-mono text-sm space-y-2">
            <div className="flex gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-gray-300">whoami</span>
              <span className="text-white">{PROFILE.name}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-gray-300">cat skills.yaml</span>
            </div>
            <div className="text-indigo-400 pl-6">
              - Cloud: [AWS, EC2, EBS, IAM, S3, ALB, NLB, EKS]<br />
              - K8s: [Kubernetes, EKS]<br />
              - IaC: [Terraform, Ansible]<br />
              - CI/CD: [GitHub Actions, Git, ArgoCD, DevSecOps]
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-gray-300">Graduation</span>
              <span className="text-emerald-400">BSCIT</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-gray-300">Projects</span>
              <span className="text-emerald-400">TaskPilot , Flowform</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-gray-300">Ping</span>
              <span className="text-emerald-400">kusharaghadigaonkar926@gmail.com</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Technical Stack</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-obsidian-800 border border-gray-800 hover:border-emerald-400/50 transition-all group"
          >
            <div className={`mb-4 p-3 rounded-lg bg-obsidian-900 w-fit ${skill.color}`}>
              <Icon name={skill.icon} className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map(tool => (
                <span key={tool} className="px-3 py-1 rounded-full bg-obsidian-900 text-gray-400 text-xs border border-gray-800 group-hover:border-emerald-400/30 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-obsidian-900/50">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Featured Work</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 rounded-3xl bg-obsidian-800 border border-gray-800 hover:border-emerald-400/50 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <Icon name={project.icon} className={`w-6 h-6 ${project.iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

            <div className="mb-6 p-4 rounded-xl bg-obsidian-900 border border-emerald-400/20">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-1">
                <Icon name="Activity" className="w-4 h-4" />
                Impact
              </div>
              <p className="text-white text-sm">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-obsidian-700 text-gray-300 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors group/link"
            >
              View Project <Icon name="ExternalLink" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Certifications</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-obsidian-800 border border-gray-800 hover:border-emerald-400/50 transition-all group"
          >
            <div className="mb-4 p-3 rounded-lg bg-obsidian-900 w-fit text-emerald-400">
              <Icon name={cert.icon} className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
              <a href={cert.link} className="text-emerald-400 hover:text-emerald-300 transition-colors">
                <Icon name="ExternalLink" className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="py-24 px-6 bg-obsidian-900/50">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-8">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8 border-l-2 border-gray-800 hover:border-emerald-400 transition-colors group"
          >
            <div className="absolute-left-[9px] top-0 w-4 h-4 rounded-full bg-obsidian-900 border-2 border-gray-800 group-hover:border-emerald-400 transition-colors"></div>
            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <span className="text-sm font-mono text-gray-500">{edu.year}</span>
            </div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-emerald-400 font-medium">{edu.institution}</p>
              {edu.cgpa && (
                <span className="text-sm font-mono text-gray-500">CGPA: {edu.cgpa}</span>
              )}
            </div>
            <p className="text-gray-400 leading-relaxed">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            I'm always open to discussing new projects, cloud architecture, or the latest in Kubernetes.
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-obsidian-800 border border-gray-800">
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                <Icon name="Mail" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                <p className="text-white font-medium">{PROFILE.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-obsidian-800 border border-gray-800">
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400">
                <Icon name="Cloud" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                <p className="text-white font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
              <input type="text" placeholder="Your Name" className="bg-obsidian-800 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
              <input type="email" placeholder="your@email.com" className="bg-obsidian-800 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
            <textarea rows="4" placeholder="How can I help you?" className="bg-obsidian-800 border border-gray-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all"></textarea>
          </div>
          <button className="w-full py-4 rounded-xl bg-emerald-400 text-obsidian-900 font-bold hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/20"><a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Message
            </a>
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-gray-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2 text-gray-400 font-bold">
        <Icon name="Terminal" className="w-5 h-5 text-emerald-400" />
        <span>{PROFILE.name.split(' ')[0]}.dev</span>
      </div>
      <div className="flex gap-6">
        <a href={PROFILE.github} className="text-gray-400 hover:text-white transition-colors"><Icon name="github" className="w-5 h-5" /></a>
        <a href={PROFILE.linkedin} className="text-gray-400 hover:text-white transition-colors"><Icon name="linkedin" className="w-5 h-5" /></a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`} className="text-gray-400 hover:text-white transition-colors"><Icon name="Mail" className="w-5 h-5" /></a>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative bg-obsidian-900 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
