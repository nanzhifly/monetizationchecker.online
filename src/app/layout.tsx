import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/sections/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YouTube Monetization Checker',
  description: 'Check YouTube video monetization eligibility and view count',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.monetizationchecker.online/" />
        {/* Open Graph 基础分享卡片 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YouTube Monetization Checker - Channel Monetize Online" />
        <meta property="og:description" content="YouTube Monetization Checker is a free online tool to check if any YouTube channel is monetized. Quickly verify and analyze channel monetization status." />
        <meta property="og:url" content="https://www.monetizationchecker.online/" />
        <meta property="og:image" content="https://www.monetizationchecker.online/logo.svg" />
        {/* Twitter Card 基础分享卡片 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Monetization Checker - Channel Monetize Online" />
        <meta name="twitter:description" content="YouTube Monetization Checker is a free online tool to check if any YouTube channel is monetized. Quickly verify and analyze channel monetization status." />
        <meta name="twitter:image" content="https://www.monetizationchecker.online/logo.svg" />
        {/* 结构化数据：WebSite、Organization、Product */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "YouTube Monetization Checker",
              "url": "https://www.monetizationchecker.online/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.monetizationchecker.online/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YouTube Monetization Checker",
              "url": "https://www.monetizationchecker.online/",
              "logo": "https://www.monetizationchecker.online/logo.svg",
              "sameAs": [
                "https://github.com/ytmonetization"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "YouTube Monetization Checker",
              "operatingSystem": "All",
              "applicationCategory": "WebApplication",
              "description": "Free online tool to check if any YouTube channel is monetized. Quickly verify and analyze channel monetization status.",
              "url": "https://www.monetizationchecker.online/",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "100"
              }
            })
          }}
        />
        {/* 多平台icon声明，保证各类设备和浏览器都能正确显示图标 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 