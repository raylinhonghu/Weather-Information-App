import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { GraphicComponent } from './graphic/graphic.component';

const routes: Routes = [
  { path: 'charts', component: ChartsComponent },
  { path: 'home', component: MenuComponent },
  { path: 'user', component: UserComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
