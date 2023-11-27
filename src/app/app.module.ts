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

import { ReactiveFormsModule    } from '@angular/forms';
import { ReatingComponent       } from './utilidades/reating/reating.component';
import { LandingPageComponent   } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { PageNotFoundComponent  } from './page-not-found/page-not-found.component';
import { CrearGeneroComponent   } from './generos/crear-genero/crear-genero.component';
import { CrearActorComponent    } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCinesComponent    } from './cines/crear-cines/crear-cines.component';
import { IndiceCinesComponent   } from './cines/indice-cines/indice-cines.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { EditarActorComponent   } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent  } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent    } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoGenericoComponent,
    ListPelisComponent,
    ListadoGenericoPelisComponent,
    ReatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    PageNotFoundComponent,
    CrearGeneroComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCinesComponent,
    IndiceCinesComponent,
    IndiceActoresComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
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
