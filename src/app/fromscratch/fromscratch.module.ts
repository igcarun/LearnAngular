import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FromscratchRoutingModule } from './fromscratch-routing.module';
import { LearnchangeComponent } from './learnchange/learnchange.component';
import { LearnviewchildComponent } from './learnviewchild/learnviewchild.component';
import { LearncontentchildComponent } from './learncontentchild/learncontentchild.component';
import { FromscratchComponent } from './fromscratch.component';

@NgModule({
  declarations: [LearnchangeComponent, LearnviewchildComponent, LearncontentchildComponent, FromscratchComponent],
  imports: [
    CommonModule,
    FromscratchRoutingModule
  ]
})
export class FromscratchModule { }
