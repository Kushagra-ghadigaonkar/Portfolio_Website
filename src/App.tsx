import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileDashboard from './components/MobileDashboard';

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <MobileDashboard />
    </div>
  );
}

export default App;
