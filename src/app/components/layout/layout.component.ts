import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isSidebarCollapsed = false;
  
  menuItems = [
    { icon: '📊', label: 'Dashboard', route: '/dashboard', active: true },
    { icon: '👥', label: 'Users', route: '/users', active: false },
    { icon: '📦', label: 'Products', route: '/products', active: false },
    { icon: '🛒', label: 'Orders', route: '/orders', active: false },
    { icon: '📈', label: 'Analytics', route: '/analytics', active: false },
    { icon: '⚙️', label: 'Settings', route: '/settings', active: false }
  ];

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  setActive(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
}
