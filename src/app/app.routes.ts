import { Routes } from '@angular/router';
import { AuthGuard } from '@e-commerce/common-auth';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.DashboardModule)
  },
  {
    path: 'customers',
    canActivate: [AuthGuard],
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.CustomerModule)
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.ProductModule)
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.OrderModule)
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
