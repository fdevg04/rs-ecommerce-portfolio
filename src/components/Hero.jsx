const Hero = () => {
  // Tecnologías destacadas para el visual
  const technologies = [
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'React', category: 'Frontend' },
    { name: 'JWT', category: 'Security' },
    { name: 'Webhooks', category: 'Integration' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900/30" />
      
      <div className="section-container relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badges superiores */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="badge bg-green-500/10 text-green-400 border border-green-500/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              En Producción
            </span>
            <span className="badge bg-dark-800 text-dark-300 border border-dark-700">
              MERN Stack
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Plataforma
            <span className="block text-primary-500">E-Commerce</span>
          </h1>
          
          {/* Descripción */}
          <p className="text-base md:text-lg text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sistema de comercio electrónico completo desarrollado con MERN Stack, 
            incluyendo autenticación segura, pasarelas de pago y panel administrativo.
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="https://shop.rsseguridaddigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Sitio Web
            </a>
            <a 
              href="#arquitectura" 
              className="btn-secondary gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Arquitectura
            </a>
          </div>
          
          {/* Visual de tecnologías en lugar de screenshot */}
          <div className="relative">
            <div className="bg-dark-900 rounded-xl border border-dark-800 overflow-hidden shadow-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-dark-800 rounded-lg p-4 border border-dark-700 text-left"
                  >
                    <span className="text-xs text-dark-500 uppercase tracking-wider">{tech.category}</span>
                    <p className="text-white font-medium mt-1">{tech.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-dark-700">
                <p className="text-dark-400 text-sm">
                  Desarrollo Estructurado, arquitectura limpia y principios de seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg className="w-6 h-6 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
  