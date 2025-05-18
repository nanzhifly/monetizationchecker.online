import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="max-w-[400px] w-full mx-auto card p-6 sm:p-10 flex flex-col items-center">
        <div className="text-6xl font-extrabold text-red-500 mb-2 select-none">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Page Not Found</h1>
        <p className="text-gray-600 mb-6 text-center">Sorry, the page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="inline-block px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold shadow hover:from-red-600 hover:to-pink-600 transition text-base">Back to Home</Link>
      </div>
    </main>
  );
} 