import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, IntersectionObserverModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
