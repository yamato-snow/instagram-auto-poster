'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-instagram-pink">
              Instagram Auto Poster
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-instagram-pink text-sm font-medium text-gray-900 hover:text-instagram-pink"
            >
              ダッシュボード
            </Link>
            <Link
              href="/dashboard/posts"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-instagram-pink text-sm font-medium text-gray-900 hover:text-instagram-pink"
            >
              投稿管理
            </Link>
            <Link
              href="/dashboard/accounts"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-instagram-pink text-sm font-medium text-gray-900 hover:text-instagram-pink"
            >
              アカウント管理
            </Link>
          </nav>

          {/* ユーザーメニュー */}
          <div className="hidden md:ml-6 md:flex md:items-center">
            <Button variant="instagram" size="sm">
              新規投稿
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-instagram-pink text-base font-medium text-gray-600 hover:text-instagram-pink hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              ダッシュボード
            </Link>
            <Link
              href="/dashboard/posts"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-instagram-pink text-base font-medium text-gray-600 hover:text-instagram-pink hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              投稿管理
            </Link>
            <Link
              href="/dashboard/accounts"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-instagram-pink text-base font-medium text-gray-600 hover:text-instagram-pink hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              アカウント管理
            </Link>
            <div className="pl-3 pr-4 py-2">
              <Button variant="instagram" size="sm" className="w-full">
                新規投稿
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 