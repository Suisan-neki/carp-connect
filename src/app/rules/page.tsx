import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function StadiumRules() {
  return (
    <Layout>
      {/* ヘッダーセクション */}
      <section className="bg-carp-red text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">球場ルールガイド</h1>
          <p className="text-lg md:text-xl mb-6">多言語対応の球場ルールと持ち込み制限の視覚的な説明</p>
        </div>
      </section>
      
      {/* 重要ポイントセクション - 警備員からの特別アドバイス */}
      <section className="py-10 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">⚠️ 警備員からの重要アドバイス ⚠️</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-yellow-500">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠️</span>
                <p><strong>手荷物検査は必須です</strong> - 複数あるカバンも全て開けて警備員に中身を見せてください。警備員は目視だけでなく触って確認をするので、素直に応じてください。</p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠️</span>
                <p><strong>ビン、カン、ペットボトルの持ち込みは禁止です</strong> - 手荷物検査所の傍にある白いテントで専用容器に移し替えが必要です。申告せずに持ち込んだ場合は最悪出入り禁止になるので要注意！</p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠️</span>
                <p><strong>凍らせたペットボトルも持ち込み禁止です</strong> - 液体の状態で専用容器に移し替える必要があります。</p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠️</span>
                <p><strong>チケットは正規ルートで購入してください</strong> - 不正なチケットでは入場できません。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* アクセス情報セクション */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">アクセス情報と便利なヒント</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-carp-red">おすすめ入場ルート</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>JRゲートからの入場が空いていておススメ</strong>です（画像は後日追加予定）</li>
                <li><strong>ベビーカーや車いすで来場の方はメインゲートを使ってください</strong>（正面ゲート、JRゲートにはエレベーターがないため）</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-carp-red">駐車・交通情報</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>帰りのタクシー乗り場は非常に混雑します</strong>。時間に余裕を持って行動しましょう</li>
                <li><strong>自転車置き場は2か所</strong>あります：正面付近と3塁側（コストコ寄り）</li>
                <li>試合終了後は周辺道路が混雑するため、公共交通機関の利用をおすすめします</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 持ち込み禁止品セクション */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">持ち込み禁止品</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="text-red-500 text-4xl mb-2">🚫</div>
                <h3 className="font-bold mb-2">ビン・カン・ペットボトル</h3>
                <p className="text-sm text-gray-600 text-center">専用容器への移し替えが必要です</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="text-red-500 text-4xl mb-2">🚫</div>
                <h3 className="font-bold mb-2">危険物</h3>
                <p className="text-sm text-gray-600 text-center">銃砲刀剣類、花火、爆竹、劇薬物等</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="text-red-500 text-4xl mb-2">🚫</div>
                <h3 className="font-bold mb-2">ペット</h3>
                <p className="text-sm text-gray-600 text-center">盲導犬、介助犬、聴導犬等を除く</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="text-red-500 text-4xl mb-2">🚫</div>
                <h3 className="font-bold mb-2">大型の応援用具</h3>
                <p className="text-sm text-gray-600 text-center">許可されていない旗、横断幕、鳴り物等</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="text-red-500 text-4xl mb-2">🚫</div>
                <h3 className="font-bold mb-2">凍らせたペットボトル</h3>
                <p className="text-sm text-gray-600 text-center">液体状態での移し替えが必要です</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <div className="text-red-500 text-4xl mb-2">🚫</div>
                <h3 className="font-bold mb-2">その他危険物・迷惑物</h3>
                <p className="text-sm text-gray-600 text-center">他のお客様の観戦の妨げになるもの</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 球場内での禁止行為セクション */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">球場内での禁止行為</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>喫煙コーナー以外での喫煙</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>粗暴行為（暴言、脅迫、恐喝、威嚇、暴力等）</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>施設・設備の損壊、毀損</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>物を投げる行為</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>立入禁止場所への立入行為</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>フェンス、柵、手すり等へよじ登る行為</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>許可なき物品販売、宣伝広告、チラシ配布</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✖</span>
                <p>指定席以外での観戦、空席への移動</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">スタジアム周辺の情報が必要ですか？</h2>
          <p className="text-lg mb-6">マツダスタジアム周辺の詳細マップと混雑回避ルートはこちら</p>
          <Link href="/stadium-map" className="bg-carp-red text-white font-bold py-3 px-8 rounded-lg hover:bg-carp-dark-red transition">
            スタジアムマップを見る
          </Link>
        </div>
      </section>
    </Layout>
  );
}
