import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliCreacionDTO, peliDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit{

  @Output() formvaluesChild: EventEmitter<peliCreacionDTO> =  new EventEmitter<peliCreacionDTO>();
  @Input() pelisvalueChild!:peliDTO;
  Form!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.Form = this.fb.group({
                  titulo : ['',{validators : [Validators.required]} ],
                });

    if(this.pelisvalueChild !== undefined){
      this.Form.patchValue(this.pelisvalueChild);
    }
  }



  OnSubmit(){
    this.formvaluesChild.emit(this.Form.value);
  }

}
