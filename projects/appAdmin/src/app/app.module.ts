import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { View1Component } from './view1/view1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
{ path: 'view1', pathMatch: 'full', component: View1Component},

];

@NgModule({
  declarations: [
    AppComponent,
    View1Component
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        // providers: providers,
      ]
    }
  }
}