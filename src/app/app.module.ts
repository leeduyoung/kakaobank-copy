import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgsRevealModule, NgsRevealConfig} from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgsRevealModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
