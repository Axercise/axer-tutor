---
title: "What is Context Rot?"
description: "เข้าใจปัญหาหลักของ Claude ที่ทำให้ output แย่ลงเรื่อยๆ ใน session เดียวกัน"
duration: "8 min"
videoId: ""
---

## The Problem

คุณเคยสังเกตมั้ยว่า ตอนเริ่ม session ใหม่กับ Claude มันตอบได้ดีมาก แต่พอคุยไปนานๆ คำตอบมันเริ่มแย่ลง ไม่แม่นยำ หรือเหมือนมัน "ลืม" สิ่งที่คุยกันไปตอนต้น?

นั่นคือ **Context Rot** ครับ

## Context Rot คืออะไร?

Context Rot คือการที่ความแม่นยำของ AI ค่อยๆ ลดลงเมื่อ session สะสม token มากขึ้นเรื่อยๆ

เปรียบเหมือนการคุยโทรศัพท์ที่สัญญาณค่อยๆ อ่อนลง ยิ่งคุยนาน ยิ่งได้ยินไม่ชัด

## อาการของ Context Rot

- Claude เริ่ม "ลืม" ข้อกำหนดที่บอกไปตอนต้น session
- โค้ดที่ generate ออกมาเริ่มไม่ consistent กัน
- ต้องอธิบายสิ่งเดิมซ้ำหลายครั้ง
- Output คุณภาพต่ำลงเรื่อยๆ โดยไม่รู้ตัว

## ทำไมมันถึงเกิดขึ้น?

Claude มี context window ที่จำกัด ยิ่ง conversation ยาว token ที่ใช้ไปก็มากขึ้น Claude ต้องพยายาม "compress" ข้อมูลเก่า ทำให้ความแม่นยำลดลง

## Next Lesson

ใน lesson ถัดไป เราจะดูว่า GSD Framework แก้ปัญหานี้ยังไง ด้วยการใช้ **subagents** และ **persistent memory files** ครับ