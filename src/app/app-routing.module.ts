import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';




const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'generos',component: IndiceGenerosComponent},
  {path: 'generos/crear', component: CrearGeneroComponent},
  {path: 'cines' ,component: IndiceCinesComponent},
  {path: 'cines/crear',component: CrearCinesComponent},
  {path: 'actores' , component: IndiceActoresComponent},
  {path: 'actores/crear', component:CrearActorComponent},
  {path: 'actores/editar/:id', component:EditarActorComponent},
  {path: 'peliculas/crear', component:CrearPeliculaComponent},
  {path: '**', component: PageNotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
