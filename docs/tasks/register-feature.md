# Register Feature — ระบบลงทะเบียนนักศึกษา

## References
- Design: docs/designs/register-screen.png
- PrimeNG: https://primeng.org/llms.txt
 
- Component Pattern: docs/skills/angular-component-skill.md

## Goal
สร้างหน้าลงทะเบียนนักศึกษาตามรูป Design

 
 
 

## API
http://localhost:8080/v3/api-docs (ตอนนี้ยังไม่มีไม่ต้องใช้)

---

## Section 1 — ข้อมูลส่วนตัว (2 คอลัมน์)

| Field | Placeholder | Validation |
|---|---|---|
| รหัสนักศึกษา | เช่น 6512345678 | required |
| อีเมล | example@university.ac.th | required, email format |
| ชื่อ | ชื่อจริง | required |
| นามสกุล | นามสกุล | required |
| เบอร์โทรศัพท์ | 0xx-xxx-xxxx | required |
| คณะ | เช่น วิทยาศาสตร์ | required |
| สาขาวิชา | เช่น วิทยาการคอมพิวเตอร์ | required (1 คอลัมน์ เต็มแถว) |

## Section 2 — เลือกวิชาลงทะเบียน

### Dropdown เลือกวิชา
- Component: p-select
- Placeholder: -- เลือกวิชา --
- API: GET /api/subjects
- optionLabel: desc
- optionValue: val

### ปุ่มเพิ่มวิชา
- Label: เพิ่มวิชา
- severity: primary
- action: เพิ่มวิชาที่เลือกเข้า รายวิชาที่ลงทะเบียน

## Section 3 — รายวิชาที่ลงทะเบียน

- แสดง p-table รายวิชาที่เพิ่มแล้ว
- มี header ขวา: "จำนวนหน่วยกิตรวม: X หน่วยกิต"
- ถ้ายังไม่มีวิชา แสดงข้อความ: "ยังไม่มีวิชาที่ลงทะเบียน"

## Section 4 — ปุ่มด้านล่าง (ชิดขวา)

| ปุ่ม | Severity | Action |
|---|---|---|
| ล้างข้อมูล | secondary | reset form ทั้งหมด |
| ยืนยันการลงทะเบียน | primary | submit form |

---

## Rules
- Layout 2 คอลัมน์ ใช้ PrimeFlex grid
- Validate ทุก field ก่อน submit
- ปุ่ม ยืนยันการลงทะเบียน disable ถ้า form ไม่ valid
- ปุ่ม ยืนยันการลงทะเบียน disable ถ้ายังไม่มีวิชาที่เลือก
- หน่วยกิตรวมคำนวณ realtime เมื่อเพิ่ม/ลบวิชา