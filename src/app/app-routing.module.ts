import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
