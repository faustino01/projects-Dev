import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  coleccionPelis:any;
  coleccionPelis2:any;
  texto:any;
  inputText:any;
  title:any;
  ocultar:boolean = false;
  

  primerDato = 'Este es mi primera coleccion:';
  segundoDato = 'Este es mi segunda coleccion:';
 

  constructor(){}

  

  asignarTitulo(e:any){
    this.title = e.target.value
  }


  ngOnInit(): void {
    this.inputText = true;
    setTimeout(() => {
      this.coleccionPelis = [{Nombre: 'Guardianes de la Galaxia',
                            Genero: 'Ciencia Ficcion, Espacio',
                            Anio: '2023'},
                            {Nombre: 'Vieaje de chihiro',
                            Genero: 'Ciencia Ficcion, Anime, Aventura',
                            Anio: '2000'},
                            {Nombre: 'Terminator 2',
                            Genero: 'Ciencia Ficcion, Accion, Aventura, Suspenso',
                            Anio: '2000'}
                           ];
      this.coleccionPelis2 = [{Nombre: 'Dracula',
                                Genero: 'Terror, Suspenso',
                                Anio: '2023'},
                                {Nombre: 'Batman',
                                Genero: 'Ciencia Ficcion, Accion, Aventura',
                                Anio: '2018'}
                          ];
      }, 2000);
  }

                    


  desabledInputText(event:Event){

    var e = <HTMLInputElement>document.getElementById("check");
    var ele = e.checked;

    if(ele == false){
      this.inputText=true;

    }else{
      this.inputText=false;
    }

  }

  manejarRated(voto: number): void{
    alert(voto);
  }


  

}
