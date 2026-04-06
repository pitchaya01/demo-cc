# PrimeNG Usage Skill

## Theme
ใช้ Aura theme เสมอ กำหนดใน app.config.ts

## Import Rule
import เฉพาะที่ใช้ใน component นั้น ห้าม import ทั้งหมด

✅ ถูก
```typescript
imports: [ButtonModule, TableModule]
```
❌ ผิด
```typescript
imports: [PrimeNGModule] // ห้ามใช้
```

## Components ที่ใช้บ่อย

### Button
```html
<p-button label="Save" icon="pi pi-save" (onClick)="save()" />
<p-button label="Cancel" severity="secondary" (onClick)="cancel()" />
<p-button label="Delete" severity="danger" (onClick)="delete()" />
```

### Table
```html
<p-table [value]="data()" [loading]="isLoading()" 
         [paginator]="true" [rows]="10"
         [showCurrentPageReport]="true">
  <ng-template pTemplate="header">
    <tr>
      <th pSortableColumn="name">Name <p-sortIcon field="name"/></th>
      <th>Action</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item>
    <tr>
      <td>{{ item.name }}</td>
      <td>
        <p-button icon="pi pi-pencil" (onClick)="edit(item)" />
      </td>
    </tr>
  </ng-template>
</p-table>
```

### Dialog
```html
<p-dialog header="Title" [(visible)]="showDialog" [modal]="true">
  <ng-template pTemplate="content">
    <!-- content here -->
  </ng-template>
  <ng-template pTemplate="footer">
    <p-button label="Cancel" severity="secondary" (onClick)="showDialog=false" />
    <p-button label="Save" (onClick)="save()" />
  </ng-template>
</p-dialog>
```

### Form Inputs
```html
<!-- Text -->
<p-inputtext [(ngModel)]="name" placeholder="Enter name" />

<!-- Dropdown -->
<p-select [options]="options" [(ngModel)]="selected" 
           optionLabel="label" optionValue="value" />

<!-- Calendar -->
<p-datepicker [(ngModel)]="date" dateFormat="dd/mm/yy" />
```

## Severity Colors
| Severity | ใช้เมื่อ |
|---|---|
| (default) | primary action |
| secondary | cancel / neutral |
| success | confirm / approve |
| danger | delete / reject |
| warn | warning |
| info | information |