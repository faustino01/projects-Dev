import { Component } from '@angular/core';
import { peliCreacionDTO, peliDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {

 pelisDataFather:peliDTO = {titulo : '',resumen: '', enCines : false, fechaLanzamiento: new Date(), trailer:'', poster:''};
  formvaluesFather(event:peliCreacionDTO){
    console.log(event);
  }
}
