import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeResolve } from './resolvers/home.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { data: HomeResolve } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
