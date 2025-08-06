import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deeper Life Bible Church - Huntsville, Alabama',
  description: 'Welcome to Deeper Life Bible Church Huntsville. Join us for Sunday worship, Bible study, and fellowship in the heart of Alabama.',
  keywords: 'church, bible, christian, huntsville, alabama, worship, prayer, fellowship',
  authors: [{ name: 'Deeper Life Bible Church Huntsville' }],
  openGraph: {
    title: 'Deeper Life Bible Church - Huntsville, Alabama',
    description: 'Welcome to Deeper Life Bible Church Huntsville. Join us for Sunday worship, Bible study, and fellowship in the heart of Alabama.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.deeperlifehuntsville.org',
    siteName: 'Deeper Life Bible Church Huntsville',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
