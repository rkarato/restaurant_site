
import React from 'react';

export default function Menu() {
  return (
    <main className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-serif font-bold text-stone-800 mb-4">Nuestro Menú</h1>
        <p className="text-stone-600 mb-12 text-lg italic">Una selección exquisita de sabores tradicionales y modernos.</p>
        
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-amber-200/50">
          {/* Menu Cover Image */}
          <div className="relative h-[600px] w-full">
            <img 
              src="/images/Menu.pdf
Pic41.29.jpeg
Pic46.27.jpeg
Pic46.28 (1).jpeg
Pic46.28 (2).jpeg
Pic46.28 (3).jpeg
Pic46.28 (4).jpeg
Pic46.28 (5).jpeg
Pic46.28 (6).jpeg
Pic46.28.jpeg
Pic46.29 (1).jpeg
Pic46.29 (2).jpeg
Pic46.29 (3).jpeg
Pic46.29 (4).jpeg
Pic46.29.jpeg
Pic46.30 (1).jpeg
Pic46.30 (2).jpeg
Pic46.30 (3).jpeg
Pic46.30.jpeg
Pic46.31 (1).jpeg
Pic46.31 (2).jpeg
Pic46.31 (3).jpeg
Pic46.31 (4).jpeg
Pic46.31 (5).jpeg
Pic46.31.jpeg
Pic46.32 (1).jpeg
Pic46.32 (2).jpeg
Pic46.32 (3).jpeg
Pic46.32 (4).jpeg
Pic46.32 (5).jpeg
Pic46.32.jpeg
Pic46.33 (1).jpeg
Pic46.33 (2).jpeg
Pic46.33 (3).jpeg
Pic46.33 (4).jpeg
Pic46.33.jpeg
Pic46.34 (1).jpeg
Pic46.34 (2).jpeg
Pic46.34 (3).jpeg
Pic46.34 (4).jpeg
Pic46.34.jpeg
Pic46.35 (1).jpeg
Pic46.35 (2).jpeg
Pic46.35 (3).jpeg
Pic46.35 (4).jpeg
Pic46.35 (5).jpeg
Pic46.35.jpeg
Pic46.36 (1).jpeg
Pic46.36.jpeg
Pic48.06.jpeg
Pic48.49.jpeg
WhatsApp Image 2026-05-11 at 15.42.28.jpeg
WhatsApp Video 2026-05-11 at 15.46.33.mp4" 
              alt="Vista del Menú" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent flex flex-col justify-end p-12 text-center">
              <h2 className="text-3xl font-serif text-white mb-6">Explora nuestra propuesta gastronómica</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/images/menu.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <span>📖 Ver Menú Completo (PDF)</span>
                </a>
                
                <a 
                  href="/images/menu.pdf" 
                  download 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-2"
                >
                  <span>📥 Descargar PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-amber-600 text-3xl mb-3">🥗</div>
            <h3 className="font-bold text-stone-800 text-xl mb-2">Productos Frescos</h3>
            <p className="text-stone-600">Ingredientes locales seleccionados diariamente.</p>
          </div>
          <div className="p-6">
            <div className="text-amber-600 text-3xl mb-3">🍷</div>
            <h3 className="font-bold text-stone-800 text-xl mb-2">Bodega Seleccionada</h3>
            <p className="text-stone-600">Vinos que maridan perfectamente con cada plato.</p>
          </div>
          <div className="p-6">
            <div className="text-amber-600 text-3xl mb-3">👨‍🍳</div>
            <h3 className="font-bold text-stone-800 text-xl mb-2">Cocina de Autor</h3>
            <p className="text-stone-600">Recetas tradicionales con un toque contemporáneo.</p>
          </div>
        </div>
      </div>
    </main>
  );
}