import Image from 'next/image';

export default function QRCode({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white p-4 rounded-lg shadow-lg">
        <Image
          src="/images/menu-qr.png"
          alt="Código QR del menú"
          fill
          className="object-contain"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Escanea para ver el menú
      </p>
    </div>
  );
}
