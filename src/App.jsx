import Hero from './components/Hero'
import Overview from './components/Overview'
import TechStack from './components/TechStack'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Challenges from './components/Challenges'
import Metrics from './components/Metrics'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navegación fija */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-sm border-b border-dark-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-white font-semibold">
              RS E-Commerce <span className="text-primary-500">Portfolio</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-dark-400 hover:text-white transition-colors text-sm">Descripción</a>
              <a href="#tech-stack" className="text-dark-400 hover:text-white transition-colors text-sm">Stack</a>
              <a href="#features" className="text-dark-400 hover:text-white transition-colors text-sm">Funcionalidades</a>
              <a href="#arquitectura" className="text-dark-400 hover:text-white transition-colors text-sm">Arquitectura</a>
              <a href="#challenges" className="text-dark-400 hover:text-white transition-colors text-sm">Soluciones</a>
              <a href="#contact" className="text-dark-400 hover:text-white transition-colors text-sm">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Secciones */}
      <Hero />
      <Overview />
      <TechStack />
      <Features />
      <Architecture />
      <Challenges />
      <Metrics />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 border-t border-dark-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-dark-500 text-sm">
          2026 Fernando González Ramón. Proyecto desarrollado para RS Seguridad Digital Internacional.
        </div>
      </footer>
    </div>
  )
}

export default App;
