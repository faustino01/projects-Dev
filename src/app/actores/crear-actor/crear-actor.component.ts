import { Component } from '@angular/core';
import { actoresCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {
  guardarCambios(actor: actoresCreacionDTO){
    console.log(actor);
  }
}
