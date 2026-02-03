const Architecture = () => {
  // Componente para las cajas del diagrama
  const DiagramBox = ({ title, subtitle, className = "", icon }) => (
    <div className={`bg-dark-800 border border-dark-700 rounded-lg p-4 text-center min-w-[140px] ${className}`}>
      {icon && <div className="text-primary-500 mb-2 flex justify-center">{icon}</div>}
      <div className="text-white font-semibold text-sm">{title}</div>
      {subtitle && <div className="text-dark-400 text-xs mt-1">{subtitle}</div>}
    </div>
  );

  // Componente para las etiquetas de protocolo
  const ProtocolLabel = ({ children }) => (
    <span className="text-emerald-400 text-xs font-mono font-medium">{children}</span>
  );

  // Componente para flechas horizontales
  const HorizontalArrow = ({ bidirectional = false }) => (
    <div className="flex items-center justify-center px-2">
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="text-dark-500">
        {bidirectional && (
          <path d="M8 12L2 8V16L8 12Z" fill="currentColor" />
        )}
        <line x1={bidirectional ? "8" : "0"} y1="12" x2="52" y2="12" stroke="currentColor" strokeWidth="2" />
        <path d="M52 12L58 8V16L52 12Z" fill="currentColor" />
      </svg>
    </div>
  );

  // Componente para flechas verticales
  const VerticalArrow = ({ className = "" }) => (
    <div className={`flex justify-center py-2 ${className}`}>
      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-dark-500">
        <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="2" />
        <path d="M12 32L8 26H16L12 32Z" fill="currentColor" />
      </svg>
    </div>
  );

  return (
    <section id="arquitectura" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Arquitectura del Sistema</h2>
          <p className="section-subtitle mx-auto">
            Diseño cliente-servidor y flujo del sistema
          </p>
        </div>
        
        {/* Diagrama de arquitectura interactivo */}
        <div className="card max-w-5xl mx-auto mb-12 overflow-x-auto">
          <div className="bg-dark-900/50 rounded-lg p-8 min-w-[700px]">
            
            {/* Fila superior - MongoDB */}
            <div className="flex justify-center mb-4">
              <DiagramBox 
                title="MongoDB Atlas" 
                subtitle="(Cluster)"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                }
              />
            </div>

            {/* Línea vertical desde MongoDB */}
            <VerticalArrow />

            {/* Fila central - Cliente, Backend, Pasarelas */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {/* Cliente */}
              <DiagramBox 
                title="Cliente" 
                subtitle="(Browser)"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />

              {/* Flecha Cliente -> Backend */}
              <div className="flex flex-col items-center">
                <ProtocolLabel>HTTPS</ProtocolLabel>
                <HorizontalArrow bidirectional />
              </div>

              {/* Backend */}
              <DiagramBox 
                title="Backend" 
                subtitle="(Express.js)"
                className="border-primary-500/30 bg-dark-800/80"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                }
              />

              {/* Flecha Backend -> Pasarelas */}
              <div className="flex flex-col items-center">
                <ProtocolLabel>HTTPS</ProtocolLabel>
                <HorizontalArrow bidirectional />
              </div>

              {/* Pasarelas de Pago */}
              <DiagramBox 
                title="Pasarelas de Pago" 
                subtitle="(Integradas)"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                }
              />
            </div>

            {/* Flechas verticales hacia Frontend y GridFS */}
            <div className="flex justify-center gap-[280px]">
              <VerticalArrow />
              <VerticalArrow />
            </div>

            {/* Fila inferior - Frontend y GridFS */}
            <div className="flex justify-center gap-16">
              <DiagramBox 
                title="Frontend" 
                subtitle="(React + Vite)"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
              />
              <DiagramBox 
                title="GridFS" 
                subtitle="Imágenes / PDFs"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>

            {/* Leyenda */}
            <div className="mt-8 pt-6 border-t border-dark-700">
              <div className="flex flex-wrap justify-center gap-6 text-xs text-dark-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-dark-800 border border-dark-700"></div>
                  <span>Componente del sistema</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-dark-500"></div>
                  <span>Comunicación bidireccional</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-mono">HTTPS</span>
                  <span>Protocolo seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flujos principales */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Flujo de autenticación */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              Flujo de Autenticación
            </h3>
            <ol className="space-y-3 text-dark-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">1</span>
                <span>Validación de credenciales y verificación de bloqueo</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">2</span>
                <span>Generación de Access Token (JWT, 15 min)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">3</span>
                <span>Generación de Refresh Token (7 días)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">4</span>
                <span>Almacenamiento seguro en base de datos (hash)</span>
              </li>
            </ol>
          </div>
          
          {/* Flujo de pagos */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Flujo de Pagos
            </h3>
            <ol className="space-y-3 text-dark-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">1</span>
                <span>El cliente confirma el carrito y solicita el pago</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">2</span>
                <span>El backend valida y crea el Payment Intent</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">3</span>
                <span>Redirección a la pasarela de pago</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-dark-800 text-dark-300 flex items-center justify-center text-sm border border-dark-700">4</span>
                <span>Callback, validación y creación de la orden</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
