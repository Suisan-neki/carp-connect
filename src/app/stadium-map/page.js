import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function StadiumMap() {
  return (
    <Layout>
      {/* ヘッダーセクション */}
      <section className="bg-carp-red text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">スタジアムマップ</h1>
          <p className="text-lg md:text-xl mb-6">マツダスタジアム周辺の詳細マップと混雑回避ルート</p>
        </div>
      </section>

      {/* 主な機能セクション */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">主な機能</h2>
          <div className="space-y-8">
            {/* スタジアムマップ */}
            <Link href="/stadium-map">
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="icon">
                  <i className="fas fa-map-marked-alt text-3xl"></i> {/* アイコンを設定 */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">スタジアムマップ</h3>
                  <p className="text-gray-600">マツダスタジアム周辺の詳細マップと混雑回避ルートを提供します。</p>
                </div>
              </div>
            </Link>

            {/* 球場ルールガイド */}
            <Link href="/stadium-rules">
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="icon">
                  <i className="fas fa-clipboard text-3xl"></i> {/* アイコンを設定 */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">球場ルールガイド</h3>
                  <p className="text-gray-600">多言語対応の球場ルールと持ち込み制限の視覚的な説明を提供します。</p>
                </div>
              </div>
            </Link>

            {/* カープツーリズム */}
            <Link href="/carp-tourism">
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="icon">
                  <i className="fas fa-globe text-3xl"></i> {/* アイコンを設定 */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">カープツーリズム</h3>
                  <p className="text-gray-600">カープを入口として広島の新たな魅力発見と体験を提供します。</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 静的な地図表示セクション */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">マツダスタジアム周辺マップ</h2>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              {/* 静的な地図 */}
              <iframe
                title="Mazda Stadium Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.208444188295!2d132.48073831533744!3d34.385601780451775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355f16d0470a6341%3A0x2446581d7437f9f7!2z44CSMzQwLTAwODgg5aSx5bGx5Yy65bqB!5e0!3m2!1sja!2sjp!4v1633155592005!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-gray-600 mb-4">
              マツダスタジアムは広島市南区南蟹屋2-3-1に位置し、JR広島駅から徒歩約15分、広島電鉄「猿猴橋町」電停から徒歩約10分の場所にあります。
              周辺には複数の駐車場やアクセス経路があります。
            </p>
          </div>
        </div>
      </section>

      {/* 試合日情報セクション */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">試合日の注意事項</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-carp-red">入場時間</h3>
                <p className="text-gray-600">試合開始2時間前から入場可能です。混雑を避けるため、早めの来場をおすすめします。</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 text-carp-red">持ち物チェック</h3>
                <p className="text-gray-600">危険物や大型荷物の持ち込みは制限されています。詳細は球場ルールページをご確認ください。</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 text-carp-red">天候対策</h3>
                <p className="text-gray-600">屋外席は日差しや雨に備えて、帽子や日焼け止め、雨具の準備をおすすめします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">より詳しい情報が必要ですか？</h2>
          <p className="text-lg mb-6">球場のルールや持ち込み制限について詳しく知りたい方はこちら</p>
          <Link href="/rules" className="bg-carp-red text-white font-bold py-3 px-8 rounded-lg hover:bg-carp-dark-red transition">
            球場ルールを確認する
          </Link>
        </div>
      </section>
    </Layout>
  );
}

