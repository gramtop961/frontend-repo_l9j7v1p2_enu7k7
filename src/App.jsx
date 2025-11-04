import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />

      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">Alyssya Rhamadina</a>
          <div className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white hover:bg-sky-700 sm:text-sm">
            Connect
          </a>
        </div>
      </nav>

      <About />
      <Experience />
      <Portfolio />

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Alyssya Rhamadina. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
