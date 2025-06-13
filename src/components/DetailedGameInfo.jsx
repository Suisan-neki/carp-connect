import { useState, useEffect } from 'react';

export default function DetailedGameInfo() {
  const [gameData, setGameData] = useState({
    // 基本情報
    homeTeam: "広島",
    awayTeam: "日本ハム",
    venue: "マツダスタジアム",
    date: "2025年6月13日",
    weather: "晴れ 25℃",
    
    // イニングスコア
    inningScores: {
      away: [0, 1, 0, 2, 0, 0, 1, 0, 0],
      home: [1, 0, 2, 0, 1, 0, 0, 0, 'X']
    },
    totalScore: { away: 4, home: 4 },
    
    // 現在の状況
    currentInning: "9回表",
    status: "試合中",
    
    // スタメン
    awayLineup: [
      { position: "中", name: "水谷 瞬", avg: ".213" },
      { position: "二", name: "五十嵐 亮太", avg: ".250" },
      { position: "三", name: "清宮 幸太郎", avg: ".257" },
      { position: "指", name: "レイエス", avg: ".271" },
      { position: "左", name: "郡司 裕也", avg: ".250" },
      { position: "一", name: "野村 佑希", avg: ".291" },
      { position: "右", name: "上川畑 大悟", avg: ".135" },
      { position: "遊", name: "山﨑 剛", avg: ".235" },
      { position: "捕", name: "伏見 寅威", avg: ".256" }
    ],
    
    homeLineup: [
      { position: "中", name: "大盛 穂", avg: ".313" },
      { position: "三", name: "田中 広輔", avg: ".250" },
      { position: "左", name: "ファビアン", avg: ".302" },
      { position: "一", name: "モンテロ", avg: ".276" },
      { position: "二", name: "小園 海斗", avg: ".267" },
      { position: "指", name: "坂倉 将吾", avg: ".283" },
      { position: "右", name: "末包 昇大", avg: ".261" },
      { position: "遊", name: "矢野 雅哉", avg: ".221" },
      { position: "捕", name: "石原 貴規", avg: ".200" }
    ],
    
    // バッテリー
    awayBattery: { pitcher: "伊藤", catcher: "伏見" },
    homeBattery: { pitcher: "森下", catcher: "石原" }
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      {/* ヘッダー情報 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-red-600">今日の試合</h2>
          <span className="text-sm text-gray-500">{gameData.date}</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          {gameData.venue} | {gameData.weather}
        </div>
      </div>

      {/* スコアボード */}
      <div className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">チーム</th>
                {[1,2,3,4,5,6,7,8,9].map(inning => (
                  <th key={inning} className="border border-gray-300 p-2 text-center w-8">{inning}</th>
                ))}
                <th className="border border-gray-300 p-2 text-center bg-red-100">計</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">{gameData.awayTeam}</td>
                {gameData.inningScores.away.map((score, index) => (
                  <td key={index} className="border border-gray-300 p-2 text-center">{score}</td>
                ))}
                <td className="border border-gray-300 p-2 text-center font-bold bg-red-50">{gameData.totalScore.away}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold text-red-600">{gameData.homeTeam}</td>
                {gameData.inningScores.home.map((score, index) => (
                  <td key={index} className="border border-gray-300 p-2 text-center">{score}</td>
                ))}
                <td className="border border-gray-300 p-2 text-center font-bold bg-red-50">{gameData.totalScore.home}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center mt-2">
          <span className="text-sm font-semibold">{gameData.currentInning} {gameData.status}</span>
        </div>
      </div>

      {/* スタメン */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* ビジターチーム */}
        <div>
          <h3 className="font-bold mb-3 text-center bg-gray-100 p-2">{gameData.awayTeam}</h3>
          <div className="space-y-1">
            {gameData.awayLineup.map((player, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{index + 1} {player.position} {player.name}</span>
                <span className="text-gray-600">{player.avg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ホームチーム */}
        <div>
          <h3 className="font-bold mb-3 text-center bg-red-100 p-2 text-red-600">{gameData.homeTeam}</h3>
          <div className="space-y-1">
            {gameData.homeLineup.map((player, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{index + 1} {player.position} {player.name}</span>
                <span className="text-gray-600">{player.avg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* バッテリー */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="font-semibold mb-2">バッテリー</h4>
          <p className="text-sm">{gameData.awayBattery.pitcher}</p>
          <p className="text-xs text-gray-600">{gameData.awayBattery.catcher}</p>
        </div>
        <div className="bg-red-50 p-3 rounded">
          <h4 className="font-semibold mb-2 text-red-600">バッテリー</h4>
          <p className="text-sm">{gameData.homeBattery.pitcher}</p>
          <p className="text-xs text-gray-600">{gameData.homeBattery.catcher}</p>
        </div>
      </div>
    </div>
  );
}
