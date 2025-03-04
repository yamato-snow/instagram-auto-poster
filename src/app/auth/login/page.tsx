'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';

// バリデーションスキーマ
const loginSchema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(8, 'パスワードは8文字以上である必要があります'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // ここで実際のログイン処理を行う
      // 今回はモックとして、ダッシュボードにリダイレクト
      console.log('ログイン情報:', data);
      
      // 実際のAPIリクエストはここに実装
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // if (!response.ok) {
      //   throw new Error('ログインに失敗しました');
      // }

      // ログイン成功後、ダッシュボードにリダイレクト
      router.push('/dashboard');
    } catch (err) {
      console.error('ログインエラー:', err);
      setError('メールアドレスまたはパスワードが正しくありません');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウントにログイン
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            または{' '}
            <Link
              href="/auth/register"
              className="font-medium text-instagram-pink hover:text-instagram-purple"
            >
              新規アカウントを作成
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register('email')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-instagram-pink focus:border-instagram-pink focus:z-10 sm:text-sm"
                placeholder="メールアドレス"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register('password')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-instagram-pink focus:border-instagram-pink focus:z-10 sm:text-sm"
                placeholder="パスワード"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-instagram-pink focus:ring-instagram-pink border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                ログイン状態を保持
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="font-medium text-instagram-pink hover:text-instagram-purple"
              >
                パスワードをお忘れですか？
              </Link>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="instagram"
              className="w-full"
              isLoading={isLoading}
            >
              ログイン
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 