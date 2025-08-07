import '@/styles/globals.scss';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Metadata } from 'next';
import Script from 'next/script';

const basePath = process.env.NODE_ENV === 'production' ? '/test-cloud-castle' : '';

export const metadata: Metadata = {
  title: {
    default: "Путешествие по плотинке",
    template: "%s | Плотинка Екатеринбург"
  },
  description: "Интерактивный гид по исторической плотине 1723 года с картой маршрута и игрой-квестом",
  keywords: ["плотинка Екатеринбург", "исторический маршрут", "де Геннин", "заводская плотина"],
  openGraph: {
    title: "Тайны плотинки: интерактивный маршрут",
    description: "Откройте историю первой плотины Екатеринбурга",
    url: `https://yarillo209120.github.io${basePath}`,
    siteName: "Плотинка",
    images: [
      {
        url: `${basePath}/images/og-preview.webp`,
        width: 1200,
        height: 630,
        alt: "Историческая плотина Екатеринбурга",
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Путешествие по плотинке",
    description: "Интерактивный маршрут по историческому месту",
    images: [`${basePath}/images/og-preview.webp`]
  },
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Плотинка Екатеринбург",
    "description": "Первая заводская плотина города 1723 года постройки",
    "url": `https://yarillo209120.github.io${basePath}`,
    "image": `${basePath}/images/og-preview.webp`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Екатеринбург",
      "streetAddress": "Плотинка, Городской пруд"
    },
    "hasMap": "https://yandex.ru/maps/-/CDBZBBWg",
    "openingHours": "Круглосуточно",
    "priceRange": "Бесплатно"
  };

  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href={`${basePath}/fonts/Roboto-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#282828" />
        <link rel="canonical" href={`https://yarillo209120.github.io${basePath}`} />
        <Script 
          id="website-schema" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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