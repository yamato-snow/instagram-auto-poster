import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-instagram-pink">
                Instagram Auto Poster
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-instagram-pink"
              >
                ログイン
              </Link>
              <Link href="/auth/register">
                <Button variant="instagram" size="sm">
                  無料登録
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Instagramの投稿を<br />
                <span className="text-instagram-pink">自動化</span>しよう
              </h1>
              <p className="text-lg text-gray-700">
                Instagram Auto Posterを使えば、投稿を事前に予約し、最適なタイミングで自動投稿できます。時間を節約して、コンテンツ作成に集中しましょう。
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/auth/register">
                  <Button variant="instagram" size="lg">
                    無料で始める
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">
                    機能を見る
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-image.jpg"
                alt="Instagram Auto Poster"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 機能セクション */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">主な機能</h2>
            <p className="mt-4 text-lg text-gray-600">
              Instagram Auto Posterで投稿管理を効率化
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 機能1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-instagram-pink rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                投稿予約
              </h3>
              <p className="text-gray-600">
                投稿を事前に作成し、最適な時間に自動投稿。時間を節約して効率的に運用できます。
              </p>
            </div>

            {/* 機能2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-instagram-purple rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                複数アカウント管理
              </h3>
              <p className="text-gray-600">
                複数のInstagramアカウントを一元管理。切り替えの手間なく、効率的に運用できます。
              </p>
            </div>

            {/* 機能3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                分析レポート
              </h3>
              <p className="text-gray-600">
                投稿のパフォーマンスを分析し、最適な投稿戦略を立てるためのデータを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-instagram-pink py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            今すぐ始めましょう
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Instagram Auto Posterで投稿を自動化し、ソーシャルメディア運用を効率化しましょう。
          </p>
          <Link href="/auth/register">
            <Button
              variant="secondary"
              size="lg"
              className="font-semibold"
            >
              無料アカウントを作成
            </Button>
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Instagram Auto Poster</h3>
              <p className="text-gray-400 text-sm">
                Instagramの投稿を簡単に予約・自動化できるWebアプリケーション
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">リンク</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">ホーム</Link></li>
                <li><Link href="#features" className="hover:text-white">機能</Link></li>
                <li><Link href="/pricing" className="hover:text-white">料金プラン</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">法的情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-white">利用規約</Link></li>
                <li><Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">お問い合わせ</h4>
              <p className="text-gray-400">
                ご質問やフィードバックがありましたら、お気軽にお問い合わせください。
              </p>
              <Link href="/contact" className="text-instagram-pink hover:underline mt-2 inline-block">
                お問い合わせフォーム
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Instagram Auto Poster. All rights reserved.</p>
            <p className="mt-1">このアプリケーションはInstagramの公式アプリではありません。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
