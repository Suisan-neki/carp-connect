import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-red-600 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">カープコネクト</span>
        </Link>
        
        {/* ナビゲーションメニュー - hidden md:flex を flex に変更 */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-red-200 transition">
            ホーム
          </Link>
          <Link href="/stadium-map" className="hover:text-red-200 transition">
            スタジアムマップ
          </Link>
          <Link href="/rules" className="hover:text-red-200 transition">
            球場ルール
          </Link>
          <Link href="/tourism" className="hover:text-red-200 transition">
            カープツーリズム
          </Link>
        </nav>
        
        {/* モバイルメニューボタンは一旦削除 */}
      </div>
    </header>
  );
}

