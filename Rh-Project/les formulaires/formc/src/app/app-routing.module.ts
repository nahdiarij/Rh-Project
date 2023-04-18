import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongeComponent } from './conge/conge.component';

const routes: Routes = [
  {path: "conge", component: CongeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
