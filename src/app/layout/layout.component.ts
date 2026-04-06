import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  menuItems: MenuItem[] = [
    {
      label: 'วิชาเรียน',
      items: [
        {
          label: 'รายชื่อวิชา',
          icon: 'pi pi-book',
          routerLink: '/courses'
        }
      ]
    },
    {
      label: 'นักศึกษา',
      items: [
        {
          label: 'ลงทะเบียน',
          icon: 'pi pi-pen-to-square',
          routerLink: '/register'
        }
      ]
    }
  ];
}
