import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import coursesData from '@/data/courses.json'

type Props = {
  params: { slug: string; lesson: string }
}

export default async function LessonPage({ params }: Props) {
  const { slug, lesson } = await Promise.resolve(params)
  const course = (coursesData as any[]).find((c) => c.slug === slug)
  if (!course) notFound()

  const lessonIndex = course.lessons.findIndex((l: any) => l.slug === lesson)
  if (lessonIndex === -1) notFound()

  const lessonData = course.lessons[lessonIndex]
  const prevLesson = course.lessons[lessonIndex - 1]
  const nextLesson = course.lessons[lessonIndex + 1]

  const filePath = path.join(process.cwd(), 'content', 'courses', slug, `${lesson}.md`)
  if (!fs.existsSync(filePath)) notFound()

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data: frontmatter } = matter(fileContent)

  return (
    <div className="pt-14 min-h-screen bg-zinc-950">
      <div className="max-w-3xl mx-auto px-8 py-20">
        <Link href={`/courses/${slug}`} className="text-zinc-500 hover:text-white text-sm transition-colors mb-10 inline-block">
          ← Back to {course.title}
        </Link>
        <div className="mb-8">
          <div className="text-xs text-zinc-500 mb-2">
            Lesson {lessonIndex + 1} of {course.lessons.length}
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">{lessonData.title}</h1>
          <p className="text-zinc-400">{frontmatter.description}</p>
        </div>

        {lessonData.videoId && (
          <div className="mb-10 rounded-xl overflow-hidden border border-zinc-800 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${lessonData.videoId}`}
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        <article className="prose">
          <MDXRemote source={content} />
        </article>

        <div className="flex justify-between mt-16 pt-8 border-t border-zinc-800">
          {prevLesson ? (
            <Link href={`/courses/${slug}/${prevLesson.slug}`} className="text-sm text-zinc-400 hover:text-white transition-colors">
              ← {prevLesson.title}
            </Link>
          ) : <div />}
          {nextLesson ? (
            <Link href={`/courses/${slug}/${nextLesson.slug}`} className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
              {nextLesson.title} →
            </Link>
          ) : (
            <div className="text-sm text-zinc-500">🎉 Course complete</div>
          )}
        </div>
      </div>
    </div>
  )
}