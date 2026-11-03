# AGENTS.md — AxerMoreExer Tutor Platform

This file provides full context for AI agents (Codex CLI, Claude Code, etc.) working on this project. Read everything before making any changes.

---

## Project Overview

AxerMoreExer is a personal tutor website built by Tammadon Suksa (aka Axer), an IT student at KMITL Year 1. The purpose of this platform is to teach AI workflows, coding, and technology trends through short, structured lessons targeting anyone who wants to learn efficiently in the modern era.

The site is fully bilingual (English / Thai) and designed to be content-first: Axer writes the lessons, the platform presents them beautifully.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Content | Markdown (.md) via next-mdx-remote + gray-matter |
| Data | JSON files (no database) |
| Package Manager | npm |
| Deployment | Vercel (planned) |

No database. No auth. No CMS. All content lives in the repo as .md and .json files.

---

## Project Structure

```
axer-tutor/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── courses/
│       ├── page.tsx
│       └── [slug]/
│           ├── page.tsx
│           └── [lesson]/
│               └── page.tsx
├── components/
│   └── Navbar.tsx
├── context/
│   └── LanguageContext.tsx
├── content/
│   └── courses/
│       └── [course-slug]/
│           ├── lesson-1.md
│           └── lesson-1-th.md
├── data/
│   └── courses.json
├── public/
│   └── axerPic.png
└── AGENTS.md
```

---

## Bilingual System

The site supports English and Thai via a custom React Context.

### How it works

- context/LanguageContext.tsx stores lang state ('en' or 'th')
- Language is persisted in localStorage key 'lang'
- Every page reads useLang() and renders the correct content object
- Navbar shows EN / TH toggle buttons

### Pattern used in every page

```tsx
const content = {
  en: { title: 'English text' },
  th: { title: 'ข้อความภาษาไทย' },
}

export default function Page() {
  const { lang } = useLang()
  const t = content[lang]
  return <h1>{t.title}</h1>
}
```

### Rules

- Every page must support both languages. Never add English-only text hardcoded in JSX.
- Add both en and th keys whenever adding new user-facing text.
- For markdown lessons: English uses lesson-1.md, Thai uses lesson-1-th.md
- courses.json has both title/titleTh, description/descriptionTh, tag/tagTh

---

## Content System

### Adding a new course

1. Add entry to data/courses.json:

```json
{
  "slug": "your-course-slug",
  "title": "Course Title in English",
  "titleTh": "ชื่อหลักสูตรภาษาไทย",
  "description": "Short description in English.",
  "descriptionTh": "คำอธิบายสั้นๆ ภาษาไทย",
  "emoji": "🔥",
  "tag": "AI",
  "tagTh": "AI",
  "color": "violet",
  "lessons": [
    {
      "slug": "lesson-1",
      "title": "Lesson Title",
      "titleTh": "ชื่อบทเรียน",
      "duration": "10 min",
      "videoId": ""
    }
  ]
}
```

2. Create folder content/courses/your-course-slug/
3. Create lesson-1.md and lesson-1-th.md inside it

### Lesson markdown format

Every .md file must start with frontmatter:

```md
---
title: "Lesson Title"
description: "One-line description shown under the title"
duration: "10 min"
videoId: "youtube-video-id-here"
---

## Section heading

Content goes here...
```

- videoId: YouTube video ID only (not full URL). Leave empty string "" if no video yet.
- If videoId is empty, the video iframe will not render.
- Write content in Markdown. Code blocks, bullet lists, headings all render via .prose CSS class.

---

## Routing

| URL | Page |
|---|---|
| / | Home |
| /courses | All courses |
| /courses/gsd-framework | GSD course detail and lesson list |
| /courses/gsd-framework/lesson-1 | Lesson 1 of GSD course |
| /about | About Axer |

- Route params use await Promise.resolve(params) pattern for Next.js 15 compatibility
- Both [slug] and [lesson] are dynamic segments — folder names include the brackets literally

---

## Styling Rules

- Support both light and dark themes. Dark remains the default; the selected theme is persisted in localStorage key 'theme'.
- Use the existing zinc utility palette so the light-theme overrides in globals.css apply consistently.
- Accent color — violet (violet-400, violet-500, violet-600)
- Text hierarchy: text-white (headings) → text-zinc-300 (body) → text-zinc-400 (secondary) → text-zinc-500 (muted)
- Cards: border border-zinc-800 bg-zinc-900/50 rounded-xl
- Hover effects: hover:-translate-y-1 + boxShadow glow on mouse enter/leave
- No external UI libraries — all components are hand-written with Tailwind
- Prose styles are defined in globals.css under .prose class, not Tailwind typography plugin

## Component Rules

### Navbar

- Fixed top, z-50, blur background
- Uses usePathname() wrapped in Suspense to avoid prerender blocking
- Language switcher renders EN / TH buttons — active one gets bg-violet-600
- Theme switcher is placed beside the language switcher and must include a bilingual accessible label.
- On screens below the `md` breakpoint, navigation links and the language switcher are placed in an accessible collapsible menu; retain the visible theme toggle in the header.

### Pages with 'use client'

- app/page.tsx — Home
- app/about/page.tsx — About
- app/courses/page.tsx — Courses list

### Pages that are server components

- app/courses/[slug]/page.tsx
- app/courses/[slug]/[lesson]/page.tsx
- These read the filesystem with fs and path — never add 'use client' here

---

## Known Issues and Workarounds

### Next.js 15 params

Params in dynamic routes must be unwrapped with await Promise.resolve(params):

```tsx
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params)
}
```

### Tailwind v4

- Import is @import "tailwindcss" not @tailwind base/components/utilities
- No tailwind.config.js needed for basic setup

### cacheComponents conflict

- Do NOT use export const dynamic = 'force-dynamic' — conflicts with nextConfig.cacheComponents

---

## Owner and Content

| Field | Value |
|---|---|
| Real name | Tammadon Suksa |
| Brand name | Axer / AxerMoreExer |
| University | KMITL — Faculty of IT, Year 1 |
| Expertise | AI Workflows, Prompt Engineering, Coding, DSA |
| Target audience | Anyone interested in learning AI and tech efficiently |
| Content style | Short, direct, bite-sized — respect the viewer's attention |
| Profile photo | /public/axerPic.png (transparent PNG) |

### Social links (update when ready)

```
Instagram : https://instagram.com/
YouTube   : https://youtube.com/
TikTok    : https://tiktok.com/
GitHub    : https://github.com/
Facebook  : https://facebook.com/
Discord   : https://discord.com/
Email     : your@email.com
```

---

## What NOT to do

- Do not add a database or ORM
- Do not add authentication
- Do not use export const dynamic = 'force-dynamic'
- Do not add 'use client' to lesson or course detail pages (they use fs)
- Do not hardcode English-only text — always add both en and th
- Do not install UI libraries (shadcn, MUI, etc.) without asking
- Do not change the routing structure without updating this file

---

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Build for production
npm run lint      # Run ESLint
```

---

## Agent Instructions

1. Read this file first before touching any code
2. Check existing patterns — match the bilingual content object pattern exactly
3. Test routing — always verify [slug] and [lesson] folders have brackets in the name
4. Markdown first — new lesson content goes in .md files, not hardcoded in components
5. Keep it dark — never introduce light backgrounds or white surfaces
6. Ask before adding packages — the stack is intentionally minimal
7. When fixing bugs, check Known Issues section first before trying other solutions
8. Profile photo is transparent PNG — use drop-shadow and glow effects, never put it inside a box with background color
9. If you update code or fixing anything. Please update the state into CONTEXT.md which is use to update delete , state change or anything after updating anything to my project
