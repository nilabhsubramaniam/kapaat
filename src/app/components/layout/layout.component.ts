import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  isSidebarCollapsed = false;
  currentUser$ = this.authService.currentUser;
  
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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
