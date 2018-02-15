import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'angular4-carousel';
import { FormsModule } from '@angular/forms';
import {  RouterModule,Router } from '@angular/router';              
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InsightComponent } from './pages/insight/insight.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { HowlongComponent } from './pages/howlong/howlong.component';
import { EligibilityComponent } from './pages/eligibility/eligibility.component';
import { PosttrainingComponent } from './pages/posttraining/posttraining.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InsightComponent,
    CurriculumComponent,
    HowlongComponent,
    EligibilityComponent,
    PosttrainingComponent,
    SignupComponent,
    LayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
