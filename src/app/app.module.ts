import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResponsiveModule } from 'ngx-responsive';
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
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatSelectModule,
  MatOptionModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FlexComponent } from './flex/flex.component';
import { ContentLearnComponent } from './content-learn/content-learn.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { MediaLearnComponent } from './media-learn/media-learn.component';
import { PositionComponent } from './position/position.component';
import { FromscratchModule } from './fromscratch/fromscratch.module';

const config = {
  breakPoints: {
      xs: {max: 600}, // mobile
      sm: {min: 601, max: 959}, // tablet
      md: {min: 200, max: 959}, // mobile && tablet
      lg: {min: 960, max: 1919}, // desktop
      xl: {min: 1920}
  },
  debounceTime: 100
};

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
    AutocompleteComponent,
    ReactiveformComponent,
    FlexComponent,
    ContentLearnComponent,
    MediaLearnComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MyLibModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatAutocompleteModule,
    ResponsiveModule.forRoot(config),
    FromscratchModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
