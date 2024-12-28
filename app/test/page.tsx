import React from 'react';
import Link from 'next/link';

const TestPage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-center text-lg font-bold mb-4">测试页面</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/page1" className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 1</Link>
        </li>
        <li>
          <Link href="/page2" className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Page 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default TestPage; 