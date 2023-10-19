import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



import {  MatSidenavModule } from "@angular/material/sidenav";
import {  MatListModule} from "@angular/material/list";
import {  MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SobreMiComponent,
    PortafolioComponent,
    ContactoComponent,
    PagenotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
