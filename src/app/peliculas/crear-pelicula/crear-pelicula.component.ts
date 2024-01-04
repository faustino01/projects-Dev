import { Component } from '@angular/core';
import { peliCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {

  formvaluesFather(event:peliCreacionDTO){
    console.log(event);
  }
}
