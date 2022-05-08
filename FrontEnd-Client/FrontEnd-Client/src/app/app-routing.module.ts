import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-restaurant',
    pathMatch: 'full'
  },
  {
    path: 'view-restaurant',
    component: ViewRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
