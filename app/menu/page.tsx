import React from 'react';

// Data curated from Menutext.md and cross-checked with Menu.pptx
const menuData = [
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "Gambas de Costa",
    "price": "1/2...11.00€ | Ración...22.00€",
    "desc": "Gambas cosida o a la plancha"
  },
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "Ensaladilla de Marisco",
    "price": "1/2...7.00€ | Ración...14.00€",
    "desc": "Selección de mariscos frescos ligados con una mayonesa suave y cremosa"
  },
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "Patatas Arrugadas",
    "price": "7.00€",
    "desc": "Patatas con mojó picón"
  },
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "Pimientos del Padrón",
    "price": "7.00€",
    "desc": "Pimientos del padrón con flor de sal"
  },
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "Pimientos a la Parrilla al Estilo Portugués",
    "price": "7.00€",
    "desc": "Pimientos en la brasa en aceite y ajo"
  },
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "\"Pipis\" a la Portuguesa",
    "price": "9.00€",
    "desc": "Mollejas de pollo en salsa de tomate picante con pepinillos"
  },
  {
    "category": "TAPITAS Y PICOTEO",
    "name": "Garbanzos con Bacalao Aliñados",
    "price": "8.00€",
    "desc": "Bacalao con garbanzos y su aliño"
  },
  {
    "category": "AL CENTRO",
    "name": "Pan y Mantequilla",
    "price": "1.50€",
    "desc": "Por persona"
  },
  {
    "category": "AL CENTRO",
    "name": "Couvert",
    "price": "8.00€",
    "desc": "Selección de quesos curados, patés caseros y encurtidos"
  },
  {
    "category": "AL CENTRO",
    "name": "Plato de Queso",
    "price": "1/2...9.00€ | Ración...18.00€",
    "desc": "Una selección de quesos"
  },
  {
    "category": "AL CENTRO",
    "name": "Jamón Ibérico",
    "price": "1/2...10.00€ | Ración...20.00€",
    "desc": "Lonchas de jamón ibérico servido en una galleta de regaña"
  },
  {
    "category": "AL CENTRO",
    "name": "Fresco y Blanco",
    "price": "5.50€",
    "desc": "Queso fresco al estilo portugués, aliñado con aceite de oliva, pimienta negra y orégano"
  },
  {
    "category": "AL CENTRO",
    "name": "Capricho de Queso de Cabra",
    "price": "9.00€",
    "desc": "Queso de cabra gratinado al horno con nueces y salsa de arándanos"
  },
  {
    "category": "ENSALADA Y VERDURA",
    "name": "Ensalada Mixta",
    "price": "8.00€",
    "desc": "Lechuga, tomate y cebolla"
  },
  {
    "category": "ENSALADA Y VERDURA",
    "name": "Tomate Aliñado",
    "price": "9.00€",
    "desc": "Tomate con el aliño de la casa"
  },
  {
    "category": "ENSALADA Y VERDURA",
    "name": "Parrillada de Verduras",
    "price": "13.00€",
    "desc": ""
  },
  {
    "category": "ENSALADA Y VERDURA",
    "name": "Ensalada de Pepino con Salmón",
    "price": "13.00€",
    "desc": "Con queso crema (possible sin lactosa)"
  },
  {
    "category": "ENSALADA Y VERDURA",
    "name": "Salmorejo",
    "price": "6.00€",
    "desc": "El tradicional con taquitos de jamón o con bacalao"
  },
  {
    "category": "FREIDURÍA",
    "name": "Croquetas de la Casa",
    "price": "6 Un...6.00€ | 12 Un...12.00€",
    "desc": "Gambas, Puchero, Pollo o Verduras (Puede mezclar)"
  },
  {
    "category": "FREIDURÍA",
    "name": "Chocos",
    "price": "Rac...14.00€",
    "desc": ""
  },
  {
    "category": "FREIDURÍA",
    "name": "Boquerones",
    "price": "Rac...14.00€",
    "desc": ""
  },
  {
    "category": "FREIDURÍA",
    "name": "Calamares",
    "price": "Rac...14.00€",
    "desc": ""
  },
  {
    "category": "FREIDURÍA",
    "name": "Tempura de Verduras",
    "price": "Rac...12.00€",
    "desc": ""
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "Pollo de la 'Guía' Entero",
    "price": "19.00€",
    "desc": "Pollo estilo portugués tierno a la brasa acompañado de patatas fritas y ensalada"
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "1/2 Pollo de la 'Guía'",
    "price": "10.00€",
    "desc": "Acompañado de patatas fritas y ensalada"
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "Costillas Ibéricas",
    "price": "19.50€",
    "desc": "Costillas a la brasa acompañado de patatas fritas y ensalada"
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "Presa Ibérica o Secreto Ibérico",
    "price": "21.50€",
    "desc": "Cerdo ibérico a la brasa acompañado de patatas fritas y ensalada"
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "Chuletón de Ternera (Cada 100gr)",
    "price": "8.00€",
    "desc": "Acompañado de patatas fritas, pimientos de padrón y ensalada"
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "Entrecôt de Ternera Uruguaya 320gr",
    "price": "29.50€",
    "desc": "Acompañado con patatas confitadas y verduras al horno"
  },
  {
    "category": "CARNES A LA BRASA",
    "name": "Picaña Brasileña",
    "price": "21.50€",
    "desc": "Acompañado de arroz, patatas fritas, frijoles negros y ensalada"
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Sardinas en el Espeto",
    "price": "10.00€ (6 Un) | 19.00€ (12 Un)",
    "desc": "Acompañado de patatas cocidas al horno y verdura"
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Lubina (por peso)",
    "price": "8.00€ / 100gr",
    "desc": "Pescado fresco del día"
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Dorada (por peso)",
    "price": "8.00€ / 100gr",
    "desc": "Pescado fresco del día"
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Rodaballo (por peso)",
    "price": "9.00€ / 100gr",
    "desc": "Pescado fresco del día"
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Lenguado (por peso)",
    "price": "9.00€ / 100gr",
    "desc": "Pescado fresco del día"
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Choco Entero",
    "price": "23.50€",
    "desc": ""
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Gambones al Carbón",
    "price": "23.50€",
    "desc": ""
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Lomo de Bacalao al Carbón",
    "price": "24.00€",
    "desc": ""
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Rejo de Pulpo a la Lagareiro",
    "price": "29.00€",
    "desc": ""
  },
  {
    "category": "PESCADO A LA BRASA",
    "name": "Jumbo a la Brasa",
    "price": "16.00€",
    "desc": "Por unidad"
  },
  {
    "category": "PARA LOS PEQUES",
    "name": "Nuggets",
    "price": "8.00€",
    "desc": ""
  },
  {
    "category": "PARA LOS PEQUES",
    "name": "Varitas de Pescado",
    "price": "8.00€",
    "desc": ""
  },
  {
    "category": "PARA LOS PEQUES",
    "name": "Huevos con Patatas",
    "price": "8.00€",
    "desc": ""
  },
  {
    "category": "PARA LOS PEQUES",
    "name": "Pechuga con Patatas",
    "price": "8.00€",
    "desc": ""
  },
  {
    "category": "GUARNICIONES",
    "name": "Patatas Fritas",
    "price": "6.00€",
    "desc": ""
  },
  {
    "category": "GUARNICIONES",
    "name": "Patatas Arrugadas",
    "price": "6.00€",
    "desc": ""
  },
  {
    "category": "GUARNICIONES",
    "name": "Patata Cocidas",
    "price": "6.00€",
    "desc": ""
  },
  {
    "category": "GUARNICIONES",
    "name": "Arroz",
    "price": "6.00€",
    "desc": ""
  },
  {
    "category": "POSTRES",
    "name": "Postres Caseros",
    "price": "6.00€",
    "desc": "Pregunte por nuestra selección del día"
  }
];

export default function Menu() {
  const groupedMenu = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuData>);

  return (
    <main className="p-8 max-w-5xl mx-auto">
      {/* Language Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="/menu/Menu.pdf"
          download
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md"
        >
          <span>🇪🇸</span>
          <span>Menú</span>
        </a>
        <a
          href="/menu/MenuEnglish.pdf"
          download
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md"
        >
          <span>🇬🇧</span>
          <span>Menu</span>
        </a>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Nuestro Menú</h1>
        <p className="text-gray-600 text-lg">Sabores auténticos del mar y la tierra en Isla Canela.</p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-600 border-b-2 border-amber-100 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-2">
                    <h3 className="text-xl font-medium text-gray-800">{item.name}</h3>
                    {item.desc && <p className="text-gray-500 text-sm mt-1 italic">{item.desc}</p>}
                  </div>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-amber-600 whitespace-pre-line">{item.price || "Consultar"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
