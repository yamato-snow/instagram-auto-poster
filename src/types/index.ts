// インスタグラムアカウント型
export type InstagramAccountType = {
  id: string;
  userId: string;
  accessToken?: string | null;
  username: string;
  profilePicture?: string | null;
  isConnected: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// 投稿状態の型
export enum PostStatus {
  SCHEDULED = 'SCHEDULED',
  PUBLISHED = 'PUBLISHED',
  FAILED = 'FAILED',
}

// 投稿の型
export type PostType = {
  id: string;
  userId: string;
  instagramAccountId: string;
  caption: string;
  mediaUrls: string; // JSON文字列
  scheduledAt: Date;
  publishedAt?: Date | null;
  status: PostStatus;
  createdAt: Date;
  updatedAt: Date;
  
  // 関連データ
  instagramAccount?: InstagramAccountType;
};

// 投稿作成/編集フォームの型
export type PostFormData = {
  instagramAccountId: string;
  caption: string;
  mediaFiles: any; // FileListまたはFile[]を受け入れるように変更
  scheduledAt: Date;
};

// ユーザー型
export type UserType = {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
  instagramAccounts?: InstagramAccountType[];
};

// API レスポンス型
export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
}; 