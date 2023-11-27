import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actoresCreacionDTO } from '../actores';


@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  constructor(private ActivatedRoute:ActivatedRoute){}

  modeloFather:actoresCreacionDTO = {Nombre: 'Espinoza', fechaNacimiento : new Date()}


  ngOnInit(): void {
    // this.ActivatedRoute.params.subscribe(params =>{
    //   alert(params['id'])
    // })
    
  }

  guardarActores(generar:actoresCreacionDTO){
      console.log(generar);
  }
}
