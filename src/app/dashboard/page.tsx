import { DashboardLayout } from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  // ダミーデータ
  const stats = [
    { name: '予定された投稿', value: '5' },
    { name: '投稿済み', value: '12' },
    { name: '接続済みアカウント', value: '2' },
  ];

  const upcomingPosts = [
    {
      id: '1',
      caption: '新商品のお知らせ！今週末から発売開始します。',
      scheduledAt: new Date('2023-06-15T10:00:00'),
      account: 'my_business_account',
    },
    {
      id: '2',
      caption: '夏のキャンペーン開始！詳細はプロフィールのリンクから。',
      scheduledAt: new Date('2023-06-18T15:30:00'),
      account: 'my_business_account',
    },
    {
      id: '3',
      caption: 'お客様インタビュー第3回。今回は東京からのゲストです。',
      scheduledAt: new Date('2023-06-20T18:00:00'),
      account: 'my_personal_account',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* ヘッダー */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              ダッシュボード
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link href="/dashboard/posts/new">
              <Button variant="instagram">新規投稿を作成</Button>
            </Link>
          </div>
        </div>

        {/* 統計カード */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          ))}
        </div>

        {/* 予定された投稿 */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              予定された投稿
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              今後投稿される予定のコンテンツ
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {upcomingPosts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/dashboard/posts/${post.id}`}
                  className="block hover:bg-gray-50"
                >
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-instagram-pink truncate">
                        {post.caption}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {post.account}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          投稿予定
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <svg
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>
                          {post.scheduledAt.toLocaleDateString('ja-JP', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <Link
              href="/dashboard/posts"
              className="text-sm font-medium text-instagram-pink hover:text-instagram-purple"
            >
              すべての投稿を表示 →
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 