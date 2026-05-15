export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-amber-500 mb-4">La Barca</h3>
          <p className="text-gray-400">La mejor experiencia gastronómica en Isla Canela. Tradición, sabor y calidad en cada plato.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Horario</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Lunes - Jueves: 13:00 - 23:00</li>
            <li>Viernes - Domingo: 12:00 - 00:00</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <a href="https://maps.app.goo.gl/jJU8g6wcNzFy6JKA7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors"> 📍 C. Alcaudón, Playa de Isla Canela, España </a>
          <p className="text-gray-400">📞 +34 611 32 29 35</p>
          
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} La Barca. Todos los derechos reservados.
      </div>
    </footer>
  );
}