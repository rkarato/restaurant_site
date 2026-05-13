
export default function Inicio() {
  return (
    <main className="p-8">
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-12">
        <img 
          src="/images/Pic48.06.jpeg" 
          alt="Nuestro Restaurante" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bienvenidos a Nuestro Restaurante
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Disfruta de la mejor cocina local en el corazón de Isla Canela. Sabores auténticos y una experiencia inolvidable.
          </p>
          <div className="flex gap-4">
            <a href="/reservas" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
              Reservar Mesa
            </a>
            <a href="/menu" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all">
              Ver Menú
            </a>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 bg-gray-50 rounded-xl text-center border border-gray-100">
          <div className="text-4xl mb-4">🌿</div>
          <h3 className="text-xl font-bold mb-2">Productos Frescos</h3>
          <p className="text-gray-600">Ingredientes locales seleccionados diariamente.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl text-center border border-gray-100">
          <div className="text-4xl mb-4">🍷</div>
          <h3 className="text-xl font-bold mb-2">Bodega Seleccionada</h3>
          <p className="text-gray-600">La mejor selección de vinos para maridar tus platos.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl text-center border border-gray-100">
          <div className="text-4xl mb-4">🌅</div>
          <h3 className="text-xl font-bold mb-2">Vistas Privilegiadas</h3>
          <p className="text-gray-600">Un entorno tranquilo y hermoso para disfrutar.</p>
        </div>
      </section>
    </main>
  );
}