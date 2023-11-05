import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-listado-generico-pelis',
  templateUrl: './listado-generico-pelis.component.html',
  styleUrls: ['./listado-generico-pelis.component.css']
})
export class ListadoGenericoPelisComponent{

@Input()

listado:any;

}
