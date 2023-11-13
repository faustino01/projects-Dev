import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})

export class CrearGeneroComponent implements OnInit {
  constructor(private router:Router, private formBuilder:FormBuilder) { }
  form!:FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombre : ['',{
        validators: [Validators.required,Validators.minLength(3),primeraLetraMayuscula()]
      }]
    });
  }
  guardarCambios(){
   this.router.navigate(['/generos']);
  }
  obtenerErrorCampoNombre(){
    var campo = this.form.get('Nombre');
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
}
