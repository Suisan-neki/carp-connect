import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-carp-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">カープコネクト</h1>
          <p className="text-xl md:text-2xl mb-8">広島カープファンのための地域活性化プラットフォーム</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/stadium-map" className="bg-white text-carp-red font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
              スタジアムマップを見る
            </Link>
            <Link href="/tourism" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-carp-red transition">
              カープツーリズムを探る
            </Link>
          </div>
        </div>
      </section>
      
      {/* 機能紹介セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 機能カード1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-carp-red text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">スタジアムマップ</h3>
              <p className="text-gray-600">
                マツダスタジアム周辺の詳細マップと混雑回避ルートを提供します 。
              </p>
            </div>
            
            {/* 機能カード2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-carp-red text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">球場ルールガイド</h3>
              <p className="text-gray-600">
                多言語対応の球場ルールと持ち込み制限の視覚的な説明を提供します 。
              </p>
            </div>
            
            {/* 機能カード3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-carp-red text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">カープツーリズム</h3>
              <p className="text-gray-600">
                カープを入口とした広島の新たな魅力発見と体験を提供します 。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">カープファンの皆様へ</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            カープコネクトは、カープファンの熱量を地域活性化につなげる新しいプラットフォームです。
            スタジアム観戦をより快適に、広島の魅力をより深く体験してください。
          </p>
          <Link href="/about" className="bg-carp-red text-white font-bold py-3 px-8 rounded-lg hover:bg-carp-dark-red transition">
            もっと詳しく
          </Link>
        </div>
      </section>
    </Layout>
  );
}
