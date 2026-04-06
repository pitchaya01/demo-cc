# Project Overview
Angular 19 frontend สำหรับ [ชื่อระบบ]

## Tech Stack
- Angular 19 (Standalone Components)
- PrimeNG 18 (Aura theme)
- PrimeFlex

## Folder Structure
- src/app/core/        → services, guards, interceptors
- src/app/shared/      → reusable components
- src/app/features/    → แยกตาม feature (dashboard, users, settings)

## Coding Rules
- ใช้ Standalone Components เสมอ
- ใช้ inject() แทน constructor
- ใช้ Signals สำหรับ state management
- import PrimeNG เฉพาะ module ที่ใช้ใน component นั้น

## Commands
- ng serve        → รัน dev server
- ng build        → build production
- ng g c          → สร้าง component ใหม่

## Important Docs
- API: @docs/skills/api-skill.md
- PrimeNG patterns: @docs/skills/primeng-skill.md
- Component : @docs/skills/angular-component-skill.md
> อ่านไฟล์เหล่านี้ก่อนทำงานทุกครั้ง