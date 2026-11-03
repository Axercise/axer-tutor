'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense, useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'

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

const labels = {
  en: { openMenu: 'Open navigation menu', closeMenu: 'Close navigation menu', navigation: 'Main navigation', languageSwitch: 'Language switcher', switchToLight: 'Switch to light theme', switchToDark: 'Switch to dark theme' },
  th: { openMenu: 'เปิดเมนูนำทาง', closeMenu: 'ปิดเมนูนำทาง', navigation: 'เมนูหลัก', languageSwitch: 'สลับภาษา', switchToLight: 'เปลี่ยนเป็นธีมสว่าง', switchToDark: 'เปลี่ยนเป็นธีมมืด' },
}

function PageLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname()
  const { lang } = useLang()

  return (
    <div className={mobile ? 'flex flex-col gap-1' : 'flex items-center gap-1'}>
      {links[lang].map((link) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={mobile
              ? `rounded-lg px-3 py-3 text-sm transition-colors ${active ? 'bg-violet-500/15 font-medium text-violet-300' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'}`
              : `rounded-md px-3 py-2 text-sm transition-colors ${active ? 'bg-violet-500/10 font-medium text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

function LanguageSwitch() {
  const { lang, setLang } = useLang()
  const t = labels[lang]

  return (
    <div className="flex items-center gap-1 rounded-lg border border-zinc-700 p-1" aria-label={t.languageSwitch}>
      <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={`min-h-8 rounded-md px-2 text-xs transition-colors ${lang === 'en' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'}`}>EN</button>
      <button type="button" onClick={() => setLang('th')} aria-pressed={lang === 'th'} className={`min-h-8 rounded-md px-2 text-xs transition-colors ${lang === 'th' ? 'bg-violet-600 text-white' : 'text-zinc-400 hover:text-white'}`}>TH</button>
    </div>
  )
}

function ThemeToggle() {
  const { lang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const t = labels[lang]

  return (
    <button type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? t.switchToLight : t.switchToDark} title={theme === 'dark' ? t.switchToLight : t.switchToDark} className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-base text-zinc-400 transition-all hover:border-violet-500/50 hover:text-violet-400">
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  )
}

function NavbarContent() {
  const { lang } = useLang()
  const t = labels[lang]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
      <Link href="/" onClick={() => setIsMenuOpen(false)} className="shrink-0 text-base font-semibold tracking-tight text-white sm:text-lg">
        Axer<span className="text-violet-400">More</span>Exer
      </Link>

      <div className="hidden items-center gap-2 md:flex">
        <nav aria-label={t.navigation}><PageLinks /></nav>
        <div className="ml-2 flex items-center gap-2 border-l border-zinc-800 pl-4">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? t.closeMenu : t.openMenu} className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-xl text-zinc-300 transition-colors hover:border-violet-500/50 hover:text-violet-300">
          <span aria-hidden="true">{isMenuOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-zinc-800 bg-zinc-950 px-4 py-4 shadow-2xl backdrop-blur-xl md:hidden">
          <nav aria-label={t.navigation}><PageLinks mobile onNavigate={() => setIsMenuOpen(false)} /></nav>
          <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4">
            <p className="text-xs font-medium tracking-wide text-zinc-500">LANGUAGE</p>
            <LanguageSwitch />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <Suspense fallback={<div className="mx-auto h-14 max-w-6xl px-4 sm:px-6 md:px-8" aria-hidden="true" />}>
        <NavbarContent />
      </Suspense>
    </header>
  )
}
