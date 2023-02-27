import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './util/navbar/navbar.component';
import { FooterComponent } from './util/footer/footer.component';
import { FloraComponent } from './pages/flora/flora.component';
import { FaunaComponent } from './pages/fauna/fauna.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    FloraComponent,
    FaunaComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
