import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliCreacionDTO, peliDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { actoresSelectMoviesDTO } from 'src/app/actores/actores';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit{

  @Output() formvaluesChild: EventEmitter<peliCreacionDTO> =  new EventEmitter<peliCreacionDTO>();
  @Input() pelisvalueChild!:peliDTO;
  

  generoNoSeleccionadosFather:MultipleSelectorModel[] = [
                                                          { llave:1, valor:'Ficcion'},
                                                          { llave:2, valor: 'Terror'},
                                                          {llave:3, valor:'comedia'}
                                                        ];
  generosSeleccionadosFather:MultipleSelectorModel[] = [];


  cineNoSeleccionadosFather:MultipleSelectorModel[] = [
                                                        {llave:1,valor:'Plaza Center City'},
                                                        {llave:2,valor:'Plaza MX'},
                                                        {llave:3,valor:'Plaza Cumbres'}
                                                      ];
  cineSeleccionadosFather:MultipleSelectorModel[] = [];


  actoresSeleccionadosFather:actoresSelectMoviesDTO[] = [];

  Form!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.Form = this.fb.group({
                  titulo : ['',{validators : [Validators.required]} ],
                  resumen:'',
                  enCines:false,
                  trailer: '',
                  fechaLanzamiento: '',
                  poster: '',
                  generosId:'',
                  cinesId:'',
                  actores:''
                });

    if(this.pelisvalueChild !== undefined){
      this.Form.patchValue(this.pelisvalueChild);
    }
  }

  changeMarkDown(texto:any){
    console.log(texto);
    this.Form.get('resumen')?.setValue(texto);
  }
  archivoSeleccionado(archivo:File){

    console.log(archivo);

    this.Form.get('poster')?.setValue(archivo);
  }

  OnSubmit(){
    const genorid = this.generosSeleccionadosFather.map(val => val.llave);
    this.Form.get('generosId')?.setValue(genorid);

    const cineid = this.cineSeleccionadosFather.map(val => val.llave);
    this.Form.get('cinesId')?.setValue(cineid);
    // console.log(genorid);
    
    this.Form.get('actores')?.setValue(this.actoresSeleccionadosFather);

    this.formvaluesChild.emit(this.Form.value);


  }



}
