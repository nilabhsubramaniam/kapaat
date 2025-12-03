import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats = [
    { title: 'Total Users', value: 0, icon: '👥', color: '#4f46e5' },
    { title: 'Active Sessions', value: 0, icon: '📊', color: '#10b981' },
    { title: 'Revenue', value: 0, icon: '💰', color: '#f59e0b' },
    { title: 'Products', value: 0, icon: '📦', color: '#ef4444' }
  ];

  recentActivities: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Simulate loading data - replace with actual API calls
    this.stats = [
      { title: 'Total Users', value: 1234, icon: '👥', color: '#4f46e5' },
      { title: 'Active Sessions', value: 89, icon: '📊', color: '#10b981' },
      { title: 'Revenue', value: 45678, icon: '💰', color: '#f59e0b' },
      { title: 'Products', value: 567, icon: '📦', color: '#ef4444' }
    ];

    this.recentActivities = [
      { action: 'New user registered', time: '5 minutes ago', type: 'user' },
      { action: 'Order #1234 completed', time: '12 minutes ago', type: 'order' },
      { action: 'Product updated', time: '1 hour ago', type: 'product' },
      { action: 'System backup completed', time: '2 hours ago', type: 'system' }
    ];
  }
}
