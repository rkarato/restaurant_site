import Link from 'next/link';

export default function Inicio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Imagen de Fondo: Vista del Restaurante</span>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Sabor Auténtico en <span className="text-amber-500">Isla Canela</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Una experiencia culinaria inolvidable donde la frescura del mar se encuentra con la tradición española.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/reservas" className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition transform hover:scale-105">
              Reservar Mesa
            </Link>
            <Link href="/menu" className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105">
              Ver Menú
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="text-amber-600 text-4xl mb-4">🐟</div>
          <h3 className="text-xl font-bold mb-2">Productos Frescos</h3>
          <p className="text-gray-600">Trabajamos directamente con pescadores locales para garantizar la calidad.</p>
        </div>
        <div>
          <div className="text-amber-600 text-4xl mb-4">🍷</div>
          <h3 className="text-xl font-bold mb-2">Bodega Seleccionada</h3>
          <p className="text-gray-600">Una carta de vinos cuidadosamente elegidos para maridar cada plato.</p>
        </div>
        <div>
          <div className="text-amber-600 text-4xl mb-4">🌅</div>
          <h3 className="text-xl font-bold mb-2">Vista Privilegiada</h3>
          <p className="text-gray-600">Disfruta de tus comidas con la mejor vista de la isla.</p>
        </div>
      </section>
    </div>
  );
}