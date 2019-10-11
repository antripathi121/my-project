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
// import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';

import { TestComponent } from './main/test/test.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './main/faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminComponent } from './admin/admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { App1SharedModule } from 'projects/appAdmin/src/app/app.module';

import {MatMenuModule} from '@angular/material/menu';
import { AuthGuardService } from './guards/auth-guard.service';
import { Calendar1Component} from './admin/calendar1/calendar1.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import {MatDialogModule} from '@angular/material/dialog';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChatboxComponent } from './admin/chatbox/chatbox.component';
import { ChatService } from './services/chat.service';
import { ShortcutsComponent } from './admin/shortcuts/shortcuts.component';
import { AfooterComponent } from './admin/afooter/afooter.component';
import { ExtraComponent } from './admin/extra/extra.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReportsComponent } from './admin/reports/reports.component';
// import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    TimelineComponent,
    CardsComponent,
    NavComponent,
    TestComponent,
    FooterComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    Calendar1Component,
    ChatboxComponent,
    ShortcutsComponent,
    AfooterComponent,
    ExtraComponent,
    AdminLoginComponent,
    ReportsComponent,
    // DialogOverviewExampleDialog
   
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SlickModule,
    SlickModule.forRoot(),
    MatExpansionModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    MatMenuModule,
    FullCalendarModule,
    MatDialogModule,
    // DragDropModule,
    // MatTabsModule,
    // ScrollDispatchModule
  ],
  // entryComponents: [Calendar1Component, DialogOverviewExampleDialog],

  providers: [AuthGuardService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
