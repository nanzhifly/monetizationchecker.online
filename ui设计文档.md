# YouTube Monetization Checker UI设计文档

> 本文档根据《需求设计文档.md》整理，适合欧美用户，所有界面文本为英文，说明为中文，便于团队开发和维护。

---

## 1. 设计风格定位
- 现代简洁：大面积留白，卡片式布局，圆角，阴影，响应式。
- 欧美主流：明亮色调，主色红（YouTube品牌色），辅以灰、白、蓝等。
- 易用性：大按钮、大输入框、清晰分区，移动端友好。
- 视觉吸引力：渐变背景、品牌色点缀、图标和插画适度使用。

---

## 2. 页面结构与UI建议

### 2.1 Hero Section（首页顶部）
- 背景：淡灰或白色渐变，顶部可用 YouTube 红色渐变条。
- 标题：大号粗体，品牌色渐变字。
- 简介：简短副标题，灰色字体。
- 输入框：圆角、阴影，输入提示英文。
- 按钮：主色红，hover 深红，圆角，阴影。
- 结果卡片：白色卡片，圆角，阴影，内容居中，图片圆角。

### 2.2 Features Section（工具特点）
- 三栏或两栏卡片，每个卡片有图标、标题、简短描述。
- 图标：可用 Heroicons、Lucide、FontAwesome 等现代风格。
- 卡片：白底、圆角、阴影，hover 时微微上浮。

### 2.3 Guide Section（使用指南）
- 步骤条：横向或竖向，数字/图标+简短说明。
- 配色：主色点缀，步骤高亮。

### 2.4 FAQ Section
- 手风琴折叠面板，每个问题展开显示答案。
- 问题：加粗，答案灰色。

### 2.5 Footer
- 深色底（如深灰），白色或灰色文字。
- 社交图标：圆形、主色hover。
- 版权：小号字体，居中。

---

## 3. 颜色与字体建议
- 主色：#FF0000（YouTube红）
- 辅色：#2563eb（蓝）、#f3f4f6（浅灰）、#ffffff（白）、#111827（深灰）
- 按钮hover：#b91c1c
- 字体：Inter、Roboto、Helvetica Neue，英文无衬线体
- 圆角：8px-16px
- 阴影：卡片和按钮均有轻微阴影

---

## 4. 交互动效
- 按钮：hover 变深、轻微缩放
- 卡片：hover 上浮、阴影增强
- 输入框：focus 主色描边
- 加载中：按钮内 loading spinner
- 错误提示：红色背景淡色卡片

---

## 5. 响应式设计
- 移动端：输入框、按钮、卡片全宽，间距适当增大
- 平板/桌面：多栏布局，内容居中

---

## 6. 主要组件英文示例

### Hero Section
```jsx
<section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 flex flex-col items-center">
  <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-4">
    YouTube Monetization Checker
  </h1>
  <p className="text-xl text-gray-600 mb-8">
    Quickly check if your YouTube content meets monetization requirements
  </p>
  <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mb-8">
    <input className="flex-1 px-4 py-3 rounded-lg border shadow focus:ring-2 focus:ring-red-500" placeholder="Enter a YouTube video, Shorts, or channel link" />
    <button className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white rounded-lg font-medium shadow transition">Check Now</button>
  </form>
  {/* 结果卡片 */}
</section>
```

### Features Section
```jsx
<section className="py-12 bg-white">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <Icon className="text-red-500 w-8 h-8 mb-4" />
      <h3 className="font-bold text-lg mb-2">Fast & Accurate</h3>
      <p className="text-gray-600">Get instant results with real YouTube data.</p>
    </div>
    {/* ...更多卡片 */}
  </div>
</section>
```

### FAQ Section
```jsx
<section className="py-12 bg-gray-50">
  <div className="max-w-3xl mx-auto">
    <Accordion>
      <AccordionItem question="How does it work?" answer="We use YouTube Data API to check your content." />
      {/* ... */}
    </Accordion>
  </div>
</section>
```

### Footer
```jsx
<footer className="bg-gray-900 text-gray-300 py-8">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <div>© 2024 YouTube Monetization Checker</div>
    <div className="flex gap-4 mt-4 md:mt-0">
      {/* 社交图标 */}
    </div>
  </div>
</footer>
```

---

## 7. 总结
- 整体风格现代、简洁、欧美主流，主色红，辅以灰白蓝。
- 组件圆角、阴影、响应式，交互友好。
- 所有界面文本英文，注释中文，便于维护和国际化。

如需具体到每个组件的详细 UI 代码或想看某一部分的完整实现，请随时联系设计/开发团队！ 