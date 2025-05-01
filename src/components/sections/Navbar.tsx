// Navbar Section
// 网站顶部导航栏，固定顶部，左侧品牌名，右侧锚点导航，主色点缀，英文界面，注释为中文

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
        {/* 左侧品牌名 */}
        <a href="#" className="font-extrabold text-xl bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent select-none">
          YouTube Monetization Checker
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