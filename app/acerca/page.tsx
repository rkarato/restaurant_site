export default function Acerca() {
  return (
    <main className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400">
          Foto del Restaurante / Equipo
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6">Nuestra Historia</h1>
          <div className="w-20 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Barca Restaurante nació de un sueño familiar: llevar la esencia de la cocina mediterránea al corazón de Isla Canela. 
            Desde nuestros inicios, nos hemos comprometido a utilizar únicamente productos de kilómetro cero, 
            apoyando a los pescadores y agricultores de nuestra comunidad.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nuestro chef combina la técnica clásica con una visión contemporánea, creando platos que respetan 
            la materia prima y sorprenden al paladar. Para nosotros, cada comensal es un invitado en nuestra propia casa.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="block text-3xl font-bold text-amber-600">15+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Años de Experiencia</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-amber-600">100%</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Productos Locales</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}