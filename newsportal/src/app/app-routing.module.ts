import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [

  {path:'', component:TopheadingComponent}, //route for top heading
  {path:'entertainment', component:EntertainmentComponent} // route for entertainment part

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
