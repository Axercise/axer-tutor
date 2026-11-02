'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import { useLang } from '@/context/LanguageContext'

const links = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About' },
  ],
  th: [
    { href: '/', label: 'หน้าแรก' },
    { href: '/courses', label: 'หลักสูตร' },
    { href: '/about', label: 'เกี่ยวกับ' },
  ],
}

function NavLinks() {
  const pathname = usePathname()
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center gap-6">
      {links[lang].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm transition-colors ${
            pathname === link.href
              ? 'text-white font-medium'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          {link.label}
        </Link>
      ))}

      {/* Language Switch */}
      <div className="flex items-center gap-1 ml-2 border border-zinc-700 rounded-lg p-1">
        <button
          onClick={() => setLang('en')}
          className={`text-xs px-2 py-1 rounded-md transition-colors ${
            lang === 'en'
              ? 'bg-violet-600 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('th')}
          className={`text-xs px-2 py-1 rounded-md transition-colors ${
            lang === 'th'
              ? 'bg-violet-600 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          TH
        </button>
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white tracking-tight">
          Axer<span className="text-violet-400">More</span>Exer
        </Link>
        <Suspense fallback={<div className="flex gap-6 text-sm text-zinc-400">Home Courses About</div>}>
          <NavLinks />
        </Suspense>
      </div>
    </nav>
  )
}