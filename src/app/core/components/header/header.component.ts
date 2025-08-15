import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@e-commerce/common-ui';
import { User } from '@e-commerce/common-auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center">
              <img class="h-8 w-auto" src="assets/logo.svg" alt="E-Commerce">
              <span class="ml-2 text-xl font-bold text-gray-900">E-Commerce</span>
            </a>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8" *ngIf="isAuthenticated">
            <a routerLink="/dashboard" 
               routerLinkActive="text-blue-600"
               class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Dashboard
            </a>
            <a routerLink="/customers" 
               routerLinkActive="text-blue-600"
               class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Customers
            </a>
            <a routerLink="/products" 
               routerLinkActive="text-blue-600"
               class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Products
            </a>
            <a routerLink="/orders" 
               routerLinkActive="text-blue-600"
               class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Orders
            </a>
          </nav>

          <!-- User Menu -->
          <div class="flex items-center space-x-4" *ngIf="isAuthenticated">
            <div class="flex items-center space-x-2">
              <img class="h-8 w-8 rounded-full" 
                   [src]="user?.avatar || 'assets/default-avatar.png'" 
                   [alt]="user?.firstName + ' ' + user?.lastName">
              <span class="text-sm font-medium text-gray-700">
                {{ user?.firstName }} {{ user?.lastName }}
              </span>
            </div>
            
            <ec-button 
              variant="outline" 
              size="sm"
              (clicked)="onLogout()">
              Logout
            </ec-button>
          </div>

          <!-- Login Button -->
          <div *ngIf="!isAuthenticated">
            <ec-button 
              variant="primary"
              routerLink="/login">
              Login
            </ec-button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  @Input() user: User | null = null;
  @Input() isAuthenticated: boolean | null = false;
  @Output() logout = new EventEmitter<void>();

  onLogout(): void {
    this.logout.emit();
  }
}
