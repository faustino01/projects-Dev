import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { ListPelisComponent } from './listados/list-pelis/list-pelis.component';
import { ListadoGenericoPelisComponent } from './utilidades/listado-generico-pelis/listado-generico-pelis.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReatingComponent } from './utilidades/reating/reating.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoGenericoComponent,
    ListPelisComponent,
    ListadoGenericoPelisComponent,
    ReatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
