import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WastemapComponent } from './pages/wastemap/wastemap.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wastemap', component: WastemapComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
