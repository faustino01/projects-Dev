import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {
  form!:FormGroup;
 
  @Input() modelo!:generoCreacionDTO;
  @Output() onSubmit:EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();
 

  constructor(private formBuilder:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre : ['',{
        validators: [Validators.required,Validators.minLength(3),primeraLetraMayuscula()]
      }]
    });
    if(this.modelo !== undefined){
       
        this.form.patchValue(this.modelo);
      
    }
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo?.hasError('required')){
      return 'El campo nombre es Requerido'
    }

    if(campo?.hasError('minlength')){
      return 'El maximo de caracteres es 3'
    }

    if(campo?.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  guardarCambiosChild(){
    // this.router.navigate(['/generos']);
    this.onSubmit.emit(this.form.value);
  }

}
