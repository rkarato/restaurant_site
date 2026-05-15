
import React from 'react';
import { Download } from 'lucide-react';

const menuData = [
  {
    "category": "TAPITAS Y PICOTEO",
    "items": [
      {
        "name": "Gambas de Costa",
        "price": "1/2...11.00€ | Ración...22.00€",
        "desc": "Gambas cosida o a la plancha"
      },
      {
        "name": "Ensaladilla de Marisco",
        "price": "1/2...7.00€ | Ración...14.00€",
        "desc": "Selección de mariscos frescos ligados con una mayonesa suave y cremosa"
      },
      {
        "name": "Patatas Arrugadas",
        "price": "7.00€",
        "desc": "Patatas con mojó picón"
      },
      {
        "name": "Pimientos del Padrón",
        "price": "7.00€",
        "desc": "Pimientos del padrón con flor de sal"
      },
      {
        "name": "Pimientos a la Parrilla al Estilo Portugués",
        "price": "7.00€",
        "desc": "Pimientos en la brasa en aceite y ajo"
      },
      {
        "name": "\"Pipis\" a la Portuguesa",
        "price": "Consultar",
        "desc": "Mollejas de pollo en salsa de tomate picante con pepinillos"
      },
      {
        "name": "Garbanzos con Bacalao Aliñados",
        "price": "9.00€",
        "desc": "Bacalao con garbanzos y su aliño"
      }
    ]
  },
  {
    "category": "AL CENTRO",
    "items": [
      {
        "name": "Pan y Mantequilla",
        "price": "1.50€",
        "desc": "Por persona"
      },
      {
        "name": "Couvert",
        "price": "8.00€",
        "desc": "Selección de quesos curados, patés caseros y encurtidos"
      },
      {
        "name": "Plato de Queso",
        "price": "1/2...9.00€ | Ración...18.00€",
        "desc": "Una selección de quesos"
      },
      {
        "name": "Jamón Ibérico",
        "price": "1/2...10.00€ | Ración...20.00€",
        "desc": "Lonchas de jamón ibérico servido en una galleta de regaña"
      },
      {
        "name": "Fresco y Blanco",
        "price": "5.50€",
        "desc": "Queso fresco al estilo portugués, aliñado con aceite de oliva, pimienta negra y orégano"
      },
      {
        "name": "Capricho de Queso de Cabra",
        "price": "9.00€",
        "desc": "Queso de cabra gratinado al horno con nueces y salsa de arándanos"
      }
    ]
  },
  {
    "category": "ENSALADA Y VERDURA",
    "items": [
      {
        "name": "Ensalada Mixta",
        "price": "8.00€",
        "desc": "Lechuga, tomate y cebolla"
      },
      {
        "name": "Tomate Aliñado",
        "price": "9.00€",
        "desc": "Tomate con él aliño de la casa"
      },
      {
        "name": "Parrillada de Verduras",
        "price": "13.00€",
        "desc": "Selección de verduras de temporada"
      },
      {
        "name": "Ensalada de Pepino con Salmón",
        "price": "Consultar",
        "desc": "Con queso crema (possible sin lactosa)"
      },
      {
        "name": "Salmorejo",
        "price": "Consultar",
        "desc": "El tradicional con taquitos de jamón o con bacalao"
      }
    ]
  },
  {
    "category": "FREIDURÍA",
    "items": [
      {
        "name": "Croquetas de la Casa",
        "price": "6 Un...6.00€ | 12 Un...12.00€",
        "desc": "Gambas, Puchero, Pollo o Verduras (Puede mezclar)"
      },
      {
        "name": "Chocos",
        "price": "14.00€",
        "desc": "Ración de chocos fritos"
      },
      {
        "name": "Boquerones",
        "price": "14.00€",
        "desc": "Ración de boquerones fritos"
      },
      {
        "name": "Calamares",
        "price": "14.00€",
        "desc": "Ración de calamares fritos"
      },
      {
        "name": "Tempura de Verduras",
        "price": "12.00€",
        "desc": "Ración de tempura variada"
      }
    ]
  },
  {
    "category": "CARNES A LA BRASA DE LEÑA",
    "items": [
      {
        "name": "Pollo de la \"Guia\" (Entero)",
        "price": "19.00€",
        "desc": "Pollo estilo portugués tierno a la brasa acompañado de patatas fritas y ensalada"
      },
      {
        "name": "1/2 Pollo de la \"Guia\"",
        "price": "10.00€",
        "desc": "Pollo estilo portugués tierno a la brasa acompañado de patatas fritas y ensalada"
      },
      {
        "name": "Costillas Ibéricas",
        "price": "19.50€",
        "desc": "Costillas a la brasa acompañado de patatas fritas y ensalada"
      },
      {
        "name": "Presa Ibérica o Secreto Ibérico",
        "price": "21.50€",
        "desc": "Cerdo ibérico a la brasa acompañado de patatas fritas y ensalada"
      },
      {
        "name": "Chuletón de Ternera",
        "price": "8.00€ / 100gr",
        "desc": "Acompañado de patatas fritas, pimientos de padrón y ensalada"
      },
      {
        "name": "Entrecôt de Ternera Uruguaya (320gr)",
        "price": "29.50€",
        "desc": "Acompañado con patatas confitadas y verduras al horno"
      },
      {
        "name": "Picaña Brasileña",
        "price": "21.50€",
        "desc": "Acompañado de arroz, patatas fritas, frijoles negros y ensalada"
      }
    ]
  },
  {
    "category": "PESCADO A LA BRASA DE LEÑA",
    "items": [
      {
        "name": "Sardinas en el Espeto",
        "price": "10.00€ (6 Un) | 19.00€ (12 Un)",
        "desc": "Acompañado de patatas cocidas al horno y verdura (solo en temporada)"
      },
      {
        "name": "Pescado del Día (Lubina, Dorada, Rodaballo, Lenguado)",
        "price": "Mercado (8-9€/100gr)",
        "desc": "El pescado se cobra por peso. Rogamos lo confirme con el personal."
      },
      {
        "name": "Choco Entero",
        "price": "23.50€",
        "desc": "Choco fresco a la brasa"
      },
      {
        "name": "Gambones al Carbón",
        "price": "23.50€",
        "desc": "Gambones frescos al carbón"
      },
      {
        "name": "Lomo de Bacalao al Carbón",
        "price": "24.00€",
        "desc": "Lomo de bacalao fresco al carbón"
      },
      {
        "name": "Rejo de Pulpo a la Lagareiro",
        "price": "29.00€",
        "desc": "Rejo de pulpo tierno al estilo lagareiro"
      },
      {
        "name": "Jumbo a la Brasa",
        "price": "16.00€ / Un.",
        "desc": "Gamba jumbo a la brasa"
      }
    ]
  },
  {
    "category": "PARA LOS PEQUES",
    "items": [
      {
        "name": "Nuggets",
        "price": "8.00€",
        "desc": "Nuggets de pollo con guarnición"
      },
      {
        "name": "Varitas de Pescado",
        "price": "8.00€",
        "desc": "Varitas de pescado con guarnición"
      },
      {
        "name": "Huevos con Patatas",
        "price": "8.00€",
        "desc": "Huevos fritos con patatas"
      },
      {
        "name": "Pechuga con Patatas",
        "price": "8.00€",
        "desc": "Pechuga de pollo a la plancha con patatas"
      }
    ]
  },
  {
    "category": "POSTRES",
    "items": [
      {
        "name": "Postres Caseros",
        "price": "6.00€",
        "desc": "Preguntar por la selección del día (Tarta de Queso, Flan, Sorbetes, etc.)"
      }
    ]
  }
];

export default function Menu() {
  return (
    <main className="p-8 max-w-5xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Nuestro Menú</h1>
        <p className="text-gray-600 text-lg">Sabores auténticos del mar y la tierra en Isla Canela.</p>
      </div>

      <div className="space-y-12">
        {menuData.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-600 border-b-2 border-amber-100 pb-2 uppercase tracking-wider">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col justify-between p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-2">
                    <h3 className="text-xl font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm mt-1 italic">{item.desc}</p>
                  </div>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-amber-600 whitespace-pre-line">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-gray-900 text-white text-center space-y-6">
        <h3 className="text-2xl font-medium">¿Prefiere el menú completo?</h3>
        <p className="text-gray-400">Descargue nuestra carta completa en formato PDF para ver todas nuestras especialidades.</p>
        <a 
          href="/images/menu.pdf" 
          download 
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          <Download size={20} />
          Descargar Menú (PDF)
        </a>
      </div>
    </main>
  );
}
