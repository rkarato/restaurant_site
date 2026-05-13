
export default function Acerca() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/images/Pic46.32 (5).jpeg" 
            alt="Sobre Nosotros" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-6">Nuestra Historia</h1>
          <p className="text-gray-600 text-lg mb-6">
            Desde hace más de una década, nos dedicamos a rescatar los sabores más auténticos de nuestra tierra. 
            Lo que comenzó como un sueño familiar se ha convertido en un referente gastronómico en Isla Canela.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            Creemos en el respeto al producto, la sostenibilidad y, sobre todo, en hacer que cada cliente 
            se sienta como en su propia casa.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">15+</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">100%</div>
              <div className="text-sm text-gray-600">Productos Locales</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}