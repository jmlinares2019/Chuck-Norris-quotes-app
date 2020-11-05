import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChuckModule } from './chuck/chuck.module';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChuckModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
