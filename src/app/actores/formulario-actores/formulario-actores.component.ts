import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {
    Form!:FormGroup;
    constructor(private formBuilder:FormBuilder){}
    ngOnInit(): void {
      this.Form = this.formBuilder.group( {
        name :['',
          {
            validators: [Validators.required]
          }
      ],
        fechaNacimiento: ''
      });
    }


}
