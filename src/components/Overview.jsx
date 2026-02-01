const Overview = () => {
  const details = [
    {
      label: 'Cliente',
      value: 'RS Seguridad Digital Internacional',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      label: 'Rol',
      value: 'Full Stack Developer',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      label: 'Periodo de Desarrollo',
      value: 'Julio 2025 - Presente',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Estado',
      value: 'En Producción',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="overview" className="py-24 bg-dark-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Descripción del Proyecto</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Descripción */}
          <div className="space-y-6">
            <p className="text-dark-300 text-lg leading-relaxed">
              RS Seguridad Digital E-Commerce es una plataforma completa que permite a la empresa 
              gestionar su catálogo de productos de seguridad electrónica, procesar pedidos y 
              administrar clientes de manera eficiente.
            </p>
            <p className="text-dark-300 text-lg leading-relaxed">
              El sistema fue desarrollado para resolver la necesidad de digitalizar las ventas 
              de la empresa, ofreciendo una experiencia de compra moderna con soporte para 
              múltiples países, cálculo automático de impuestos y pasarelas de pago internacionales.
            </p>
            
            {/* Categorías de productos */}
            <div className="pt-4">
              <h3 className="text-white font-semibold mb-4">Categorías de Productos</h3>
              <div className="flex flex-wrap gap-2">
                {['CCTV', 'Alarmas', 'Control de Acceso', 'Detección de Incendios', 'Redes', 'Accesorios'].map((cat) => (
                  <span key={cat} className="px-3 py-1 bg-dark-800 text-dark-300 rounded-lg text-sm border border-dark-700">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Detalles del proyecto */}
          <div className="grid sm:grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <div 
                key={index}
                className="card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary-500">
                    {detail.icon}
                  </div>
                  <span className="text-dark-400 text-sm">{detail.label}</span>
                </div>
                <p className="text-white font-medium">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
  