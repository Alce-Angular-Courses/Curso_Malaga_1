import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppPieComponent } from './app-pie/app-pie.component';
import { ImpresoraComponent } from './impresora/impresora.component';
import { ImpresorabComponent } from './impresorab/impresora.component';

@NgModule({
  declarations: [AppComponent, ImpresoraComponent, ImpresorabComponent, AppPieComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
