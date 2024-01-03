import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modeloFather : cineDTO = {nombre:'sala 1', latitud : 25.665046968935993, longitud: -100.32577514648439};

  guardarformulario(data:cineCreacionDTO){
    console.log(data);
  }
}
