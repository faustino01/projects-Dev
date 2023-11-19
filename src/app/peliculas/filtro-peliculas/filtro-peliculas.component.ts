import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}
  form!:FormGroup;

  generos = [
    {id:1,nombre: 'Dramas'},
    {id:2,nombre: 'Ciencias'},
    {id:3,nombre: 'Terror'}

  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false
    });
  }
  

  
  limpiar(){
    
  }

}
