'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import ManifestoQuote from '@/components/ManifestoQuote'

const content = {
  en: {
    eyebrow: 'ABOUT AXER', name: 'Tammadon Suksa', role: 'IT student · builder · AI educator',
    intro: 'I am a first-year IT student at KMITL, learning in public and turning the best ideas into focused lessons for people who value their time.',
    browse: 'Explore lessons',
    profile: [{ value: 'KMITL', label: 'Information Technology' }, { value: 'Y1', label: 'Currently studying' }, { value: 'AI', label: 'Core curiosity' }],
    storyLabel: 'THE BACKSTORY', storyTitle: 'Learning differently is not a weakness.',
    story: [
      'I was never the student who absorbed a long lecture on the first pass. I wanted the reason, the pattern, and a way to try it—not another slide.',
      'Exploring AI tools and coding on my own changed that. Once learning became direct and hands-on, it stopped feeling like a system I had to survive.',
      'AxerMoreExer is where I share that approach: small, useful lessons with enough clarity to help you take the next step.',
    ],
    principlesLabel: 'MY PRINCIPLES', principlesTitle: 'A better use of your attention.',
    principles: [
      { number: '01', title: 'Useful before impressive', desc: 'Every lesson should help you do, decide, or understand something real.' },
      { number: '02', title: 'Short, never shallow', desc: 'Clarity is editing: the important idea stays, the noise leaves.' },
      { number: '03', title: 'Learn by building', desc: 'The fastest path from a concept to confidence is making something with it.' },
      { number: '04', title: 'Share the process', desc: 'Teaching what I learn keeps the work honest and useful for everyone.' },
    ],
    nowLabel: 'RIGHT NOW', nowTitle: 'What I am building & learning',
    now: [
      { icon: '↗', title: 'AxerMoreExer', desc: 'A focused home for practical AI and coding lessons.' },
      { icon: '⌁', title: 'AI workflows', desc: 'Testing frameworks, prompts, and automation that reduce busywork.' },
      { icon: '◌', title: 'Short-form education', desc: 'Making concise AI content for curious learners on social platforms.' },
    ],
    skillsLabel: 'TOOLBOX', skillsTitle: 'Things I keep returning to',
    skills: ['AI Workflows', 'Prompt Engineering', 'Claude / GPT', 'MCP', 'Next.js', 'React', 'TypeScript', 'Python', 'DSA', 'Mathematics'],
    connectLabel: 'LET’S CONNECT', connectTitle: 'Follow the journey as it takes shape.',
    connectText: 'The best place to begin is with a lesson. More ways to connect are on the way.', connectAction: 'View all courses', socialNote: 'Social links are being updated soon.',
  },
  th: {
    eyebrow: 'เกี่ยวกับ AXER', name: 'Tammadon Suksa', role: 'นักศึกษา IT · นักสร้าง · ผู้สอน AI',
    intro: 'ผมเป็นนักศึกษา IT ปี 1 ที่ KMITL เรียนรู้ไปพร้อมกับทุกคน และเปลี่ยนไอเดียที่ดีให้กลายเป็นบทเรียนที่กระชับสำหรับคนที่ให้คุณค่ากับเวลาของตัวเอง',
    browse: 'ดูบทเรียน',
    profile: [{ value: 'KMITL', label: 'เทคโนโลยีสารสนเทศ' }, { value: 'ปี 1', label: 'กำลังศึกษาอยู่' }, { value: 'AI', label: 'ความสนใจหลัก' }],
    storyLabel: 'จุดเริ่มต้น', storyTitle: 'การเรียนรู้ต่างจากคนอื่น ไม่ใช่จุดอ่อน',
    story: [
      'ผมไม่เคยเป็นคนที่เข้าใจการบรรยายยาว ๆ ได้ตั้งแต่ครั้งแรก ผมต้องการเหตุผล รูปแบบ และโอกาสได้ลองทำ ไม่ใช่สไลด์อีกหนึ่งหน้า',
      'การได้สำรวจ AI tools และ coding ด้วยตัวเองเปลี่ยนเรื่องนี้ไปเลย เมื่อการเรียนรู้ตรงประเด็นและได้ลงมือทำ มันไม่ใช่ระบบที่ต้องอดทนผ่านไปอีกต่อไป',
      'AxerMoreExer คือพื้นที่ที่ผมแบ่งปันแนวทางนี้ ผ่านบทเรียนสั้น ๆ ที่มีประโยชน์และชัดเจนพอให้คุณก้าวต่อไปได้',
    ],
    principlesLabel: 'สิ่งที่ผมยึดถือ', principlesTitle: 'ใช้เวลาที่คุณมีให้คุ้มค่าที่สุด',
    principles: [
      { number: '01', title: 'มีประโยชน์ก่อนความหวือหวา', desc: 'ทุกบทเรียนควรช่วยให้คุณทำ ตัดสินใจ หรือเข้าใจบางอย่างที่ใช้ได้จริง' },
      { number: '02', title: 'สั้น แต่ไม่ผิวเผิน', desc: 'ความชัดเจนเกิดจากการตัดสิ่งรบกวน เหลือไว้เฉพาะสิ่งสำคัญ' },
      { number: '03', title: 'เรียนรู้ด้วยการสร้าง', desc: 'ทางลัดจากแนวคิดสู่ความมั่นใจ คือการนำมันไปสร้างสิ่งหนึ่งขึ้นมา' },
      { number: '04', title: 'แบ่งปันระหว่างทาง', desc: 'การสอนสิ่งที่กำลังเรียนรู้ ทำให้งานจริงใจและมีประโยชน์กับทุกคน' },
    ],
    nowLabel: 'ตอนนี้', nowTitle: 'สิ่งที่กำลังสร้างและเรียนรู้',
    now: [
      { icon: '↗', title: 'AxerMoreExer', desc: 'บ้านของบทเรียน AI และ coding ที่นำไปใช้ได้จริง' },
      { icon: '⌁', title: 'AI workflows', desc: 'ทดลอง frameworks, prompts และ automation ที่ช่วยลดงานซ้ำซ้อน' },
      { icon: '◌', title: 'คอนเทนต์การเรียนรู้สั้น ๆ', desc: 'สร้างคอนเทนต์ AI ที่กระชับสำหรับคนที่อยากเรียนรู้บน social platforms' },
    ],
    skillsLabel: 'เครื่องมือที่ใช้', skillsTitle: 'เรื่องที่ผมกลับไปเรียนรู้เสมอ',
    skills: ['AI Workflows', 'Prompt Engineering', 'Claude / GPT', 'MCP', 'Next.js', 'React', 'TypeScript', 'Python', 'DSA', 'คณิตศาสตร์'],
    connectLabel: 'มาคุยกัน', connectTitle: 'ติดตามเส้นทางนี้ไปด้วยกัน',
    connectText: 'เริ่มต้นได้ง่ายที่สุดด้วยบทเรียนหนึ่งบท และช่องทางติดต่อต่าง ๆ กำลังจะตามมาเร็ว ๆ นี้', connectAction: 'ดูหลักสูตรทั้งหมด', socialNote: 'กำลังอัปเดตช่องทางโซเชียลเร็ว ๆ นี้',
  },
}

