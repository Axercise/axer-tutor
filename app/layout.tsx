import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'AxerMoreExer',
  description: 'Learn smarter with structured lessons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}