// Navbar Section
// 网站顶部导航栏，固定顶部，左侧品牌名，右侧锚点导航，主色点缀，英文界面，注释为中文

import Image from 'next/image';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* 左侧品牌logo+品牌名 */}
        <a href="#" className="flex items-center gap-2 select-none">
          <Image
            src="/logo.svg"
            alt="YouTube Monetization Checker"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-[#212529] text-[20px] font-extrabold font-sans leading-none">YouTube Monetization Checker</span>
        </a>
        {/* 右侧导航链接 */}
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-500 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 