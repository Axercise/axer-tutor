'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { useEffect, useRef, useState } from 'react'

const content = {
  en: {
    badge: 'IT Student · Creator · AI Enthusiast',
    quote: '"Not everyone learns the same way. That\'s not a flaw — that\'s the system failing you."',
    name: 'Tammadon Suksa',
    aka: 'aka Axer',
    role: 'IT Student @ KMITL · Year 1',
    desc: "I used to be the student who zoned out in every class. Not because I was dumb — because the way we teach hasn't caught up with how we actually think. So I decided to change that.",
    browse: 'Browse Courses',
    about: 'About Me',
    stats: [
      { num: '5+', label: 'Courses' },
      { num: '100%', label: 'Free to access' },
      { num: 'Short', label: 'Bite-sized lessons' },
    ],
    missionTitle: 'Why this exists',
    missionDesc: "Attention spans are shrinking. Classrooms haven't changed. There's a gap — and I'm building the bridge. Every lesson here is short, direct, and built for the way your brain actually works in 2025.",
    topicsTitle: 'What I teach',
    topics: [
      { icon: '🤖', title: 'AI Workflows', desc: 'GSD, MCP, Prompt Engineering — practical AI for real use.' },
      { icon: '💻', title: 'Vibe Coding', desc: 'What every AI-assisted developer needs to know.' },
      { icon: '🔐', title: 'Personal AI Tools', desc: 'Build your own AI secretary, assistant, and automation.' },
      { icon: '📐', title: 'CS Fundamentals', desc: 'DSA, math, and the foundations that actually matter.' },
    ],
    testimonialTitle: 'What people say',
    testimonials: [
      {
        quote: "I was even confused asking AI. Then I watched Axer's clip — just a few minutes and every problem was solved.",
        name: 'Anonymous Student',
        role: 'First-year university student',
      },
    ],
    socials: 'Find me on',
    ctaTitle: 'Ready to learn differently?',
    ctaDesc: 'No 3-hour lectures. No boring slides. Just short, clear lessons that respect your time.',
    ctaBrowse: 'Start Learning',
  },
  th: {
    badge: 'นักศึกษา IT · ครีเอเตอร์ · คนติด AI',
    quote: '"ทุกคนไม่ได้เรียนรู้แบบเดียวกัน นั่นไม่ใช่ความผิดของคุณ — แต่เป็นระบบที่ล้มเหลว"',
    name: 'ธรรมดล สุขสะ',
    aka: 'หรือที่รู้จักกันในชื่อ Axer',
    role: 'นักศึกษา IT @ KMITL · ปี 1',
    desc: 'ผมเคยเป็นเด็กที่นั่งเหม่อในห้องเรียนทุกวิชา ไม่ใช่เพราะโง่ แต่เพราะวิธีการสอนมันไม่ได้ถูกออกแบบมาสำหรับสมองของเรา ผมเลยตัดสินใจเปลี่ยนมันเอง',
    browse: 'ดูหลักสูตร',
    about: 'เกี่ยวกับผม',
    stats: [
      { num: '5+', label: 'หลักสูตร' },
      { num: '100%', label: 'เรียนฟรี' },
      { num: 'สั้น', label: 'บทเรียนกระชับ' },
    ],
    missionTitle: 'ทำไมถึงสร้างสิ่งนี้ขึ้นมา',
    missionDesc: 'สมาธิของคนเราสั้นลงทุกวัน แต่ห้องเรียนยังไม่เปลี่ยน มีช่องว่างอยู่ตรงนั้น และผมกำลังสร้างสะพานเชื่อม ทุก lesson ที่นี่สั้น ตรงประเด็น และออกแบบมาสำหรับสมองที่ทำงานอยู่ในยุค 2025',
    topicsTitle: 'สอนเรื่องอะไรบ้าง',
    topics: [
      { icon: '🤖', title: 'AI Workflows', desc: 'GSD, MCP, Prompt Engineering — AI ที่ใช้งานได้จริง' },
      { icon: '💻', title: 'Vibe Coding', desc: 'สิ่งที่นักพัฒนายุค AI ต้องรู้' },
      { icon: '🔐', title: 'AI ส่วนตัว', desc: 'สร้าง AI secretary และระบบ automation ของตัวเอง' },
      { icon: '📐', title: 'CS พื้นฐาน', desc: 'DSA คณิตศาสตร์ และรากฐานที่สำคัญจริงๆ' },
    ],
    testimonialTitle: 'เสียงจากคนที่ดู',
    testimonials: [
      {
        quote: 'ขนาดถาม AI ยังงงไปงงมาเลย พอมาดูคลิปพี่ แปปเดียว ไม่กี่นาที ปัญหาทุกอย่างถูกแก้ไขหมดเลย',
        name: 'น้องนักศึกษา',
        role: 'นักศึกษาปี 1',
      },
    ],
    socials: 'ติดตามได้ที่',
    ctaTitle: 'พร้อมเรียนรู้แบบใหม่แล้วหรือยัง?',
    ctaDesc: 'ไม่มีการบรรยาย 3 ชั่วโมง ไม่มีสไลด์น่าเบื่อ แค่บทเรียนสั้นๆ ที่เคารพเวลาของคุณ',
    ctaBrowse: 'เริ่มเรียนเลย',
  },
}

