'use client'

import { useLang } from '@/context/LanguageContext'

const content = {
  en: {
    label: 'AXER.MANIFESTO',
    primary: 'I will revolutionize education.',
    secondary: 'We are not slow learners. The world just changed faster.',
    code: 'const education = revolutionize()',
    comment: '// Learn at the speed of the world, not the old system.',
  },
  th: {
    label: 'AXER.MANIFESTO',
    primary: 'ผมจะปฏิวัติวงการการสอน',
    secondary: 'เราไม่ได้เรียนรู้ช้า แค่โลกมันเปลี่ยนไปเร็ว',
    code: 'const education = revolutionize()',
    comment: '// เรียนรู้ให้ทันโลก ไม่ใช่ยึดติดกับระบบเดิม',
  },
}

type ManifestoQuoteProps = {
  compact?: boolean
  className?: string
}

export default function ManifestoQuote({ compact = false, className = '' }: ManifestoQuoteProps) {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <aside className={`overflow-hidden rounded-xl border border-violet-500/25 bg-zinc-900/50 text-left shadow-[0_18px_50px_rgba(76,29,149,0.16)] backdrop-blur-sm ${className}`}>
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-rose-400/70" /><span className="h-2 w-2 rounded-full bg-amber-300/70" /><span className="h-2 w-2 rounded-full bg-emerald-400/70" /></div>
        <p className="font-mono text-[10px] font-medium tracking-[0.18em] text-violet-400">{t.label}</p>
      </div>
      <div className={compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}>
        <p className="font-mono text-xs leading-6 text-zinc-500"><span className="mr-3 text-violet-400">01</span>{t.code}</p>
        <p className={`mt-4 font-semibold leading-tight tracking-tight text-white ${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>&quot;{t.primary}&quot;</p>
        <div className="mt-5 border-l-2 border-violet-500/70 pl-4">
          <p className="font-mono text-xs leading-6 text-zinc-500">{t.comment}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{t.secondary}</p>
        </div>
      </div>
    </aside>
  )
}
