import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WastemapComponent } from './wastemap/wastemap.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { MapFilterComponent } from './map-filter/map-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WastemapComponent,
    AboutComponent,
    NavbarComponent,
    MapComponent,
    MapFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
