'use client'

import Image from 'next/image'
import Link from 'next/link'
import ManifestoQuote from '@/components/ManifestoQuote'
import { useLang } from '@/context/LanguageContext'

const content = {
  en: {
    eyebrow: 'AXERMOREEXER / LEARN THE NEXT',
    title: 'Learn fast enough for a world that will not wait.',
    identity: 'Tammadon Suksa / Axer',
    role: 'IT student at KMITL · building better ways to learn',
    intro: 'Practical AI, coding, and foundations—made into focused lessons that leave you with something you can actually use.',
    browse: 'Start learning',
    about: 'Meet Axer',
    profileFile: 'axer.profile.ts',
    profileStatus: 'building in public',
    stats: [
      { value: '01', label: 'clear idea at a time' },
      { value: '100%', label: 'free to explore' },
      { value: '0', label: 'hours of filler' },
    ],
    missionKicker: 'THE MISSION',
    missionTitle: 'The old way asks you to keep up. This one helps you move.',
    missionText: 'Technology changes too quickly for learning to stay passive. AxerMoreExer turns useful ideas into short routes from curiosity to action.',
    missionCode: 'const learning = clarity + action',
    missionPoints: [
      { label: '01', title: 'Find the signal', desc: 'Start with the idea that matters, not an endless syllabus.' },
      { label: '02', title: 'Make it real', desc: 'Use it in a small project before the momentum disappears.' },
      { label: '03', title: 'Keep evolving', desc: 'Return with better questions as the tools and world change.' },
    ],
    methodKicker: 'THE LEARNING LOOP',
    methodTitle: 'Built for doing, not just watching.',
    method: [
      { code: '01', title: 'Understand the why', desc: 'Get the context and the mental model without the detour.' },
      { code: '02', title: 'Try the how', desc: 'Turn the idea into a prompt, workflow, feature, or first draft.' },
      { code: '03', title: 'Build your edge', desc: 'Keep the method and adapt it to the work that matters to you.' },
    ],
    topicsKicker: 'WHAT WE EXPLORE',
    topicsTitle: 'Tools change. Clear thinking stays.',
    topics: [
      { code: 'ai.workflow()', title: 'AI Workflows', desc: 'Prompts, agents, MCP, and systems that remove friction from real work.' },
      { code: 'build.with(ai)', title: 'Vibe Coding', desc: 'How to work with AI while still understanding what you are building.' },
      { code: 'automate.self()', title: 'Personal AI Tools', desc: 'Useful assistants and automations shaped around your own routines.' },
      { code: 'fundamentals()', title: 'CS Foundations', desc: 'The math, logic, and DSA that make modern tools more powerful.' },
    ],
    ctaKicker: 'YOUR NEXT STEP',
    ctaTitle: 'Do not wait for the perfect way to learn.',
    ctaText: 'Open one lesson. Build one useful thing. Then take the next step.',
    ctaBrowse: 'Explore courses',
    socials: 'Find Axer on',
  },
  th: {
    eyebrow: 'AXERMOREEXER / เรียนรู้สิ่งถัดไป',
    title: 'เรียนรู้ให้ทันโลกที่ไม่เคยรอใคร',
    identity: 'ธรรมดล สุขสะ / Axer',
    role: 'นักศึกษา IT ที่ KMITL · กำลังสร้างวิธีเรียนรู้ที่ดีกว่า',
    intro: 'AI, coding และพื้นฐานสำคัญที่นำมาทำให้เป็นบทเรียนตรงประเด็น เพื่อให้คุณได้บางอย่างที่ใช้ต่อได้จริง',
    browse: 'เริ่มเรียนรู้',
    about: 'รู้จัก Axer',
    profileFile: 'axer.profile.ts',
    profileStatus: 'กำลังสร้างให้ทุกคนเห็น',
    stats: [
      { value: '01', label: 'ไอเดียที่ชัดเจนต่อครั้ง' },
      { value: '100%', label: 'เรียนรู้ได้ฟรี' },
      { value: '0', label: 'ชั่วโมงของเนื้อหาเกินจำเป็น' },
    ],
    missionKicker: 'เป้าหมายของเรา',
    missionTitle: 'ระบบเดิมบอกให้คุณตามให้ทัน แต่ที่นี่ช่วยให้คุณก้าวไปข้างหน้า',
    missionText: 'เทคโนโลยีเปลี่ยนเร็วเกินกว่าการเรียนรู้จะเป็นเพียงการนั่งฟัง AxerMoreExer จึงเปลี่ยนไอเดียที่มีประโยชน์ให้เป็นเส้นทางสั้น ๆ จากความสงสัยไปสู่การลงมือทำ',
    missionCode: 'const learning = clarity + action',
    missionPoints: [
      { label: '01', title: 'หาแก่นของเรื่อง', desc: 'เริ่มจากไอเดียที่สำคัญ ไม่ใช่หลักสูตรที่ยาวจนไม่รู้จะเริ่มตรงไหน' },
      { label: '02', title: 'ทำให้เป็นของจริง', desc: 'ใช้มันกับโปรเจกต์เล็ก ๆ ก่อนที่แรงผลักดันจะหายไป' },
      { label: '03', title: 'พัฒนาต่อเสมอ', desc: 'กลับมาพร้อมคำถามที่ดีขึ้น เมื่อเครื่องมือและโลกเปลี่ยนไป' },
    ],
    methodKicker: 'วงจรการเรียนรู้',
    methodTitle: 'ออกแบบมาเพื่อการลงมือทำ ไม่ใช่แค่การดู',
    method: [
      { code: '01', title: 'เข้าใจเหตุผล', desc: 'ได้ทั้งบริบทและวิธีคิด โดยไม่ต้องอ้อมไกล' },
      { code: '02', title: 'ลองทำจริง', desc: 'เปลี่ยนไอเดียให้เป็น prompt, workflow, feature หรือร่างแรกของคุณ' },
      { code: '03', title: 'สร้างความได้เปรียบ', desc: 'เก็บวิธีคิดไว้ แล้วปรับใช้กับงานที่สำคัญสำหรับคุณ' },
    ],
    topicsKicker: 'สิ่งที่เราสำรวจ',
    topicsTitle: 'เครื่องมือเปลี่ยนไป แต่การคิดให้ชัดยังสำคัญเสมอ',
    topics: [
      { code: 'ai.workflow()', title: 'AI Workflows', desc: 'Prompts, agents, MCP และระบบที่ลดความฝืดในการทำงานจริง' },
      { code: 'build.with(ai)', title: 'Vibe Coding', desc: 'วิธีทำงานร่วมกับ AI โดยยังเข้าใจสิ่งที่คุณกำลังสร้างอยู่' },
      { code: 'automate.self()', title: 'AI ส่วนตัว', desc: 'ผู้ช่วยและ automation ที่ออกแบบรอบวิธีทำงานของคุณเอง' },
      { code: 'fundamentals()', title: 'CS พื้นฐาน', desc: 'คณิตศาสตร์ ตรรกะ และ DSA ที่ช่วยให้ใช้เครื่องมือยุคใหม่ได้เก่งขึ้น' },
    ],
    ctaKicker: 'ก้าวต่อไปของคุณ',
    ctaTitle: 'อย่ารอวิธีเรียนรู้ที่สมบูรณ์แบบ',
    ctaText: 'เปิดหนึ่งบทเรียน สร้างหนึ่งสิ่งที่มีประโยชน์ แล้วก้าวต่อไป',
    ctaBrowse: 'ดูหลักสูตร',
    socials: 'ติดตาม Axer ได้ที่',
  },
}

