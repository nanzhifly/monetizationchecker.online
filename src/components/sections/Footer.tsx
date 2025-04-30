import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Footer Section
// 网站页脚，深色底，白色文字，社交图标，英文界面，注释为中文
const navLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Contact', href: '#' },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FaTwitter />, href: 'https://twitter.com/', label: 'Twitter' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* 第一行：社交图标 */}
        <div className="flex gap-4 mb-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 text-white hover:text-white transition shadow"
            >
              {s.icon}
            </a>
          ))}
        </div>
        {/* 第二行：简化导航 */}
        <nav className="flex flex-wrap gap-6 justify-center mb-2 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <>
              <a
                key={link.name}
                href={link.href}
                className="hover:text-red-400 transition"
              >
                {link.name}
              </a>
              {idx < navLinks.length - 1 && <span className="mx-1 text-gray-500">|</span>}
            </>
          ))}
        </nav>
        {/* 第三行：版权信息 */}
        <div className="text-xs text-gray-500 text-center mt-2">
          © 2025 YouTube Monetization Checker. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 