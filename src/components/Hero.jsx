const Hero = () => {
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
            <span className="badge bg-dark-800 text-dark-300 border border-dark-700">
              Multipaís
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            RS Seguridad Digital
            <span className="block text-primary-500">E-Commerce</span>
          </h1>
          
          {/* Descripción */}
          <p className="text-sm md:text-base text-dark-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Plataforma de comercio electrónico completa para distribuidor de equipos de seguridad, 
            multipaís Costa Rica/Guatemala con integración de pagos y panel administrativo.
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
              Ver Sitio
            </a>
            <a 
              href="#arquitectura" 
              className="btn-secondary gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documentación
            </a>
          </div>
          
          {/* Screenshot principal */}
          <div className="relative">
            <div className="bg-dark-900 rounded-xl border border-dark-800 overflow-hidden shadow-xl">
              {/* Barra de navegador simulada */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-dark-600" />
                  <div className="w-3 h-3 rounded-full bg-dark-600" />
                  <div className="w-3 h-3 rounded-full bg-dark-600" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-dark-700 rounded-md px-4 py-1.5 text-sm text-dark-400 max-w-md mx-auto">
                    shop.rsseguridaddigital.com
                  </div>
                </div>
              </div>
              {/* Placeholder para screenshot - Reemplazar con imagen real */}
              <div className="aspect-video bg-dark-800 flex items-center justify-center">
                <p className="text-dark-500 text-lg">P-Screen</p>
                {/* <img src="/screenshots/homepage.png" alt="RS Seguridad E-Commerce Homepage" className="w-full h-auto" /> */}
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
  