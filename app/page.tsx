"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import React from 'react';
import Link from 'next/link';

Amplify.configure(outputs);

const TestPage = () => {
  return (
    <div>
      <h2 className="text-xl font-medium text-gray-800 mb-6">测试页面</h2>
      <ul className="space-y-3">
        <li>
          <Link 
            href="/page1" 
            className="block px-4 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Page 1</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </li>
        <li>
          <Link 
            href="/page2" 
            className="block px-4 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Page 2</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TestPage; 