import { Component } from '@angular/core';
import { peliCreacionDTO, peliDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {
    pelisdataFather : peliDTO = {titulo : 'Los asesinos de la luna', resumen: 'resument de mi pelicula', enCines: true, trailer: 'aqui va mi trailer', fechaLanzamiento: new Date(), poster :  './assets/img/movies/guardianes.jpg'}

    formvaluesFather(event:peliCreacionDTO){
      console.log(event);
    }
}
