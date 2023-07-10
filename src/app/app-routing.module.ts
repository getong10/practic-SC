import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () => import('../pages/register-page/register-page.module').then(comp => comp.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login-page/login-page.module').then(comp => comp.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home-page/home-page.module').then(comp => comp.HomePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../pages/users-page/users-page.module').then(comp => comp.UsersPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('../pages/upcoming-tourneys/upcoming-tourneys-page.module').then(comp => comp.UpcomingTourneysPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
