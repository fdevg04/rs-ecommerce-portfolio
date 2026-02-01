const Architecture = () => {
  return (
    <section id="arquitectura" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Arquitectura del Sistema</h2>
          <p className="section-subtitle mx-auto">
            Diseño cliente-servidor con separación clara de responsabilidades
          </p>
        </div>
        
        {/* Diagrama de arquitectura */}
        <div className="card max-w-4xl mx-auto mb-12">
          <div className="bg-dark-800 rounded-lg p-8 font-mono text-sm overflow-x-auto">
            <pre className="text-dark-300 whitespace-pre">
{`                                    +------------------+
                                    |   MongoDB Atlas  |
                                    |    (rs-prod)     |
                                    +--------+---------+
                                             |
+------------------+              +----------+----------+              +------------------+
|                  |   HTTPS      |                     |   HTTPS      |                  |
|     Cliente      +------------->+      Backend        +<-------------+   Pasarelas de   |
|    (Browser)     |              |   (Express.js)      |              |      Pago        |
|                  |<-------------+                     +------------->|  Tilopay / Onvo  |
+--------+---------+              +----------+----------+              +------------------+
         |                                   |
         |                                   |
         v                                   v
+------------------+              +------------------+
|     Frontend     |              |   GridFS (MongoDB)|
|   (React + Vite) |              |  Imágenes / PDFs  |
+------------------+              +------------------+`}
            </pre>
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
  