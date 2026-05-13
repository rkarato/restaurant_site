export default function Menu() {
  const dishes = [
    { name: "Paella Valenciana", price: "18€", desc: "Arroz tradicional con conejo, pollo y judías verdes.", img: "Paella" },
    { name: "Gambas al Ajillo", price: "14€", desc: "Gambas frescas salteadas con ajo y guindilla.", img: "Gambas" },
    { name: "Pulpo a la Gallega", price: "16€", desc: "Pulpo cocido con pimentón y aceite de oliva virgen.", img: "Pulpo" },
    { name: "Lubina a la Espalda", price: "22€", desc: "Lubina fresca asada al horno con verduras.", img: "Lubina" },
    { name: "Tarta de Queso", price: "8€", desc: "Tarta cremosa casera con frutos rojos.", img: "Postre" },
    { name: "Croquetas de Jamón", price: "12€", desc: "Croquetas cremosas de jamón ibérico.", img: "Croquetas" },
  ];

  return (
    <main className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Menú</h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Descubre una fusión de sabores tradicionales y toques modernos, elaborados con los mejores ingredientes de la zona.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <div key={index} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
              Foto de {dish.img}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{dish.name}</h3>
                <span className="text-amber-600 font-bold">{dish.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{dish.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}