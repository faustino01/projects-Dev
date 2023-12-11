import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actoresCreacionDTO, actoresDTO } from '../actores';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

    @Input() modeloChild!:actoresDTO;
    @Output() submit:EventEmitter<actoresCreacionDTO> = new EventEmitter<actoresCreacionDTO>();

  
    Form!:FormGroup;

    constructor(private formBuilder:FormBuilder){}

    ngOnInit(): void {
      this.Form = this.formBuilder.group( {
        Nombre :['',
                    {
                      validators: [Validators.required]
                    }
                ],
       fechaNacimiento: '',
       foto: ''
      });

      if(this.modeloChild !== undefined){
        this.Form.patchValue(this.modeloChild);
      }
 
    }
    archivoSeleccionadoForm(file:any){
      this.Form.get('foto')?.setValue(file);
    }

    Onsubmit() {
      this.submit.emit(this.Form.value);
    }

    
}
