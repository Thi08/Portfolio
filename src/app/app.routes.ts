import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/pages/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
