import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TestService } from './services/test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LearncssComponent } from './learncss/learncss.component';
import { HomeComponent } from './home/home.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { LoadingComponent } from './loading/loading.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LengthDirective } from './intersection/length.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LearncssComponent,
    HomeComponent,
    IntersectionComponent,
    LoadingComponent,
    SideNavComponent,
    LengthDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
