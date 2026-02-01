const Challenges = () => {
  const challenges = [
    {
      challenge: 'Seguridad en Pasarelas de Pago',
      problem: 'Integrar múltiples pasarelas de pago manteniendo la seguridad y previniendo fraudes.',
      solution: 'Implementación de validación de webhooks con firmas, verificación de montos esperados vs. recibidos, prevención de pedidos duplicados y registro de intentos con IP.',
      tags: ['Webhooks', 'Validación', 'Antifraude'],
    },
    {
      challenge: 'Soporte Multipaís con IVA Diferenciado',
      problem: 'Gestionar productos y precios para Costa Rica y Guatemala con diferentes tasas de IVA.',
      solution: 'Modelo de producto con campo de país, cálculo dinámico de IVA (13% CR, 12% GT incluido) y validación de carrito según el teléfono del usuario.',
      tags: ['Multitenancy', 'Impuestos', 'Validación'],
    },
    {
      challenge: 'Notificaciones en Tiempo Real',
      problem: 'Notificar a los administradores de manera instantánea cuando se realizan nuevos pedidos.',
      solution: 'Uso de MongoDB Change Streams para detectar cambios en la colección de notificaciones y Server-Sent Events (SSE) para push al cliente con reconexión automática.',
      tags: ['Change Streams', 'SSE', 'Tiempo Real'],
    },
  ];

  return (
    <section id="challenges" className="py-24 bg-dark-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Retos y Soluciones</h2>
          <p className="section-subtitle mx-auto">
            Problemas técnicos enfrentados y cómo fueron resueltos
          </p>
        </div>
        
        <div className="space-y-6">
          {challenges.map((item, index) => (
            <div key={index} className="card">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Número */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center border border-dark-700">
                    <span className="text-xl font-bold text-dark-300">{index + 1}</span>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{item.challenge}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-2">Problema</h4>
                      <p className="text-dark-300">{item.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-2">Solución</h4>
                      <p className="text-dark-300">{item.solution}</p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-dark-800 text-dark-400 rounded-full text-sm border border-dark-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
  