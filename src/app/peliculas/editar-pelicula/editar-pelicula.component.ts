import { Component } from '@angular/core';
import { peliCreacionDTO, peliDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {
    pelisdataFather : peliDTO = {titulo : 'Los asesinos de la luna'}

    formvaluesFather(event:peliCreacionDTO){
      console.log(event);
    }
}
