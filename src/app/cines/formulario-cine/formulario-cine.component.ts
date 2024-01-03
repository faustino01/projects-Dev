import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';
import { coordenadaDTO } from 'src/app/utilidades/mapa/coordenada';


@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  form! : FormGroup;
  @Input() modeloChield!:cineCreacionDTO;
  @Output() guardarCambios:EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicialFather : coordenadaDTO[] = [];

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', {
                    validators: [Validators.required]
                   }
              ],
      latitud: ['',{
                validators: [Validators.required]
              }],
      longitud: ['',{
                validators: [Validators.required]
              }]

    });
    if(this.modeloChield !== undefined){
      this.form.patchValue(this.modeloChield)
      this.coordenadaInicialFather.push({latitud: this.modeloChield.latitud, longitud:this.modeloChield.longitud});
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }
  coordenadaSeleccionada(event:coordenadaDTO){
    this.form.patchValue(event);
  }



}

