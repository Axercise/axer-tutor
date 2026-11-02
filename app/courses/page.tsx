'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import coursesData from '@/data/courses.json'

const ui = {
  en: { tag: 'All Courses', title: "What you'll learn", desc: 'Structured lessons on AI workflows, tools, and frameworks.', lessons: 'lessons' },
  th: { tag: 'หลักสูตรทั้งหมด', title: 'คุณจะได้เรียนรู้อะไร', desc: 'บทเรียนที่มีโครงสร้างชัดเจนเกี่ยวกับ AI workflows, tools และ frameworks', lessons: 'บทเรียน' },
}

export default function CoursesPage() {
  const { lang } = useLang()
  const t = ui[lang]

  return (
    <div className="pt-14 min-h-screen bg-zinc-950">
      <div className="max-w-5xl mx-auto px-8 py-20">
        <p className="text-violet-400 text-sm font-medium mb-3">{t.tag}</p>
        <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
        <p className="text-zinc-400 text-lg mb-16 max-w-xl">{t.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(coursesData as any[]).map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group border border-zinc-800 hover:border-violet-500/50 bg-zinc-900/50 rounded-xl p-6 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{course.emoji}</div>
              <div className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 mb-3">
                {lang === 'th' ? course.tagTh || course.tag : course.tag}
              </div>
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {lang === 'th' ? course.titleTh || course.title : course.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {lang === 'th' ? course.descriptionTh || course.description : course.description}
              </p>
              <div className="text-xs text-zinc-500">
                {course.lessons.length} {t.lessons}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}