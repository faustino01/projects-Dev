import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})

export class CrearGeneroComponent implements OnInit {

  constructor(private router:Router, private generosService: GenerosService) { }

  ngOnInit(): void {}

  guardarCambiosFather(genero: generoCreacionDTO){
      //console.log(genero);
   this.generosService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);
   }, error => console.error(error));
  }

}
