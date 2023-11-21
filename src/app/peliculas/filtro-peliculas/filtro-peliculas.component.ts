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

  peliculas = [
    {Nombre : 'OppenHeimer', enCines : false, proximosEstrenos:true, generos: [1,2], poster: './assets/img/open.jpg'},
    {Nombre : 'Madam Web', enCines : false, proximosEstrenos:true, generos: [1,2], poster: './assets/img/mweb.jpg'},
    {Nombre : 'One Piece', enCines : true, proximosEstrenos:false, generos: [2], poster: './assets/img/one.jpg'}, 
  ];

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
                          Nombre: '',
                          generoId: 0,
                          proximosEstrenos: false,
                          enCines: false
                        }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
    });
  }
  
  buscarPeliculas(valores:any){
    if(valores.Nombre){
      this.peliculas = this.peliculas.filter(peli => peli.Nombre.indexOf(valores.Nombre) !== -1);
    }

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if(valores.enCines)
    {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }

  }
  
  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
