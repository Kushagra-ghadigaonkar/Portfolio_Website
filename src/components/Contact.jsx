import { useState } from 'react';
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-terminal-cyan/40 to-transparent" />
          <h2 className="font-mono text-sm text-terminal-cyan whitespace-nowrap">
            <span className="text-terminal-muted mr-2">06.</span>connect.sh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-terminal-cyan/40 to-transparent" />
        </div>

        <div className="text-center mb-10">
          <p className="text-terminal-text text-lg sm:text-xl font-medium mb-2">
            Let's build something together
          </p>
          <p className="text-terminal-muted text-sm max-w-md mx-auto">
            Whether it's a DevOps project, an open-source contribution, or just a chat about
            infrastructure — I'm always open to connecting.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Info cards */}
          <div className="md:col-span-2 space-y-4">
            <div className="glass rounded-lg p-4 hover-glow transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-terminal-green/10 text-terminal-green">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-terminal-muted mb-0.5">email</p>
                  <p className="text-xs text-terminal-text">hello@yourdomain.com</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-4 hover-glow transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-terminal-cyan/10 text-terminal-cyan">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-terminal-muted mb-0.5">location</p>
                  <p className="text-xs text-terminal-text">Your City, Country</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-4 hover-glow transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-terminal-amber/10 text-terminal-amber">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-terminal-muted mb-0.5">response_time</p>
                  <p className="text-xs text-terminal-text">~24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 border-b border-terminal-border bg-terminal-bg/40 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terminal-green/60" />
                <span className="text-[11px] font-mono text-terminal-muted">new_message.sh</span>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-[10px] font-mono text-terminal-muted mb-1">
                    <span className="text-terminal-green">$</span> name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                    className="w-full px-3 py-2 text-xs font-mono bg-terminal-bg/60 border border-terminal-border rounded text-terminal-text placeholder-terminal-muted/50 focus:border-terminal-green/50 focus:outline-none focus:ring-1 focus:ring-terminal-green/20 transition-colors"
                    placeholder="your_name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-terminal-muted mb-1">
                    <span className="text-terminal-green">$</span> email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    required
                    className="w-full px-3 py-2 text-xs font-mono bg-terminal-bg/60 border border-terminal-border rounded text-terminal-text placeholder-terminal-muted/50 focus:border-terminal-green/50 focus:outline-none focus:ring-1 focus:ring-terminal-green/20 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-terminal-muted mb-1">
                    <span className="text-terminal-green">$</span> message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-xs font-mono bg-terminal-bg/60 border border-terminal-border rounded text-terminal-text placeholder-terminal-muted/50 focus:border-terminal-green/50 focus:outline-none focus:ring-1 focus:ring-terminal-green/20 transition-colors resize-none"
                    placeholder="tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green text-xs font-mono hover:bg-terminal-green/20 hover:border-terminal-green/50 hover-glow transition-all duration-300"
                >
                  {submitted ? (
                    <>
                      <span className="text-terminal-green">Message sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>./send_message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
