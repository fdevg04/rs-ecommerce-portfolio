const TechStack = () => {
  const categories = [
    {
      title: 'Backend',
      color: 'text-dark-200',
      bgColor: 'bg-dark-800',
      borderColor: 'border-dark-700',
      techs: [
        { name: 'Node.js', version: '22.x' },
        { name: 'Express.js', version: '5.1.x' },
        { name: 'Mongoose', version: '8.16.x' },
        { name: 'JWT', version: '9.0.x' },
        { name: 'bcryptjs', version: '3.0.x' },
        { name: 'Helmet', version: '8.1.x' },
      ],
    },
    {
      title: 'Frontend',
      color: 'text-dark-200',
      bgColor: 'bg-dark-800',
      borderColor: 'border-dark-700',
      techs: [
        { name: 'React', version: '19.1.x' },
        { name: 'Vite', version: '7.0.x' },
        { name: 'React Router', version: '7.7.x' },
        { name: 'Axios', version: '1.11.x' },
        { name: 'Framer Motion', version: '12.23.x' },
        { name: 'CSS Modules', version: '-' },
      ],
    },
    {
      title: 'Base de Datos',
      color: 'text-dark-200',
      bgColor: 'bg-dark-800',
      borderColor: 'border-dark-700',
      techs: [
        { name: 'MongoDB Atlas', version: 'Cluster' },
        { name: 'GridFS', version: 'Archivos' },
      ],
    },
    {
      title: 'Infraestructura',
      color: 'text-dark-200',
      bgColor: 'bg-dark-800',
      borderColor: 'border-dark-700',
      techs: [
        { name: 'Railway', version: 'Hosting' },
        { name: 'GitHub', version: 'Repositorio' },
        { name: 'Gmail API', version: 'Emails' },
      ],
    },
    {
      title: 'Seguridad',
      color: 'text-dark-200',
      bgColor: 'bg-dark-800',
      borderColor: 'border-dark-700',
      techs: [
        { name: 'JWT Tokens', version: 'Auth' },
        { name: 'bcrypt', version: 'Hash' },
        { name: 'Helmet', version: 'Headers' },
        { name: 'Rate Limiting', version: 'Protección' },
        { name: 'CORS', version: 'Whitelist' },
      ],
    },
    {
      title: 'Pasarelas de Pago',
      color: 'text-dark-200',
      bgColor: 'bg-dark-800',
      borderColor: 'border-dark-700',
      techs: [
        { name: 'Tilopay', version: 'Internacional' },
        { name: 'Onvo Pay', version: 'Alternativa' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-subtitle mx-auto">
            Tecnologías actuales y robustas para una solución escalable
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="card"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                {category.title}
              </div>
              
              <div className="space-y-2">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center justify-between py-2 border-b border-dark-800 last:border-0"
                  >
                    <span className="text-dark-200">{tech.name}</span>
                    <span className="text-dark-500 text-sm font-mono">{tech.version}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
  