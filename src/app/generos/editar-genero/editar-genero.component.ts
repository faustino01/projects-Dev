import { Component } from '@angular/core';
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  modeloFather : generoCreacionDTO = {nombre : 'Accion'}

  constructor(private router:Router){}

  guardarFormEditFather(genero : generoCreacionDTO){
   
    this.router.navigate(['/generos']);
  }
}
