import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">カープコネクト</h3>
            <p className="text-gray-300">
              広島カープファンのための地域活性化プラットフォーム
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/stadium-map" className="text-gray-300 hover:text-white">
                  スタジアムマップ
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-300 hover:text-white">
                  球場ルール
                </Link>
              </li>
              <li>
                <Link href="/tourism" className="text-gray-300 hover:text-white">
                  カープツーリズム
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              ご質問やフィードバックがありましたら、お気軽にお問い合わせください。
            </p>
            <p className="text-gray-300 mt-2">
              Email: info@carpconnect.example.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} カープコネクト. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
