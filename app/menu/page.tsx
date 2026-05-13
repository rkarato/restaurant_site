
export default function Menu() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Nuestro Menú</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre una fusión de sabores tradicionales y toques modernos, preparados con pasión y productos de temporada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-gray-50 transition-all">
          <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
            <img 
              src="/images/Pic46.28 (6).jpeg" 
              alt="Plato Estrella" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Plato Estrella</h3>
              <span className="text-amber-600 font-bold">18€</span>
            </div>
            <p className="text-gray-600">La especialidad de la casa con ingredientes locales.</p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-gray-50 transition-all">
          <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
            <img 
              src="/images/Pic46.28 (2).jpeg" 
              alt="Entrante Clásico" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Entrante Clásico</h3>
              <span className="text-amber-600 font-bold">12€</span>
            </div>
            <p className="text-gray-600">Una entrada ligera y refrescante para empezar.</p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-gray-50 transition-all">
          <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
            <img 
              src="/images/Pic46.29 (4).jpeg" 
              alt="Postre Artesanal" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Postre Artesanal</h3>
              <span className="text-amber-600 font-bold">8€</span>
            </div>
            <p className="text-gray-600">Hecho a mano con recetas tradicionales.</p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start p-4 rounded-2xl hover:bg-gray-50 transition-all">
          <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
            <img 
              src="/images/Pic46.30 (1).jpeg" 
              alt="Marisco Fresco" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Marisco Fresco</h3>
              <span className="text-amber-600 font-bold">22€</span>
            </div>
            <p className="text-gray-600">Capturado hoy mismo en las costas locales.</p>
          </div>
        </div>
        
      </div>
    </main>
  );
}