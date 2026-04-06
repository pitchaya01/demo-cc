# Angular Component Skill

## สร้าง Component ใหม่
ใช้ Standalone Component เสมอ ห้ามใช้ NgModule

## Template
```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-[name]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="[name]-container">
      <!-- template here -->
    </div>
  `
})
export class [Name]Component {
  // ใช้ inject() แทน constructor
  private userService = inject(UserService);
  
  // ใช้ Signals แทน BehaviorSubject
  data = signal<any[]>([]);
  isLoading = signal(false);
}
```

## กฎที่ต้องปฏิบัติ
- selector ขึ้นต้นด้วย app- เสมอ
- ไฟล์ชื่อ kebab-case เช่น user-list.component.ts
- มี .spec.ts ทุก component
- แยก logic ออกไปใน service อย่าเขียนใน component