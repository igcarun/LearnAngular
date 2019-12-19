import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromscratchComponent } from './fromscratch.component';
import { LearnchangeComponent } from './learnchange/learnchange.component';

const routes: Routes = [
  { path: 'learnchange', component: LearnchangeComponent},
  { path: '', component: FromscratchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromscratchRoutingModule { }
