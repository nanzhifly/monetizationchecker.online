"use client";
// Navbar Section
// 网站顶部导航栏，固定顶部，左侧品牌名，右侧锚点导航，主色点缀，英文界面，注释为中文

import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm sm:fixed sm:top-0 sm:left-0 sm:right-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between h-12 sm:h-16">
        {/* 品牌区：logo+品牌名，移动端缩小并自动换行 */}
        <a href="#" className="flex items-center gap-2 select-none">
          <Image
            src="/logo.svg"
            alt="YouTube Monetization Checker"
            width={28}
            height={28}
            className="h-7 w-7 sm:h-8 sm:w-8"
            priority
          />
          <span className="text-[#212529] text-[15px] sm:text-[18px] font-medium font-[system-ui,-apple-system,\'Segoe UI\',\'Helvetica Neue\',Arial,\'Noto Sans\',\'Liberation Sans\',sans-serif] leading-tight">
            <span className="block sm:inline">YouTube</span>{' '}
            <span className="block sm:inline">Monetization Checker</span>
          </span>
        </a>
        {/* 导航项：小屏隐藏，大屏显示 */}
        <div className="hidden sm:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-500 text-[15px] font-normal font-[system-ui,-apple-system,\'Segoe UI\',\'Helvetica Neue\',Arial,\'Noto Sans\',\'Liberation Sans\',sans-serif] transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* 汉堡菜单按钮：仅移动端显示，且菜单打开时隐藏 */}
        {!menuOpen && (
          <button className="sm:hidden p-2" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>
      {/* 移动端菜单下拉：插入在导航栏下方，推开内容 */}
      {menuOpen && (
        <div className="w-full bg-white shadow-md rounded-b-xl sm:hidden animate-slide-in">
          <button
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <nav className="mt-0 flex flex-col gap-0 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 text-[15px] font-normal font-[system-ui,-apple-system,'Segoe UI','Helvetica Neue',Arial,'Noto Sans','Liberation Sans',sans-serif] px-6 py-2 hover:text-red-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}

// 动画样式可在globals.css中添加：
// .animate-slide-in { animation: slideIn 0.2s cubic-bezier(.4,0,.2,1); }
// @keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } } 