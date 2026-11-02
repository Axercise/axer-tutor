'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'

const content = {
  en: {
    badge: 'Tutor · Creator · Developer',
    title: 'Learn smarter with',
    title2: 'structured lessons',
    desc: "I'm Axer — I break down complex topics into clear lessons with video walkthroughs and written guides. Built for students who want to go deeper.",
    browse: 'Browse courses',
    about: 'About me',
    stats: [
      { num: '12+', label: 'Courses' },
      { num: '50+', label: 'Video lessons' },
      { num: '100%', label: 'Free to access' },
    ],
  },
  th: {
    badge: 'ติวเตอร์ · ครีเอเตอร์ · นักพัฒนา',
    title: 'เรียนรู้อย่างมีประสิทธิภาพ',
    title2: 'ด้วยบทเรียนที่มีโครงสร้างชัดเจน',
    desc: 'ผมชื่อ Axer — ผมแตกเรื่องซับซ้อนให้เป็นบทเรียนที่เข้าใจง่าย พร้อมวิดีโอและเอกสารประกอบ เหมาะสำหรับคนที่อยากเรียนรู้อย่างลึกซึ้ง',
    browse: 'ดูหลักสูตร',
    about: 'เกี่ยวกับผม',
    stats: [
      { num: '12+', label: 'หลักสูตร' },
      { num: '50+', label: 'วิดีโอบทเรียน' },
      { num: '100%', label: 'เรียนฟรี' },
    ],
  },
}

export default function Home() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="pt-14 min-h-screen bg-zinc-950">
      <section className="max-w-5xl mx-auto px-8 pt-32 pb-20">
        <p className="text-violet-400 text-sm font-medium mb-4">{t.badge}</p>
        <h1 className="text-5xl font-bold text-white leading-tight mb-6">
          {t.title}<br />{t.title2}
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">{t.desc}</p>
        <div className="flex gap-4">
          <Link href="/courses" className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            {t.browse}
          </Link>
          <Link href="/about" className="border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            {t.about}
          </Link>
        </div>
        <div className="flex gap-16 mt-20 pt-10 border-t border-zinc-800">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.num}</div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}