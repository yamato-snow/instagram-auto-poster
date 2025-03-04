'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { PostFormData } from '@/types';

// バリデーションスキーマ
const postSchema = z.object({
  instagramAccountId: z.string().min(1, 'アカウントを選択してください'),
  caption: z.string().min(1, 'キャプションを入力してください').max(2200, 'キャプションは2200文字以内で入力してください'),
  mediaFiles: z.any().refine((files) => files && files.length > 0, {
    message: '少なくとも1つの画像または動画をアップロードしてください',
  }),
  scheduledAt: z.date().refine((date) => date > new Date(), {
    message: '投稿日時は現在より後の日時を指定してください',
  }),
});

export default function NewPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // ダミーのアカウントデータ
  const accounts = [
    { id: '1', username: 'my_business_account' },
    { id: '2', username: 'my_personal_account' },
  ];

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      instagramAccountId: '',
      caption: '',
      mediaFiles: undefined,
      scheduledAt: new Date(Date.now() + 3600000), // 1時間後
    },
  });

  // 画像プレビュー用
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviewUrls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      newPreviewUrls.push(url);
    }

    setPreviewUrls(newPreviewUrls);
  };

  const onSubmit = async (data: PostFormData) => {
    setIsLoading(true);
    try {
      console.log('投稿データ:', data);
      
      // 実際のAPIリクエストはここに実装
      // const formData = new FormData();
      // formData.append('instagramAccountId', data.instagramAccountId);
      // formData.append('caption', data.caption);
      // formData.append('scheduledAt', data.scheduledAt.toISOString());
      // Array.from(data.mediaFiles).forEach((file) => {
      //   formData.append('media', file);
      // });
      
      // const response = await fetch('/api/posts', {
      //   method: 'POST',
      //   body: formData,
      // });
      
      // if (!response.ok) {
      //   throw new Error('投稿の作成に失敗しました');
      // }

      // 投稿作成成功後、投稿一覧ページにリダイレクト
      router.push('/dashboard/posts');
    } catch (err) {
      console.error('投稿作成エラー:', err);
      alert('投稿の作成に失敗しました。もう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              新規投稿を作成
            </h2>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* アカウント選択 */}
              <div>
                <label htmlFor="instagramAccountId" className="block text-sm font-medium text-gray-700">
                  投稿するアカウント
                </label>
                <select
                  id="instagramAccountId"
                  {...register('instagramAccountId')}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-instagram-pink focus:border-instagram-pink sm:text-sm rounded-md"
                >
                  <option value="">アカウントを選択</option>
                  {accounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.username}
                    </option>
                  ))}
                </select>
                {errors.instagramAccountId && (
                  <p className="mt-1 text-sm text-red-600">{errors.instagramAccountId.message}</p>
                )}
              </div>

              {/* メディアアップロード */}
              <div>
                <label htmlFor="mediaFiles" className="block text-sm font-medium text-gray-700">
                  画像・動画
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="mediaFiles"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-instagram-pink hover:text-instagram-purple focus-within:outline-none"
                      >
                        <span>ファイルをアップロード</span>
                        <input
                          id="mediaFiles"
                          type="file"
                          multiple
                          accept="image/*,video/*"
                          className="sr-only"
                          {...register('mediaFiles')}
                          onChange={(e) => {
                            register('mediaFiles').onChange(e);
                            handleFileChange(e);
                          }}
                        />
                      </label>
                      <p className="pl-1">またはドラッグ＆ドロップ</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF, MP4 (最大10ファイル)
                    </p>
                  </div>
                </div>
                {errors.mediaFiles && (
                  <p className="mt-1 text-sm text-red-600">{errors.mediaFiles.message}</p>
                )}

                {/* プレビュー */}
                {previewUrls.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">プレビュー</h4>
                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative">
                          <img
                            src={url}
                            alt={`プレビュー ${index + 1}`}
                            className="h-24 w-full object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* キャプション */}
              <div>
                <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                  キャプション
                </label>
                <div className="mt-1">
                  <textarea
                    id="caption"
                    rows={4}
                    {...register('caption')}
                    className="shadow-sm focus:ring-instagram-pink focus:border-instagram-pink block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="投稿のキャプションを入力してください..."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  ハッシュタグやメンションを含めることができます。
                </p>
                {errors.caption && (
                  <p className="mt-1 text-sm text-red-600">{errors.caption.message}</p>
                )}
              </div>

              {/* 投稿日時 */}
              <div>
                <label htmlFor="scheduledAt" className="block text-sm font-medium text-gray-700">
                  投稿日時
                </label>
                <div className="mt-1">
                  <Controller
                    control={control}
                    name="scheduledAt"
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="yyyy/MM/dd HH:mm"
                        className="shadow-sm focus:ring-instagram-pink focus:border-instagram-pink block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    )}
                  />
                </div>
                {errors.scheduledAt && (
                  <p className="mt-1 text-sm text-red-600">{errors.scheduledAt.message}</p>
                )}
              </div>

              {/* 送信ボタン */}
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="mr-3"
                  onClick={() => router.back()}
                >
                  キャンセル
                </Button>
                <Button
                  type="submit"
                  variant="instagram"
                  isLoading={isLoading}
                >
                  投稿を予約
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 