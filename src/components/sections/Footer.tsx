import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Footer Section
// 网站页脚，主背景色，分割线，移动端自适应，英文界面，注释为中文
const navLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <>
      {/* 分割线，宽度与内容区一致 */}
      <div className="w-full border-t border-gray-200 mt-8">
        {/* 空div用于分割线 */}
      </div>
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 my-4">
          {/* 第二行：简化导航，移动端居中堆叠，PC端横排 */}
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center mb-2 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="hover:text-red-400 transition"
                >
                  {link.name}
                </a>
                {idx < navLinks.length - 1 && <span className="hidden sm:inline mx-1 text-gray-500">|</span>}
              </div>
            ))}
          </nav>
          {/* 第三行：版权信息 */}
          <div className="text-xs text-gray-500 text-center mt-2">
            © 2025 YouTube Monetization Checker. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
} 
// 说明：
// 1. 页脚背景色统一为 bg-white，去除渐变。
// 2. 分割线 border-t border-gray-200，宽度与内容区一致。
// 3. 移动端 flex-col，PC端 flex-row，保证自适应。
// 4. 所有内容居中，间距适当，icon/文字尺寸不变。 