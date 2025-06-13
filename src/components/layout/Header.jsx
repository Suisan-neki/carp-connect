import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-red-600 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">カープコネクト</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-carp-light-red transition">
            ホーム
          </Link>
          <Link href="/stadium-map" className="hover:text-carp-light-red transition">
            スタジアムマップ
          </Link>
          <Link href="/rules" className="hover:text-carp-light-red transition">
            球場ルール
          </Link>
          <Link href="/tourism" className="hover:text-carp-light-red transition">
            カープツーリズム
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
   );
}
