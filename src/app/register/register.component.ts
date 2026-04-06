import { Component, inject, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';

interface Subject {
  val: string;
  desc: string;
  credits: number;
}

interface RegisteredSubject {
  val: string;
  desc: string;
  credits: number;
}

function emailValidator(control: AbstractControl) {
  const val: string = control.value || '';
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  return val && !valid ? { email: true } : null;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    TableModule,
    MessageModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    studentId:   ['', Validators.required],
    email:       ['', [Validators.required, emailValidator]],
    firstName:   ['', Validators.required],
    lastName:    ['', Validators.required],
    phone:       ['', Validators.required],
    faculty:     ['', Validators.required],
    major:       ['', Validators.required],
  });

  // mock subjects (API not available yet)
  subjectOptions: Subject[] = [
    { val: 'CS101', desc: 'CS101 — การเขียนโปรแกรมเบื้องต้น', credits: 3 },
    { val: 'CS201', desc: 'CS201 — โครงสร้างข้อมูลและอัลกอริทึม', credits: 3 },
    { val: 'CS301', desc: 'CS301 — ฐานข้อมูล', credits: 3 },
    { val: 'CS401', desc: 'CS401 — วิศวกรรมซอฟต์แวร์', credits: 3 },
    { val: 'MATH101', desc: 'MATH101 — แคลคูลัส 1', credits: 3 },
    { val: 'MATH201', desc: 'MATH201 — พีชคณิตเชิงเส้น', credits: 3 },
  ];

  selectedSubject = signal<string | null>(null);
  registeredSubjects = signal<RegisteredSubject[]>([]);

  totalCredits = computed(() =>
    this.registeredSubjects().reduce((sum, s) => sum + s.credits, 0)
  );

  canSubmit = computed(() =>
    this.form.valid && this.registeredSubjects().length > 0
  );

  addSubject() {
    const val = this.selectedSubject();
    if (!val) return;
    const already = this.registeredSubjects().some(s => s.val === val);
    if (already) return;
    const subject = this.subjectOptions.find(s => s.val === val);
    if (!subject) return;
    this.registeredSubjects.update(list => [...list, { ...subject }]);
    this.selectedSubject.set(null);
  }

  removeSubject(val: string) {
    this.registeredSubjects.update(list => list.filter(s => s.val !== val));
  }

  resetForm() {
    this.form.reset();
    this.selectedSubject.set(null);
    this.registeredSubjects.set([]);
  }

  submit() {
    if (!this.canSubmit()) return;
    alert('ลงทะเบียนสำเร็จ!');
    this.resetForm();
  }

  isInvalid(field: string) {
    const ctrl = this.form.get(field);
    return ctrl?.invalid && ctrl?.touched;
  }
}
