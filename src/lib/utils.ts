import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSSクラスのマージユーティリティ
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// 日付をフォーマットする関数
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// ファイルをbase64エンコードする関数
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

// 複数の画像URLをJSON形式で保存/復元する関数
export function stringifyMediaUrls(urls: string[]): string {
  return JSON.stringify(urls);
}

export function parseMediaUrls(jsonString: string): string[] {
  try {
    return JSON.parse(jsonString) as string[];
  } catch (error) {
    console.error('Failed to parse media URLs:', error);
    return [];
  }
}

// 投稿ステータスに応じた表示テキストと色を返す関数
export function getStatusConfig(status: string): { text: string; color: string } {
  switch (status) {
    case 'SCHEDULED':
      return { text: '予定済み', color: 'text-blue-500 bg-blue-50' };
    case 'PUBLISHED':
      return { text: '投稿済み', color: 'text-green-500 bg-green-50' };
    case 'FAILED':
      return { text: '失敗', color: 'text-red-500 bg-red-50' };
    default:
      return { text: '不明', color: 'text-gray-500 bg-gray-50' };
  }
} 