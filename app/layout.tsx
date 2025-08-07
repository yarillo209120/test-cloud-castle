import '@/styles/globals.scss';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Путешествие по плотинке",
  description: "Интересный маршрут по заводской плотине в Екатеринбурге",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: 'apple-touch-icon.png' }
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/fonts/Roboto-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
