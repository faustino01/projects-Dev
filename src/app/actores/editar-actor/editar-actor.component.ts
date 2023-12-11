import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actoresCreacionDTO, actoresDTO } from '../actores';


@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  constructor(private ActivatedRoute:ActivatedRoute){}

  modeloFather:actoresDTO = {Nombre: 'Espinoza', fechaNacimiento : new Date(), foto : 'assets/img/actores/gal.jpg'}


  ngOnInit(): void {
    // this.ActivatedRoute.params.subscribe(params =>{
    //   alert(params['id'])
    // })
    
  }

  guardarActores(generar:actoresCreacionDTO){
      console.log(generar);
  }
}
