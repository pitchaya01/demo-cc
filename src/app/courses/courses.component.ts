import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';

interface Course {
  code: string;
  name: string;
  credits: number;
  instructor: string;
  status: string;
}

@Component({
  selector: 'app-courses',
  imports: [FormsModule, InputTextModule, ButtonModule, TableModule, TagModule, SelectModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @ViewChild('dt') dt!: Table;

  criteria = {
    courseName: '',
    courseCode: '',
    instructorName: ''
  };

  allCourses: Course[] = [
    { code: 'CS101', name: 'การเขียนโปรแกรมเบื้องต้น', credits: 3, instructor: 'ผศ.ดร.สมชาย ใจดี', status: 'เปิดสอน' },
    { code: 'CS201', name: 'โครงสร้างข้อมูลและอัลกอริทึม', credits: 3, instructor: 'รศ.ดร.วิไล มานะ', status: 'เปิดสอน' },
    { code: 'CS301', name: 'ฐานข้อมูล', credits: 3, instructor: 'ผศ.สุดา รักเรียน', status: 'เปิดสอน' },
    { code: 'CS401', name: 'วิศวกรรมซอฟต์แวร์', credits: 3, instructor: 'ดร.ประสิทธิ์ วงศ์ดี', status: 'ปิดสอน' },
    { code: 'MATH101', name: 'แคลคูลัส 1', credits: 3, instructor: 'ผศ.ดร.สมชาย ใจดี', status: 'เปิดสอน' },
    { code: 'MATH201', name: 'พีชคณิตเชิงเส้น', credits: 3, instructor: 'รศ.มานี ศรีสุข', status: 'เปิดสอน' },
  ];

  displayedCourses: Course[] = [...this.allCourses];

  statusOptions = [
    { label: 'ทั้งหมด', value: null },
    { label: 'เปิดสอน', value: 'เปิดสอน' },
    { label: 'ปิดสอน', value: 'ปิดสอน' }
  ];

  // track which column has filter open
  filterOpen: Record<string, boolean> = {
    code: false,
    name: false,
    instructor: false,
    status: false
  };

  // current filter values per column
  colFilter: Record<string, any> = {
    code: '',
    name: '',
    instructor: '',
    status: null
  };

  toggleFilter(col: string) {
    this.filterOpen[col] = true;
  }

  closeFilter(col: string) {
    this.filterOpen[col] = false;
    this.colFilter[col] = col === 'status' ? null : '';
    this.dt.filter(this.colFilter[col], col, col === 'status' ? 'equals' : 'contains');
  }

  onTextFilter(value: string, col: string) {
    this.dt.filter(value, col, 'contains');
  }

  onStatusFilter(value: string | null) {
    this.dt.filter(value, 'status', 'equals');
  }

  search() {
    this.displayedCourses = this.allCourses.filter(c => {
      const matchName = !this.criteria.courseName || c.name.includes(this.criteria.courseName);
      const matchCode = !this.criteria.courseCode || c.code.toLowerCase().includes(this.criteria.courseCode.toLowerCase());
      const matchInstructor = !this.criteria.instructorName || c.instructor.includes(this.criteria.instructorName);
      return matchName && matchCode && matchInstructor;
    });
    // reset column filters when doing criteria search
    Object.keys(this.filterOpen).forEach(k => this.filterOpen[k] = false);
    Object.keys(this.colFilter).forEach(k => this.colFilter[k] = k === 'status' ? null : '');
  }

  clear() {
    this.criteria = { courseName: '', courseCode: '', instructorName: '' };
    this.displayedCourses = [...this.allCourses];
  }

  getSeverity(status: string): 'success' | 'danger' {
    return status === 'เปิดสอน' ? 'success' : 'danger';
  }
}
