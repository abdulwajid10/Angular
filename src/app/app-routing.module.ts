import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: HomeComponent,
    path: 'home',
    canActivate: [AuthGuard]
  },
  {
    component: AdminComponent,
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SignupComponent, LoginComponent, HomeComponent, AdminComponent]
