import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'angular4-carousel';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InsightComponent } from './pages/insight/insight.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { HowlongComponent } from './pages/howlong/howlong.component';
import { EligibilityComponent } from './pages/eligibility/eligibility.component';
import { PosttrainingComponent } from './pages/posttraining/posttraining.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InsightComponent,
    CurriculumComponent,
    HowlongComponent,
    EligibilityComponent,
    PosttrainingComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
