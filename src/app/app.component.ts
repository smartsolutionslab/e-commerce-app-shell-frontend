import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService, User } from '@e-commerce/common-auth';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <app-header 
        [user]="currentUser$ | async"
        [isAuthenticated]="isAuthenticated$ | async"
        (logout)="onLogout()">
      </app-header>

      <div class="flex">
        <!-- Sidebar -->
        <app-sidebar 
          *ngIf="isAuthenticated$ | async"
          class="w-64 h-screen bg-white shadow-lg">
        </app-sidebar>

        <!-- Main Content -->
        <main class="flex-1 p-6">
          <router-outlet></router-outlet>
        </main>
      </div>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  currentUser$: Observable<User | null>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store
  ) {
    this.currentUser$ = this.authService.currentUser$;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  ngOnInit(): void {
    // Initialize authentication state
  }

  onLogout(): void {
    this.authService.logout();
  }
}
