import Link from 'next/link'
import { notFound } from 'next/navigation'
import coursesData from '@/data/courses.json'

type Props = {
  params: { slug: string }
}

export default async function CoursePage({ params }: Props) {
  const slug = (await Promise.resolve(params)).slug
  const course = (coursesData as any[]).find((c) => c.slug === slug)
  if (!course) notFound()

  return (
    <div className="pt-14 min-h-screen bg-zinc-950">
      <div className="max-w-3xl mx-auto px-8 py-20">
        <Link href="/courses" className="text-zinc-500 hover:text-white text-sm transition-colors mb-10 inline-block">
          ← Back to courses
        </Link>
        <div className="text-5xl mb-4">{course.emoji}</div>
        <div className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 mb-4">
          {course.tag}
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
        <p className="text-zinc-400 leading-relaxed mb-12">{course.description}</p>
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
            Lessons — {course.lessons.length} total
          </h2>
          {course.lessons.map((lesson: any, index: number) => (
            <Link
              key={lesson.slug}
              href={`/courses/${course.slug}/${lesson.slug}`}
              className="flex items-center gap-4 p-4 border border-zinc-800 hover:border-violet-500/50 rounded-xl bg-zinc-900/50 group transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-violet-500/20 flex items-center justify-center text-sm text-zinc-400 group-hover:text-violet-400 transition-colors font-medium flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">
                  {lesson.title}
                </div>
              </div>
              <div className="text-xs text-zinc-500">{lesson.duration}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}