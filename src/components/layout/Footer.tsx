export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Instagram Auto Poster. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            このアプリケーションはInstagramの公式アプリではありません。
          </p>
        </div>
      </div>
    </footer>
  );
} 