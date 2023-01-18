import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { AutenticadoGuard } from './guards/autenticado.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'hero',
    component: HeroComponent,
    children: [
      { path: '', component: HeroesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'cadastroherois', component: HeroFormComponent },
    ],
    canActivate: [AutenticadoGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }