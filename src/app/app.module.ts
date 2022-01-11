// app.module -> viene richiamato all'esecuzione del file

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//da riga 8 a 17 vengono applicati tutti gli app.component
//se non metto un component li, piuttosto che un modulo, piuttosto che un service 
// il modulo o altro non funzionera

export class AppModule { }
