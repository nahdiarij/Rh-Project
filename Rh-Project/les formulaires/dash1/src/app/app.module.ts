import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SammaryComponent } from './sammary/sammary.component';
import { ContactComponent } from './contact/contact.component';
import { PayComponent } from './pay/pay.component';
import { CongeComponent } from './conge/conge.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { FormationComponent } from './formation/formation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SammaryComponent,
    ContactComponent,
    PayComponent,
    CongeComponent,
    AutorisationComponent,
    FormationComponent,
    ReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