const socials = [
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'GitHub', href: 'https://github.com' },
]

export default function Home() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="min-h-screen overflow-hidden bg-zinc-950 pt-14">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.07)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="pointer-events-none absolute -right-28 top-8 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">{t.intro}</p>
            <ManifestoQuote compact className="mt-8 max-w-xl" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25">{t.browse}</Link>
              <Link href="/about" className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-300">{t.about}</Link>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[25rem] w-full max-w-sm items-end justify-center sm:min-h-[29rem] md:min-h-[32rem]">
            <div className="absolute bottom-14 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-500/35 blur-3xl" />
            <div className="absolute inset-x-2 bottom-10 top-10 border-x border-t border-violet-500/25" />
            <p className="absolute left-5 top-14 font-mono text-[10px] tracking-[0.15em] text-violet-400">{t.profileFile}</p>
            <p className="absolute right-5 top-14 font-mono text-[10px] text-zinc-500">{'// 2026'}</p>
            <Image src="/axerPic.png" alt="Axer" width={310} height={410} priority className="relative z-10 w-auto max-w-[82%] object-contain drop-shadow-[0_25px_36px_rgba(76,29,149,0.55)] transition-transform duration-500 hover:-translate-y-2 sm:max-w-[88%]" />
            <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-zinc-800 bg-zinc-950/70 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-medium text-white">{t.identity}</p>
              <p className="text-[10px] text-emerald-400"><span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />{t.profileStatus}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-zinc-800 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
          {t.stats.map((stat) => <div key={stat.label} className="py-7 sm:px-7 sm:py-8 first:pl-0 last:pr-0"><p className="font-mono text-2xl font-semibold text-white">{stat.value}</p><p className="mt-2 text-sm text-zinc-500">{stat.label}</p></div>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
        <div><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.missionKicker}</p><h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.missionTitle}</h2><p className="mt-6 max-w-md text-base leading-7 text-zinc-400">{t.missionText}</p><p className="mt-8 font-mono text-xs text-violet-400"><span className="mr-3 text-zinc-600">$</span>{t.missionCode}</p></div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800">
          {t.missionPoints.map((point) => <article key={point.label} className="group bg-zinc-950 p-6 transition-colors hover:bg-zinc-900/50 sm:p-7"><p className="font-mono text-xs text-violet-400">{point.label}</p><h3 className="mt-5 text-lg font-semibold text-white group-hover:text-violet-300">{point.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{point.desc}</p></article>)}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/20"><div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.methodKicker}</p><h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.methodTitle}</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{t.method.map((step) => <article key={step.code} className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 transition-all hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_12px_30px_rgba(139,92,246,0.12)]"><p className="font-mono text-xs text-violet-400">step_{step.code}</p><h3 className="mt-8 text-lg font-semibold text-white">{step.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{step.desc}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.topicsKicker}</p><h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.topicsTitle}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{t.topics.map((topic) => <article key={topic.code} className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_12px_30px_rgba(139,92,246,0.12)] sm:p-7"><p className="font-mono text-xs text-violet-400">{topic.code}</p><h3 className="mt-7 text-xl font-semibold text-white transition-colors group-hover:text-violet-300">{topic.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">{topic.desc}</p></article>)}</div></section>

      <section className="relative overflow-hidden border-t border-zinc-800"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.16),transparent_65%)]" /><div className="relative mx-auto flex max-w-6xl flex-col justify-between gap-12 px-6 py-20 md:flex-row md:items-end md:px-8 md:py-24"><div className="max-w-xl"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.ctaKicker}</p><h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.ctaTitle}</h2><p className="mt-4 text-base leading-7 text-zinc-400">{t.ctaText}</p><Link href="/courses" className="mt-8 inline-flex rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25">{t.ctaBrowse} <span aria-hidden="true" className="ml-2">→</span></Link></div><div><p className="mb-4 text-xs text-zinc-500 md:text-right">{t.socials}</p><div className="flex flex-wrap gap-2 md:justify-end">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-3 py-2 text-xs text-zinc-400 transition-colors hover:border-violet-500/50 hover:text-violet-300">{social.label}</a>)}</div></div></div></section>
    </div>
  )
}
