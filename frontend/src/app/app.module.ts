import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WastemapComponent } from './pages/wastemap/wastemap.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';

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
