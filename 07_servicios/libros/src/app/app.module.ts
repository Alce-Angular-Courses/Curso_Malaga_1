import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { BuscarService } from './buscar.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BuscarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
