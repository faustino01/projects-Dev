import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private location:Location, private activateRoute: ActivatedRoute){}

  form!:FormGroup;

  generos = [
    {id:1,nombre: 'Dramas'},
    {id:2,nombre: 'Ciencias'},
    {id:3,nombre: 'Terror'}

  ];

  peliculas = [
    {Nombre : 'OppenHeimer', enCines : false, proximosEstrenos:true, generos: [1,2], poster: './assets/img/movies/open.jpg'},
    {Nombre : 'Madam Web', enCines : false, proximosEstrenos:true, generos: [1,2], poster: './assets/img/movies/mweb.jpg'},
    {Nombre : 'One Piece', enCines : true, proximosEstrenos:false, generos: [2], poster: './assets/img/movies/one.jpg'},
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
    this.leervaloresURL();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnUrl();
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

  private escribirParametrosBusquedaEnUrl(){
    var queryString = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.Nombre){
      queryString.push(`Nombre=${valoresFormulario.Nombre}`)
    }
    if(valoresFormulario.generoId != 0){
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }
    if(valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }
    if(valoresFormulario.enCines){
      queryString.push(`enCines=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'));

  }

  private leervaloresURL() {
    this.activateRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if(params['Nombre']){
        objeto.Nombre = params['Nombre'];
      }
      if(params['generoId']){
        objeto.generoId = Number(params['generoId']);
      }
      if(params['proximosEstrenos']){
        objeto.proximosEstrenos = params['proximosEstrenos'];
      }
      if(params['enCines']){
        objeto.enCines = params['enCines'];
      }
      this.form.patchValue(objeto);
    })
  }

}