const socials = ['YouTube', 'Instagram', 'TikTok', 'GitHub']

export default function AboutPage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="min-h-screen overflow-hidden bg-zinc-950 pt-14">
      <section className="relative border-b border-zinc-800">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_75%_30%,rgba(139,92,246,0.2),transparent_36%),radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.12),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-8 md:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-violet-400">{t.eyebrow}</p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">{t.name}</h1>
            <p className="mt-3 text-sm text-zinc-500">aka Axer · {t.role}</p>
            <ManifestoQuote compact className="mt-7 max-w-xl" />
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">{t.intro}</p>
            <Link href="/courses" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25">{t.browse} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="relative mx-auto w-full max-w-sm self-end">
            <div className="absolute bottom-10 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="relative flex min-h-[19rem] items-end justify-center border-b border-violet-400/30 sm:min-h-[22rem]">
              <Image src="/axerPic.png" alt="Axer" width={300} height={390} priority className="relative z-10 max-h-[25rem] w-auto object-contain drop-shadow-[0_18px_30px_rgba(76,29,149,0.5)] transition-transform duration-500 hover:-translate-y-2" />
            </div>
            <div className="relative z-20 -mt-px grid grid-cols-3 border-x border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              {t.profile.map((item) => <div key={item.label} className="min-w-0 border-r border-zinc-800 px-3 py-4 text-center last:border-r-0"><p className="text-sm font-bold text-white">{item.value}</p><p className="mt-1 text-[10px] leading-4 text-zinc-500">{item.label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:px-6 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:px-8">
        <div><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.storyLabel}</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white">{t.storyTitle}</h2></div>
        <div className="space-y-5 border-l border-zinc-800 pl-6 md:pl-10">{t.story.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-zinc-400">{paragraph}</p>)}</div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/20">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 md:px-8"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.principlesLabel}</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white">{t.principlesTitle}</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
            {t.principles.map((principle) => <article key={principle.number} className="group bg-zinc-950 p-6 transition-colors hover:bg-zinc-900/50 sm:p-8"><p className="text-xs font-bold tracking-widest text-violet-400">{principle.number}</p><h3 className="mt-8 text-lg font-semibold text-white transition-colors group-hover:text-violet-300">{principle.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">{principle.desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-6 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.nowLabel}</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white">{t.nowTitle}</h2>
          <div className="mt-9 space-y-1 border-l border-zinc-800">{t.now.map((item) => <div key={item.title} className="relative py-4 pl-7"><span className="absolute -left-[0.42rem] top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet-500 text-[8px] text-white">{item.icon}</span><h3 className="font-medium text-white">{item.title}</h3><p className="mt-1 text-sm leading-6 text-zinc-400">{item.desc}</p></div>)}</div>
        </div>
        <div className="self-start rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.skillsLabel}</p><h2 className="mt-4 text-xl font-bold text-white">{t.skillsTitle}</h2><div className="mt-7 flex flex-wrap gap-2">{t.skills.map((skill) => <span key={skill} className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-violet-500/50 hover:text-violet-300">{skill}</span>)}</div></div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-900/20"><div className="mx-auto flex max-w-5xl flex-col justify-between gap-10 px-5 py-14 sm:px-6 sm:py-16 md:flex-row md:items-end md:px-8"><div className="max-w-xl"><p className="text-xs font-semibold tracking-[0.2em] text-violet-400">{t.connectLabel}</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white">{t.connectTitle}</h2><p className="mt-4 text-sm leading-6 text-zinc-400">{t.connectText}</p><Link href="/courses" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300">{t.connectAction} <span aria-hidden="true">→</span></Link></div><div className="md:text-right"><div className="flex flex-wrap gap-2 md:justify-end">{socials.map((social) => <span key={social} className="rounded-lg border border-zinc-700 px-3 py-2 text-xs text-zinc-500">{social}</span>)}</div><p className="mt-3 text-xs text-zinc-600">{t.socialNote}</p></div></div></section>
    </div>
  )
}
