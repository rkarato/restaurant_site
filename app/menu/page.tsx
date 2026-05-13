
export default function Menu() {
  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-amber-600 mb-4">Nuestro Menú</h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Descubre nuestra selección de platos tradicionales y sabores locales. 
        Puedes consultar nuestro menú completo a continuación.
      </p>
      
      <div className="w-full max-w-4xl h-[80vh] border-4 border-amber-100 rounded-xl overflow-hidden shadow-2xl">
        <iframe 
          src="/menu.pdf" 
          className="w-full h-full" 
          title="Menú del Restaurante"
        />
      </div>

      <div className="mt-8">
        <a 
          href="/menu.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-lg"
        >
          Descargar Menú (PDF)
        </a>
      </div>
    </main>
  );
}