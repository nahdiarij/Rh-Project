import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SammaryComponent } from './sammary/sammary.component';
import { ContactComponent } from './contact/contact.component';
import { PayComponent } from './pay/pay.component';
import { CongeComponent } from './conge/conge.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { FormationComponent } from './formation/formation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  { path:'sammary', component:SammaryComponent},
  { path:'contact', component:ContactComponent},
  { path:'pay', component:PayComponent},
  { path:'conge', component:CongeComponent},
  { path:'auto', component:AutorisationComponent},
  { path:'forma', component:FormationComponent},
  { path:'recla', component:ReclamationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
