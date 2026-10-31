import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-14 min-h-screen bg-zinc-950">
      <section className="max-w-5xl mx-auto px-8 pt-32 pb-20">
        <p className="text-violet-400 text-sm font-medium mb-4">
          Tutor · Creator · Developer
        </p>
        <h1 className="text-5xl font-bold text-white leading-tight mb-6">
          Learn smarter with<br />structured lessons
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
          I'm Axer — I break down complex topics into clear lessons with video walkthroughs and written guides. Built for students who want to go deeper.
        </p>
        <div className="flex gap-4">
          <Link
            href="/courses"
            className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Browse courses
          </Link>
          <Link
            href="/about"
            className="border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            About me
          </Link>
        </div>

        <div className="flex gap-16 mt-20 pt-10 border-t border-zinc-800">
          {[
            { num: '12+', label: 'Courses' },
            { num: '50+', label: 'Video lessons' },
            { num: '100%', label: 'Free to access' },
          ].map((s) => (
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