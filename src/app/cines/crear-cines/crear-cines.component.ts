import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { cineCreacionDTO } from '../cine';
@Component({
  selector: 'app-crear-cines',
  templateUrl: './crear-cines.component.html',
  styleUrls: ['./crear-cines.component.css']
})
export class CrearCinesComponent implements OnInit {
    constructor(private router:Router, private formBouilder:FormBuilder){}


    ngOnInit(): void {

    };
      // pongo un comentario de prueba Thinkpad
    guardarformulario(data:cineCreacionDTO){
      console.log(data);
    }

}
