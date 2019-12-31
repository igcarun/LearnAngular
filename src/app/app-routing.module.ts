import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearncssComponent } from './learncss/learncss.component';
import { HomeComponent } from './home/home.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { LoadingComponent } from './loading/loading.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FlexComponent } from './flex/flex.component';
import { ContentLearnComponent } from './content-learn/content-learn.component';
import { MediaLearnComponent } from './media-learn/media-learn.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  { path: 'learncss', component: LearncssComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'sidenav', component: SideNavComponent },
  { path: 'intersection', component: IntersectionComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'flex', component: FlexComponent},
  { path: 'contentLearn', component: ContentLearnComponent},
  { path: 'mediaLearn', component: MediaLearnComponent },
  { path: 'position', component: PositionComponent },
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'fromscratch', 
  loadChildren: () => import('./fromscratch/fromscratch.module').then(m => m.FromscratchModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
