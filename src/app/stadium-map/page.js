import Layout from '../../components/layout/Layout';
import Link from 'next/link';
// Google Maps APIのインポート
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function StadiumMap() {
  // .envファイルに設定したAPIキーを環境変数から取得
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <Layout>
      {/* ヘッダーセクション */}
      <section className="bg-carp-red text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">スタジアムマップ</h1>
          <p className="text-lg md:text-xl mb-6">マツダスタジアム周辺の詳細マップと混雑回避ルート</p>
        </div>
      </section>
      
      {/* マップセクション */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">マツダスタジアム周辺マップ</h2>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              {/* Google Maps API統合 */}
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '400px' }}
                  center={{ lat: 34.3917, lng: 132.4837 }} // マツダスタジアムの座標
                  zoom={15}
                >
                  <Marker position={{ lat: 34.3917, lng: 132.4837 }} />
                </GoogleMap>
              </LoadScript>
            </div>
            <p className="text-gray-600 mb-4">
              マツダスタジアムは広島市南区南蟹屋2-3-1に位置し、JR広島駅から徒歩約15分、広島電鉄「猿猴橋町」電停から徒歩約10分の場所にあります。
              周辺には複数の駐車場やアクセス経路があります。
            </p>
          </div>
          
          {/* 混雑回避ルートセクション */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-carp-red">試合日の混雑回避ルート</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>JR広島駅からの徒歩ルート（約15分）：南口を出て猿猴橋を渡り、京橋川沿いを南下</li>
                <li>広島電鉄利用：「猿猴橋町」電停下車、徒歩約10分</li>
                <li>バス利用：広島バス「マツダスタジアム」バス停下車すぐ</li>
                <li>車利用：試合日は周辺が混雑するため、広島駅周辺の駐車場の利用をおすすめ</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-carp-red">周辺施設情報</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>飲食店：スタジアム周辺には多数のカープファン向け飲食店があります</li>
                <li>コンビニ：スタジアム近くにローソン、セブンイレブンがあります</li>
                <li>駐車場：マツダスタジアム東駐車場、西駐車場（要予約）</li>
                <li>トイレ：スタジアム内各所に設置</li>
              </ul>
            </div>
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
