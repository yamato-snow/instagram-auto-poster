'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// ボタンのバリエーション
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'instagram';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      disabled,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    // ボタンのサイズに応じたクラス
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    };

    // ボタンのバリエーションに応じたクラス
    const variantClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
      outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      instagram: 'bg-gradient-to-r from-instagram-purple via-instagram-pink to-[#FCAF45] text-white hover:opacity-90 focus:ring-instagram-pink',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'relative inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        <span className={isLoading ? 'invisible' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 