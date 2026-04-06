import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];
