import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearncssComponent } from './learncss/learncss.component';
import { HomeComponent } from './home/home.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { LoadingComponent } from './loading/loading.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: 'learncss/', component: LearncssComponent },
  { path: 'loading/', component: LoadingComponent },
  { path: 'sidenav', component: SideNavComponent},
  { path: 'intersection', component: IntersectionComponent},
  { path: '/', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
