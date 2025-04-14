import FloatingChat from './components/FloatingChat';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang!</h1>
      <p>Ini adalah contoh halaman dengan chatbox melayang.</p>
      
      <FloatingChat />
    </main>
  );
}
