import '@/styles/globals.scss';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Metadata } from 'next';

const basePath = process.env.NODE_ENV === 'production' ? '/test-cloud-castle' : '';

export const metadata: Metadata = {
  title: "Путешествие по плотинке",
  description: "Интересный маршрут по заводской плотине в Екатеринбурге",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png` }
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
          href={`${process.env.NODE_ENV === 'production' ? '/test-cloud-castle' : ''}/fonts/Roboto-Regular.woff2`}
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
