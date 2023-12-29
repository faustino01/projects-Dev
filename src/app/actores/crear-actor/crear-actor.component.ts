import { Component } from '@angular/core';
import { actoresCreacionDTO, actoresDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {
  modeloFather:actoresDTO = {Nombre: '', fechaNacimiento : new Date(), foto : '', biografia: ''}

  guardarCambios(actor: actoresCreacionDTO){
    console.log(actor);
  }
}