const socials = [
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

export default function Home() {
  const { lang } = useLang()
  const t = content[lang]
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="pt-14 min-h-screen bg-zinc-950 overflow-x-hidden">

      {/* Custom Cursor */}
      {mounted && (
        <>
          <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border border-violet-500/60 transition-transform duration-100 ease-out"
            style={{ boxShadow: '0 0 12px rgba(139,92,246,0.4)' }}
          />
          <div
            ref={cursorDotRef}
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-violet-400 transition-transform duration-75 ease-out"
            style={{ boxShadow: '0 0 8px rgba(139,92,246,0.9)' }}
          />
        </>
      )}

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-24 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left */}
          <div className="flex-1">
            <p className="text-violet-400 text-sm font-medium mb-6 tracking-wide">{t.badge}</p>
            <h1 className="text-5xl font-bold text-white leading-tight mb-2">{t.name}</h1>
            <p className="text-zinc-500 text-base mb-6">{t.aka} — {t.role}</p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">{t.desc}</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/courses" className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5">
                {t.browse}
              </Link>
              <Link href="/about" className="border border-zinc-700 hover:border-violet-500/50 text-white px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5">
                {t.about}
              </Link>
            </div>
          </div>

          {/* Right — Profile */}
          <div className="flex-shrink-0 relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-2xl animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.3)',
              }}
            />
            <div
              className="relative w-56 h-56 rounded-2xl overflow-hidden border border-violet-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-none"
              style={{ boxShadow: '0 0 30px rgba(139,92,246,0.2), 0 0 60px rgba(139,92,246,0.1)' }}
            >
              <Image
                src="/axerPic.png"
                alt="Axer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-16 mt-16 pt-10 border-t border-zinc-800">
          {t.stats.map((s) => (
            <div key={s.label} className="group">
              <div className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">{s.num}</div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
        />
        <div className="max-w-5xl mx-auto px-8 py-16 text-center relative">
          <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-3xl mx-auto">
            {t.quote}
          </p>
          <p className="text-zinc-500 text-sm mt-6">— Axer</p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <p className="text-violet-400 text-sm font-medium mb-3 tracking-wide uppercase">{t.missionTitle}</p>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl">{t.missionDesc}</p>
      </section>

      {/* Topics */}
      <section className="border-t border-zinc-800 bg-zinc-900/20">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p className="text-violet-400 text-sm font-medium mb-8 tracking-wide uppercase">{t.topicsTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.topics.map((topic) => (
              <div
                key={topic.title}
                className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 group"
                style={{ '--tw-shadow': '0 0 20px rgba(139,92,246,0.1)' } as React.CSSProperties}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(139,92,246,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-violet-300 transition-colors">{topic.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <p className="text-violet-400 text-sm font-medium mb-8 tracking-wide uppercase">{t.testimonialTitle}</p>
        <div className="grid grid-cols-1 gap-4">
          {t.testimonials.map((item, i) => (
            <div
              key={i}
              className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/30 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(139,92,246,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="text-violet-500/20 text-8xl absolute top-2 left-4 font-serif leading-none select-none">"</div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6 relative">{item.quote}</p>
              <div>
                <p className="text-white font-medium text-sm">{item.name}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <p className="text-zinc-500 text-sm mb-6">{t.socials}</p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-zinc-800 hover:border-violet-500/50 hover:text-violet-400 rounded-lg text-zinc-400 text-sm transition-all duration-200 hover:-translate-y-0.5"
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 15px rgba(139,92,246,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.5) 0%, transparent 70%)' }}
        />
        <div className="max-w-5xl mx-auto px-8 py-24 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">{t.ctaDesc}</p>
          <Link
            href="/courses"
            className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-medium transition-all inline-block hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
          >
            {t.ctaBrowse}
          </Link>
        </div>
      </section>

    </div>
  )
}