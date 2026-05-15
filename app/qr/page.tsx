import QRCode from '../components/QRCode';

export default function QRPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">La Barca</h1>
        <p className="text-gray-600 mb-8">Restaurante en Isla Canela</p>
        <QRCode />
        <p className="mt-8 text-gray-500 text-sm">
          C. Alcaudón, Playa de Isla Canela, España<br />
          📞 +34 611 32 29 35
        </p>
      </div>
    </main>
  );
}
