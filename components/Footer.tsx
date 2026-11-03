'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'

const content = {
  en: {
    description: 'A focused learning platform for practical AI, coding, and the ideas that help you keep moving.',
    explore: 'Explore',
    platform: 'Platform',
    home: 'Home',
    courses: 'Courses',
    about: 'About Axer',
    manifesto: 'Axer manifesto',
    independent: 'Independent learning platform',
    status: 'Official channels are being prepared.',
    statusLabel: 'STATUS',
    copyright: 'All rights reserved.',
    navigationLabel: 'Footer navigation',
  },
  th: {
    description: 'แพลตฟอร์มการเรียนรู้ที่ตรงประเด็น สำหรับ AI, coding และไอเดียที่ช่วยให้คุณก้าวต่อไปได้',
    explore: 'สำรวจ',
    platform: 'แพลตฟอร์ม',
    home: 'หน้าแรก',
    courses: 'หลักสูตร',
    about: 'เกี่ยวกับ Axer',
    manifesto: 'แนวคิดของ Axer',
    independent: 'แพลตฟอร์มการเรียนรู้อิสระ',
    status: 'กำลังเตรียมช่องทาง Official',
    statusLabel: 'สถานะ',
    copyright: 'สงวนลิขสิทธิ์',
    navigationLabel: 'เมนูท้ายเว็บไซต์',
  },
}

export default function Footer() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950" aria-label={t.navigationLabel}>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-white">
              Axer<span className="text-violet-400">More</span>Exer
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">{t.description}</p>
            <p className="mt-6 font-mono text-[11px] tracking-wide text-violet-400">{'// '}{t.manifesto}</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500">{t.explore}</p>
            <nav className="mt-5 flex flex-col items-start gap-3 text-sm" aria-label={t.navigationLabel}>
              <Link href="/" className="text-zinc-400 transition-colors hover:text-violet-300">{t.home}</Link>
              <Link href="/courses" className="text-zinc-400 transition-colors hover:text-violet-300">{t.courses}</Link>
              <Link href="/about" className="text-zinc-400 transition-colors hover:text-violet-300">{t.about}</Link>
            </nav>
          </div>

          <div className="border-t border-zinc-800 pt-7 md:border-t-0 md:border-l md:pl-7 md:pt-0">
            <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500">{t.platform}</p>
            <p className="mt-5 text-sm font-medium text-white">{t.independent}</p>
            <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-zinc-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden="true" />
              <p>{t.status}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AxerMoreExer. {t.copyright}</p>
          <p className="font-mono text-[11px] text-zinc-600">{t.statusLabel}: BUILDING</p>
        </div>
      </div>
    </footer>
  )
}
