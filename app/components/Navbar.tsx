import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              Barca Restaurante
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium">Inicio</Link>
              <Link href="/menu" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium">Menú</Link>
              <Link href="/acerca" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium">Sobre Nosotros</Link>
              <Link href="/contacto" className="text-gray-600 hover:text-amber-600 px-3 py-2 text-sm font-medium">Contacto</Link>
              <Link href="/reservas" className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition">Reservar Mesa</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}