---
title: "Install & Setup GSD"
description: "ติดตั้ง GSD Framework และเริ่มใช้งานใน Claude Code ได้เลยใน 5 นาที"
duration: "10 min"
videoId: ""
---

## Prerequisites

ก่อน install GSD ต้องมีสิ่งเหล่านี้ก่อน:

- Node.js v18 ขึ้นไป
- Claude Code ติดตั้งแล้ว

## Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

## Install GSD

```bash
npx @opengsd/get-shit-done-redux@latest
```

เลือก **global** install เพื่อใช้ได้ทุกโปรเจกต์

## ตรวจสอบว่า install สำเร็จ

เปิด Claude Code แล้วพิมพ์:

/gsd:help


ถ้าเห็น command list แสดงว่าพร้อมใช้งานแล้ว ✅

## เริ่มโปรเจกต์ใหม่

```bash
/gsd:kickoff
```

GSD จะถามคุณว่าอยากสร้างอะไร แล้วมันจะ:
1. สร้าง CLAUDE.md ให้อัตโนมัติ
2. วางแผนแบ่ง milestone
3. เริ่ม execute ทีละ phase

## สำหรับโปรเจกต์ที่มีอยู่แล้ว

```bash
/gsd:analyze-codebase
```

GSD จะอ่านโค้ดที่มีแล้ว แล้วสร้าง context files ให้อัตโนมัติครับ