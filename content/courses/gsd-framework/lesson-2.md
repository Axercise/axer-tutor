---
title: "How GSD Fixes It"
description: "เรียนรู้ว่า GSD Framework แก้ปัญหา Context Rot ยังไงด้วย subagents และ memory files"
duration: "12 min"
videoId: ""
---

## GSD Framework คืออะไร?

GSD (Get Shit Done) คือ context engineering framework ที่ถูกออกแบบมาเพื่อแก้ปัญหา Context Rot โดยเฉพาะ

หลักการง่ายๆ คือ: **อย่าให้ agent session เดียวสะสม context มากเกินกว่าที่จำเป็น**

## วิธีที่ GSD แก้ปัญหา

### Layer 1: CLAUDE.md (Global Memory)
ไฟล์ `CLAUDE.md` ที่ root ของโปรเจกต์ Claude อ่านทุกครั้งที่เริ่ม session ใหม่ ทำให้มัน "รู้จัก" โปรเจกต์คุณเสมอโดยไม่ต้องอธิบายซ้ำ

### Layer 2: Subagents (Fresh Context)
แทนที่จะทำทุกอย่างใน session เดียว GSD แบ่งงานออกเป็น subagents แต่ละตัวเริ่มต้นด้วย context ที่สะอาด

### Layer 3: STATE.md & CONTEXT.md
ไฟล์เหล่านี้ทำหน้าที่เป็น "bridge" ระหว่าง sessions ทำให้ข้อมูลสำคัญไม่หายไปเมื่อ session จบ

## ผลลัพธ์ที่ได้

- Context หลักไม่บวม
- Output คงที่ตลอดโปรเจกต์
- ไม่ต้องอธิบายซ้ำทุก session

## Next Lesson

ใน lesson ถัดไป เราจะ install GSD และลองใช้งานจริงครับ