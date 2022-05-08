import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: MerchantRegisterComponent
  },
  {
    path:'login',
    component:MerchantLoginComponent
  },
  {
    path:'profile/:name',
    component:MerchantProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
