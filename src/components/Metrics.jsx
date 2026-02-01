const Metrics = () => {
  const metrics = [
    { value: '163+', label: 'Commits', description: 'en GitHub Repo' },
    { value: '50+', label: 'Endpoints API', description: 'RESTful implementados' },
    { value: '11', label: 'Modelos de Datos', description: 'en MongoDB' },
    { value: '2', label: 'Países', description: 'Costa Rica y Guatemala' },
    { value: '3', label: 'Roles de Usuario', description: 'cliente, admin, repartidor' },
  ];

  return (
    <section id="metrics" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Métricas del Proyecto</h2>
          <p className="section-subtitle mx-auto">
          Dimensión del alcance y complejidad del sistema
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-1">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-1">{metric.label}</div>
              <div className="text-dark-500 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* Modelos de datos */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Modelos de Datos Principales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'User', fields: 'name, email, phone, password, role, address' },
              { name: 'Product', fields: 'name, category, price, stock, country, image' },
              { name: 'Order', fields: 'orderCode, user, items, totalPrice, status' },
              { name: 'AuditLog', fields: 'entityType, action, changedFields, performedBy' },
            ].map((model, index) => (
              <div key={index} className="card">
                <div className="font-mono text-primary-500 font-medium mb-2">{model.name}</div>
                <div className="text-dark-400 text-sm font-mono">{model.fields}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
