import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';


@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  form! : FormGroup;
  @Input() modeloChield!:cineCreacionDTO;
  @Output() guardarCambios:EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', {
                    validators: [Validators.required]
                   }
              ],

    });
    if(this.modeloChield !== undefined){
      this.form.patchValue(this.modeloChield)
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }



}

