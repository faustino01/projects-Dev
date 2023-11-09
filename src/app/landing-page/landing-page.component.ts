import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  coleccionPelis:any;
  coleccionPelis2:any;
  texto:any;
  inputText:any;
  title:any;
  ocultar:boolean = false;
  

  primerDato = 'Este es mi primera coleccion:';
  segundoDato = 'Este es mi segunda coleccion:';
 

  constructor(){}


  ngOnInit(): void {
      this.coleccionPelis = [{Nombre: 'Guardianes de la Galaxia',
                            Genero: 'Ciencia Ficcion, Espacio',
                            Anio: '2023',
                            poster: './assets/img/guardianes.jpg'
                            },
                            {Nombre: 'Vieaje de chihiro',
                            Genero: 'Ciencia Ficcion, Anime, Aventura',
                            Anio: '2000',
                            poster: './assets/img/chihiro.jpg'
                          },
                            {Nombre: 'Terminator 2',
                            Genero: 'Ciencia Ficcion, Accion, Aventura, Suspenso',
                            Anio: '2000',
                            poster: './assets/img/t2.jpg'}
                           ];
      this.coleccionPelis2 = [{Nombre: 'Dracula',
                                Genero: 'Terror, Suspenso',
                                Anio: '2023',
                                poster: './assets/img/dracula.jpg'},
                                {Nombre: 'Batman',
                                Genero: 'Ciencia Ficcion, Accion, Aventura',
                                Anio: '2018',
                                poster: './assets/img/batman.jpg'}
                          ];
  }


}
