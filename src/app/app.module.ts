import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { TimelineComponent } from './main/timeline/timeline.component';
import { CardsComponent } from './main/cards/cards.component';
import { SlickModule } from 'ngx-slick';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    TimelineComponent,
    CardsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    SlickModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
